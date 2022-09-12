import React from 'react';
import { Button } from 'react-bootstrap';
import AddHotelRoomModal from '../../models/AddHotelRoomModal';
import { AiOutlineSearch } from 'react-icons/ai';
import RoomsTable from './RoomsTable';
import RoomNavigation from './RoomNavigation';
import './room.css';
export default function Rooms() {
  const [addHotelModalShow, setAddHotelModalShow] = React.useState(false);
  const handleShowHotelAddModal = () => {
    setAddHotelModalShow(true);
  };
  return (
    <>
      <div className="roomContainer">
        <h4 style={{}}>Room List</h4>
        <div className="header_booking">
          <input
            // style={{ width: '50%' }}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <AiOutlineSearch style={{ width: '60px', height: '40px' }} />
          <Button onClick={handleShowHotelAddModal}>Add Room</Button>
        </div>
        <AddHotelRoomModal
          addHotelModalShow={addHotelModalShow}
          setAddHotelModalShow={setAddHotelModalShow}
        />
        <RoomNavigation />
        <RoomsTable />
      </div>
    </>
  );
}
