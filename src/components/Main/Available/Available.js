import React from 'react';
import classNames from 'classnames';

export const Available = ({ className, hotels }) => (
  <div className={classNames('description', className)}>
    {hotels.map((item) => (
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
