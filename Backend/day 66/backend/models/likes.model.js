const mongoose = require("mongoose")


const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        require:[true,"Post id is Required for creating a Like"]
    },
    user:{
        type:String,
        required:[true,"Username is required for creating a like"]
    }
},{
    timestamps:true
})

likeSchema.index({post:1,user:1},{unique:true})

likeModel = mongoose.model("likes",likeSchema)

module.exports = likeModel