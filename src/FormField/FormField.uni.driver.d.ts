import {TooltipDriver} from '../Tooltip/Tooltip.uni.driver';
import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';

export interface FormFieldDriver extends BaseUniDriver {
  getChildren: () => Promise<HTMLElement>;
  getLabel: () => Promise<HTMLElement | null>;
  isRequired: () => Promise<boolean>;
  getLengthLeft: () => Promise<number | null>;
  isLengthExceeded: () => Promise<boolean>;
  getInfoContent: () => TooltipDriver['hoverAndGetContent'];
}
