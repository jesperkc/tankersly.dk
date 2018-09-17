import React from 'react';
import styled from 'react-emotion';

export const padding = '100px';

const Spacer = styled('div')`
  height: 100px;
`;

const Container = styled('div')`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;
const Row = styled('div')`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  position: relative;
  background-color: ${props => props.backgroundColor};
  flex-wrap: wrap;
  &:after{
    display: table;
    content: "";
  }
  /* margin: 0 30px;
  
  @media(min-width: 600px){
    margin: 5vw;
  }
  @media(min-width: 1220px){ */
    margin: 0 auto;
  /* } */
`;
const Cell = styled('div')`
  flex: 1;
  min-width: 500px;
  /* justify-content: center;
  align-items: center; */
  position: relative;
  background-color: ${props => props.backgroundColor};
`;
const Inner = styled('div')`
  &:not(:empty){
    padding: ${padding};
  }
`;
const CellFluid = styled('div')`
  flex: 0 1 0;
  position: relative;
`;
const ImageCell = (props) => (
  <StyledImageCell>
    {props.children}
  </StyledImageCell>
)
const StyledImageCell = styled('div')`
  flex: 1;
  min-width: 500px;
  min-height: 500px;
  @media(max-width: 999px){
    min-height: 100vw;
  }
  background-color: ${props => props.backgroundColor};
`;

const Grid = {
  Container,
  Row,
  Cell,
  ImageCell,
  CellFluid,
  Inner,
  Spacer
}
export default Grid;
