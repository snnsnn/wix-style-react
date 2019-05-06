import {
  tab,
  api,
  title,
  code as baseCode,
  importExample,
  playground,
  testkit,
  description,
} from 'wix-storybook-utils/Sections';

import RichTextInputArea from '..';
import { storySettings } from './storySettings';
import * as examples from './examples';
import { baseScope } from '../../../stories/utils/LiveCodeExample';
import testkitReadme from './README.TESTKIT.md';

const code = config =>
  baseCode({
    components: baseScope,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: RichTextInputArea,
  componentPath: '..',

  componentProps: () => ({
    dataHook: storySettings.dataHook,
    initialValue: '',
    placeholder: 'Default text goes here',
    onChange: value => value,
  }),

  exampleProps: {
    onChange: value => value,
  },

  sections: [
    tab({
      title: 'Usage',
      sections: [
        importExample({
          source:
            "import RichTextInputArea from 'wix-style-react/RichTextInputArea';",
        }),

        title('Examples'),

        ...[
          { title: 'Error', source: examples.error },
          { title: 'Disabled', source: examples.disabled },
          { title: 'Placeholder', source: examples.placeholder },
        ].map(code),
      ],
    }),

    ...[
      {
        title: 'API',
        sections: [api()],
      },

      {
        title: 'TestKit',
        sections: [testkit(), description(testkitReadme)],
      },

      {
        title: 'Playground',
        sections: [playground()],
      },
    ].map(tab),
  ],
};
