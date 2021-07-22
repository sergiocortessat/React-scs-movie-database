/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
import React from 'react';
import { useParams } from 'react-router-dom';

// Config

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components

import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

// Hook
import { useMovieFetch } from '../Hooks/useMovieFetch';
// Image

import NoImage from '../images/no_image.jpg';

// eslint-disable-next-line arrow-body-style
const Movie = () => {
  const { movieId } = useParams(); // the name here of movieId is set as we name it like that in the app.js
  const { state: movie, loading, error } = useMovieFetch(movieId); // Using the sintax state:movie changes the name of the variable when destructuring

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong.. </div>;
  return  (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
          actor.profile_path
            ?          `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            :          NoImage
        }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
