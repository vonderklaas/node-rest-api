const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeScheme = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Employee', employeeScheme);
