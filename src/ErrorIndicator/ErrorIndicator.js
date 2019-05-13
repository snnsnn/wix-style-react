import React from 'react';
import PropTypes from 'prop-types';
import FormFieldError from '../new-icons/system/FormFieldError';
import Tooltip from '../Tooltip';
import styles from './ErrorIndicator.scss';

// This component was exported out of <InputArea/>
// TODO: Add tests and docs
const ErrorIndicator = ({ dataHook, errorMessage, tooltipPlacement }) => (
  <div data-hook={dataHook} className={styles.suffix}>
    <Tooltip
      upgrade
      dataHook="error-indicator-tooltip"
      placement={tooltipPlacement}
      exitDelay={100}
      content={errorMessage}
      maxWidth={250}
    >
      <div disabled={errorMessage.length === 0} className={styles.errorIcon}>
        <FormFieldError />
      </div>
    </Tooltip>
  </div>
);

ErrorIndicator.defaultProps = {
  errorMessage: '',
  tooltipPlacement: 'top',
};

ErrorIndicator.propTypes = {
  errorMessage: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
  onTooltipShow: PropTypes.func,
};

export default ErrorIndicator;
