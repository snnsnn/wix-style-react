import { swatchesDriverFactory as publicDriverFactory } from '../Swatches.uni.driver';
import { StylableUnidriverUtil } from '../../../test/utils/unidriver';
import style from '../Swatches.st.css';

export const swatchesPrivateDriverFactory = base => {
  const publicDriver = publicDriverFactory(base);
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...publicDriver,

    /** Test if swatch is transparent at given index */
    isSwatchTransparentAt: async index => {
      const swatch = await publicDriver.getSwatch(index);
      return (
        (await stylableUtil.getStyleState(swatch, 'transparent')) === 'true'
      );
    },
  };
};
