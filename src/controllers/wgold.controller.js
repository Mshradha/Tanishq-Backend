const express = require("express");

const router = express.Router();

const Wgold = require("../models/wgold.model");

router.get("", async (req, res) => {
  try {
    const wgold = await Wgold.find().lean().exec();
    res.status(200).send(wgold);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
