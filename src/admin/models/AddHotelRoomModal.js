import React from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
export default function AddHotelRoomModal({
  addHotelModalShow,
  setAddHotelModalShow,
}) {
  const [addRoom, setAddRoom] = React.useState({
    roomName: '',
    roomType: '',
    roomFloor: 0,
    roomFacilities: '',
    roomStatus: '',
  });
  const [image, setImage] = React.useState({});
  const handleImageChange = event => {
    setImage(event.target.files[0]);
  };

  const handleInputChange = event => {
    setAddRoom({ ...addRoom, [event.target.name]: event.target.value });
  };

  const handleAddRoom = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('RoomName', addRoom.roomName);
    formData.append('RoomType', addRoom.roomType);
    formData.append('filename', image);
    formData.append('RoomFloor', addRoom.roomFloor);
    formData.append('RoomFacilites', addRoom.roomFacilities);
    formData.append('RoomStatus', addRoom.roomStatus);

    const url = 'http://localhost:3003/admin/room/addroom';

    const responce = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const json = await responce.json();
    console.log(json);
  };
  const handleCloseModal = () => {
    setAddHotelModalShow(false);
  };
  return (
    <Modal
      show={addHotelModalShow}
      onHide={handleCloseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Room Name">
              <Form.Control
                type="text"
                placeholder="Room Name"
                name="roomName"
                value={addRoom.roomName}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select
                aria-label="Floating label select example"
                name="roomType"
                value={addRoom.roomType}
                onChange={handleInputChange}
              >
                <option>Room Type</option>
                <option value="deluxe">Deluxe</option>
                <option value="super deluxe">Super Deluxe</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2 my-4">
          <Col md>
            <FloatingLabel label="select image" controlId="floatingInputGrid">
              <Form.Control
                type="file"
                name="avatar"
                onChange={handleImageChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Room Floor">
              <Form.Control
                type="number"
                placeholder="Room Floor"
                name="roomFloor"
                value={addRoom.roomFloor}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2 ">
          <Col md>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Room Facilities"
            >
              <Form.Control
                type="text"
                placeholder="Room facilities"
                name="roomFacilities"
                value={addRoom.roomFacilities}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select
                aria-label="Floating label select example"
                name="roomStatus"
                value={addRoom.roomStatus}
                onChange={handleInputChange}
              >
                <option>Room Status</option>
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Button onClick={handleAddRoom}>Add room</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
