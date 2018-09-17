import React from 'react';
import styled from 'react-emotion';
import Grid from '../grid/grid.component';
import Image from '../image/image.component';

class Footer extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (

      <Grid.Container>
        <Grid.Row>
          <Grid.ImageCell backgroundColor={'#eee'} minHeight={'600px'}>
            <a href="https://www.google.com/maps/place/Istedgade+78,+1650+København/" target="_blank">
              <Image image={'/map.png'}></Image>
            </a>
          </Grid.ImageCell>

        </Grid.Row>
        <Grid.Row>
          <Grid.Cell>

            <Grid.Inner>
              <Grid.Row>
                <ContactBox><img src="/peter-tankersly.jpg" style={{ height: '140px' }} /></ContactBox>
                <ContactBox>
                  Peter James Tankersly<br />
                  <a href="mailto:peter@tankersly.dk">peter@tankersly.dk</a><br />
                  12 23 34 45
                </ContactBox>
                <ContactBox>
                  Istedgade 78<br />
                  1650 København V
                </ContactBox>


              </Grid.Row>

            </Grid.Inner>

          </Grid.Cell>

        </Grid.Row>
      </Grid.Container>
    )
  }
}

const ContactBox = styled('div')`
  margin-right: 50px;
`;


export default Footer;