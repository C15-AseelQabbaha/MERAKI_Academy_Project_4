const mongoose=require("mongoose")

const roleSchema=new mongoose.Schema({
  role:{type:String,require:true,unique:true},
  permissions:[{type:String}]
})


module.exports=mongoose.model("Role",roleSchema)