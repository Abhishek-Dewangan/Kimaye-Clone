const mongoose = require('mongoose');
require('dotenv').config();
const DB = process.env.MONGODB_URL;

const connection = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => {
    console.log('mongodb connection error', err);
  });

module.exports = connection;
