/* eslint-disable no-console */
import React from 'react';
import InputWithOptions from 'wix-style-react/InputWithOptions';

import { insideFormStorySettings as storySettings } from '../storySettings';

const options = [{ id: '0', value: 'First Option' }];

class TestInsideForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedId: -1,
    };
  }

  render() {
    const onChange = event => {
      this.setState({ value: event.target.value });
    };

    const onSelect = option => {
      const value = option.value;
      this.setState({
        value,
        selectedId: option.id,
      });

      console.log(
        `Selected option id=${JSON.stringify(option)}, value=${value}`,
      );
    };

    const onManuallyInput = value => {
      this.setState({
        selectedId: -1,
      });
      console.log(`Manually selected ${value}`);
    };

    return (
      <form>
        <InputWithOptions
          options={options}
          selectedId={this.state.selectedId}
          value={this.state.value}
          onChange={onChange}
          onSelect={onSelect}
          onManuallyInput={onManuallyInput}
          highlight
          dataHook={storySettings.dataHook}
        />
      </form>
    );
  }
}

export default TestInsideForm;
