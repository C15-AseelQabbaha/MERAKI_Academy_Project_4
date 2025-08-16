const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
id:objectId,
name:{type:string},
emaill:{type:string,require:true,uniqe:true},
password:{type:string,require:true,uniqe:true},
age:{type:number},
skinType:{type:string}
})

module.exports=mongoose.model("User",userSchema)










skinType:string //(oily,dry,normal,sensetive)