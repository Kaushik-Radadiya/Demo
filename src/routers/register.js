const express = require("express");
const { messages } = require("../constant/constant");
const { responseGenerate } = require("../helper/helper");

const router = express.Router();
const RegisterModel = require("../models/register.model");

const register = async (req, res) => {
  try {
    const data = await RegisterModel.findOne({ email: req.body.email });

    if (data) {
      res.json(responseGenerate(true, messages.EMAIL_EXISTS));
    } else {
      const registerData = new RegisterModel();
      registerData.firstName = req.body.firstName;
      registerData.lastName = req.body.lastName;
      registerData.email = req.body.email;
      registerData.password = req.body.password;
      registerData.mobileNo = req.body.mobileNo;

      registerData.save();

      res.json(responseGenerate(false, messages.REGISTER_SUCCESS));
    }
  } catch (error) {
    res.json(responseGenerate(true), `Error :${error}`);
  }
};

const login = async (req, res) => {
  try {
    const data = await RegisterModel.findOne({ email: req.body.email });

    if (data && data.password === req.body.password) {
      
      const token = await data.generateAuthToken()
      const user = await RegisterModel.findOne({ email: req.body.email }, {password:0,tokens:0});
      res.json(responseGenerate(false, messages.LOGIN_SUCCESS , 200 , {user , token}));
    } else {
      res.json(responseGenerate(true, messages.LOGIN_FAIL));
    }
  } catch (error) {
    res.json(responseGenerate(true), `Error :${error}`);
  }
};

router.post("/register", register);
router.post("/login", login);

module.exports = router;
