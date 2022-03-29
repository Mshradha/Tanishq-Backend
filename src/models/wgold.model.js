const mongoose = require("mongoose")

const wgoldSchema = new mongoose.Schema(
    {
    	image_link:{type:String,required:true},
    	category:{type:String,required:true},
    	name: {type:String,required:true},
   	    price: {type:String,required:true},
    	rating:{type:String,required:true},
	    type:{type:String,required:true}
    },
)

module.exports = mongoose.model("wgold",wgoldSchema)