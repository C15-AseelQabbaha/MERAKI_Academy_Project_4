const bcrypt = require("bcryptjs")


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




const signUp = async (req, res) => {
    try {
        const { name, email, password, age, skinType, role } = req.body
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already exist" })
        }

        // create new user

        const newUser = new userModel({ name, email, password, age, skinType, role })

        await newUser.save()

        res.status(201).json({
            success: true,
            message: "registreted successfully",
            user: {
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }

        })

    } catch (err) {

        res.status(500).json({ success: false, message: "error logging in", error: err.message })
    }




}


// login fun
const login = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await new userModel.findOne({ email }).populate("role")
        if (!user) {
            return res.status(404).json("user not found")
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json("invalid password")
        }
        const payload = {
            userId: user.id,
            role: user.role.role

        }
        const option = {
            expressIn: "2h"
        }
        const token = jwt.sign(payload, process.env.SECRET, option)
        res.status(200).json({
            success: true,
            message: "login successful",
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role.role

            }
        })

    }


    catch (err) {

        res.status(500).json({ message: "error logging in" })
    }
}
module.exports = { signUp, login }



module.exports = { getAllUser, getUserById, updateUser, deleteUser }