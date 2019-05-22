import * as React from 'react';
import {Omit} from '..';

export interface BoxProps extends Omit<React.CSSProperties, 'direction'> {
  inline?: boolean;
  className?: string;
  direction?: BoxDirection;
  align?: BoxHorizontalAlignment;
  verticalAlign?: BoxVerticalAlignment;
  dataHook?: string;
  padding?: BoxCssSizingPropery;
  paddingTop?: BoxCssSizingPropery;
  paddingRight?: BoxCssSizingPropery;
  paddingBottom?: BoxCssSizingPropery;
  paddingLeft?: BoxCssSizingPropery;
  margin?: BoxCssSizingPropery;
  marginTop?: BoxCssSizingPropery;
  marginRight?: BoxCssSizingPropery;
  marginBottom?: BoxCssSizingPropery;
  marginLeft?: BoxCssSizingPropery;
  minWidth?: BoxCssSizingPropery;
  maxWidth?: BoxCssSizingPropery;
  width?: BoxCssSizingPropery;
  minHeight?: BoxCssSizingPropery;
  maxHeight?: BoxCssSizingPropery;
  height?: BoxCssSizingPropery;
}

declare const Box: React.SFC<BoxProps>;
export default Box;

export type BoxDirection = 'horizontal' | 'vertical';

export type BoxHorizontalAlignment =
  | 'left'
  | 'center'
  | 'right'
  | 'space-between';

export type BoxVerticalAlignment =
  | 'top'
  | 'middle'
  | 'bottom'
  | 'space-between';

export type BoxSpacing = 'tiny' | 'small' | 'medium' | 'large';

type BoxCssSizingPropery = string | number;
