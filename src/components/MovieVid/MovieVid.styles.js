/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 margin: 50px 0 30px 0;
}`;

export const IFrame = styled.iframe`
 height: 800px;
 width: 90%;
 border: 0.5px solid grey;
 border-radius: 5px;

 @media screen and (max-width: 768px) {
     height: 400px;
}`;
