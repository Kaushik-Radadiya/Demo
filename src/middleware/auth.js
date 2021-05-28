const jwt = require("jsonwebtoken");
const RegisterModel = require("../models/register.model");
const { responseGenerate } = require("../helper/helper");

const auth = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const verifyUser = jwt.verify(token, process.env.SECERET_KEY);
    const user = await RegisterModel.findOne({ _id: verifyUser._id });
    req.token = token;
    req.user = user;

    next();
  } catch (e) {
    res.json(responseGenerate(false ,"Error is : " + e.message, 500));
  }
};

module.exports = auth;
