import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />

      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

// Proptypes
Thumb.propTypes = {
  image: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
  clickable: PropTypes.bool.isRequired,
};

export default Thumb;
