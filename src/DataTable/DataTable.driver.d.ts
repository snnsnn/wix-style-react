import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { SyntheticEventData } from 'react-dom/test-utils';

export interface DataTableDriver extends BaseDriver {
  getRow: (rowIndex: number) => HTMLElement;
  getRowsCount: () => number;
  getRowsWithClassCount: (className: string) => number;
  getRowsWithDataHook: (dataHookName: string) => HTMLElement[];
  getRowWithDataHook: (dataHookName: string) => HTMLElement | null;
  getRowText: (index: number) => string[];
  getRowClasses: (index: number) => string[];
  getHeaderCell: (index: number) => HTMLElement;
  getHeaderCellStyle: (index: number) => CSSStyleDeclaration;
  getHeaderCellWidth: (index: number) => CSSStyleDeclaration['width'];
  getCell: (rowIndex: number, cellIndex: number) => HTMLElement;
  getCellStyle: (rowIndex: number, colIndex: number) => CSSStyleDeclaration;
  getCellWidth: (rowIndex: number, colIndex: number) => CSSStyleDeclaration['width']
  isRowClickable: (index: number) => boolean;
  isRowAnimated: (index: number) => boolean;
  getTitles: () => string[];
  isDisplayingNothing: () => boolean;
  isDisplayingHeaderOnly: () => boolean;
  isDisplayingHeader: () => boolean;
  hasChildWithId: (id: string | number) => boolean;
  clickRow: (index: number, eventData: any) => void;
  mouseEnterRow: (index: number, eventData?: SyntheticEventData) => void;
  mouseLeaveRow: (index: number, eventData?: SyntheticEventData) => void;
  hasRowDetails: (index: number) => boolean;
  getRowDetailsText: (index: number) => string;
  hasSortableTitle: (index: number) => boolean;
  hasInfoIcon: (index: number) => boolean;
  hasSortDescending: (index: number) => boolean;
  clickSort: (index: number, eventData?: SyntheticEventData) => void;
  getRowDetails: (index: number) => HTMLElement | null;
}
