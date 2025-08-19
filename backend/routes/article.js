const express = require("express")
const router = express.Router()
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")

const { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle } = require("../controllers/article")
router.get("/", getAllArticles)

router.get("/:id", getArticleById)

router.post("/", authentication, authorization(["Admin", "user"]), createArticle)

router.put("/:id", authentication, authorization(["Admin", "user"]), updateArticle)

router.delete("/:id", authentication, authorization(["Admin"]), deleteArticle)
module.exports = router