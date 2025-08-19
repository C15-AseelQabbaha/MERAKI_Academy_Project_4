const express=require("express")
const router=express.Router()
const roleRouter=require("../controllers/role")
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")
const {createRole,getAllRole}=require("../controllers/role")



router.get("/",authentication,authorization(["Admin"]),getAllRole)
router.post("/",authentication,authorization(["Admin"]),createRole)


module.exports=router