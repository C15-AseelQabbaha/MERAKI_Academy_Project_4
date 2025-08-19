const express=require("express")
const router=express.Router()
const userRouter=require("../controllers/user")
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")

const{getAllUser,getUserById,updateUser,deleteUser}=require("../controllers/user")
router.get("/",authentication,authorization(["Admin"]),getAllUser)

router.get("/:id",authentication,authorization(["Admin","user"]),getUserById)

router.put("/:id",authentication,authorization(["Admin"]),updateUser)

router.delete("/:id",authentication,authorization(["Admin"]),deleteUser)

module.exports=router