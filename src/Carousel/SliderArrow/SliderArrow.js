import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton/IconButton';

const SliderArrow = arrowProps => {
  // Disregard unnecessary slick arrow props [currentSlide, slideCount]
  const {
    currentSlide,
    slideCount,
    dataHook,
    arrowSize,
    arrowSkin,
    icon,
    ...remainingProps
  } = arrowProps;

  return (
    <div {...remainingProps} data-hook={dataHook}>
      <IconButton skin={arrowSkin} size={arrowSize} priority="secondary">
        {icon}
      </IconButton>
    </div>
  );
};

SliderArrow.propTypes = {
  dataHook: PropTypes.string,
  icon: PropTypes.element.isRequired,
};

export default SliderArrow;
