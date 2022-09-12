const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const connectDatabase = require('./database');
const path = require('path');
const authRoutes = require('./routes/auth');
connectDatabase();
const roomRoutes = require('./routes/room');
const customerRoutes = require('./routes/customer');
const bookingRoutes = require('./routes/booking');
const hotelRoutes = require('./routes/Hotels');
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
var moment = require('moment');
moment().format('MMM Do YY');
app.use('/auth', authRoutes);
app.use('/admin', roomRoutes);
app.use('/', customerRoutes);
app.use('/', bookingRoutes);
app.use('/admin', hotelRoutes);
app.use('/backend/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3003, () => {
  console.log(`server started at 3003`);
});
