const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kaushik:kaushik@test.wtnqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connected Successfully");
    } else {
      console.log("Error", err);
    }
  }
);
