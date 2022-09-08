import React from 'react';
import { Button } from 'react-bootstrap';
export default function RoomTableItem({ room, deleteRoom }) {
  console.log(room);
  return (
    <>
      <tr>
        <td>
          <img
            src={`http://localhost:3003/backend/uploads/${room.RoomImage}`}
            width="100px"
            height="80px"
          />
        </td>
        <td>{room.RoomName}</td>
        <td>{room.RoomType}</td>
        <td>{room.RoomFloor}</td>
        <td>{room.RoomStatus}</td>
        <td>
          <Button
            className="btn btn-danger"
            onClick={() => {
              deleteRoom(room._id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
