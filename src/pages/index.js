import React from 'react';
import styled from 'react-emotion';
import Footer from '../components/footer/footer.component';
import Grid, { padding } from '../components/grid/grid.component';
import Hero from '../components/hero/hero.component';
import Image from '../components/image/image.component';
import Logo from '../components/logo/logo.component';
import LogoSticky from '../components/logo/logo.sticky.component';
import Price from '../components/price/price.component';
import Quote from '../components/quote/quote.component';
import Section from '../components/section/section.component';
import { colors } from '../layouts/variables';

const IndexPage = () => (
  <div>
    <Section>
      <LogoSticky color={'#fff'} />
      <Hero></Hero>
    </Section>
    <Section backgroundColor={'#fff'}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Cell>
            <Grid.Inner>
              <h1>Hvorfor gå i psykoterapi?</h1>
              <p>Nogle mennesker søger psykoterapi fordi de står i en aktuel livskrise som fx skilsmisse, utroskab, problemer i parforholdet, arbejdsløshed eller sorg. Andre har en oplevelse af at sidde fast i deres liv, føler sig ensomme, har svært ved at finde meningen i deres liv eller føler sig generelt utilfredse med deres liv. Andre går i terapi fordi de ønsker at udvikle sig selv.
<br /><br />
                Du behøver altså ikke at have et akut problem eller bekymringer for at gå i terapi. Alle typer af problemer er velkomne, og der er ikke noget, der er for stort eller for småt til terapi.
<br /><br />
                For mange kan det være givende at tale med en person, som de ikke har et venskabeligt eller familiært forhold til, for at få et nyt perspektiv på tingene.
<br /><br />
                Psykoterapien kan altså hjælpe dig med at komme styrket igennem de problemer, du oplever i din hverdag. Jeg vil gøre mit bedste for at støtte dig der, hvor du er.</p>
            </Grid.Inner>
          </Grid.Cell>
          <Grid.Cell></Grid.Cell>
        </Grid.Row>
      </Grid.Container>
    </Section>
    <Section backgroundColor={'#f1f3f5'}>
      <Grid.Container>
        <Grid.Row>
          <Grid.ImageCell backgroundColor={'#eee'}>
            <Image image={'/photo-1493030299203-515cf57a840e.jpeg'}></Image>
          </Grid.ImageCell>
          <Grid.Cell>
            <Grid.Inner>
              <h1>Hvad er psykoterapi?</h1>
              <p>
                Psykoterapi er en samtale, hvor din livssituation er omdrejningspunktet for samtalen. I en session vil jeg spørge ind til dine følelser, tanker og kropslige fornemmelser undervejs i samtalen. Det er med til at hjælpe dig til at se en sammenhæng mellem dine tanker, følelser og handlinger, hvilket kan være med til at give dig en større følelse af handlefrihed i dit liv. Du kan gennem terapien blive klogere på dig selv, dine relationer og dine handlemønstre.
            <br /><br />
                I terapien arbejder jeg inden for den oplevelsesorienterede, eksistentielle psykoterapi. Det indebærer, at jeg som terapeut er en ligeværdig sparringspartner, som ikke er en ekspert på dine vegne eller analyserer og tolker på dit liv. Jeg vil møde dig fordomsfrit og sammen med dig undersøge, både hvad der er svært, og hvad der fungerer i dit liv. Det er et fortroligt rum, hvor det du deler bliver mellem dig og mig.
            </p>
            </Grid.Inner>
          </Grid.Cell>
        </Grid.Row>
      </Grid.Container>
    </Section>
    <Section backgroundColor={'#fff'}>
      <Quote quote={'Jeg vil møde dig fordomsfrit og sammen med dig undersøge, både hvad der er svært, og hvad der fungerer i dit liv.'} />
    </Section>
    <Section sectionBackgroundColor={'#f1f3f5'}>
      <Price />
    </Section>
    <Section backgroundColor={'#fff'}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Cell></Grid.Cell>
          <Grid.Cell>
            <Grid.Inner>
              <h1>Hvad er psykoterapi?</h1>
              <p>
                Psykoterapi er en samtale, hvor din livssituation er omdrejningspunktet for samtalen. I en session vil jeg spørge ind til dine følelser, tanker og kropslige fornemmelser undervejs i samtalen. Det er med til at hjælpe dig til at se en sammenhæng mellem dine tanker, følelser og handlinger, hvilket kan være med til at give dig en større følelse af handlefrihed i dit liv. Du kan gennem terapien blive klogere på dig selv, dine relationer og dine handlemønstre.
            <br /><br />
                I terapien arbejder jeg inden for den oplevelsesorienterede, eksistentielle psykoterapi. Det indebærer, at jeg som terapeut er en ligeværdig sparringspartner, som ikke er en ekspert på dine vegne eller analyserer og tolker på dit liv. Jeg vil møde dig fordomsfrit og sammen med dig undersøge, både hvad der er svært, og hvad der fungerer i dit liv. Det er et fortroligt rum, hvor det du deler bliver mellem dig og mig.
            </p>
            </Grid.Inner>
          </Grid.Cell>
        </Grid.Row>
      </Grid.Container>
    </Section>
    <Grid.Spacer />
    <Section backgroundColor={'#fff'}>
      <Footer />
    </Section>
    <Menu>
      <Grid.Container>
        <Grid.Row>
          <Logo color={'#46494e'} />
          <Book href="mailto:book@tankersly.dk">Book tid</Book>
        </Grid.Row>
      </Grid.Container>


    </Menu>
  </div>
)


const Menu = styled('div')`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
`;


const Book = styled('a')`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${padding};
  background-color: ${colors.primary};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: .9rem;
  padding: 5px 13px;
  color: #fff;
  border: 0;
`;




export default IndexPage
