const express = require("express")

const router = express.Router()

const Menproduct = require("../models/menproduct.model")

router.get("",async(req,res)=>{
    const menproduct = await Menproduct.find().lean().exec()
    res.status(200).send(menproduct)
})

module.exports=router