import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
import inputDriverFactory from '../Input/Input.protractor.driver';

export const dropdownSelector = `[data-hook="dropdown-layout-wrapper"]`;

const driverFactory = component => {
  const dropdownLayoutDriver = dropdownLayoutDriverFactory(
    component.$(dropdownSelector),
  );

  const input = component.$(`input`);
  const inputDriver = inputDriverFactory({ element: input });

  return {
    ...dropdownLayoutDriver,
    click: () => inputDriver.click(),
    getInput: () => input,
    isFocused: () => inputDriver.isFocused(),
    element: () => component,
    /** Check wether the options dropdown is open */
    isOptionsShown: () => dropdownLayoutDriver.getDropdown().isDisplayed(),
    enterText: text => input.clear().sendKeys(text),
  };
};

export default driverFactory;
