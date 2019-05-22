import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import ExampleRaw from '!raw-loader!./Example';
import ExampleSkinRaw from '!raw-loader!./ExampleSkin';
import ExampleSizeRaw from '!raw-loader!./ExampleSize';
import ExamplePrefixIconRaw from '!raw-loader!./ExamplePrefixIcon';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import ListItemAction from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'listItemAction',

  component: ListItemAction,
  componentPath: '..',

  componentProps: {
    title: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      component: <ListItemAction title="Click me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'An option builder for the `<DropdownLayout/>` component and its consumers.',
            }),
          ]),

          columns([
            importExample(
              "import listItemAction from 'wix-style-react/ListItemAction';",
            ),
          ]),

          divider(),

          title('Examples'),

          code({
            title: 'listItemActionBuilder',
            description: 'Use the builder to integrate with DropdownLayout',
            source: ExampleRaw,
          }),
          code({
            title: 'Skin',
            source: ExampleSkinRaw,
          }),
          code({
            title: 'Size',
            source: ExampleSizeRaw,
          }),
          code({
            title: 'Prefix Icon',
            source: ExamplePrefixIconRaw,
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
