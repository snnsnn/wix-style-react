import PropTypes from 'prop-types';

const Content = props => props.children;
Content.displayName = 'Page.Content';
Content.propTypes = {
  children: PropTypes.element.isRequired,
  fullScreen: PropTypes.bool,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /** A data-hook to be applied to the component's root element */
  dataHook: PropTypes.string,
};
export default Content;
