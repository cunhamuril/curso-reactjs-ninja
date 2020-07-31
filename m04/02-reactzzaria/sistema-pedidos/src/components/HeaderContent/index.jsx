import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

function HeaderContent({ children, ...props }) {
  return (
    <Grid container direction="column" alignItems="center" {...props}>
      {children}
    </Grid>
  );
}

HeaderContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderContent;
