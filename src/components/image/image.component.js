import React from 'react';
import styled from 'react-emotion';
import { Parallax } from 'react-parallax';

const Image = ({ image }) => (
  <ImageWrapper>
    <Parallax
      blur={0}
      bgImage={image}
      strength={300}
    >
    </Parallax>
  </ImageWrapper>
)

const ImageWrapper = styled('div')`
  width: 100%;
  height: 100%;
  background-color: pink;

  .react-parallax{
    width: 100%;
    height: 100%;
    .react-parallax-content{
      height: 100%;
    }
  }
`;

export default Image;