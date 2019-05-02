import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface TextButtonDriver extends BaseUniDriver {
  getButtonTextContent(): Promise<string>;
  isButtonDisabled(): Promise<boolean>;
}
