import * as React from 'react';
import { ToggleSwitchProps as CoreToggleSwitchProps } from 'wix-ui-core/toggle-switch';
import { ToggleSwitchProps as BackofficeToggleSwitchProps } from 'wix-ui-backoffice/dist/src/components/ToggleSwitch/ToggleSwitch';
import { WixComponentProps } from 'wix-ui-core/dist/src/createHOC';

export interface ToggleSwitchProps extends BackofficeToggleSwitchProps, CoreToggleSwitchProps, WixComponentProps {}

export default class ToggleSwitch extends React.PureComponent<ToggleSwitchProps> {}
