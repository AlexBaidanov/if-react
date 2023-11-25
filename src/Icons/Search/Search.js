import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ className }) => (
  <svg className={className}>
    <use href="#search" />
  </svg>
);

Search.propTypes = {
  className: PropTypes.string,
};
