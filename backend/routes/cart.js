const express=require("express")
const cartRouter = express.Router()
const {addToCart}=require("../controllers/cart")



cartRouter.post("/cart/add", addToCart);
module.exports=cartRouter