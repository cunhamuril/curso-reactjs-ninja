import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, withStyles } from '@material-ui/core';

import { AuthContext } from '../../contexts/Auth';

import Header from '../../components/Header';

import {
  Content,
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

const pizzaSizes = [
  {
    id: 0,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1,
  },
  {
    id: 1,
    name: 'Média',
    size: 30,
    slices: 6,
    flavours: 2,
  },
  {
    id: 2,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3,
  },
];

/**
 * withStyles from Material UI
 */
const style = (theme) => ({
  main: theme.mixins.toolbar,
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

function Main() {
  const { user } = useContext(AuthContext);

  const userName = user.displayName.split(' ')[0];

  return (
    <>
      <Header />

      <Spacer />

      <Content>
        <Grid container direction="column" align="center">
          <Title variant="h3" gutterBottom>
            O que vai ser hoje, {userName}?
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
      </Content>
    </>
  );
}

Spacer.propTypes = {
  classes: PropTypes.object,
};

export default Main;
