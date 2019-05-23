import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
import { isFocused } from 'wix-ui-test-utils/protractor';

export const dropdownSelector = `[data-hook="dropdown-layout-wrapper"]`;

const driverFactory = component => {
  const dropdownLayoutDriver = dropdownLayoutDriverFactory(
    component.$(dropdownSelector),
  );

  const input = component.$(`input`);

  return {
    ...dropdownLayoutDriver,
    click: () => component.click(),
    getInput: () => input,
    isFocused: () => isFocused(input),
    element: () => component,
    /** Check wether the options dropdown is open */
    isOptionsShown: () => dropdownLayoutDriver.getDropdown().isDisplayed(),
    enterText: text => input.clear().sendKeys(text),
  };
};

export default driverFactory;
