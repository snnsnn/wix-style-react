import React from 'react';
import { storiesOf } from '@storybook/react';
import { storySettings } from '../docs/storySettings';
import CardGalleryItem from '../CardGalleryItem';

const { dataHook } = storySettings;

const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'badge - none',
        props: {
          title: 'Card Title',
          subtitle: 'Card subtitle',
          primaryActionProps: {
            label: 'Button',
            onClick: () => {
              alert('Primary action clicked');
            },
          },
          secondaryActionProps: {
            label: 'Text link',
            onClick: () => {
              alert('Secondary action clicked');
            },
          },
          backgroundImageUrl,
        },
      },
      {
        it: 'badge',
        props: {
          title: 'Card Title',
          badge: 'new item',
          subtitle: 'Card subtitle',
          primaryActionProps: {
            label: 'Button',
            onClick: () => {
              alert('Primary action clicked');
            },
          },
          secondaryActionProps: {
            label: 'Text link',
            onClick: () => {
              alert('Secondary action clicked');
            },
          },
          backgroundImageUrl,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`CardGalleryItem/${describe}`, module).add(it, () => (
      <div
        style={{
          width: '60%',
          height: '500px',
          backgroundColor: '#dfe6ef',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '40%' }}>
          <CardGalleryItem {...props} dataHook={dataHook} />
        </div>
      </div>
    ));
  });
});
