import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import AddChannel from '../../new-icons/AddChannel';

const defaultProps = {
  children: 'Button',
};

const skins = [
  'standard',
  'inverted',
  'destructive',
  'premium',
  'dark',
  'light',
  'transparent',
];

const sizes = ['large', 'medium', 'small', 'tiny'];

const test = (it, props) => ({ it, props });

const tests = [
  {
    describe: 'Primary Skins',
    its: skins.map(skin => test(skin, { skin, priority: 'primary' })),
  },
  {
    describe: 'Secondary Skins',
    its: skins.map(skin => test(skin, { skin, priority: 'secondary' })),
  },
  {
    describe: 'Sizes',
    its: sizes.map(size => test(size, { size })),
  },
  {
    describe: 'Affixes',
    its: sizes.map(size =>
      test(size, {
        size,
        prefixIcon: <AddChannel />,
        suffixIcon: <AddChannel />,
      }),
    ),
  },
  {
    describe: 'Render As',
    its: [
      {
        it: 'as anchor',
        props: { as: 'a' },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Button/${describe}`, module).add(it, () => (
      <Button {...defaultProps} {...props} />
    ));
  });
});
