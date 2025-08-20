const productModel = require("../models/productsSchema")


//get all product

const getAllProduct = async (req, res) => {

  try {
    const getProduct = await productModel.find()

    res.status(201).json(getAllProduct)



  } catch (err) {
    res.status(500).json({ message: "error fetching product", success: false, error: err.message })
  }


}

//get product by id

const getProductById = async (req, res) => {

  try {
    const getProductById = await productModel.findById(req.params.id)
    if (!getProductById) {
      return res.status(404).json({ success: false, message: " product not found", error: err.message })
    }
    res.status(200).json({ success: true, getProductById })

  } catch (err) {
    res.status(500).json({ message: "error fetching product", success: false, error: err.message })
  }


}

//create product
const createProduct = async (req, res) => {
  try {
    const { name, brand, type, description, image, price } = req.body

    const newProduct = new Product({
      name,
      brand,
      type,
      description,
      image,
      price
    })

    const savedProduct = await newProduct.save()

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: savedProduct
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating product",
      error: err.message
    })
  }
}

//  Update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { name, brand, type, description, image, price } = req.body

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, brand, type, description, image, price },
      { new: true }
    )

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" })
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error updating product",
      error: err.message
    })
  }
}

//Delete product 
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params

    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" })
    }

    res.status(200).json({
      success: true,
      message: `Product with id ${id} deleted successfully`
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: err.message
    })
  }
}

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}