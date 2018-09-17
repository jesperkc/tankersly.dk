import React from 'react';
import styled from 'react-emotion';
import { ReactComponent as LogoSVG } from '../../static/logo.svg';
import { logo_css } from './logo.sticky.component';

class Logo extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (
      <LogoWrapper className={logo_css} color={this.props.color}>
        <LogoSVG />
      </LogoWrapper>
    )
  }
}

const LogoWrapper = styled('div')`
  width: 100%;
  path, rect{
    fill: ${props => props.color};
  }
`;

export default Logo;