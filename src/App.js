import './App.css';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Admin from './admin';
import SignInAdminRoute from './routes/SignInRouteAdmin';
import SignInAdmin from './auth/SignInAdmin';
import Rooms from './admin/Components/Rooms/';
import Dashboard from './admin/Components/Dashboard';
import SideBar from './admin/Components/SIdeBar';
import Bookings from './admin/Components/Bookings';
import RoomDetails from './components/RoomDetails.js';
import Guests from './admin/Components/Guests/index';
import Home from './components/Home';
import List from './components/List';
import Hotel from './components/Hotel';
import CustomerSignUp from './auth/CustomerSignUp';
import CustomerSignIn from './auth/CustomerSignIn';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
        <Route path="/customer/signin" element={<CustomerSignIn />} />
        {/* <Route path="room/details" element={<RoomDetails />} /> */}
        <Route
          path="/admin"
          element={
            <SignInAdminRoute>
              <Admin />
            </SignInAdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="guests" element={<Guests />} />
        </Route>

        <Route path="/admin/signin" element={<SignInAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
