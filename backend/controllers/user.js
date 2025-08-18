const bcrypt=require("bcryptjs")




const userModel=require("../models/userSchema")

//get all user

const getAllUser=async(req,res)=>{

try{
const allUser= await userModel.find({}).populate("role")
res.status(200).json(allUser)

}catch(err){
res.status(500).json("err get All User")
}


}
//get user by id


const getUserById=async(req,res)=>{

    try{
const userById=await userModel.findById(req.params.id).populate("role")

if(!userById)
    return res.status(404).json("user not found")
else{
    res.status(200).json(userById)
}
    }
    catch(err){
        res.status(500).json("Err fetching user")
    }


}

// update user


const updateUser=async(req,res)=>{

try{
const updateUser= await userModel.findByIdAndUpdate(req.params.id,req.body)

if(!updateUser){
    return res.status(404).json({ message: "User not found" });
}
else{
   return res.json({updateUser})  
}
  } catch (err) {
    res.status(500).json({message:"error update" ,error: err.message });
  }

}




//delete user
const deleteUser=async(req,res)=>{

try{
const deleteUser= await userModel.findByIdAndDelete(req.params.id)

if(!deleteUser){
    return res.status(404).json({ message: "User not found" });
}
else{
   return res.json("user deleted")  
}
  } catch (err) {
    res.status(500).json({message:"error deleting" ,error: err.message });
  }

}






module.exports={getAllUser,getUserById,updateUser,deleteUser}