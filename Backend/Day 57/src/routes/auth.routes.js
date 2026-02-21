const express = require("express")
const userModel = require("../models/users.models");
const jwt = require("jsonwebtoken")

const authRouter = express.Router()

// /api/auth/register
authRouter.post("/register",async(req,res)=>{
    const {email,name,password} = req.body

    const isUserAlreadyExists = await userModel.findOne({email})

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"User already exists with this Email"
        })
    }

    const user = await userModel.create({
        email,name,password
    })

    const token = jwt.sign(
    {
        id:user._id,
        email:user.email 
    },
    process.env.JWT_SECRET
)

    res.cookie("jwt_token",token)

    res.status(201).json({
        message:"user registered Successfully",
        user,
        token
    })

})

// Controller is a callback when we have a spcified , predefined 
authRouter.post("/login",async(req,res)=>{

    const {email,password} = req.body 

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message:"User not Found with this Email address"
        })
    }

    const isPasswordMatched = user.password === password

    if(!isPasswordMatched){
        return res.status(404).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("jwt_token",token)

    res.status(200).json({
        message:"user Logged In",
        user,
    })

})

module.exports = authRouter