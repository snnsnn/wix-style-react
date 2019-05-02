import {BaseDriver} from "wix-ui-test-utils/driver-factory";
import {CalendarDriver} from "../Calendar/Calendar.uni.driver";
import {InputDriver} from "../Input/Input.uni.driver";

export interface DatePickerDriver extends BaseDriver {
    driver: {
        exists: () => boolean,
        open: () => void;
    },
    inputDriver: InputDriver,
    calendarDriver: CalendarDriver
}
