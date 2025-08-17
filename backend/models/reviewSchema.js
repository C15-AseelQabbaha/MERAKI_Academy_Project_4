const mongoose=require("mongoose")


const reviewSchema=new mongoose.Schema({
userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product",require:true},
rating:{type:Number,min:1,max:5,require:true},
Comment:{type:String}

})

module.exports=mongoose.model("Review",reviewSchema)