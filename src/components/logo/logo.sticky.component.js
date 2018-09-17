import React from 'react';
import styled, { css, keyframes } from 'react-emotion';
import Sticky from 'react-sticky-el';
import { ReactComponent as LogoSVG } from '../../static/logo.svg';
import Grid, { padding } from '../grid/grid.component';

class LogoSticky extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (
      <LogoClipper>
        <LogoWrapper color={this.props.color}>
          <Sticky id="Sticky" stickyClassName={logo_css} className={logo_nonsticky_css}>
            <Grid.Container>
              <LogoSVG />
            </Grid.Container>
          </Sticky>
        </LogoWrapper>
      </LogoClipper>
    )
  }
}

const logo_nonsticky_css = css`
  font-size: 1px;
  transition: all .2s;
  svg{
    transition: all .2s;
    height: auto;
    width: 30vw;
    min-width: 300px;
    overflow: visible;
    margin: 20px 0 20px ${padding};
    rect{
      transition: width .1s;
    }
  }
`;

export const logo_css = css`
  font-size: 1px;
  /* border-bottom: 1px solid white; */
  transition: all .2s;
  svg{
    height: auto;
    width: 9vw !important;
    min-width: 90px !important;
    overflow: visible;
    margin: 20px 0 20px ${padding};

    rect{
      width: 0px;
    }
  }
`;

const LineAnim = keyframes`
  0%{
    width: 0px;
  }
  100%{
    width: 4000px;
  }
`

const LogoWrapper = styled('div')`
  position: absolute;
  top: 70vh;
  /* @media (orientation: portrait) {
    top: 41vh;
  } */

  
  width: 100%;
  path, rect{
      fill: ${props => props.color};
  }

  rect{
    /* width: 0;
    animation: ${LineAnim} 1s .5s forwards ease-in; */
  }
`;


const LogoClipper = styled('div')`
  position: absolute;
  width: 100%;
  height: 100vh;
  clip: rect(0,auto,auto,0);
  z-index: 20;
`;

export default LogoSticky;