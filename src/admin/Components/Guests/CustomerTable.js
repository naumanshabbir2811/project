import React from 'react';
import Table from 'react-bootstrap/Table';
import CustomerTableItem from './CustomerTableItem';

function RoomsTable() {
  const [customerData, setCustomerData] = React.useState([]);

  const getRooms = async () => {
    try {
      const api_url = 'http://localhost:3003/customer';
      const responce = await fetch(api_url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          auth_token: localStorage.getItem('auth_token'),
        },
      });
      const json = await responce.json();
      console.log(json);
      setCustomerData(json);
      console.log(customerData);
    } catch (error) {
      console.log('Error fetching data');
    }
  };
  React.useEffect(() => {
    getRooms();
  }, []);

  const deleteCustomer = async id => {
    const api_url = `http://localhost:3003/admin/room/id=${id}`;
    try {
      await fetch(api_url, {
        method: 'DELETE',
      })
        .then(responce => {
          console.log(responce.status, responce.json);
        })
        .then(customerData => setCustomerData(customerData));
    } catch (error) {
      console.log(error);
    }
    setCustomerData(customerData);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Guest Picture</th>
          <th>First Name</th>
          <th>Last Type</th>
          <th>Cnic Number</th>
          <th>Phone Number</th>
          <th>Address Status</th>
        </tr>
      </thead>
      <tbody>
        {customerData &&
          customerData.map(customer => {
            return (
              <CustomerTableItem
                customer={customer}
                deleteCustomer={deleteCustomer}
              />
            );
          })}
      </tbody>
    </Table>
  );
}

export default RoomsTable;
