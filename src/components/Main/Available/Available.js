import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Available = ({ className, hotels }) => (
  <div className={classNames('description', className)}>
    {hotels.slice(0, 4).map((item) => (
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

export default Available;

Available.propTypes = {
  className: PropTypes.string,
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
  ),
};
