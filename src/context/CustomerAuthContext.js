import React from 'react';

const CreateCustomerStateContext = React.createContext(undefined);
const CreateCustomerDispatchContext = React.createContext(undefined);

const CustomerAuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const handleChangeAuthContext = isAuthenticated => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <CreateCustomerStateContext.Provider value={isAuthenticated}>
      <CreateCustomerDispatchContext.Provider
        value={{ handleChangeAuthContext }}
      >
        {children}
      </CreateCustomerDispatchContext.Provider>
    </CreateCustomerStateContext.Provider>
  );
};
const useCreateCustomerStateAuthContext = () => {
  const context = React.useContext(CreateCustomerStateContext);
  if (context === undefined) {
    throw Error('CreateCustomerStateContext');
  }
  return context;
};

const useCreateCustomerDispatchAuthContext = () => {
  const context = React.useContext(CreateCustomerDispatchContext);
  if (context === undefined) {
    throw Error('CreateCustomerDispatchContext');
  }
  return context;
};

const useCustomerAuthContext = () => {
  return [
    useCreateCustomerStateAuthContext(),
    useCreateCustomerDispatchAuthContext(),
  ];
};

export { CustomerAuthContextProvider, useCustomerAuthContext };
