import { injectGlobal } from 'react-emotion';

injectGlobal`
/* @import url('https://unpkg.com/leaflet@1.3.4/dist/leaflet.css'); */
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Roboto');
  html, body, #root {
    /* width: 100%;
    height: 100%; */
    padding: 0;
    margin: 0; 
    font-family: 'Roboto', sans-serif;
    line-height: 1.8;
    font-size: 1rem;
    color: #46494e;
  }
  input, textarea, select, button{
    font-family: 'Roboto', sans-serif;
    line-height: 1.8;
    font-size: 1rem;
    color: #46494e;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Merriweather', serif;
    font-weight: normal;
    margin-top: 0;
  }

  * {
    box-sizing: border-box;
  }
  *:before {
    box-sizing: border-box;
  }
  *:after {
    box-sizing: border-box;
  }
  a{
    color: #46494e;
  }
`;