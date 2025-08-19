const express=require("express")
const router=express.Router()
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")

const{getAllProduct,g}=require("../controllers/product")
router.get("/",ge)

router.get("/:id",getUserById)

router.post("/",authentication,authorization(["Admin","user"]),createArticle)

router.put("/:id",authentication,authorization(["Admin","user"]),updateArticle)

router.delete("/:id",authentication,authorization(["Admin"]),deleteArticle)
module.exports=router