import React from 'react';
import classNames from 'classnames';

import './Button.css';

export const Button = ({children, className, type = 'button' }) => {
  return (
    <button className={classNames('button',className)} type={type}>
      {children}
    </button>
  );
};
