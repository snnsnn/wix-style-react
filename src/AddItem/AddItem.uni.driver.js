import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

export const addItemUniDriverFactory = (base, body) => {
  const tooltipSelector = '[data-hook*="additem-tooltip"]';
  const textSelector = '[data-hook*="additem-text"]';
  const tooltipDriver = tooltipDriverFactory(base.$(tooltipSelector), body);
  const textDriver = textUniDriverFactory(base.$(textSelector));

  return {
    click: () => base.click(),
    /** returns value of action text */
    getText: () => textDriver.getText(),
    /** true if passed children in string exists */
    textExists: () => textDriver.exists(),
    /** returns value of tooltip content */
    getTooltipContent: () => tooltipDriver.getTooltipText(),
  };
};
