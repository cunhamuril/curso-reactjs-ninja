import React, { useEffect, useState, useCallback } from 'react';
import { Grid, Button } from '@material-ui/core';
import firebase from '../../services/firebase';

import { Container, Logo, GitHubButton } from './styles';

function Login() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsUserLoggedIn(true);
        setUser(user);
      } else {
        setIsUserLoggedIn(false);
        setUser(null);
      }
    });
  }, []);

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(async () => {
    try {
      await firebase.auth().signOut();

      setIsUserLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <Container>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify="center">
          {isUserLoggedIn ? (
            <>
              <pre>{user?.displayName}</pre>
              <Button variant="contained" onClick={logout}>
                Sair
              </Button>
            </>
          ) : (
            <GitHubButton onClick={login}>Entrar com GitHub</GitHubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
