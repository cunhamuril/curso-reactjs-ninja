import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { paths } from '../../routes';
import { singularOrPlural } from '../../utils';

import { Title, HeaderContent } from '../../components';

// import { Container } from './styles';

function ChoosePizzaFlavours({ location }) {
  if (!location.state) {
    return <Redirect to={paths.home} />;
  }

  const { flavours } = location.state;

  return (
    <>
      <HeaderContent>
        <Title variant="h4">
          Escolha até {flavours}{' '}
          {singularOrPlural(flavours, 'sabor', 'sabores')}:
        </Title>
      </HeaderContent>
    </>
  );
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ChoosePizzaFlavours;
