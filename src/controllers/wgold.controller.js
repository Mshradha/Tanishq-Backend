const express = require("express")

const router = express.Router()

const Wgold = require("../models/wgold.model")

router.get("",async(req,res)=>{
    const wgold = await Wgold.find().lean().exec()
    res.status(200).send(wgold)
})

module.exports=router