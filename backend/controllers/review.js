const reviewModel=require("../models/reviewSchema")

//create review

const createReview=async (req,res)=>{
try{

    const {productId,rating,comment}=req.body

const newReview=new reviewModel({
    user:req.user.userId,
   product: productId,
    rating,
    comment
})

 await newReview.save()

res.status(201).json(newReview)

}catch(err){
res.status(500).json({message:"error creating review",error:err.message})

}


}



//get all review 


const getReviewForProduct=async (req,res)=>{
try{

const review= await reviewModel.find({product:req.params.productId})
.populate("user","name")
.populate("product","name")

res.json(review)

}catch(err){

   res.status(500).json({message:"error fetching review",error:err.message}) 
}

}


//delete review (delete by admin&user who add review)

const deleteReview=async (req,res)=>{
try{
const review= await reviewModel.findById(req.params.id)

if(!review){
    return res.status(404).json("Review not found")

}
if(review.user.toString()!==req.user.userId && req.user.role!=="Admin"){
    return res.status(403).json({message:"Not authorized"})
}


await reviewModel.findByIdAndDelete(req.params.id )

res.json({message:"Review deleted"})

}catch(err){

     res.status(500).json({message:"error deleting review",error:err.message}) 
}






}









module.exports={createReview,getReviewForProduct,deleteReview}