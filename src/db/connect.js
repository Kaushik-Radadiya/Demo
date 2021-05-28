const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connected Successfully");
    } else {
      console.log("Error", err);
    }
  }
);
