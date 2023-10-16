import React from 'react';
import classNames from 'classnames';
import { data } from './config';

export const Homes = ({ className }) => (
  <div className={classNames('description', className)}>
    {data.slice(0, 4).map((item) => (
      <figure key={item.id} className="homes__item _mobile">
        <img className="homes__image" src={item.imageUrl} alt={item.name} />
        <figcaption className="homes__description">{item.name}</figcaption>
        <figcaption className="homes__place">
          {item.city}, {item.country}
        </figcaption>
      </figure>
    ))}
  </div>
);
