import { PropTypes } from 'react';

export const Skin = PropTypes.oneOf([
  'general',
  'standard',
  'danger',
  'success',
  'neutral',
  'warning',
  'urgent',
  'neutralLight',
  'neutralStandard',
  'neutralSuccess',
  'neutralDanger',
  'premium',
  'warningLight',
]);

export const Type = PropTypes.oneOf(['solid', 'outlined', 'transparent']);

export const Size = PropTypes.oneOf(['medium', 'small']);

export const SKIN = {
  general: 'general',
  standard: 'standard',
  danger: 'danger',
  success: 'success',
  neutral: 'neutral',
  neutralLight: 'neutralLight',
  warning: 'warning',
  warningLight: 'warningLight',
  urgent: 'urgent',
  neutralStandard: 'neutralStandard',
  neutralSuccess: 'neutralSuccess',
  neutralDanger: 'neutralDanger',
  premium: 'premium',
};

export const TYPE = {
  solid: 'solid',
  outlined: 'outlined',
  transparent: 'transparent',
};

export const SIZE = {
  medium: 'medium',
  small: 'small',
};
