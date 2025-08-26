const bcryptjs = require("bcryptjs")


const roleModel = require("../models/roleSchema")
const jwt = require("jsonwebtoken")


const userModel = require("../models/userSchema")

//get all user

const getAllUser = async (req, res) => {

  try {
    const allUser = await userModel.find({}).populate("role")
    res.status(200).json(allUser)

  } catch (err) {
    res.status(500).json("err get All User")
  }


}
//get user by id


const getUserById = async (req, res) => {

  try {
    const userById = await userModel.findById(req.params.id).populate("role")

    if (!userById)
      return res.status(404).json("user not found")
    else {
      res.status(200).json(userById)
    }
  }
  catch (err) {
    res.status(500).json("Err fetching user")
  }


}

// update user


const updateUser = async (req, res) => {

  try {
    const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body)

    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    else {
      return res.json({ updateUser })
    }
  } catch (err) {
    res.status(500).json({ message: "error update", error: err.message });
  }

}




//delete user
const deleteUser = async (req, res) => {

  try {
    const deleteUser = await userModel.findByIdAndDelete(req.params.id)

    if (!deleteUser) {
      return res.status(404).json({ message: "User not found" });
    }
    else {
      return res.json("user deleted")
    }
  } catch (err) {
    res.status(500).json({ message: "error deleting", error: err.message });
  }

}
//
const registerUser = async (req, res) => {
  try {
    const { name, email, password, age, skinType } = req.body;

    
    const existingUser = await userModel.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    

    const newUser = new userModel({
      name,
      email: email,
      password: password,
      age,
      skinType
    });

    await newUser.save();

    
    

    res.status(201).json({
      success: true,
      message: "Registered successfully",
      user: {
        name: newUser.name,
        email: newUser.email,
        skinType: newUser.skinType,
        age: newUser.age
      },
     
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Signup failed", error: err.message });
  }
};








// login fun


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
  
console.log(email,password);

    
    const user = await userModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

   console.log(user.password);
   
    try{
       const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) {
       return res.status(400).json({ success: false, message: "Invalid password" });
     }
console.log("ismatch",isMatch);
    }catch(err){
      console.log("aseel");
      
    }

   
    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        skinType: user.skinType,
        age: user.age
      },
      token
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Login failed", error: err.message });
  }
};



module.exports = { loginUser, registerUser,getAllUser, getUserById, updateUser, deleteUser }