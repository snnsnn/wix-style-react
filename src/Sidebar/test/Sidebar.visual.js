import React from 'react';
import { storiesOf } from '@storybook/react';
import { Sidebar } from '../Sidebar';

const commonProps = {
  //use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', //prop vaiation (e.g. small)
        props: {
          // the simulation (e.g. {size: "small"})
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Sidebar/${describe}`, module).add(it, () => (
      <Sidebar {...commonProps} {...props} />
    ));
  });
});
