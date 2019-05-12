import React from 'react';
import Sidebar from '../Sidebar';
import { mount } from 'enzyme';
import { SidebarItem } from '../SidebarItem/SidebarItem';

describe('Sidebar', () => {
  describe('SidebarItem', () => {
    it('should render top level SidebarItem', () => {
      const sidebar = mount(
        <Sidebar>
          <SidebarItem itemKey={'item1'}>
            <div data-hook="simple">123</div>
          </SidebarItem>
        </Sidebar>,
      );

      const el1 = sidebar.find(`[data-hook="simple"]`);
      expect(el1.text()).toEqual('123');
    });

    it('should not render second level items until navigate', () => {
      const sidebar = mount(
        <Sidebar>
          <SidebarItem
            itemKey={'item1'}
            innerMenu={[
              <SidebarItem itemKey={'item2'}>
                <div data-hook="simple2">456</div>
              </SidebarItem>,
              <SidebarItem itemKey={'item3'}>
                <div data-hook="simple2">789</div>
              </SidebarItem>,
              <SidebarItem itemKey={'item4'}>
                <div data-hook="simple2">000</div>
              </SidebarItem>,
            ]}
          >
            <div data-hook="simple1">123</div>
          </SidebarItem>
        </Sidebar>,
      );

      const el1 = sidebar.find(`[data-hook="simple1"]`);
      expect(el1.text()).toEqual('123');

      let el = sidebar.find(`[data-hook="simple2"]`);
      expect(el.exists()).toBeFalsy();

      el = sidebar.find(`[data-hook="simple3"]`);
      expect(el.exists()).toBeFalsy();

      el = sidebar.find(`[data-hook="simple4"]`);
      expect(el.exists()).toBeFalsy();
    });

    it('should render second level items once navigate', () => {
      const sidebar = mount(
        <Sidebar selectedKey={'item2'}>
          <SidebarItem
            itemKey={'item1'}
            innerMenu={[
              <SidebarItem key={'item2'} itemKey={'item2'}>
                <div data-hook="simple2">456</div>
              </SidebarItem>,
              <SidebarItem key={'item3'} itemKey={'item3'}>
                <div data-hook="simple3">789</div>
              </SidebarItem>,
              <SidebarItem key={'item4'} itemKey={'item4'}>
                <div data-hook="simple4">000</div>
              </SidebarItem>,
            ]}
          >
            <div data-hook="simple1">123</div>
          </SidebarItem>
        </Sidebar>,
      );

      let el = sidebar.find(`[data-hook="simple2"]`);
      expect(el.text()).toEqual('456');

      el = sidebar.find(`[data-hook="simple3"]`);
      expect(el.text()).toEqual('789');

      el = sidebar.find(`[data-hook="simple4"]`);
      expect(el.text()).toEqual('000');
    });

    it('should navigate on click when innerMenu', () => {
      const sidebar = mount(
        <Sidebar selectedKey={'item1'}>
          <SidebarItem
            itemKey={'item1'}
            innerMenu={[
              <SidebarItem key={'item2'} itemKey={'item2'}>
                <div data-hook="simple2">456</div>
              </SidebarItem>,
              <SidebarItem key={'item3'} itemKey={'item3'}>
                <div data-hook="simple3">789</div>
              </SidebarItem>,
              <SidebarItem key={'item4'} itemKey={'item4'}>
                <div data-hook="simple4">000</div>
              </SidebarItem>,
            ]}
          >
            <div data-hook="simple1">123</div>
          </SidebarItem>
        </Sidebar>,
      );

      let subMenuChildren = sidebar.find(`[data-hook="driven-in-children"]`);
      expect(subMenuChildren.exists()).toBeFalsy();

      const itemEl = sidebar.find(`[data-hook="simple1"]`);
      itemEl.simulate('click');

      subMenuChildren = sidebar.find(`[data-hook="driven-in-children"]`);
      expect(subMenuChildren.exists()).toBeTruthy();

      let subItemEl = sidebar.find(`[data-hook="simple2"]`);
      expect(subItemEl.text()).toEqual('456');

      subItemEl = sidebar.find(`[data-hook="simple3"]`);
      expect(subItemEl.text()).toEqual('789');

      subItemEl = sidebar.find(`[data-hook="simple4"]`);
      expect(subItemEl.text()).toEqual('000');

      //wrapper = mount(<App/>)
      // import {SidebarTeskit, SidebarItemTestkit} from 'wsr/testkit'
      // const sidebarDriver = SidebarTeskit({wrapper, dataHook: 'my-sidebar'})
      // const sidebarItemDriver = SidebarTeskit({wrapper, dataHook: 'my-sidebar-item-1'})

      // render sidebar with all the content
      // nativeSidebar.querySelector('internal-dataHook)' SidebarItemDriver.click()
    });

    it('should not dummy navigate when no innerMenu', () => {
      const sidebar = mount(
        <Sidebar selectedKey={'item1'}>
          <SidebarItem itemKey={'item1'}>
            <div data-hook="simple1">123</div>
          </SidebarItem>
        </Sidebar>,
      );

      const itemEl = sidebar.find(`[data-hook="simple1"]`);
      itemEl.simulate('click');

      const subMenuChildren = sidebar.find(`[data-hook="driven-in-children"]`);
      expect(subMenuChildren.exists()).toBeFalsy();
    });
  });
});
