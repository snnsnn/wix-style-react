import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleBadges from '../docs/ExampleBadges';
import Badge from '..';

storiesOf('Badge', module).add('base', () => <Badge>I'M A BADGE!</Badge>);
storiesOf('Badge', module).add('skins', () => <ExampleBadges />);
storiesOf('Badge', module).add('focus', () => <FocusBadgeTest />);

class FocusBadgeTest extends React.Component {
  componentDidMount() {
    //TODO - might want to make this foucs action as a global driver / using tabs
    document.querySelector('[data-hook="focusable-badge"]').focus();
  }

  render() {
    return (
      <Badge dataHook="focusable-badge" onClick={() => alert(1)}>
        has focus ring on keyboard focus
      </Badge>
    );
  }
}
