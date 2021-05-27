const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/Demo",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connected Successfully");
    } else {
      console.log("Error", err);
    }
  },
);
