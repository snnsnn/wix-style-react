import * as React from 'react';
import { EmptyStateProps } from '../../EmptyState';

export declare const TableToolbarContainer: React.SFC;

export interface TableTitleBar {
  dataHook?: string;
}

export declare const TableTitleBar: React.SFC<TableTitleBarProps>;

export interface TableContentProps {
  titleBarVisible?: boolean;
  dataHook?: string;
}

export declare const TableContent: React.SFC<TableContentProps>;

export declare const TableEmptyState: React.SFC<EmptyStateProps>;
