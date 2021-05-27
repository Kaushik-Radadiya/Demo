const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  mobileNo: {
    type: Number,
  },
});

const register = mongoose.model("register", RegisterSchema);

module.exports = register;
