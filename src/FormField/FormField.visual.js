import React from 'react';
import { storiesOf } from '@storybook/react';
import FormFieldComponent from './FormField';
import Input from '../Input';

const FormField = props => {
  return (
    <div style={{ width: 285, padding: 50 }}>
      <FormFieldComponent {...props}>
        <Input />
      </FormFieldComponent>
    </div>
  );
};

const test = (it, props) => ({ it, props });

const tests = [
  {
    describe: 'Label',
    its: [
      test('Ellipsis', {
        label:
          "a long label that should use ellipsis, but if you see the whole sentence, something probably doesn't work well",
      }),
      test('Info Content', {
        infoContent: 'hi',
      }),
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`FormField/${describe}`, module).add(it, () => (
      <FormField {...props} />
    ));
  });
});
