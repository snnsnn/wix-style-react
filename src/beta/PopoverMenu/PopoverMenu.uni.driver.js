import { dropdownBaseDriverFactory } from '../../DropdownBase/DropdownBase.uni.driver';

export const PopoverMenuDriver = base => {
  const dropdownBaseTestkit = dropdownBaseDriverFactory(base);
  const getTriggerElement = () => base.$('[data-hook="popovermenu-trigger"]');

  return {
    clickAtChild: option => dropdownBaseTestkit.selectOption(option),
    isMenuOpen: () => dropdownBaseTestkit.isDropdownShown(),
    openMenu: () => getTriggerElement().click(),
  };
};
