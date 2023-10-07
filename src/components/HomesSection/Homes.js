import React from 'react';

import { data } from './config';

export const Homes = () => (
  <div className="homes__variants description">
    {data.map(() => (
      <figure key={data.id} className="homes__item _mobile">
        <img className="homes__image" src={data.imageUrl} alt={data.name} />
        <figcaption className="homes__description">{data.name}</figcaption>
        <figcaption className="homes__place">
          {data.city}, {data.country}
        </figcaption>
      </figure>
    ))}
  </div>
);
