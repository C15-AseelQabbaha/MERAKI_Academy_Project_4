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
// get all routine

const getMyRoutine=async (req,res)=>{
try{
const routine=await routineModel
.find({user:req.user.userId}).populate("products","name")
res.json(routine)
}catch(err){

    res.status(500).json({message:"error fetching routine",error:err.message})
}


}
//update routine

const updateRoutine=async (req,res)=>{
try{
const routine= await routineModel.findById(req.params.id)
 if(!routine) return res.status(404).json({message:"Routine not found"})



const updateRoutine=routineModel.findByIdAndUpdate(
    req.params.id,
    req.body

)

res.json(updateRoutine)

}catch(err){
    res.status(500).json({message:"error updating routine",error:err.message})
}

}

//delete routine


const deleteRoutine=async(req,res)=>{
    try{
const routine=await routineModel.findById(req.params.id)
if(!routine)return res.status(404).json({message:"Routine not found"})


await routineModel.findByIdAndDelete(req.params.id)
res.json({message:"Routine deleting"})

    }catch(err){
         res.status(500).json({message:"error deleting routine",error:err.message})
    }
}


module.exports={createRoutine,getMyRoutine,updateRoutine,deleteRoutine}