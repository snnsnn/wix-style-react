import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface TimeInputDriver extends BaseUniDriver {
  getValue(): Promise<string>;
  isDisabled(): Promise<boolean>;
  clickTickerUp(): Promise<void>;
  clickTickerDown(): Promise<void>;
  isAmPmIndicatorExist(): Promise<boolean>;
  toggleAmPmIndicator(): Promise<void>;
  getAmPmIndicatorText(): string;
  isRtl(): Promise<boolean>;
  setValue(value: string): Promise<void>;
  blur: () => Promise<void>;
}
