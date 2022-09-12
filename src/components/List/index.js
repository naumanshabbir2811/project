import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import { format } from 'date-fns';
import './list.css';
import { DateRange } from 'react-date-range';
export default function List() {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = React.useState(
    location.state.destination
  );
  const [date, setDate] = React.useState(location.state.date);
  const [options, setOptions] = React.useState(location.state.options);
  const [openDate, setOpendate] = React.useState(false);
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
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </>
  );
}
