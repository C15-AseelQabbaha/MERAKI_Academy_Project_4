const express = require("express")
const router = express.Router()
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")

const { getReviewForProduct, createReview, deleteReview, } = require("../controllers/review")
router.get("/:productId", getReviewForProduct)

router.post("/:productId", authentication, authorization(["Admin", "user"]), createReview)

router.delete("/:id", authentication, authorization(["Admin", "user"]), deleteProduct)
module.exports = router