const express = require("express");
const { messages } = require("../constant/constant");
const { responseGenerate } = require("../helper/helper");
const auth = require("../middleware/auth");

const register = require("../models/register.model");

const router = express.Router();
 const getList = (req, res) => {
  register.find((err, docs) => {
    if (!err) {
      res.json(responseGenerate(false, messages.FETCH_LIST_SUCCESS, 200, docs));
    } else {
      res.json(responseGenerate(true, messages.FETCH_LIST_ERROR));
    }
  });
};


router.post("/list", auth , getList)

module.exports = router;
