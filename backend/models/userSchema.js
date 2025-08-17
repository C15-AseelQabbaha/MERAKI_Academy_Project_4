const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({

name:{type:String},
emaill:{type:String,require:true,uniqe:true},
password:{type:String,require:true},
age:{type:Number},
skinType:{type:String,enum:["oily","dry","normal","sensetive","combination"]},
role:{type:mongoose.Schema.Types.ObjectId,ref:"Role"},
createdAt:{type:Date,default:Date.now}
})

userSchema.pre("save",function(result){
    this.email=this.email.toLowerCase()
    this.password=this.password
})






module.exports=mongoose.model("User",userSchema)








