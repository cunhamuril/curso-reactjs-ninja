import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Divider as MaterialDivider,
  CardActionArea as MaterialCardActionArea,
  Grid,
  Typography,
} from '@material-ui/core';

export const Divider = styled(MaterialDivider)`
  margin: 20px 0;

  width: 100%;
`;

export const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link,
})`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-width: 250px;

  padding: 20px 0;
`;

export const Pizza = styled.div`
  position: relative;

  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
  border-radius: 50%;

  border: 1px solid #ccc;
  background-color: #fff;

  &::before,
  &::after {
    position: absolute;

    content: '';
    background: #ccc;
    transform: rotate(45deg);
  }

  &::before {
    width: 160px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 160px;
  }
`;

export const PizzaText = styled(Typography).attrs({
  variant: 'h5',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  background: #fff;
`;

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2,
})`
  padding: 20px;
`;

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center',
})``;
