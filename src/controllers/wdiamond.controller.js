const express = require("express")

const router = express.Router()

const Wdiamond = require("../models/wdiamond.model")

router.get("",async(req,res)=>{
    const wdiamond = await Wdiamond.find().lean().exec()
    res.status(200).send(wdiamond)
})

module.exports=router