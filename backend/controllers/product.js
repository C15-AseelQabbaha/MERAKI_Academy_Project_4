const productModel=require("../models/productsSchema")

//create product

const createProduct=async (req,res)=>{
try{
      

const newProduct=new productModel(req.body)

await newProduct.save()
res.status(201).json(newProduct)

}catch(err){
    res.status(500).json({message:"error creating product",error:err.message})
}
}



//get all product

const getAllProduct=async (req,res)=>{

try{
const getProduct=await productModel.find()

res.status(201).json(getAllProduct)



}catch(err){
     res.status(500).json({message:"error fetching product",error:err.message})
}


}

module.exports={createProduct,getAllProduct}