import React from 'react';
import { Grid } from '@material-ui/core';

import { Container, Logo, GitHubButton } from './styles';

function Login() {
  return (
    <Container>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify="center">
          <GitHubButton>Entrar com GitHub</GitHubButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;