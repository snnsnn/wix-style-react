import { dropdownSelector } from './InputWithOptions.protractor.driver';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';
//import inputDriverFactory from '../Input/Input.protractor.driver';

export default component => {
  const dropdown = component.$(dropdownSelector);
  const dropdownLayoutDriver = dropdownLayoutDriverFactory(dropdown);

  const input = component.$('input');
  //const inputDriver = inputDriverFactory({ element: input });

  const pressEnter = () => input.sendKeys(protractor.Key.ENTER);

  return {
    pressEnter,
    selectOptionAt: async index => {
      await input.click();
      await dropdownLayoutDriver.scrollToElement(index);
      await dropdownLayoutDriver.selectItemById(index);
      await pressEnter();
    },
  };
};
