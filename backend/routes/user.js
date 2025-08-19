const express=require("express")
const router=express.Router()
const userRouter=require("../controllers/user")
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")


router.get("/",authentication,authorization(["Admin"]),userRouter.getAllUser)

router.get("/:id",authentication,authorization(["Admin","user"]),userRouter.getUserById)

router.post("/",userRouter.crea)