const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//token schema
const tokenSchema = new Schema({
    token: String,
    user: { type: Schema.Types.ObjectId, ref: "Admin" }
  });

const Token = new mongoose.model("Token", tokenSchema);

module.exports = Token;