import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import firebase from '../services/firebase';

export const AuthContext = createContext();

function Auth({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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
    <AuthContext.Provider
      value={{
        login,
        logout,
        isUserLoggedIn,
        setIsUserLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
