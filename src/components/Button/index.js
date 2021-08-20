import React from 'react';
import PropTypes from 'prop-types';

// Style

import { Wrapper } from './Button.styles';

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Button;
