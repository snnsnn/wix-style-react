import React from 'react';
import classNames from 'classnames';
import styles from './Pagination.scss';
import './Pagination.global.scss';
import PropTypes from 'prop-types';

const Pagination = ({ className, pages }) => (
  <div className={classNames(className, styles.pagination)}>
    {pages.map(page => _withDotClass(page))}
  </div>
);

const _withDotClass = comp => {
  const props = { className: classNames(comp.props.className, styles.dot) };
  return React.cloneElement(comp, props);
};

Pagination.propTypes = {
  className: PropTypes.string,
};

Pagination.displayName = 'Pagination';

export default Pagination;
