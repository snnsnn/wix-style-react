import 'regenerator-runtime/runtime';
import { puppeteerUniTestkitFactoryCreator } from 'wix-ui-test-utils/puppeteer';

import { PopoverMenuDriver } from '../../src/beta/PopoverMenu/PopoverMenu.uni.driver';

export const PopoverMenuTestkit = puppeteerUniTestkitFactoryCreator(
  PopoverMenuDriver,
);
