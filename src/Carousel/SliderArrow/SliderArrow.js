import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton/IconButton';

const SliderArrow = arrowProps => {
  // Disregard unnecessary slick arrow props [currentSlide, slideCount]
  // this is known issue on slick arrows which will trigger error in console
  // more info: https://github.com/akiran/react-slick/issues/728
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
  /** Icon to be rendered within the icon button */
  icon: PropTypes.element.isRequired,
};

export default SliderArrow;
