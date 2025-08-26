const mongoose=require("mongoose")

const bcrypt=require("bcryptjs")
const userSchema=new mongoose.Schema({

name:{type:String},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
age:{type:Number},
skinType:{type:String,enum:["oily","dry","normal","sensetive","combination"]},
role:{type:mongoose.Schema.Types.ObjectId,ref:"Role"},
createdAt:{type:Date,default:Date.now}
})

userSchema.pre("save",async function(next){
    this.email=this.email.toLowerCase()
    if (this.isModified("password")) {  this.password=await bcrypt.hash(this.password,10)}
  
    
})






module.exports=mongoose.model("User",userSchema)








