const roleModel=require("../models/roleSchema")

//create role


const createRole=async (req,res)=>{
try{
      
    const {name}=req.body
const newRole=new roleModel({name})

await newRole.save()
res.status(201).json(newRole)

}catch(err){
    res.status(500).json({message:"error creating role",error:error.message})
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

module.exports={createRole,getAllRole}