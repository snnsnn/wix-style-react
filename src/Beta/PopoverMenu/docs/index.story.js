/* eslint-disable no-console */
import React from 'react';
import {
  api,
  code as baseLiveCode,
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
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../../stories/utils/allComponents';

import PopoverMenu from '..';
import IconButton from '../../../IconButton';
import More from '../../../new-icons/More';
import Edit from '../../../new-icons/Edit';
import triggerElementExample from './examples/buttonMenuExample';
import stylesExample from './examples/stylesExample';
import placementsExample from './examples/placementExample';

const liveCode = config =>
  baseLiveCode({ components: allComponents, ...config });
const example = ({ title, text, source }) =>
  columns({
    items: [description({ title, text }), liveCode({ compact: true, source })],
  });

const commonProps = {
  appendTo: 'window',
  triggerElement: (
    <IconButton priority="secondary">
      <More />
    </IconButton>
  ),
};

const menuItems = [
  <PopoverMenu.MenuItem
    text="dark option"
    onClick={e => console.log(e)}
    skin="dark"
    prefixIcon={<Edit />}
  />,
  <PopoverMenu.MenuItem
    text="destructive option"
    onClick={e => console.log(e)}
    skin="destructive"
  />,
  <PopoverMenu.MenuItem
    text="small option"
    onClick={e => console.log(e)}
    size="small"
  />,
  <PopoverMenu.MenuItem
    text="disabled option"
    onClick={e => console.log(e)}
    disabled
  />,
];
export default {
  category: storySettings.category,
  storyName: 'PopoverMenu',

  component: PopoverMenu,
  componentPath: '..',

  componentProps: {
    ...commonProps,
    children: menuItems,
  },

  exampleProps: {
    // todo
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/PopoverMenu/',
      component: <PopoverMenu {...commonProps}>{menuItems}</PopoverMenu>,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'PopoverMenu renders a trigger element that when the user click on it, a popup box with menu options appear.',
            }),
          ]),

          columns([
            importExample(
              "import PopoverMenu from 'wix-style-react/Beta/PopoverMenu';",
            ),
          ]),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Trigger',
              text: 'Trigger element can be an icon button or a text button',
              source: triggerElementExample,
            },
            {
              title: 'Menu item styling',
              text:
                'Each menu item can be styled differently with the following props - skin, prefixIcon, text size, disabled',
              source: stylesExample,
            },
            {
              title: 'Placement',
              text: 'Menu can be opened in different placements',
              source: placementsExample,
            },
          ].map(example),
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
