const mongoose=require("mongoose")


const productSchema=new mongoose.Schema({
name:{type:String},
description:{type:String,enum:["mask","cleanser","moisturizer","sunblock","serum"]},
ingredients:[{type:String}],
price:{type:Number},
skinTypeSuitable:[{type:String}],
image:{type:String}
})

module.exports=mongoose.model("Product",productSchema)


