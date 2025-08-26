const paymentModel=require("../models/paymentSchema")



const createOrder=async(req,res)=>{
    try{
const{userId, products,totalPrice,  paymentMethod}=req.body

const newOrder=new paymentModel({
    userId, products,totalPrice,  paymentMethod
})

 await newOrder.save()
res.status(201).json({
    message:"order successfully",
    order:newOrder
})



    }catch(err){
        res.status(500).json({
    message:err.message
    })
}
}



const getAllOrder=async(req,res)=>{
try{
const order= await paymentModel.find().populate("userId").populate("products.productId")

res.json(order)


}catch(err){
      res.status(500).json({
    message:err.message
    })
}



}
module.exports={createOrder,getAllOrder}