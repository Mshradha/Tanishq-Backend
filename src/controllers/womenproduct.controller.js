const express = require("express");

const router = express.Router();

const Womenproduct = require("../models/womenproduct.model");

router.get("", async (req, res) => {
  try {
    const womenproduct = await Womenproduct.find().lean().exec();
    res.status(200).send(womenproduct);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
