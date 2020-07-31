import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Title({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.number,
  ]).isRequired,
};

export default Title;
