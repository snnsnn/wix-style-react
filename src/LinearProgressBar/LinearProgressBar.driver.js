import { linearProgressBarDriverFactory as coreLinearProgressBarDriverFactory } from 'wix-ui-core/drivers/vanilla';
import { tooltipDriverFactory } from 'wix-ui-backoffice/dist/src/components/Tooltip/Tooltip.driver';

const linearProgressBarDriverFactory = ({ element, eventTrigger, wrapper }) => {
  const createTooltipDriver = () =>
    tooltipDriverFactory({
      element: element.querySelector(
        `[data-hook='linear-progressbar-tooltip']`,
      ),
      wrapper,
      eventTrigger,
    });
  const coreProgressBarDriver = coreLinearProgressBarDriverFactory({
    element,
    wrapper,
    eventTrigger,
  });
  const errorIcon = () => element.querySelector(`[data-hook='error-icon']`);
  const successIcon = () => element.querySelector(`[data-hook='success-icon']`);
  const getTooltip = () => createTooltipDriver();

  return {
    ...coreProgressBarDriver,
    isTooltipShown: () => getTooltip().isContentElementExists(),
    getTooltip,
    isErrorIconShown: () => !!errorIcon(),
    isSuccessIconShown: () => !!successIcon(),
    getTooltipErrorMessage: async () => {
      await getTooltip().mouseEnter();
      return getTooltip().getContentElement().textContent;
    },
  };
};

export default linearProgressBarDriverFactory;
