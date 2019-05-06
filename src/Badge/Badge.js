import React, { PropTypes } from 'react';
import { SKIN, TYPE, SIZE, Type, Skin, Size } from './constants';
import style from './Badge.st.css';

const defaultProps = {
  type: TYPE.solid,
  skin: SKIN.general,
  size: SIZE.medium,
  uppercase: true,
};

class Badge extends React.PureComponent {
  static propTypes = {
    dataHook: PropTypes.string,
    type: Type,
    skin: Skin,
    size: Size,
    prefixIcon: PropTypes.node,
    suffixIcon: PropTypes.node,
    onClick: PropTypes.func,
    uppercase: PropTypes.bool,

    focusableOnFocus: PropTypes.func,
    focusableOnBlur: PropTypes.func,

    /** usually just text to be displayed */
    children: PropTypes.node,
  };
  static displayName = 'Badge';

  static defaultProps = defaultProps;

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

    return (
      <div
        {...(dataHook ? { 'data-hook': dataHook } : undefined)}
        onClick={onClick}
        {...focusableProps}
        {...style('root', { clickable: !!onClick, ...rest }, this.props)}
      >
        {prefixIcon &&
          React.cloneElement(prefixIcon, { className: style.prefix })}
        <span className={style.text}>{children}</span>

        {suffixIcon &&
          React.cloneElement(suffixIcon, { className: style.suffix })}
      </div>
    );
  }
}

export default Badge;
