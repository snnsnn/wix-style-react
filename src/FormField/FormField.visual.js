import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from './FormField';
import Input from '../Input';

storiesOf(`FormField`, module).add('Label ellipsis', () => (
  <div style={{ width: 285, padding: 50 }}>
    <FormField
      infoContent="something"
      label="a long label that should use ellipsis, but if you see the whole sentence, something probably doesn't work well"
    >
      <Input />
    </FormField>
  </div>
));
