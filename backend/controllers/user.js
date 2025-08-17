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

// create new user


const createNewUser=async(req,res)=>{

try{
const {name,email,password,age,skinTyp,createdAt,role}=req.body
const newUser=new userModel({name,email,password,age,skinType,createdAt,role})

newUser.save()
res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

}
module.exports={getAllUser,getUserById,createNewUser}