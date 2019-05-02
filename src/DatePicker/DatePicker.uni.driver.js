import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { calendarUniDriverFactory } from '../Calendar/Calendar.uni.driver';
import styles from '../Input/Input.scss';

import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const datePickerUniDriverFactory = base => {
  const inputDriver = inputUniDriverFactory(base.$(`.${styles.root}`));
  const calendarDriver = calendarUniDriverFactory(base);

  const driver = {
    open: () => inputDriver.click(),
  };

  return {
    ...baseUniDriverFactory(base),

    driver,
    inputDriver,
    calendarDriver,
  };
};
