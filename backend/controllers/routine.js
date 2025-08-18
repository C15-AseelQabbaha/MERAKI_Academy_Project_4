const routineModel=require("../models/routineSchema")


//create routine
const createRoutine=async (req,res)=>{
try{
 const {name,products}=req.body


 const newRoutine=new routineModel({
    user:req.user.userId,
    name,
    products
 })

await newRoutine.save()
res.status(201).json(newRoutine)


}catch(err){
res.status(500).json({message:"error creating routine",error:err.message})
}

}




module.exports={createRoutine}