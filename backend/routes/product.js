const express=require("express")
const router=express.Router()
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")

const{getAllProduct,getProductById,createProduct,updateProduct,deleteProduct}=require("../controllers/product")
router.get("/",getAllProduct)

router.get("/:id",getProductById)

router.post("/",authentication,authorization(["Admin"]),createProduct)

router.put("/:id",authentication,authorization(["Admin"]),updateProduct)

router.delete("/:id",authentication,authorization(["Admin"]),deleteProduct)
module.exports=router