import React from 'react';

import { data } from './config';

export const Homes = () => (
  <div className="homes__variants description">
    {data.slice(0,4).map((item) => (
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
