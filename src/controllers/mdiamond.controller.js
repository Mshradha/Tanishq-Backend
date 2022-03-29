const express = require("express");

const router = express.Router();

const Mdiamond = require("../models/mdiamond.model");

router.get("", async (req, res) => {
  try {
    const mdiamond = await Mdiamond.find().lean().exec();
    res.status(200).send(mdiamond);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
