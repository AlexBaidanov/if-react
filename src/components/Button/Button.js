import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.css';

export const Button = ({ children, className, type = 'button' }) => {
  return (
    <button className={classNames('button', className)} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};
