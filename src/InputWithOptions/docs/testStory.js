/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import {
  storySettings as tabFocusStorySettings,
  insideFormStorySettings,
  testStories,
} from './storySettings';
import TestFocusOnTabKey from './tests/TestFocusOnTabKey';
import TestInsideWrapperForm from './tests/TestInsideWrapperForm';

const TestContainer = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f4f7',
    }}
  >
    {children}
  </div>
);

const kind = getTestStoryKind({
  storyName: tabFocusStorySettings.storyName,
  category: tabFocusStorySettings.category,
});

storiesOf(kind, module).add(testStories.tabKeyFocusSwitch, () => (
  <TestContainer>
    <input data-hook="input-for-focus-1" />
    <TestFocusOnTabKey />
    <input data-hook="input-for-focus-2" />
  </TestContainer>
));

// -------------- //

const insideFormKind = getTestStoryKind({
  storyName: insideFormStorySettings.storyName,
  category: insideFormStorySettings.category,
});

storiesOf(insideFormKind, module).add(testStories.insideForm, () => (
  <TestInsideWrapperForm />
));
