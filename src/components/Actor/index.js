import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Image } from './Actor.style';

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

// define proptypes

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Actor;
