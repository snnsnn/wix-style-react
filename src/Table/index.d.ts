import * as React from 'react';
import { TableContent, TableEmptyState, TableTitleBar, TableToolbarContainer } from './components';
import { TooltipProps } from '../Tooltip';

export interface TableProps {
  dataHook?: string;
  allowMultiDetailsExpansion?: boolean;
  data?: any[];
  columns: {
    title: React.ReactNode;
    render(rowData, rowNum): JSX.Element;
    sortable?: boolean;
    infoTooltipProps?: TooltipProps;
    sortDescending?: boolean;
    align?: 'start' | 'center' | 'end';
  }[];
  dynamicRowClass?(rowData: any, rowNum: number): string;
  hasMore?: boolean;
  hideHeader?: boolean;
  id?: string;
  infiniteScroll?: boolean;
  itemsPerPage?: number;
  loader?: React.ReactNode;
  loadMore?(): void;
  onRowClick?(rowData: any, rowNum: number): void;
  onMouseEnterRow?(rowData: any, rowNum: number): void;
  onMouseLeaveRow?(rowData: any, rowNum: number): void;
  useWindow?: boolean;
  scrollElement?: HTMLElement;
  rowVerticalPadding?: 'medium' | 'large';
  rowDetails?(rowData: any, rowNum: number): React.ReactNode;
  rowDataHook?: string | ((rowData: any, rowNum: number) => string);
  rowClass?: string;
  showHeaderWhenEmpty?: boolean;
  onSelectionChanged?(selectedIds: string[] | number[], change?: SelectionChange): void;
  showSelection?: boolean;
  selectedIds?: string[] | number[];
  selectionDisabled?: boolean;
  width?: string;
  withWrapper?: boolean;
}

export class Table extends React.Component<TableProps> {
  static ToolbarContainer: typeof TableToolbarContainer;
  static Titlebar: typeof TableTitleBar;
  static Content: typeof TableContent;
  static EmptyState: typeof TableEmptyState;
}

export default Table;

export declare type SelectionChange = SelectionChangeAll
  | SelectionChangeNone
  | SelectionChangeToggle;

export declare type SelectionChangeAll = {type: ChangeType.ALL};
export declare type SelectionChangeNone = {type: ChangeType.NONE};
export declare type SelectionChangeToggle = {
  type: ChangeType.SINGLE_TOGGLE;
  id: string | number;
  value: boolean;
};

export declare enum ChangeType {
  ALL = 'ALL',
  NONE = 'NONE',
  SINGLE_TOGGLE = 'SINGLE_TOGGLE',
}

export * from './components';

export declare enum BulkSelectionState {
  ALL = 'ALL',
  NONE = 'NONE',
  SOME = 'SOME',
}
