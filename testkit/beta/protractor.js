import 'regenerator-runtime/runtime';
import { protractorUniTestkitFactoryCreator } from 'wix-ui-test-utils/protractor';

import { PopoverMenuDriver } from '../../src/beta/PopoverMenu/PopoverMenu.uni.driver';

export const PopoverMenuTestkit = protractorUniTestkitFactoryCreator(
  PopoverMenuDriver,
);
