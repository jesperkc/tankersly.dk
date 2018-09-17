import React from 'react';
import styled from 'react-emotion';
import Grid from '../grid/grid.component';

class Quote extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (

      <Grid.Container>
        <Grid.Row>
          <Grid.Cell>
            <Grid.Inner>
              <QuoteCase>
                <h1>“{this.props.quote}”</h1>
              </QuoteCase>
            </Grid.Inner>
          </Grid.Cell>
        </Grid.Row>
      </Grid.Container>
    )
  }
}


const QuoteCase = styled('div')`
  max-width: 70%;
  text-align: center;
  margin: 0 auto;
  line-height: 1.8;
`;

export default Quote;