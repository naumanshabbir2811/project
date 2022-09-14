import React from 'react';
import './customerSignup.css';
import hotelImage from '../assests/images/hotelimage.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AlertBar from '../extras/AlertBar';

export default function CustomerSignUp() {
  const navigate = useNavigate();
  const [image, setImage] = React.useState({});
  const [showAlert, setShowAlert] = React.useState(false);
  const handleImageChange = event => {
    setImage(event.target.files[0]);
  };
  const [addCustomer, setAddCustomer] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cnic: '',
    phone: '',
    address: '',
  });
  const handleChangeInput = e => {
    setAddCustomer({ ...addCustomer, [e.target.name]: e.target.value });
  };
  const handleSignup = async e => {
    e.preventDefault();
    console.log(addCustomer);
    // const obj = {
    //   firstName: addCustomer.firstName,
    //   lastName: addCustomer.lastName,
    //   email: addCustomer.email,
    //   password: addCustomer.password,
    //   cnic: addCustomer.cnic,
    //   phone: addCustomer.phone,
    //   address: addCustomer.address,
    // };
    const formData = new FormData();
    formData.append('firstName', addCustomer.firstName);
    formData.append('lastName', addCustomer.lastName);
    formData.append('email', addCustomer.email);
    formData.append('password', addCustomer.password);
    formData.append('cnic', addCustomer.cnic);
    formData.append('phone', addCustomer.phone);
    formData.append('address', addCustomer.address);
    formData.append('avatar', image);
    const url = 'http://localhost:3003/customer/signup';
    const responce = await fetch(url, {
      method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(obj),
      body: formData,
    });
    const json = await responce.json();
    console.log(responce);

    if (!responce.ok) {
      // alert('User Does Not created');
      setShowAlert(true);
      return;
    }
    navigate('/');
  };
  return (
    <>
      <AlertBar showAlert={showAlert} setShowAlert={setShowAlert} />
      <div className="customerSignupContainer">
        <div className="customerSignupContainerinner">
          <div className="row">
            <div className="col-4">
              <div className="customerContainerLeft">
                <img src={hotelImage} alt="" width="400px" height="500px" />
              </div>
            </div>
            <div className="col-6" style={{ marginLeft: '70px' }}>
              <div className="customerContainerRight">
                <div className="formContainer">
                  <h2>SignUp</h2>
                  <Form>
                    <div className="row">
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicFirstName"
                        >
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter first Name"
                            name="firstName"
                            value={addCustomer.firstName}
                            onChange={handleChangeInput}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicLastName"
                        >
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={addCustomer.lastName}
                            onChange={handleChangeInput}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={addCustomer.email}
                            onChange={handleChangeInput}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={addCustomer.password}
                            onChange={handleChangeInput}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Form.Group className="mb-3" controlId="formBasiccnic">
                          <Form.Label>Cnic</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Cnic"
                            name="cnic"
                            value={addCustomer.cnic}
                            onChange={handleChangeInput}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="enter phone number"
                            name="phone"
                            value={addCustomer.phone}
                            onChange={handleChangeInput}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicaddress"
                        >
                          <Form.Label>Home address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter address"
                            name="address"
                            value={addCustomer.address}
                            onChange={handleChangeInput}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <label>Select Image</label>
                        <form
                          action="/customer/signup"
                          method="post"
                          enctype="multipart/form-data"
                        >
                          <input
                            type="file"
                            name="avatar"
                            onChange={handleImageChange}
                          />
                        </form>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSignup}
                    >
                      SignUp
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
