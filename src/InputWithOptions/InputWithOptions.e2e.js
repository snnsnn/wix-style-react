import inputWithOptionsTestkitFactory from './InputWithOptions.private.protractor.driver';
import { $, browser } from 'protractor';
import {
  isFocused,
  waitForVisibilityOf,
  protractorTestkitFactoryCreator,
} from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import {
  storySettings as tabKeyFocusStorySettings,
  insideFormStorySettings,
  testStories,
} from './docs/storySettings';

describe('InputWithOptions', () => {
  let driver;

  const navigateToTestUrl = async (testName, storySettings) => {
    const testStoryUrl = createTestStoryUrl({
      category: storySettings.category,
      storyName: storySettings.storyName,
      dataHook: storySettings.dataHook,
      testName,
    });
    await browser.get(testStoryUrl);
  };

  const focusOnInputWithOptions = async dataHook => {
    const firstElement = $(`[data-hook="${dataHook}"]`);

    await pressTab();
    expect(await isFocused(firstElement)).toEqual(true);

    await pressTab();
    expect(await driver.isFocused()).toEqual(true);
  };

  const pressTab = () =>
    browser
      .actions()
      .sendKeys(protractor.Key.TAB)
      .perform();

  describe('Component', () => {
    beforeEach(async () => {
      await navigateToTestUrl(
        testStories.tabKeyFocusSwitch,
        tabKeyFocusStorySettings,
      );

      driver = protractorTestkitFactoryCreator(inputWithOptionsTestkitFactory)({
        dataHook: tabKeyFocusStorySettings.dataHook,
      });

      await waitForVisibilityOf(
        driver.element(),
        `Cant find ${tabKeyFocusStorySettings.dataHook}`,
      );

      await focusOnInputWithOptions('input-for-focus-1');
    });

    it('should move out focus of input if nothing is pressed / selected', async () => {
      await pressTab();
      expect(await driver.isFocused()).toEqual(false);
    });

    it('should move out focus of input when have manual text option', async () => {
      await driver.enterText('some option');
      await pressTab();
      expect(await driver.isFocused()).toEqual(false);
    });
  });

  describe('Inside a wrapping form', () => {
    beforeEach(async () => {
      await navigateToTestUrl(testStories.insideForm, insideFormStorySettings);

      driver = protractorTestkitFactoryCreator(inputWithOptionsTestkitFactory)({
        dataHook: insideFormStorySettings.dataHook,
      });

      await waitForVisibilityOf(
        driver.element(),
        `Cant find ${insideFormStorySettings.dataHook}`,
      );
    });

    it('should NOT submit the form on Enter key press', async () => {
      await driver.click();
      await driver.selectItemById('0');
      await driver.pressEnter();

      expect(await driver.element().isPresent()).toBe(true);
    });
  });
});
