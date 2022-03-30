const express = require("express");
const { contentType, type } = require("express/lib/response");

const router = express.Router();

const Product = require("../models/product.model");

router.get("", async (req, res) => {
  console.log("hello");
  try {
    if (req.query.type&&req.query.category) {
      const t = req.query.type;
      const c = req.query.category;
      const qctproduct = await Product.find({ category: c, type: t })
        .lean()
        .exec();
      console.log(qctproduct);
      return res.status(200).send(qctproduct);
    } else if (req.query.category) {
      const c = req.query.category;
      const qcproduct = await Product.find({ category: c }).lean().exec();
      console.log(qcproduct);
      return res.status(200).send(qcproduct);
    }   
     if (req.query.type) {
        const t = req.query.type;
        const qtproduct = await Product.find({ type: t }).lean().exec();
        console.log(qtproduct);
        return res.status(200).send(qtproduct);
      } 
    else {
      console.log("helloooooooooooooooo");
      const product = await Product.find().lean().exec();
      return res.status(200).send(product);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
