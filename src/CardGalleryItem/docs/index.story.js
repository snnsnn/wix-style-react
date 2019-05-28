/* eslint-disable no-console */
import React from 'react';
import {
  api,
  code as baseLiveCode,
  code as baseCode,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import Edit from 'wix-style-react/new-icons/Edit';
import Delete from 'wix-style-react/new-icons/Delete';
import Email from 'wix-style-react/new-icons/Email';
import More from 'wix-style-react/new-icons/More';
import Badge from 'wix-style-react/Badge';
import DropdownBase from 'wix-style-react/DropdownBase';
import IconButton from 'wix-style-react/IconButton';
import { listItemActionBuilder } from 'wix-style-react/ListItemAction';

import CardGalleryItem from '..';
import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import IconMenuExample from '!raw-loader!./Examples/IconMenuExample';
import ButtonMenuExample from '!raw-loader!./Examples/ButtonMenuExample';
import BadgeExample from '!raw-loader!./Examples/BadgeExample';
import NoTitlesExample from '!raw-loader!./Examples/NoTitlesExample';
import GalleryLayoutExample from '!raw-loader!./Examples/GalleryLayoutExample';
import { baseScope } from '../../../stories/utils/LiveCodeExample';

const { category, storyName, dataHook } = storySettings;
const backgroundImageUrl =
  'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg';
const imageUrls = {
  '4/3':
    'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg',
  '16/9':
    'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg',
  '21/9':
    'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_700,h_300,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg',
};

const getPrimaryActionProps = label => ({
  label,
  onClick: () => {
    alert('Primary action clicked');
  },
});
const getSecondaryActionProps = label => ({
  label,
  onClick: () => {
    alert('Secondary action clicked');
  },
});
const commonProps = {
  badge: (
    <Badge size="medium" skin="standard" type="solid" uppercase>
      sale
    </Badge>
  ),
  title: 'Card Title',
  subtitle: 'Card subtitle',
  backgroundImageUrl: backgroundImageUrl,
};
const exampleProps = {
  title: ['Card Title', 'Long Card Content Title Long Card Content Title'],
  subtitle: [
    'Card subtitle',
    'Long card content subtitle long card content subtitle',
  ],
  backgroundImageUrl: [
    { label: '4/3', value: imageUrls['4/3'] },
    { label: '16/9', value: imageUrls['16/9'] },
    { label: '21/9', value: imageUrls['21/9'] },
  ],
};

const code = config =>
  baseCode({
    components: { ...allComponents },
    compact: true,
    ...config,
  });

const example = ({ title, text, ...config }) =>
  columns([description({ title, text }), code(config)]);

export default {
  category,
  storyName,

  component: CardGalleryItem,
  componentPath: '..',

  componentProps: {
    ...commonProps,
    dataHook,
    primaryActionProps: getPrimaryActionProps('Button'),
    secondaryActionProps: getSecondaryActionProps('Text Link'),
    settingsMenu: (
      <DropdownBase
        showArrow
        options={[
          listItemActionBuilder({
            id: 0,
            title: 'Edit',
            prefixIcon: <Edit />,
            skin: 'dark',
          }),
          listItemActionBuilder({
            id: 1,
            title: 'Delete',
            prefixIcon: <Delete />,
            skin: 'destructive',
          }),
          listItemActionBuilder({
            id: 2,
            title: 'Send mail',
            prefixIcon: <Email />,
          }),
          listItemActionBuilder({
            id: 3,
            title: 'Something',
            disabled: true,
          }),
        ]}
        onSelect={({ id }) => console.log(`action id=${id}`)}
      >
        {({ open, close }) => {
          return (
            <IconButton
              skin="light"
              priority="secondary"
              onClick={e => {
                open(e);
                e.stopPropagation();
              }}
              onMouseLeave={close}
            >
              <More />
            </IconButton>
          );
        }}
      </DropdownBase>
    ),
  },

  // exampleProps,

  sections: [
    header(),
    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample(
            "import CardGalleryItem from 'wix-style-react/CardGalleryItem';",
          ),
          divider(),
          title('Examples'),
          ...[
            {
              title: 'Menu with icon button',
              text:
                'Hover menu should be constructed by dropdownBase + listItemAction, as shown in the example. This example shows an icon button menu opener.',
              source: IconMenuExample,
              autoRender: false,
            },
            {
              title: 'Menu with text button',
              text:
                'Hover menu should be constructed by dropdownBase + listItemAction, as shown in the example. This example shows a text button menu opener.',
              source: ButtonMenuExample,
              autoRender: false,
            },
            {
              title: 'Badge',
              text: 'Component can display a badge.',
              source: BadgeExample,
              autoRender: false,
            },
            {
              title: 'Without titles',
              text: 'Component can be rendered without titles.',
              source: NoTitlesExample,
              autoRender: false,
            },
          ].map(example),
          code({
            title: 'Gallery layout',
            description:
              'Demonstrating cards used side by side as a gallery view.',
            source: GalleryLayoutExample,
            autoRender: false,
            compact: true,
          }),
        ],
      }),
      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
