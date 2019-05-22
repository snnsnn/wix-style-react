import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItemAction.st.css';
import Text from '../Text';
import Box from '../Box';

/** ListItemAction */
export class ListItemAction extends React.PureComponent {
  static displayName = 'ListItemAction';

  static propTypes = {
    dataHook: PropTypes.string,

    /** Item theme (standard, dark, destructive) */
    skin: PropTypes.oneOf(['standard', 'dark', 'destructive']),

    /** Text Size (small, medium) */
    size: PropTypes.oneOf(['small', 'medium']),

    /** Prefix Icon */
    prefixIcon: PropTypes.node,

    /** Title */
    title: PropTypes.string.isRequired,

    /** Disabled */
    disabled: PropTypes.bool,

    /** On Click */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    skin: 'standard',
    size: 'medium',
  };

  render() {
    const {
      dataHook,
      size,
      disabled,
      skin,
      prefixIcon,
      onClick,
      title,
    } = this.props;
    const paddingTopBottom = size === 'small' ? '6px' : '9px';
    return (
      <div
        {...styles('root', { skin, disabled }, this.props)}
        data-hook={dataHook}
        onClick={!disabled && onClick}
      >
        <Box
          className={styles.wrapper}
          padding={`${paddingTopBottom} 24px ${paddingTopBottom} 18px`}
        >
          {prefixIcon && (
            <Box
              className={styles.icon}
              dataHook={'list-item-action-prefix-icon'}
            >
              {React.cloneElement(prefixIcon, {
                size: size === 'medium' ? 24 : 18,
              })}
            </Box>
          )}
          <Text
            className={styles.text}
            weight="normal"
            size={size}
            dataHook="list-item-action-title"
          >
            {title}
          </Text>
        </Box>
      </div>
    );
  }
}

export const listItemActionBuilder = ({
  title,
  prefixIcon,
  onClick,
  id,
  disabled,
  skin,
  size,
}) => ({
  id,
  disabled,
  overrideStyle: true,
  value: props => (
    <ListItemAction
      {...props}
      onClick={onClick}
      title={title}
      prefixIcon={prefixIcon}
      skin={skin}
      size={size}
    />
  ),
});
