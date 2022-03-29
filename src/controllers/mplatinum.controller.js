const express = require("express");

const router = express.Router();

const Mplatinum = require("../models/mplatinum.model");

router.get("", async (req, res) => {
  try {
    const mplatinum = await Mplatinum.find().lean().exec();
    res.status(200).send(mplatinum);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
