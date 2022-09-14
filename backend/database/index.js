const mongoose = require('mongoose');

const connectDatabase = async () => {
  const databaseInfo = await mongoose.connect(
    'mongodb://localhost:27017/bookingapp'
  );
  console.log(`  database is working on ${databaseInfo.connection.host}`);
};
module.exports = connectDatabase;
