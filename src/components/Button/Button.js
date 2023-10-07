import React from 'react';
import classNames from 'classnames';

import './Button.css';

export const Button = ({ className, type = 'button' }) => {
  return (
    <button className={classNames(className)} type={type}>
      <div className="homes__arrow--ellipse"></div>
    </button>
  );
};
