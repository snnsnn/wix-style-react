import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton/IconButton';

const SliderArrow = ({
  dataHook,
  arrowSize,
  arrowSkin,
  icon,
  ...remainingProps
}) => {
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
