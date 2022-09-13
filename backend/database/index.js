const mongoose = require('mongoose');

const connectDatabase = async () => {
  const databaseInfo = await mongoose.connect(
    'mongodb+srv://user1:k9xknI2yB7lWJktT@cluster0.f39rrq4.mongodb.net/bookingapp?retryWrites=true&w=majority'
  );
  console.log(`  database is working on ${databaseInfo.connection.host}`);
};
module.exports = connectDatabase;
