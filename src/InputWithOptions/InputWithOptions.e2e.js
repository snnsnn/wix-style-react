import { inputWithOptionsTestkitFactory } from '../../testkit/protractor';
import { $, browser } from 'protractor';
import { isFocused, waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import {
  storySettings,
  insideFormStorySettings,
  testStories,
} from './docs/storySettings';
import privateDriverFactory from './InputWithOptions.private.protractor.driver';
import { eventually } from '../../test/utils/unit/eventually';

describe('InputWithOptions', () => {
  let driver;
  let privateDriver;

  const navigateToTestUrl = async testName => {
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
      await navigateToTestUrl(testStories.tabsSwitches);

      driver = inputWithOptionsTestkitFactory({
        dataHook: storySettings.dataHook,
      });

      await waitForVisibilityOf(
        driver.element(),
        `Cant find ${storySettings.dataHook}`,
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

  describe('Inside a form', () => {
    const navigateToTestUrl = async testName => {
      const testStoryUrl = createTestStoryUrl({
        category: insideFormStorySettings.category,
        storyName: insideFormStorySettings.storyName,
        dataHook: insideFormStorySettings.dataHook,
        testName,
      });
      await browser.get(testStoryUrl);
    };

    beforeEach(async () => {
      await navigateToTestUrl(testStories.insideForm);

      driver = inputWithOptionsTestkitFactory({
        dataHook: insideFormStorySettings.dataHook,
      });

      await waitForVisibilityOf(
        driver.element(),
        `Cant find ${insideFormStorySettings.dataHook}`,
      );

      privateDriver = privateDriverFactory(driver.element());
    });

    it('should NOT submit the form on Enter key press', async () => {
      await privateDriver.selectOptionAt('0');

      eventually(async () =>
        expect(await driver.element().isPresent()).toBe(true),
      );
    });
  });
});
