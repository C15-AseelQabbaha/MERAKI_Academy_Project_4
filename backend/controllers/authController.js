const userModel = require("../models/userSchema")
const roleModel = require("../models/roleSchema")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        const existingUser=await userModel.findOne({email})

if(existingUser){
    return res.status(400).json("Email already exist")
}



let userRole=await roleModel.findOne({name:role})

if(!userRole){
        return res.status(400).json("invalid role")
}


        const newUser = new userModel({
            name,
            email,
            password,
            role
        })


newUser.save()
.then((err)=>{

})

.catch((err)=>{

})

const login=async (req,res)=>{

const {email,password}=req.body

const user=await new userModel.findOne({email}).populate("role")
if(!user){
    return res.status(404).json("user not found")
}

const isMatch=await bcrypt.compare(password,user.password)

if(!isMatch){
    return res.status(400).json("invalid password")
}
const payload={
userId:user.id,
role:user.role.role

}
const option={
    expressIn:"2h"
}
const token=jwt.sign(payload,process.env.SECRET,option)
res.status(200).json({
    success:true,
    message:"login successful",
    token,
    user:{
name:user.name,
email:user.email,
role:user.role.role

    }
})

}

    } catch (err) {

        res.status(500).json({message:"error logging in"})
}
     }




     module.exports={signUp,login}