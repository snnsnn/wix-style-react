import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleBadges from '../docs/ExampleBadges';
import Badge from '..';

storiesOf('Badge', module).add('base', () => <Badge>I'M A BADGE!</Badge>);

storiesOf('Badge', module).add('ExampleBadges', () => <ExampleBadges />);
