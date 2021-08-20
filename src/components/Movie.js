/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FsLightbox from 'fslightbox-react';
import movieTrailer from 'movie-trailer';

// Config

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components

import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import MoviesVid from './MovieVid';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// Image

import NoImage from '../images/no_image.jpg';

// eslint-disable-next-line arrow-body-style
const Movie = () => {
  const [toggler, setToggler] = useState(false);
  const { movieId } = useParams(); // the name here of movieId is set as we name it like that in the app.js
  const { state: movie, loading, error } = useMovieFetch(movieId); // Using the sintax state:movie changes the name of the variable when destructuring
  const [trailer, setTrailer] = useState(null);
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
      {/* <>
        <button type="button" onClick={() => setToggler(!toggler)}>
          Toggle Lightbox
        </button>

        <FsLightbox
          toggler={toggler}
          sources={[
            <iframe
              key="1"
              id="iframe"
              title="yes"
              src="https://www.youtube.com/watch?v=aYSy8guUUV0"
              width="1920px"
              height="1080px"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />,

            <iframe
              src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieId}`}
              width="1920px"
              height="1080px"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              key="3"
              title="nono"
            />,

          ]}
        />
      </> */}
      {/* <a href={trailer} target="_blank" rel="noreferrer"><button type="button">trailer</button></a> */}
      <MoviesVid movieId={movieId} />
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
