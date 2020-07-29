import React, { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';

import { AuthContext } from '../../contexts/Auth';

import pizzaSizes from '../../mock/pizzaSizes';

import {
  Divider,
  PaperPizza,
  Pizza,
  PizzaText,
  PizzasGrid,
  Title,
} from './styles';

function singularOrPlural(amount, singular, plural) {
  return amount === 1 ? singular : plural;
}

function ChoosePizzaSize() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Grid container direction="column" align="center">
        <Title variant="h3" gutterBottom>
          O que vai ser hoje, {user.firstName}?
        </Title>

        <Title variant="h4" gutterBottom>
          Escolha o tamanho da pizza:
        </Title>
      </Grid>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <PaperPizza>
              <Pizza>
                <PizzaText>{pizza.size}cm</PizzaText>
              </Pizza>

              <Divider />

              <Typography variant="h5">{pizza.name}</Typography>
              <Typography>
                {pizza.slices} fatias, {pizza.flavours}{' '}
                {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
              </Typography>
            </PaperPizza>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  );
}

export default ChoosePizzaSize;
