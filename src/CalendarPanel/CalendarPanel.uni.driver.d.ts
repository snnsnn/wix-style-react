import {BaseUniDriver} from 'wix-ui-test-utils/unidriver';
import {CalendarDriver} from '../Calendar/Calendar.uni.driver';
import {DropdownLayoutDriver} from '../DropdownLayout/DropdownLayout.driver';

export interface CalendarPanelDriver extends BaseUniDriver {
    calendarDriver: () => Promise<CalendarDriver>,
    presetsDropdownLayoutDriver: () => Promise<DropdownLayoutDriver>,
    isDropdownExists: () => Promise<boolean>,
    findByDataHook: (dataHook: string) => Promise<boolean>;
}