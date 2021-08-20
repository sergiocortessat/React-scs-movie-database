/* eslint-disable react/prop-types */
import React from 'react';
import { Wrapper, IFrame } from './MovieVid.styles';

const MoviesVid = ({ movieId }) => (
  <Wrapper>
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
    <IFrame id="iframe" title="yes" src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieId}`} allowFullScreen frameBorder="1" />
  </Wrapper>
);

export default MoviesVid;
