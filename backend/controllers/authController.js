const userModel = require("../models/userSchema")
const roleModel = require("../models/roleSchema")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
                id:newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }

        })

    } catch (err) {

        res.status(500).json({ success: false, message: "error logging in", error: err.message })
    }





    // login fun
}
const login = async (req, res) => {

        try {
            const { email, password } = req.body

            const user = await  userModel.findOne({ email }).populate("role")
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
                expriresIn: "2h"
            }
            const token = jwt.sign(payload, process.env.SECRET, option)
            res.status(200).json({
                success: true,
                message: "login successful",
                token,
                user: {
                    id:newUser._id,
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