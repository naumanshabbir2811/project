import React from 'react';
import { Button } from 'react-bootstrap';
import AddHotelRoomModal from '../../models/AddHotelRoomModal';
import { AiOutlineSearch } from 'react-icons/ai';
import CustomerTable from './CustomerTable';
// import RoomNavigation from './RoomNavigation';
import './guests.css';
export default function Rooms() {
  const [addHotelModalShow, setAddHotelModalShow] = React.useState(false);
  const handleShowHotelAddModal = () => {
    setAddHotelModalShow(true);
  };
  return (
    <>
      <div className="guestsContainer">
        <div
          className="header_guests"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}
        >
          <h4 style={{}}>Guest List</h4>
          <input
            style={{ width: '50%' }}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <AiOutlineSearch />
          <Button onClick={handleShowHotelAddModal}>Add Guests</Button>
          <AddHotelRoomModal
            addHotelModalShow={addHotelModalShow}
            setAddHotelModalShow={setAddHotelModalShow}
          />
        </div>
        {/* <RoomNavigation /> */}
        <CustomerTable />
      </div>
    </>
  );
}
