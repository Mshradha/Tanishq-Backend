const express = require("express")

const router = express.Router()

const Womenproduct = require("../models/womenproduct.model")

router.get("",async(req,res)=>{
    const womenproduct = await Womenproduct.find().lean().exec()
    res.status(200).send(womenproduct)
})

module.exports=router