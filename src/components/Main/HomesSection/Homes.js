import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { getPosts } from '../../../services/posts';

export const Homes = ({ className }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setData(data));
  }, []);

  return (
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
};
