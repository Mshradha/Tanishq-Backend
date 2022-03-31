const express = require("express")

const Cart = require("../models/cart.model")

const router = express.Router()

const httpStatus = require("http-status")

router.post("",async(req,res)=>{
    try {
        const cart = await Cart.create(req.body)
        res.status(httpStatus.OK).send(cart);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
    }
   
})

module.exports=router