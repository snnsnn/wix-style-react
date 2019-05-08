import React from 'react';
import PropTypes from 'prop-types';
import { SKIN, TYPE, SIZE } from './constants';
import style from './Badge.st.css';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import ellipsedStyle from '../common/EllipsedTooltip/EllipsedTooltip.st.css';
import { withEllipsedTooltip } from 'wix-ui-core/dist/src/hocs/EllipsedTooltip';
import classNames from 'classnames';

const WrapWithEllipsis = withEllipsedTooltip({ showTooltip: true });

class Badge extends React.PureComponent {
  static propTypes = {
    dataHook: PropTypes.string,
    /** variation of the component strucutre */
    type: PropTypes.oneOf(['solid', 'outlined', 'transparent']),
    /** color indication of the component */
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
    /** component size */
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

  getProps = () => {
    //that's what you pay for using HOCs...
    const { focusableOnFocus, focusableOnBlur, ...rest } = this.props;
    return rest;
  };

  _getFocusableProps = () => {
    //add focusable hooks only when badge is clickable
    const { onClick, focusableOnFocus, focusableOnBlur } = this.props;
    return onClick
      ? {
          onFocus: focusableOnFocus,
          onBlur: focusableOnBlur,
          tabIndex: 0,
        }
      : {};
  };

  _getText = ({ className, ...extraProps }) => {
    return (
      <span className={classNames(style.text, className)} {...extraProps}>
        {this.getProps().children}
      </span>
    );
  };

  _getContent = () => {
    const EllipsedBadgeContent = WrapWithEllipsis(this._getText);
    return <EllipsedBadgeContent {...ellipsedStyle('root', {})} />;
  };

  render() {
    const {
      children,
      prefixIcon,
      suffixIcon,
      onClick,
      dataHook,
      ...rest
    } = this.getProps();

    return (
      <div
        data-hook={dataHook}
        onClick={onClick}
        {...this._getFocusableProps()}
        {...style('root', { clickable: !!onClick, ...rest }, this.getProps())}
      >
        {prefixIcon &&
          React.cloneElement(prefixIcon, { className: style.prefix })}
        {this._getContent()}
        {suffixIcon &&
          React.cloneElement(suffixIcon, { className: style.suffix })}
      </div>
    );
  }
}

export default withFocusable(Badge);
