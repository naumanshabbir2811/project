import React from 'react';
import { Button } from 'react-bootstrap';
import Wave from 'react-wavify';
import { useNavigate } from 'react-router-dom';
import { useCustomerAuthContext } from '../context/CustomerAuthContext';
export default function CustomerSignIn() {
  const [isAuthenticated, { handleChangeAuthContext }] =
    useCustomerAuthContext();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordType, setPasswordType] = React.useState('password');
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [buttonShow, setButtonShow] = React.useState(true);
  const navigate = useNavigate();
  const handleCheckLogin = async e => {
    e.preventDefault();
    if (email === '') {
      setIsEmailValid(true);
      setButtonShow(true);
    }
    const url = 'http://localhost:3003/customer/signin';
    const responce = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await responce.json();
    console.log(json);
    if (!json.token) {
      return;
    }
    localStorage.setItem('customer_token', json.token);
    handleChangeAuthContext(true);
    console.log(isAuthenticated);
    navigate('/');
  };
  const handlePasswordChange = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }

    setPasswordType('password');
  };

  setTimeout(() => {
    setIsEmailValid(false);
  }, 2000);
  return (
    <div
      className="curve "
      style={{ backgroundColor: 'var(--primary-color)', height: '100vh' }}
    >
      <div className="foam d-flex justify-content-center text-center align-items-center">
        <form onSubmit="" style={{ marginTop: '5%', width: '30vw' }}>
          <h1 className="text-light">SignIn</h1>
          <p className="text-light">
            Sign In and Start Booking Your Hotel / Rooms
          </p>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={e => {
                if (e.target.value === '') {
                  setIsEmailValid(true);
                  setEmail(e.target.value);
                  setButtonShow(true);
                  return;
                }
                setButtonShow(false);
                setEmail(e.target.value);
                setIsEmailValid(false);
                console.log(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          {isEmailValid && (
            <label className="text-danger">Email address is required</label>
          )}
          <div className="form-floating">
            <input
              style={{ width: '100%' }}
              type={passwordType}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className=" d-flex " style={{ margin: '20px 0px' }}>
            <label className=" text-light" onClick={handlePasswordChange}>
              Show Password
            </label>
          </div>
          <div className="form-check d-flex " style={{ marginTop: '10px' }}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label text-light"
              htmlFor="flexRadioDefault1"
              style={{ marginLeft: '10px' }}
            >
              Remember ME
            </label>
            <label className="text-light " style={{ marginLeft: '120px' }}>
              Forget Password
            </label>
          </div>
          <Button
            className="btn btn-success"
            style={{ width: '100%', marginTop: '10px', padding: '10px' }}
            onClick={handleCheckLogin}
            disabled={buttonShow}
          >
            SignIn
          </Button>
        </form>
      </div>
      <Wave
        style={{ position: 'absolute', bottom: '40px' }}
        fill="#f79902"
        paused={false}
        options={{
          height: 60,
          amplitude: 60,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>
  );
}
