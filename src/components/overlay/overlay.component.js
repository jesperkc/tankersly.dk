import React from 'react';
import styled from 'react-emotion';
import Footer from '../footer/footer.component';

class Overlay extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (<OverlayWrapper>
      <Footer color={this.props.color} />
    </OverlayWrapper>)
  }
}


const OverlayWrapper = styled('div')`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100%;
    clip: rect(0, auto, auto, 0);

`;

export default Overlay;