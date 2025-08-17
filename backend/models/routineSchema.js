const mongoose=require("mongoose")

const routineSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    morning:[{type:mongoose.Schema.Types.ObjectId,ref:"Product"}],
    evening:[{type:mongoose.Schema.Types.ObjectId,ref:"Product"}],
})

module.exports=mongoose.model("Routine",routineSchema)