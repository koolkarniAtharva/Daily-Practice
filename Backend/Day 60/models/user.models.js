const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"UserName already Exists"],
        required:[true,"UserName is Required"]
    },
    email:{
        type:String,
        unique:[true,"Email already Exists"],
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        required:[true,"Password is Required"]
        
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/heheAk/default%20User%20Image.webp?updatedAt=1771756460836"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel