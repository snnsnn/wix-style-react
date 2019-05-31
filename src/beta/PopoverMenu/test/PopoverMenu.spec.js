import React from 'react';
import {
  cleanup,
  createRendererWithUniDriver,
} from '../../../../test/utils/unit';

import PopoverMenu from '../PopoverMenu';
import { PopoverMenuPrivateDriver } from './PopoverMenu.private.uni.driver';
import IconButton from '../../../IconButton';
import More from '../../../new-icons/More';

describe('PopoverMenu', () => {
  const render = createRendererWithUniDriver(PopoverMenuPrivateDriver);

  afterEach(() => {
    cleanup();
  });

  const renderPopoverMenu = (props = {}) => (
    <PopoverMenu
      dataHook="random"
      triggerElement={
        <IconButton>
          <More />
        </IconButton>
      }
      children={<PopoverMenu.MenuItem text="dark option" skin="dark" />}
      {...props}
    />
  );

  const renderPopoverMenuItem = (props = {}) => (
    <PopoverMenu.MenuItem text="dark option" skin="dark" {...props} />
  );

  const renderPopoverDivider = (props = {}) => (
    <PopoverMenu.Divider {...props} />
  );

  describe('`children` prop', () => {
    describe('PopoverMenu.Item', () => {
      describe('`onClick` prop', () => {
        it('should be called [when] clicked on one of the childs', async () => {
          const onClick = jest.fn();
          const { driver } = render(
            renderPopoverMenu({
              children: renderPopoverMenuItem({ onClick }),
            }),
          );
          await driver.openMenu();
          expect(await driver.isMenuOpen()).toBe(true);
          await driver.clickAtChild(0);
          expect(onClick).toHaveBeenCalled();
        });
      });
    });

    describe('PopoverMenu.Divider', () => {
      it('should not throw errors [when] selected', async () => {
        const onClick = jest.fn();
        const { driver } = render(
          renderPopoverMenu({
            children: renderPopoverDivider({ onClick }),
          }),
        );
        await driver.openMenu();
        expect(await driver.isMenuOpen()).toBe(true);
        await driver.clickAtChild(0);
        expect(onClick).not.toHaveBeenCalled();
      });
    });
  });
});
