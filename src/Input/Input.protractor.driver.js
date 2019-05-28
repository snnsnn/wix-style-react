import { isFocused } from 'wix-ui-test-utils/protractor';

const inputDriverFactory = component => {
  const clearButton = component.$('[data-hook="input-clear-button"]');
  const input = component.$('[data-hook^="wsr-input"]');

  return {
    element: () => component,
    enterText: text => input.clear().sendKeys(text),
    getText: () => input.getAttribute('value'),
    hasClearButton: () => clearButton.isPresent(),
    clickClear: async () => {
      return (await clearButton.isPresent()) && clearButton.click();
    },
    click: () => input.click(),
    isFocused: () => isFocused(input),
  };
};

export default inputDriverFactory;
