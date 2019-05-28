import React from 'react';
import Sidebar from '../Sidebar';
import { mount } from 'enzyme';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarBackButton } from '../BackButton/SidebarBackButton';

describe('Sidebar', () => {
  describe('BackButton', () => {
    it('should go back when clicked', () => {
      const sidebar = mount(
        <Sidebar selectedKey={'item2'}>
          <SidebarItem
            itemKey={'item1'}
            innerMenu={[
              <SidebarBackButton key={'back'}>
                <span>Back</span>
              </SidebarBackButton>,
              <SidebarItem key={'item2'} itemKey={'item2'}>
                <div data-hook="simple2">456</div>
              </SidebarItem>,
            ]}
          >
            <div data-hook="simple1">123</div>
          </SidebarItem>
        </Sidebar>,
      );

      let subMenuChildren = sidebar.find(`[data-hook="driven-in-children"]`);
      expect(subMenuChildren.exists()).toBeTruthy();

      const backButtonEl = sidebar.find(`[data-hook="sidebar-back-button"]`);
      backButtonEl.simulate('click');

      subMenuChildren = sidebar.find(`[data-hook="driven-in-children"]`);
      expect(subMenuChildren.exists()).toBeFalsy();
    });
  });
});
