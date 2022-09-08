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
import Guests from './admin/Components/Guests';
import RoomDetails from './components/RoomDetails.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="room/details" element={<RoomDetails />} />
        <Route path="sidebar" element={<SideBar />}>
          <Route path="rooms" element={<Rooms />} />
        </Route>
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
