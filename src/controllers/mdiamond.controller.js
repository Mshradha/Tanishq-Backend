const express = require("express")

const router = express.Router()

const Mdiamond = require("../models/mdiamond.model")

router.get("",async(req,res)=>{
    const mdiamond = await Mdiamond.find().lean().exec()
    res.status(200).send(mdiamond)
})

module.exports=router