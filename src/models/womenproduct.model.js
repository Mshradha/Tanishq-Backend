const mongoose = require("mongoose")

const womenproductSchema = new mongoose.Schema(
    {
    	image_link:{type:String,required:true},
    	category:{type:String,required:true},
    	name: {type:String,required:true},
   	    price: {type:String,required:true},
    	rating:{type:String,required:true},
	    type:{type:String,required:true}
    },
)

module.exports = mongoose.model("womenproduct",womenproductSchema)