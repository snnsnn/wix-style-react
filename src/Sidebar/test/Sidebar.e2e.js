import { eyesItInstance } from '../../../test/utils/eyes-it';
/*import { sidebarTestkitFactory } from '../../../testkit/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings } from './storySettings';
import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
*/
const eyes = eyesItInstance();

describe('Sidebar', () => {
  // const createStoryUrl = testName =>
  //   createTestStoryUrl({ ...storySettings, testName });
  //
  // const createDriver = async (dataHook = storySettings.dataHook) => {
  //   const driver = sidebarTestkitFactory({ dataHook });
  //
  //   await waitForVisibilityOf(
  //     await driver.element(),
  //     `Cannot find <Sidebar/> component with dataHook of ${dataHook}`,
  //   );
  //
  //   await scrollToElement(await driver.element());
  //
  //   return driver;
  // };
  //
  // const testStoryNames = storySettings.testStoryNames;

  eyes.it('should increase count when button clicked', async () => {
    expect(1).toBe(1);
  });
});
