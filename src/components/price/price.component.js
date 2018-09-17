import React from 'react';
import styled from 'react-emotion';
import { colors } from '../../layouts/variables';
import Grid from '../grid/grid.component';

class Price extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (

      <Grid.Container>
        <Grid.Row>
          <Grid.Cell>
            <Grid.Inner>
              <PriceCase>

                <Title>1 time</Title>
                <Description>
                  <span className="text_box headline_box">Individuel terapi</span><br /><br />
                  <PriceText>600 <span>KR</span></PriceText>
                </Description>
                <Book href="mailto:ditte@psykoterapeutditte.dk" target="_blank" className="qbutton  big_large_full_width move_icon qbutton_with_icon">Book tid</Book>


              </PriceCase>
            </Grid.Inner>
          </Grid.Cell>
        </Grid.Row>
      </Grid.Container>
    )
  }
}


const PriceCase = styled('div')`
  width: 400px;
  max-width: 90%;
  text-align: center;
  margin: 0 auto;
  color: #000;
  line-height: 1.8;
`;

const Title = styled('div')`
    width: auto;
    letter-spacing: 2px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    background-color: #ffffff;
    padding: 16px 27px;
`
const Description = styled('div')`
    background-color: #F7F7F7;
    padding: 32px;
`
const PriceText = styled('div')`
  font-size: 48px;
  line-height: 48px;

  span{
    font-size: 16px;
  }
`;
const Book = styled('a')`
  display: block;
  color: #ffffff;
  border-color: ${colors.primary};
  background-color: ${colors.primary};
  padding: 16px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
`

export default Price;