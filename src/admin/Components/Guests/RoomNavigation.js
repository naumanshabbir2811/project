import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
export default function RoomNavigation() {
  return (
    <div className="my-4 ">
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">All Room</Nav.Link>
            <Nav.Link href="#link">Available Room</Nav.Link>
            <Nav.Link href="#link">Booked Room Room</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
