import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';

export const errorIndicatorDriverFactory = ({ element }) => {
  const tooltipTestkit = tooltipTestkitFactory({
    wrapper: element,
    dataHook: 'error-indicator-tooltip',
  });
  return {
    exists: () => !!element,
    isShown: () => tooltipTestkit.isContentElementExists(),
    mouseEnter: () => tooltipTestkit.mouseEnter(),
    getErrorMessage: () => tooltipTestkit.getContentElement().textContent,
  };
};
