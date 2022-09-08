import React from 'react';
import Table from 'react-bootstrap/Table';
import RoomTableItem from './RoomTableItem';

function RoomsTable() {
  const [roomData, setRoomData] = React.useState([]);

  const getRooms = async () => {
    try {
      const api_url = 'http://localhost:3003/admin/room/allrooms';
      const responce = await fetch(api_url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await responce.json();
      // console.log(json);
      setRoomData(json);
      console.log(roomData);
    } catch (error) {
      console.log('Error fetching data');
    }
  };
  React.useEffect(() => {
    getRooms();
  }, []);

  const deleteRoom = async id => {
    const api_url = `http://localhost:3003/admin/room/id=${id}`;
    try {
      await fetch(api_url, {
        method: 'DELETE',
      })
        .then(responce => {
          console.log(responce.status, responce.json);
        })
        .then(roomData => setRoomData(roomData));
    } catch (error) {
      console.log(error);
    }
    // setRoomData(roomData);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Room Picture</th>
          <th>Room Name</th>
          <th>Room Type</th>
          <th>Room Floor</th>
          <th>Room Status</th>
        </tr>
      </thead>
      <tbody>
        {roomData &&
          roomData.map(room => {
            return <RoomTableItem room={room} deleteRoom={deleteRoom} />;
          })}
      </tbody>
    </Table>
  );
}

export default RoomsTable;
