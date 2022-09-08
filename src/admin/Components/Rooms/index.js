import React from 'react';
import { Button } from 'react-bootstrap';
import AddHotelRoomModal from '../../models/AddHotelRoomModal';
import { AiOutlineSearch } from 'react-icons/ai';
import RoomsTable from './RoomsTable';
import RoomNavigation from './RoomNavigation';
export default function Rooms() {
  const [addHotelModalShow, setAddHotelModalShow] = React.useState(false);
  const handleShowHotelAddModal = () => {
    setAddHotelModalShow(true);
  };
  return (
    <>
      <div
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}
      >
        <h4 style={{}}>Room List</h4>
        <input
          style={{ width: '50%' }}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <AiOutlineSearch />
        <Button onClick={handleShowHotelAddModal}>Add Room</Button>
        <AddHotelRoomModal
          addHotelModalShow={addHotelModalShow}
          setAddHotelModalShow={setAddHotelModalShow}
        />
      </div>
      <RoomNavigation />
      <RoomsTable />
    </>
  );
}
