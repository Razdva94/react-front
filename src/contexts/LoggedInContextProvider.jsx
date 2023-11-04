import React, { useState } from 'react';
import {LoggedInContext} from './LoggedInContext';

const LoggedInContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
