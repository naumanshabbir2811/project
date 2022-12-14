import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCar,
  faMountainCity,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
export default function Header({ type }) {
  const [openDateModel, setOpenDateModal] = React.useState(false);
  const [destination, setDestination] = React.useState('');
  const [openOptions, setOpenOptions] = React.useState(false);
  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = React.useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };
  return (
    <>
      <div className="header">
        <div
          className={
            type === 'list' ? 'headerContainer listMode' : 'headerContainer'
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faMountainCity} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxis</span>
            </div>
          </div>
          {type !== 'list' && (
            <>
              <h1 className="headerTitle">
                Stay with Us to have Life time Memories
              </h1>
              <p className="headerDesc">
                Get Rewards on your travels with Us and have Instant Savings of
                20% with a free Customer Account
              </p>

              {localStorage.getItem('customer_token') ? (
                <label
                  style={{
                    border: '1px solid Yellow',
                    padding: '5px',
                    borderRadius: '10px',
                  }}
                >
                  Book Please / You are Already Signed In
                </label>
              ) : (
                <button className="headerBtn">Sign in / Register </button>
              )}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going  "
                    className="headerSearchInput"
                    onChange={e => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenDateModal(!openDateModel)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, 'MM/dd/yyyy')}} to ${format(
                    date[0].endDate,
                    'MM/dd/yyyy'
                  )}}`}</span>
                  {openDateModel && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={item => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                  ;
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >
                    {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                  </span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption('adult', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption('adult', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children < 1}
                            className="optionCounterButton"
                            onClick={() => handleOption('children', 'd')}
                          >
                            {' '}
                            -{' '}
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption('children', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption('room', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption('room', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
