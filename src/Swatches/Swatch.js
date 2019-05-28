import React from 'react';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import styles from './Swatches.st.css';

class Swatch extends React.PureComponent {
  static propTypes = {};

  render() {
    const {
      color,
      focusableOnBlur,
      focusableOnFocus,
      onClick,
      selected,
      size,
    } = this.props;
    return (
      <button
        type="button"
        data-hook="color-swatches-swatch"
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
        onClick={() => onClick(color)}
        {...styles(
          'swatch',
          { selected, size, transparent: !color },
          this.props,
        )}
        style={{ backgroundColor: color }}
      />
    );
  }
}
export default withFocusable(Swatch);
