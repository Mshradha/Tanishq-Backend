const express = require("express");

const router = express.Router();

const Wplatinum = require("../models/wplatinum.model");

router.get("", async (req, res) => {
  try {
    const wplatinum = await Wplatinum.find().lean().exec();
    res.status(200).send(wplatinum);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
