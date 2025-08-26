const mongoose=require("mongoose")
const { create } = require("./productsSchema")


const paymentSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    products:[
        {productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product"}},
        {quantity:{type:Number,required:true,default:1}}

    ],
    totalPrice:{type:Number},
    paymentMethod:{
        type:String,
        enum:["Cash on Delivery","Credit Card","PayPal"],
        required:true
    },
    status:{type:String, enum:["Pending","Paid","Shiped","Delivery"],required:true},
    createdAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model("Payment",paymentSchema)