import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageViewer from '..';

const tests = [
  {
    describe: 'should render  ',
    its: [
      {
        it: 'with an image',
        props: {
          imageUrl:
            'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg',
        },
      },
      {
        it: 'with an error',
        props: {
          error: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ImageViewer/${describe}`, module).add(it, () => (
      <ImageViewer {...props} />
    ));
  });
});
