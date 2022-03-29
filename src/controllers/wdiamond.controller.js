const express = require("express");

const router = express.Router();

const Wdiamond = require("../models/wdiamond.model");

router.get("", async (req, res) => {
  try {
    const wdiamond = await Wdiamond.find().lean().exec();
    res.status(200).send(wdiamond);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
