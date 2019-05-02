import { DataTableDriver } from '../DataTable/DataTable.driver';
import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { CheckboxDriver } from '../Checkbox/Checkbox.uni.driver';
import { BulkSelectionState } from './index';

export interface TableDriver extends BaseDriver, DataTableDriver {
  element: HTMLElement;
  getRowCheckboxDriver: (index: number) => CheckboxDriver;
  getBulkSelectionCheckboxDriver: () => CheckboxDriver;
  isBulkSelectionDisabled: () => boolean;
  isRowSelectionDisabled: (index: number) => boolean;
  clickRowChecbox: (index: number) => Promise<void>;
  clickBulkSelectionCheckbox: () => Promise<void>;
  isRowSelected: (index: number) => Promise<boolean>;
  getBulkSelectionState: () => BulkSelectionState;
  getTitlebar: () => HTMLElement | null;
}
