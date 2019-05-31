import React from 'react';
import PropTypes from 'prop-types';
import { listItemActionBuilder } from '../../ListItemAction';
import DropdownBase from '../../DropdownBase';
import { placements } from '../../Popover';
import styles from './PopoverMenu.st.css';

/** PopoverMenu */
class PopoverMenu extends React.PureComponent {
  static displayName = 'PopoverMenu';

  static propTypes = {
    /** The maximum width applied to the list */
    maxWidth: PropTypes.number,

    /** The minimum width applied to the list */
    minWidth: PropTypes.number,

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
    minWidth: 144,
    placement: 'bottom',
    appendTo: 'parent',
  };

  _onSelect = e => {
    this.itemsOnClick.find(({ id }) => id === e.id).onClick();
  };

  _filterChildren = children => {
    return React.Children.map(children, child => child).filter(
      child => typeof child !== 'string',
    );
  };

  _buildOptions = () => {
    const children = this._filterChildren(this.props.children);

    const options = children.map((child, idx) => {
      if (child.type && child.type.displayName === 'PopoverMenu.Divider') {
        return { id: idx, divider: true };
      }

      const {
        text,
        onClick,
        skin = 'dark',
        textSize,
        prefixIcon,
        disabled,
      } = child.props;
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

    return options.map(option => {
      if (option.divider) {
        return { id: option.id, value: '-' };
      }
      return listItemActionBuilder({ ...option, paddingSize: 'small' });
    });
  };

  render() {
    const {
      appendTo,
      placement,
      triggerElement,
      minWidth,
      maxWidth,
    } = this.props;
    return (
      <DropdownBase
        {...styles('root', {}, this.props)}
        showArrow
        options={this._buildOptions()}
        onSelect={this._onSelect}
        appendTo={appendTo}
        placement={placement}
        minWidth={minWidth}
        maxWidth={maxWidth}
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
PopoverMenu.MenuItem.displayName = 'PopoverMenu.MenuItem';
PopoverMenu.Divider = () => ({});
PopoverMenu.Divider.displayName = 'PopoverMenu.Divider';

export default PopoverMenu;
