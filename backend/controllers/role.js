const roleModel=require("../models/roleSchema")

//create role


const createRole=async (req,res)=>{
try{
      
    const {name}=req.body
const newRole=new roleModel({name})

await newRole.save()
res.status(201).json(newRole)

}catch(err){
    res.status(500).json({message:"error creating role",error:err.message})
}


}

//get all role

const getAllRole=async(req,res)=>{

try{
const allRole= await roleModel.find()
res.json(allRole)

}catch(err){
res.status(500).json({message:"error fetching role",error:error.message})
}



}

const updateRole=async (req,res)=>{

try{
const {id}=req.params
const{name}=req.body


const updateRole=await roleModel.findByIdAndUpdate(
    id,{name},{new:true}
)

if(!updateRole){
    return res.status(404).json({message:"role not found"})
}






}catch(err){}



}













module.exports={createRole,getAllRole}