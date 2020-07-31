import React, { useContext } from 'react';
import { Typography, Grid, Card } from '@material-ui/core';

import { AuthContext } from '../../contexts/Auth';
import { paths } from '../../routes';
import { singularOrPlural } from '../../utils';

import pizzaSizes from '../../mock/pizzaSizes';

import { Title, HeaderContent } from '../../components';

import {
  Divider,
  Pizza,
  PizzaText,
  PizzasGrid,
  CardActionArea,
} from './styles';

function ChoosePizzaSize() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <HeaderContent>
        <Title variant="h3">O que vai ser hoje, {user.firstName}?</Title>

        <Title variant="h4">Escolha o tamanho da pizza:</Title>
      </HeaderContent>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardActionArea
                to={{
                  pathname: paths.choosePizzaFlavours,
                  state: pizza,
                }}
              >
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />

                <Typography variant="h5">{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {pizza.flavours + ' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  );
}

export default ChoosePizzaSize;
