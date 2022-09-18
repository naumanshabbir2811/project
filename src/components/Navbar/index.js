import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useCustomerAuthContext } from '../../context/CustomerAuthContext';
// import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  const [isAuthenticated, { handleChangeAuthContext }] =
    useCustomerAuthContext();
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/customer/signup');
  };
  const handleLogin = () => {
    navigate('/customer/signin');
  };
  const [userData, setUserData] = React.useState(null);
  const getUserData = async () => {
    try {
      const url = 'http://localhost:3003/customer/me';
      const responce = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          customer_token: localStorage.getItem('customer_token'),
        },
      });
      const customer_token = localStorage.getItem('customer_token');
      if (!customer_token) {
        return;
      }
      const json = await responce.json();
      setUserData(json);
      // const decoded = jwt.decode(customer_token);
      // console.log(decoded);
      // console.log(userData);
      // console.log(json);
    } catch (error) {
      console.log('error in fetching');
    }
  };
  React.useEffect(() => {
    getUserData();
  }, []);

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('customer_token');

    handleChangeAuthContext(false);
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link
          to="/"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <span className="logo">StayWithUs</span>
        </Link>
        {userData ? (
          <>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {userData.firstName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          // <label>{userData.firstName}</label>
          <div className="navButton">
            <button className="navButton" onClick={handleRegister}>
              Register
            </button>
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
