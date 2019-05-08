import React from 'react';
import PropTypes from 'prop-types';
import { SKIN, TYPE, SIZE } from './constants';
import style from './Badge.st.css';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import ellipsedStyle from '../common/EllipsedTooltip/EllipsedTooltip.st.css';
import { withEllipsedTooltip } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';

class Badge extends React.PureComponent {
  static propTypes = {
    dataHook: PropTypes.string,
    type: PropTypes.oneOf(['solid', 'outlined', 'transparent']),
    skin: PropTypes.oneOf([
      'general',
      'standard',
      'danger',
      'success',
      'neutral',
      'warning',
      'urgent',
      'neutralLight',
      'neutralStandard',
      'neutralSuccess',
      'neutralDanger',
      'premium',
      'warningLight',
    ]),
    size: PropTypes.oneOf(['medium', 'small']),
    /** usually an icon to appear at the beginning of the text */
    prefixIcon: PropTypes.node,
    /** usually an icon to appear at the end of the text */
    suffixIcon: PropTypes.node,
    /** callback function called when badge is clicked */
    onClick: PropTypes.func,
    /** forces an uppercase letters */
    uppercase: PropTypes.bool,

    focusableOnFocus: PropTypes.func,
    focusableOnBlur: PropTypes.func,

    /** the text to display in the badge */
    children: PropTypes.node,
  };
  static displayName = 'Badge';

  static defaultProps = {
    type: TYPE.solid,
    skin: SKIN.general,
    size: SIZE.medium,
    uppercase: true,
  };

  renderText = ({ ...r }) => (
    <span className={style.text} {...r}>
      {this.props.children}
    </span>
  );

  render() {
    const {
      children,
      prefixIcon,
      suffixIcon,
      onClick,
      focusableOnFocus,
      focusableOnBlur,
      dataHook,
      ...rest
    } = this.props;

    const focusableProps = onClick
      ? {
          onFocus: focusableOnFocus,
          onBlur: focusableOnBlur,
          tabIndex: 0,
        }
      : {};

    const EllipsedText = withEllipsedTooltip({ showTooltip: true })(
      this.renderText,
    );

    return (
      <div
        {...(dataHook ? { 'data-hook': dataHook } : undefined)}
        onClick={onClick}
        {...focusableProps}
        {...style('root', { clickable: !!onClick, ...rest }, this.props)}
      >
        {prefixIcon &&
          React.cloneElement(prefixIcon, { className: style.prefix })}
        <EllipsedText {...ellipsedStyle('root', {}, this.props)} />

        {suffixIcon &&
          React.cloneElement(suffixIcon, { className: style.suffix })}
      </div>
    );
  }
}

export default withFocusable(Badge);
