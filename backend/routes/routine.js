const express=require("express")
const router=express.Router()
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")

const{getMyRoutine,createRoutine,updateRoutine,deleteRoutine}=require("../controllers/routine")
router.get("/",authentication,authorization(["Admin","user"]),getMyRoutine)

router.post("/",authentication,authorization(["Admin","user"]),createRoutine)

router.put("/:id",authentication,authorization(["Admin","user"]),updateRoutine)

router.delete("/:id",authentication,authorization(["Admin","user"]),deleteRoutine)


module.exports=router