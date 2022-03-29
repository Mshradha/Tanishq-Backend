const express = require("express")

const router = express.Router()

const Mgold = require("../models/mgold.model")

router.get("",async(req,res)=>{
    const mgold = await Mgold.find().lean().exec()
    res.status(200).send(mgold)
})

module.exports=router