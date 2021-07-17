/* eslint-disable react/prop-types */
import React from 'react';
import { Content, Wrapper } from './Grid.styles';

// styles

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export default Grid;
