import React, { memo, useState } from 'react';

import './FormFilter.css';
import PropTypes from 'prop-types';

export const FormFilter = memo(function FormFilter({
  filterValues,
  setFilterValues,
}) {
  const [adults, setAdults] = useState(filterValues.adults);
  const [children, setChildren] = useState(filterValues.children);
  const [rooms, setRooms] = useState(filterValues.rooms);
  const [childrenAges, setChildrenAges] = useState([]);

  const min = 0;
  const max = 30;

  const handleIncrease = (value, setValue, max, filterKey) => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      setFilterValues({ ...filterValues, [filterKey]: value + 1 });
    }
  };

  const handleDecrease = (value, setValue, min, filterKey) => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      setFilterValues({ ...filterValues, [filterKey]: value - 1 });
    }
  };

  const handleIncreaseChildren = () => {
    if (adults > 0) {
      handleIncrease(children, setChildren, 10, 'children');
      setChildrenAges([...childrenAges, 0]);
    }
  };

  const handleDecreaseChildren = () => {
    handleDecrease(children, setChildren, 0, 'children');
    setChildrenAges(childrenAges.slice(0, -1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div onSubmit={handleSubmit}>
      <div className="form__filter">
        <div className="filter__block">
          <p className="filter__description">Adults</p>
          <button
            className={`filter__button ${
              adults === min ? '_disable' : '_active'
            }`}
            onClick={() => handleDecrease(adults, setAdults, 1, 'adults')}
          >
            -
          </button>
          <p className="filter__description _count">{adults}</p>
          <button
            className={`filter__button ${
              adults === max ? '_disable' : '_active'
            }`}
            onClick={() => handleIncrease(adults, setAdults, 30, 'adults')}
          >
            +
          </button>
        </div>
        <div className="filter__block">
          <p className="filter__description">Children</p>
          <button
            className={`filter__button ${
              children === min ? '_disable' : '_active'
            }`}
            onClick={handleDecreaseChildren}
          >
            -
          </button>
          <p className="filter__description _count">{children}</p>
          <button
            className={`filter__button ${
              children === 10 ? '_disable' : '_active'
            }`}
            onClick={handleIncreaseChildren}
          >
            +
          </button>
        </div>
        <div className="filter__block">
          <p className="filter__description">Rooms</p>
          <button
            className={`filter__button ${
              rooms === min ? '_disable' : '_active'
            }`}
            onClick={() => handleDecrease(rooms, setRooms, 1, 'rooms')}
          >
            -
          </button>
          <p className="filter__description _count">{rooms}</p>
          <button
            className={`filter__button ${
              rooms === max ? '_disable' : '_active'
            }`}
            onClick={() => handleIncrease(rooms, setRooms, 30, 'rooms')}
          >
            +
          </button>
        </div>
        {children > 0 && (
          <div className="form__wrapper">
            <p className="filter__subtitle">
              What is the age of the child you’re travelling with?
            </p>
            {Array.from({ length: children }, (_, i) => (
              <select key={i} className="filter__select">
                {[...Array(18).keys()].map((i) => (
                  <option key={i} value={i} className="filter__option">
                    {i} years old
                  </option>
                ))}
              </select>
            ))}
          </div>
        )}{' '}
      </div>
    </div>
  );
});
FormFilter.propTypes = {
  filterValues: PropTypes.object.isRequired,
  setFilterValues: PropTypes.func.isRequired,
};
