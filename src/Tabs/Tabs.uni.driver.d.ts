import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { CSSProperties } from 'react';

export interface TabsDriver extends BaseDriver {
  getTitles(): Promise<string[]>;
  clickTabAt(index: number): Promise<void>;
  getActiveTabIndex(): Promise<number>;
  isDefaultType(): Promise<boolean>;
  getItemsContainerClassList(): Promise<DOMTokenList>;
  getDataHook(index: number): Promise<string>;
  getItemsWidth: Promise<Set<CSSProperties['width']>>;
  hasDivider(): Promise<boolean>;
  getSideContent(): Promise<HTMLElement>;
  getItemsMaxWidths(): Promise<Set<CSSProperties['maxWidth']>>;
}
