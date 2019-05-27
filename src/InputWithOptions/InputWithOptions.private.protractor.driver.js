import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
import inputDriverFactory from '../Input/Input.protractor.driver';

export default component => {
  const dropdownLayoutDriver = dropdownLayoutDriverFactory(component);
  const inputDriver = inputDriverFactory(component);

  const pressEnter = () => inputDriver.element().sendKeys(protractor.Key.ENTER);

  return {
    ...dropdownLayoutDriver,
    ...inputDriver,
    element: () => component,
    pressEnter,
  };
};
