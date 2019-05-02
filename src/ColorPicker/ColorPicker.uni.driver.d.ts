import {DropdownLayoutDriver} from '../DropdownLayout/DropdownLayout.driver';
import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface ColorPickerDriver extends BaseUniDriver {
  confirm: () => Promise<void>;
  cancel: () => Promise<void>;
  clickOnPreviousColor: () => Promise<void>;
  historyPanelExists: () => Promise<boolean>;
  historyCurrentColor: () => Promise<CSSStyleDeclaration['background']>;
  historyPreviousColor: () => Promise<CSSStyleDeclaration['background']>;
}
