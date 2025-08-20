const express = require("express")
const productRouter = express.Router()
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")

const { getAllProduct, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/product")
productRouter.get("/", getAllProduct)

productRouter.get("/getProductById/:id", (req, res)=>{})

productRouter.post("/", authentication, authorization(["Admin"]), createProduct)

productRouter.put("updateProduct/:id", authentication, authorization(["Admin"]), updateProduct)

productRouter.delete("/:id", authentication, authorization(["Admin"]), deleteProduct)
module.exports = productRouter