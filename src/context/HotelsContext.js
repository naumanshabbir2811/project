import React from 'react';

const CreateHotelStateContext = React.createContext(undefined);
const CreateHotelDispatchContext = React.createContext(undefined);

const HotelContextProvider = ({ children }) => {
  const [hotelData, setHotelData] = React.useState([]);

  const handleChangeHotelData = hotelData => {
    setHotelData(hotelData);
  };

  return (
    <CreateHotelStateContext.Provider value={hotelData}>
      <CreateHotelDispatchContext.Provider value={{ handleChangeHotelData }}>
        {children}
      </CreateHotelDispatchContext.Provider>
    </CreateHotelStateContext.Provider>
  );
};

const useCreateHotelStateContext = () => {
  const context = React.useContext(CreateHotelStateContext);
  if (context === undefined) {
    throw Error('CreateHotelStateContext');
  }
  return context;
};

const useCreateHotelDispatchContext = () => {
  const context = React.useContext(CreateHotelDispatchContext);
  if (context === undefined) {
    throw Error('CreateHotelDispatchContext');
  }
  return context;
};

const useHotelDataContext = () => {
  return [useCreateHotelStateContext(), useCreateHotelDispatchContext()];
};

export { HotelContextProvider, useHotelDataContext };
