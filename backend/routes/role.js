const express=require("express")
const router=express.Router()
const roleRouter=require("../controllers/role")
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")


router.get("/",authentication,authorization(["Admin",]),roleRouter.getAllRole)
router.post("/",authentication,authorization(["Admin",]),roleRouter.createRole)
router.put("/:id",authentication,authorization(["Admin"]),roleRouter.up)
router.delete("/:id",authentication,authorization(["Admin"]),roleRouter.del)

module.exports=router