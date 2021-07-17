/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);

export default Thumb;
