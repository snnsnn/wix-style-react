import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from '../Sidebar';
import {
  PersistentFooter,
  PersistentHeader,
  SidebarBackButton,
  SidebarItem,
  TextView,
} from '..';

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
      <Sidebar dataHook={'sidebar-data-hook'} selectedKey={'item1'}>
        <PersistentHeader>
          <div
            style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
          >
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
          <div
            style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
          >
            Sidebar Footer
          </div>
        </PersistentFooter>
      </Sidebar>
    ));
  });
});
