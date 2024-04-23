const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect("mongodb+srv://2210030423:kusumitha@cluster0.w4oazvi.mongodb.net/noteapp?retryWrites=true&w=majority", /*{ useNewUrlParser: true, useUnifiedTopology: true }*/)
  .then(() => {
    console.log('Database is connected');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

module.exports = mongoose.connection;