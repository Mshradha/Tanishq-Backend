const mongoose = require("mongoose");

const Product = require("./product.model");

const cartSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    cart: {
      required: true,
      type: Array,
      of: Product,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
