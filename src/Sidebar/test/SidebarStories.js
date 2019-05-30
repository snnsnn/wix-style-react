import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings } from './storySettings';
import Sidebar from '../index';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarBackButton } from '../BackButton/SidebarBackButton';
import { TextView } from '../SidebarItem/TextView/TextView';
import { PersistentHeader } from '../SidebarItem/PersistentHeader';
import { PersistentFooter } from '../SidebarItem/PersistentFooter';

const TestStories = storiesOf(getTestStoryKind(storySettings), module);
const { testStoryNames, dataHook } = storySettings;

TestStories.add(testStoryNames.DEFAULT, () => (
  <div style={{ height: '500px' }}>
    <Sidebar dataHook={dataHook} selectedKey={'item1'}>
      <PersistentHeader>
        <div style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}>
          Simple Sidebar
        </div>
      </PersistentHeader>

      <SidebarItem
        itemKey={'item1'}
        innerMenu={[
          <SidebarBackButton>
            <TextView>Back</TextView>
          </SidebarBackButton>,
          <SidebarItem itemKey={'item4'}>
            <TextView>Inner Item 1</TextView>
          </SidebarItem>,
          <SidebarItem itemKey={'item5'}>
            <TextView>Inner Item 2</TextView>
          </SidebarItem>,
        ]}
      >
        <TextView>Item 1</TextView>
      </SidebarItem>
      <SidebarItem itemKey={'item2'} disable="true">
        <TextView disable="true">Item 2</TextView>
      </SidebarItem>
      <SidebarItem itemKey={'item3'}>
        <TextView>Item 3</TextView>
      </SidebarItem>

      <PersistentFooter>
        <div style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}>
          Sidebar Footer
        </div>
      </PersistentFooter>
    </Sidebar>
  </div>
));
