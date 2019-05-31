import { dropdownBaseDriverFactory } from '../../DropdownBase/DropdownBase.uni.driver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const PopoverMenuDriver = base => {
  const dropdownBaseTestkit = dropdownBaseDriverFactory(base);
  const getTriggerElement = () => base.$('[data-hook="popovermenu-trigger"]');

  return {
    ...baseUniDriverFactory(base),
    clickAtChild: option => dropdownBaseTestkit.selectOption(option),
    isMenuOpen: () => dropdownBaseTestkit.isDropdownShown(),
    openMenu: () => getTriggerElement().click(),
  };
};
