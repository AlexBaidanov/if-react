import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Button } from '../../Button';
import { Search } from '../../../Icons';
import { searchUrl } from '../../../services/constants';
import './Form.css';

export function Form({ setResults }) {
  const [search, setSearch] = useState('');
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  async function hotelSearch() {
    const response = await fetch(`${searchUrl}=${search}`);
    const data = await response.json();
    setResults(data);
  }

  return (
    <form
      className="header__form"
      onSubmit={(event) => {
        event.preventDefault();
        hotelSearch();
      }}
    >
      <Search className="form__destination-search" />
      <input
        className="form__destination form__text"
        type="text"
        name="hotel"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="form__date-block">
        <input
          className="form__date form__check-in form__text _mobile text__center"
          type="text"
          name="calendar"
        />
        <label className="form__label form__text check-in" htmlFor="check-in">
          Check in
        </label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          wrapperClassName="datePicker"
          dateFormat="dd/MM/yyyy"
          className="form__date form__first-date form__text text__center"
          id="check-in"
        />
        <label className="form__label dash" htmlFor="date">
          —
        </label>
        <input
          className="form__date form__dash form__text form__desktop text__center"
          type="text"
          name="calendar"
          id="date"
          value="—"
        />
        <input
          className="form__date form__check-out form__text _mobile text__center"
          type="text"
          name="calendar"
        />
        <label className="form__label form__text check-out" htmlFor="check-out">
          Check out
        </label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          wrapperClassName="datePicker"
          dateFormat="dd/MM/yyyy"
          className="form__date form__last-date form__text "
          id="check-out"
        />
      </div>
      <div className="form__booking-block">
        <input
          className="form__booking form__adults form__text _mobile text__center"
          type="text"
          value="Adults"
        />
        <input
          className="form__booking form__adults-num form__text text__center"
          type="text"
          value="0"
        />
        <input
          className="form__date form__dash-left form__text form__desktop text__center"
          type="text"
          name="calendar"
          value="—"
        />
        <div className="form__border-left">
          <div className="form__border-gray"></div>
        </div>
        <input
          className="form__booking form__children form__text _mobile text__center"
          type="text"
          value="Children"
        />
        <input
          className="form__booking form__children-num form__text text__center"
          type="text"
          value="0"
        />
        <input
          className="form__date form__dash-right form__text form__desktop text__center"
          type="text"
          name="calendar"
          value="—"
        />
        <div className="form__border-right">
          <div className="form__border-gray"></div>
        </div>
        <input
          className="form__booking form__room form__text _mobile text__center"
          type="text"
          value="Room"
        />
        <input
          className="form__booking form__room-num form__text text__center"
          type="text"
          value="0"
        />
      </div>
      <Button className="form__button" type="submit">
        Search
      </Button>
    </form>
  );
}
