const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

const httpStatus = require("http-status");

const authenticate = require("../middlewares/authenticate");

router.get("/:userId", authenticate, async (req, res) => {
  try {
    const { userId } = req.params;
    const { _id } = req.userID;
    if (!userId || !_id || userId !== _id.toString()) {
      throw new Error("Invalid or no userId found");
    }
    const cart = await Cart.findOne({ userID: _id }).lean().exec();
    res.status(httpStatus.OK).send(cart);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: error.message });
  }
});

router.post("", authenticate, async (req, res) => {
  try {
    let nCart;
    const { _id } = req.userID;
    const { userId, cartItem } = req.body;
    if (_id.toString() !== userId) {
      throw new Error("Unauthorised access to cart");
    }
    nCart = await Cart.findOne({ userID: _id });
    if (!nCart) {
      nCart = new Cart({ userID: _id });
    } else {
      let isItemPresent = false;
      for (var i = 0; i < nCart.cart.length; i++) {
        if (cartItem._id === nCart.cart[i]._id) {
          isItemPresent = true;
          break;
        }
      }
      if (isItemPresent) {
        throw new Error("Item already present in cart");
      }
    }
    nCart.cart.push(cartItem);
    await nCart.save();
    res.status(httpStatus.OK).send(nCart);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({ message: error.message });
  }
});

router.delete("", authenticate, async (req, res) => {
  try {
    const { _id } = req.userID;
    const { userId, cartId } = req.body;
    if (userId !== _id.toString()) {
      throw new Error("Unauthorised access to cart");
    }
    const nCart = await Cart.findOne({ userID: _id });
    if (!nCart) {
      throw new Error("User does have a cart");
    }
    let isItemPresentAt = -1;
    for (var i = 0; i < nCart.cart.length; i++) {
      if (cartId === nCart.cart[i]._id.toString()) {
        isItemPresentAt = i;
        break;
      }
    }
    if (isItemPresentAt !== -1) {
      nCart.cart.splice(isItemPresentAt, 1);
      await nCart.save();
    } else {
      throw new Error("No Items to Delete in User cart");
    }
    res.status(httpStatus.OK).send(nCart);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send({ message: error.message });
  }
});

module.exports = router;
