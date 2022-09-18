import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import { format } from 'date-fns';
import './list.css';
import { DateRange } from 'react-date-range';
import SearchItem from '../SearchItem';
import { useHotelDataContext } from '../../context/HotelsContext';
export default function List() {
  const location = useLocation();
  const [hotelData, { handleChangeHotelData }] = useHotelDataContext();
  const [searchedData, setSearchedData] = React.useState(null);
  const [destination, setDestination] = React.useState(
    location.state.destination
  );
  const [date, setDate] = React.useState(location.state.date);
  const [options, setOptions] = React.useState(location.state.options);
  const [openDate, setOpendate] = React.useState(false);
  const getHotelByCity = async () => {
    const url = `http://localhost:3003/admin/hotels?city=${destination}`;
    const responce = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await responce.json();
    // console.log(json);
    setSearchedData(json);

    // handleChangeHotelData(json);
  };
  console.log(searchedData);
  React.useEffect(() => {
    getHotelByCity();
  }, []);
  // console.log(hotelData);
  React.useEffect(() => {
    handleChangeHotelData(searchedData);
  });
  // console.log(hotelData);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrap">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check In Date</label>
              <span onClick={() => setOpendate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="text" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="text" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {searchedData &&
              searchedData.map(search => {
                return <SearchItem search={search} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
