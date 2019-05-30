import React from 'react';
import PropTypes from 'prop-types';
import { listItemActionBuilder } from '../../ListItemAction';
import DropdownBase from '../../DropdownBase';
import { placements } from '../../Popover';

/** PopoverMenu */
class PopoverMenu extends React.PureComponent {
  static displayName = 'PopoverMenu';

  static propTypes = {
    /** The maximum width applied to the list */
    maxWidth: PropTypes.number,

    /** Popover content z-index */
    zIndex: PropTypes.number,

    /** Moves popover content relative to the parent by x or y */
    moveBy: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),

    /** Element to trigger the popover */
    triggerElement: PropTypes.element.isRequired,

    /** The Popover's placement:
     *  * auto-start
     *  * auto
     *  * auto-end
     *  * top-start
     *  * top
     *  * top-end
     *  * right-start
     *  * right
     *  * right-end
     *  * bottom-end
     *  * bottom
     *  * bottom-start
     *  * left-end
     *  * left
     *  * left-start
     */
    placement: PropTypes.oneOf(placements),

    /**
     * Menu items
     *  * <PopoverMenu.MenuItem>
     *  * `text` - Item text
     *  * `onClick` - Callback to be triggered on item click
     *  * `skin` - Item theme (dark, destructive)
     *  * `prefixIcon` - Prefix icon
     *  * `textSize` - Text size (small, medium)
     *  * `disabled` - Disabled
     *  * />
     */
    children: PropTypes.element.isRequired,

    /** The Popover's appendTo */
    appendTo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };

  static defaultProps = {
    maxWidth: 204,
    placement: 'bottom',
    appendTo: 'parent',
  };

  _onSelect = e => {
    this.itemsOnClick.find(({ id }) => id === e.id).onClick();
  };

  _buildOptions = () => {
    const { children } = this.props;
    const options = React.Children.map(children, (item, idx) => {
      const {
        text,
        onClick,
        skin = 'dark',
        textSize,
        prefixIcon,
        disabled,
      } = item.props;
      return {
        id: idx,
        title: text,
        onClick,
        skin,
        size: textSize,
        prefixIcon,
        disabled,
      };
    });

    this.itemsOnClick = options.map(({ id, onClick }) => ({ id, onClick }));

    return options.map(option =>
      listItemActionBuilder({ ...option, paddingSize: 'small' }),
    );
  };

  render() {
    const { appendTo, placement, triggerElement } = this.props;
    return (
      <DropdownBase
        showArrow
        options={this._buildOptions()}
        onSelect={this._onSelect}
        appendTo={appendTo}
        placement={placement}
      >
        {({ open }) => {
          return React.cloneElement(triggerElement, {
            onClick: open,
            dataHook: 'popovermenu-trigger',
            'data-hook': 'popovermenu-trigger', // supporting native trigger elements
          });
        }}
      </DropdownBase>
    );
  }
}

PopoverMenu.MenuItem = () => ({});

export default PopoverMenu;
