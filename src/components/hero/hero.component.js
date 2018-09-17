import React from 'react';
import styled, { css } from 'react-emotion';
import { ReactComponent as ScrollSVG } from '../../static/mouse-scroll.svg';

class Hero extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (
      <StyledCase>
        <Clipper>
          <ScrollSVG className={scroll_css} />
          <video autoPlay={true} loop={true} muted={true}>
            <source src="/Waterfall-11161.mp4" />
          </video>
        </Clipper>
      </StyledCase>
    )
  }
}

const scroll_css = css`
position: fixed;
bottom: 30px;
left: 50%;
z-index: 1;
opacity: .5;
`;

const Clipper = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  clip: rect(0,auto,auto,0);
`;

const StyledCase = styled('div')`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  z-index: 10;
  img, video{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scaleX(-1);

    @media (min-aspect-ratio: 16/9) {
        height: 300%;
        /* top: -100%; */
    }

    @media (max-aspect-ratio: 16/9) {
        width: 300%;
        /* left: -100%; */
    }
  }
`;

export default Hero;