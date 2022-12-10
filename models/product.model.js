const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  image_link: { type: String, required: true },
  category: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model("product", productSchema);
