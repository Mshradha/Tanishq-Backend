const express = require("express")

const router = express.Router()

const Wplatinum = require("../models/wplatinum.model")

router.get("",async(req,res)=>{
    const wplatinum = await Wplatinum.find().lean().exec()
    res.status(200).send(wplatinum)
})

module.exports=router