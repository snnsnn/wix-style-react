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
  className,
  ...remainingProps
}) => {
  const isStandardSkin = arrowSkin === 'standard';
  const isDisabled = className.includes('slick-disabled');

  return (
    <div {...remainingProps} data-hook={dataHook} className={className}>
      {isStandardSkin ? (
        <CloseButton size={arrowSize} disabled={isDisabled}>
          {icon}
        </CloseButton>
      ) : (
        <IconButton
          skin={arrowSkin}
          size={arrowSize}
          disabled={isDisabled}
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
