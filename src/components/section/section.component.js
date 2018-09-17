import React from 'react';
import styled from 'react-emotion';
import Grid from '../grid/grid.component';

class Section extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (<StyledSection id="Section" sectionBackgroundColor={this.props.sectionBackgroundColor} backgroundColor={this.props.backgroundColor}>
      {this.props.children}
    </StyledSection >)
  }
}


const StyledSection = styled('div')`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  position: relative;
  background-color: ${props => props.sectionBackgroundColor};
  clip: rect(0,auto,auto,0);

  ${Grid.Container}{
    background-color: ${props => props.backgroundColor};
  }
`;

export default Section;