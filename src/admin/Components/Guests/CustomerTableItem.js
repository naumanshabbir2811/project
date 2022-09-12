import React from 'react';
import { Button } from 'react-bootstrap';
export default function RoomTableItem({ customer, deleteCustomer }) {
  console.log(customer);

  return (
    <>
      <tr>
        <td>
          <img
            src={`http://localhost:3003/backend/uploads/${customer.avatar}`}
            width="100px"
            height="80px"
          />
        </td>
        <td>{customer.firstName}</td>
        <td>{customer.lastName}</td>
        <td>{customer.cnic}</td>
        {/* <td>
          {room.RoomNumber.map(RoomNumber => (
            <label>{RoomNumber.number}</label>
          ))}
        </td> */}
        <td>{customer.phone}</td>
        <td>{customer.address}</td>
        <td>
          <Button
            className="btn btn-danger"
            onClick={() => {
              deleteCustomer(customer._id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
