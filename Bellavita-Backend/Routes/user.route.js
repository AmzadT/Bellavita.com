const express = require('express')
const userModel = require('../Models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userRouter = express.Router()

// this route is for users registring
userRouter.post('/register', async (req, res) => {
    const {email, password} = req.body
    if (!req.body) {
        return res.status(400).json({ message: `Please Fill All The Required Fields` })
    }
    try {
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: `Email Already Exists` })
        }
        bcrypt.hash(password, 5, async (error, hash) => {
            if (error) {
                return res.status(500).json({ message: `Error : Failed to hash the Password ${error}` })
            }
            const newUser = new userModel(req.body, {password: hash})
            await newUser.save()
            res.status(201).json({ message: `User : ${newUser.name} :  Registered Successfully ✅` })
        })
    } catch (error) {
        console.log(`Error occurred while Registring ${error}`);
        res.status(500).json({ message: `Server error occurred during Registration ❌ ${error}` });
    }
})


// this route is for users logging
userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (!req.body) {
        return res.status(400).json({ message: `Please Fill All The Required Fields` })
    }
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: `Invalid Email` })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: `Invalid Password` })
        }
        const token = jwt.sign({ email: user.email, id: user._id, }, process.env.SECRET_KEY)
        res.status(200).json({ message: `User : ${user.name} : Logged In Successfully ✅`, token })
    } catch (error) {
        console.error(`Error Occurred during Login: ${error.message}`);
        res.status(500).json({ message: `An error occurred while logging in ❌ ${error}` });
    }
})


module.exports = userRouter;