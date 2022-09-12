import React from 'react';

const CreateUserStateAuthContext = React.createContext(undefined);
const CreateUserDispatchAuthContext = React.createContext(undefined);

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleChangeAuthContext = isAuthenticated => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <CreateUserStateAuthContext.Provider value={isAuthenticated}>
      <CreateUserDispatchAuthContext.Provider
        value={{ handleChangeAuthContext }}
      >
        {children}
      </CreateUserDispatchAuthContext.Provider>
    </CreateUserStateAuthContext.Provider>
  );
};

const useCreateUserStateAuthContext = () => {
  const context = React.useContext(CreateUserStateAuthContext);
  if (context === undefined) {
    throw Error('CreateUserStateAuthContext');
  }
  return context;
};

const useCreateUserDispatchAuthContext = () => {
  const context = React.useContext(CreateUserDispatchAuthContext);
  if (context === undefined) {
    throw Error('CreateUserDispatchAuthContext');
  }
  return context;
};

const useUserAuthContext = () => {
  return [useCreateUserStateAuthContext(), useCreateUserDispatchAuthContext()];
};

export { AuthContextProvider, useUserAuthContext };
