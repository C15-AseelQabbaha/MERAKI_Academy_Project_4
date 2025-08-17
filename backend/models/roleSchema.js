const mongoose=require("mongoose")

const roleSchema=new mongoose.Schema({
    name:{
        type:String,
        enum:["Admin","User","Editor"],
        require:true,
        unique:true
    },
    description:{type:String}
})


module.exports=mongoose.model("Role",roleSchema)