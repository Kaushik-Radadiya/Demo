const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Token = require("../models/token.model")

const Schema = mongoose.Schema;
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
  tokens: [{ type: Schema.Types.ObjectId, ref: "Token" }],
});

RegisterSchema.methods.generateAuthToken = async function () {
  try {
    // eslint-disable-next-line no-undef
    const token = jwt.sign({ _id: this._id }, process.env.SECERET_KEY, {
      expiresIn: "1d"
    });

    const tokenNew = new Token({
      token: token,
      user: this._id    
    });
    
    this.tokens.push(tokenNew);
    await this.save()
    await tokenNew.save();
    return token;
  }
  catch (e) {
    console.log(e);
  }
};

const register = mongoose.model("register", RegisterSchema);

module.exports = register;
