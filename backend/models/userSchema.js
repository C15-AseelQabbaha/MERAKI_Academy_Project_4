const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({

name:{type:String},
emaill:{type:String,require:true,uniqe:true},
password:{type:String,require:true,uniqe:true},
age:{type:Number},
skinType:{type:String,enum:["oily","dry","normal","sensetive","combination"]},
createdAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model("User",userSchema)








