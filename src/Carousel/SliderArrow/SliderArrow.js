import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton';
import CloseButton from '../../CloseButton';

const SliderArrow = ({
  dataHook,
  arrowSize,
  arrowSkin,
  disabled,
  icon,
  ...remainingProps
}) => {
  const isStandardSkin = arrowSkin === 'standard';

  return (
    <div {...remainingProps} data-hook={dataHook}>
      {isStandardSkin ? (
        <CloseButton size={arrowSize} disabled={disabled}>
          {icon}
        </CloseButton>
      ) : (
        <IconButton
          skin={arrowSkin}
          size={arrowSize}
          disabled={disabled}
          priority="secondary"
        >
          {icon}
        </IconButton>
      )}
    </div>
  );
};

SliderArrow.propTypes = {
  dataHook: PropTypes.string,
  /** Icon to be rendered within the icon button */
  icon: PropTypes.element.isRequired,
};

export default SliderArrow;
