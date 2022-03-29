const express = require("express")

const router = express.Router()

const Mplatinum = require("../models/mplatinum.model")

router.get("",async(req,res)=>{
    const mplatinum = await Mplatinum.find().lean().exec()
    res.status(200).send(mplatinum)
})

module.exports=router