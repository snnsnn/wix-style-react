import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import InputWithOptions from '../InputWithOptions';
import SearchIcon from 'wix-ui-icons-common/Search';
import WixComponent from '../BaseComponents/WixComponent';
import { StringUtils } from '../utils/StringUtils';
import styles from './Search.scss';
import Input from '../Input/Input';

// because lodash debounce is not compatible with jest timeout mocks
function debounce(fn, wait) {
  let timeout;

  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), wait);
  };
}

/**
 * Search component with suggestions based on input value listed in dropdown
 */
export default class Search extends WixComponent {
  static displayName = 'Search';

  static propTypes = {
    ...InputWithOptions.propTypes,
    /** Will display the search icon only until clicked */
    expandable: PropTypes.bool,
    /** Custom function for filtering options */
    predicate: PropTypes.func,
    /** onChange debounce in milliseconds */
    debounceMs: PropTypes.number,
  };

  static defaultProps = {
    ...InputWithOptions.defaultProps,
    placeholder: 'Search',
    expandable: false,
  };

  constructor(props) {
    super(props);

    const initialValue = (!this._isControlled && props.defaultValue) || '';

    this._onChangeDebounced = debounce(
      this._onChangeDebounced,
      props.debounceMs,
    );

    this.state = {
      inputValue: initialValue,
      collapsed: props.expandable && initialValue === '' && !props.autoFocus,
    };
  }

  get _isControlled() {
    return 'value' in this.props && 'onChange' in this.props;
  }

  get _isDebounced() {
    return typeof this.props.debounceMs === 'number';
  }

  get _filteredOptions() {
    const { options, predicate } = this.props;

    const searchText = this._currentValue();
    if (!searchText || !searchText.length) {
      return options;
    }
    const filterFn = predicate || this._stringFilter;
    return options.filter(filterFn);
  }

  _stringFilter = option => {
    const searchText = this._currentValue();
    return StringUtils.includesCaseInsensitive(option.value, searchText.trim());
  };

  _onChangeDebounced = e => this.props.onChange && this.props.onChange(e);

  _onChange = e => {
    if (this._isControlled && !this._isDebounced) {
      this.props.onChange(e);
    } else {
      this.setState({
        inputValue: e.target.value,
      });
    }

    if (this._isDebounced) {
      // need a copy of the event because of the dobunce
      this._onChangeDebounced({ target: e.target });
    }
  };

  _onClear = event => {
    const { onClear, expandable } = this.props;
    const { collapsed } = this.state;

    const stateChanges = {};

    if (this._isControlled && !this._isDebounced) {
      stateChanges.inputValue = '';
    }

    if (expandable && !collapsed) {
      stateChanges.collapsed = true;
    }

    if (!isEmpty(stateChanges)) {
      // call onClear only *after* updating the search value
      this.setState(stateChanges, () => onClear && onClear(event));
    }
  };

  _currentValue = () => {
    let value;

    if (this._isControlled && !this._isDebounced) {
      value = this.props.value;
    } else {
      value = this.state.inputValue;
    }

    return value;
  };

  _onBlur = () => {
    const { onBlur } = this.props;

    if (!this.state.collapsed && this.props.expandable) {
      const value = this._currentValue();

      if (value === '') {
        this.setState({
          collapsed: true,
        });
      }
    }

    onBlur && onBlur();
  };

  _onWrapperClick = () => {
    if (this.props.expandable && this.state.collapsed) {
      this.searchInput.input.focus();
      this.setState({ collapsed: false });
    }
  };

  _onWrapperMouseDown = e => {
    // We need to capture mouse down and prevent it's event if the input
    // is already open
    if (this.props.expandable && !this.state.collapsed) {
      const value = this._currentValue();

      if (value === '') {
        e.preventDefault();
      }
    }
  };

  render() {
    const wrapperClasses = classNames({
      [styles.expandableStyles]: this.props.expandable,
      [styles.collapsed]: this.state.collapsed && this.props.expandable,
      [styles.expanded]: !this.state.collapsed && this.props.expandable,
    });

    return (
      <div
        className={wrapperClasses}
        onClick={this._onWrapperClick}
        onMouseDown={this._onWrapperMouseDown}
      >
        <InputWithOptions
          {...this.props}
          ref={r => (this.searchInput = r)}
          roundInput
          prefix={
            <Input.IconAffix>
              <SearchIcon />
            </Input.IconAffix>
          }
          menuArrow={false}
          clearButton
          closeOnSelect
          options={this._filteredOptions}
          onClear={this._onClear}
          onChange={this._onChange}
          onBlur={this._onBlur}
          highlight
        />
      </div>
    );
  }
}
