import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ChoosePizzaFlavours({ location }) {
  console.log(location);

  return <Container>pizza</Container>;
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ChoosePizzaFlavours;
