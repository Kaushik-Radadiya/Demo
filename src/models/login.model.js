const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("login", LoginSchema);
