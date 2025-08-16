const mongoose=require("mongoose")


const productSchema=new mongoose.Schema({
id:,
name:{type:String},
description:{type:string},
ingredients:[{type:string}],
price:{type:number},
image:{type:string}

})

module.exports=mongoose.model("Product",productSchema)


