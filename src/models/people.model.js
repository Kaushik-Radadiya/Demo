const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  city: {
    type: String,
  },
  number: {
    type: String,
  },
});

const peoples = mongoose.model("People", PeopleSchema);
module.exports = peoples;
