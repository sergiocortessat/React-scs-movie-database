/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components

import HeroImage from './HeroImage';

// Hook

import { useHomeFetch } from '../Hooks/useHomeFetch';

// Image

import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);
  return (
    <>
      <HeroImage />
      ;
    </>
  );
};

export default Home;
