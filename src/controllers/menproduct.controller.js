const express = require("express");

const router = express.Router();

const Menproduct = require("../models/menproduct.model");

router.get("", async (req, res) => {
  try {
    const menproduct = await Menproduct.find().lean().exec();
    res.status(200).send(menproduct);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
