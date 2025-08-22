const express = require("express")
const router = express.Router()
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")

const { getAllUser, getUserById, updateUser, deleteUser,registerUser,loginUser } = require("../controllers/user")
router.get("/", authentication, authorization(["Admin"]), getAllUser)

router.get("/:id", authentication, authorization(["Admin", "user"]), getUserById)

router.put("/:id", authentication, authorization(["Admin"]), updateUser)

router.delete("/:id", authentication, authorization(["Admin"]), deleteUser)

router.post("/register",registerUser)
router.post("/login",loginUser)

module.exports = router






