const express = require("express");

const router = express.Router();

const Mgold = require("../models/mgold.model");

router.get("", async (req, res) => {
  try {
    const mgold = await Mgold.find().lean().exec();
    res.status(200).send(mgold);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
