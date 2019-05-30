import inputWithOptionsTestkitFactory from './InputWithOptions.private.protractor.driver';
import { $, browser } from 'protractor';
import { isFocused, waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import {
  storySettings,
  insideFormStorySettings,
  testStories,
} from './docs/storySettings';

describe('InputWithOptions', () => {
  let driver;

  describe('Component', () => {
    const testedComponentDataHook = storySettings.dataHook;

    beforeEach(async () => {
      await navigateToTestUrl(testStories.tabsSwitches, storySettings);
      driver = inputWithOptionsTestkitFactory(
        $(`[data-hook="${testedComponentDataHook}"]`),
      );
      await waitForVisibilityOf(
        driver.element(),
        `Cant find ${testedComponentDataHook}`,
      );
    });

    it('should move out focus of input if nothing is pressed / selected', async () => {
      await focusOnInputWithOptions(driver);

      await pressTab();
      expect(await driver.isFocused()).toEqual(false);
    });

    it('should move out focus of input when have manual text option', async () => {
      await focusOnInputWithOptions(driver);

      await driver.enterText('some option');
      await pressTab();
      expect(await driver.isFocused()).toEqual(false);
    });
  });

  describe('Inside a wrapping form', () => {
    beforeEach(async () => {
      await navigateToTestUrl(
        testStories.insideWrappingForm,
        insideFormStorySettings,
      );
      driver = inputWithOptionsTestkitFactory(
        $(`[data-hook="${insideFormStorySettings.dataHook}"]`),
      );
      await waitForVisibilityOf(
        driver.element(),
        `Cant find ${insideFormStorySettings.dataHook}`,
      );
    });

    it('should NOT submit the form on Enter key press', async () => {
      await driver.click();
      await driver.selectItemById('0');
      await driver.pressEnter();

      await waitFor(100);
      const wasFormSubmitted =
        (await $('[data-hook="was-submitted"]').getText()) === 'yes';

      expect(wasFormSubmitted).toBe(false);
    });
  });
});

const waitFor = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const navigateToTestUrl = async (
  testName,
  { category, storyName, dataHook },
) => {
  const testStoryUrl = createTestStoryUrl({
    category,
    storyName,
    dataHook,
    testName,
  });
  await browser.get(testStoryUrl);
};

const pressTab = () =>
  browser
    .actions()
    .sendKeys(protractor.Key.TAB)
    .perform();

const focusOnInputWithOptions = async driver => {
  const firstInput = $$(`input`).get(0);

  await pressTab();
  expect(await isFocused(firstInput)).toEqual(true);

  await pressTab();
  expect(await driver.isFocused()).toEqual(true);
};
