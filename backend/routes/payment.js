const express=require("express")
const paymentRouter = express.Router()
const{getAllOrder,createOrder}=require("../controllers/payment")
paymentRouter.get("/orders",getAllOrder)

paymentRouter.post("/newOrder",getAllOrder)

module.exports=paymentRouter