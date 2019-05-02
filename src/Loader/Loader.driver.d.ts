import {BaseDriver} from "wix-ui-test-utils/driver-factory";
import {LoaderColor} from ".";
import {TooltipDriver} from "../Tooltip/Tooltip.uni.driver";

export interface LoaderDriver extends BaseDriver {
    component: () => HTMLElement;
    getColor: () => LoaderColor;
    getText: () => string;
    hasText: () => boolean,
    isLarge: () => boolean;
    isMedium: () => boolean;
    isSmall: () => boolean;
    isTiny: () => boolean;
    isLoading: () => boolean;
    isError: () => boolean;
    isSuccess: () => boolean;
    getStatusMessage: () => TooltipDriver['getContent'],
}
