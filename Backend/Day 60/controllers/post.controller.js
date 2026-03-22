const postModel = require("../models/post.model");
const Imagekit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});


async function createPostController(req, res) {
    console.log(req.body, req.file);

    
    const token = req.cookies.token 
    if(!token){
        return res.status(401).json({
            message:"Token not Provided , Unathorised access"
        })
    }
    
    
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName: "Test"
    });
    
    let decoded = null 

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
    }
    catch(err){
        return res.status(401).json({
            message:"User not authorised"
        })
    }
    
    console.log(decoded)
    
    
    const post= await postModel.create({
        caption:req.body.caption,
        imgUrl :file.url,
        user:decoded.id
    })
    
    res.status(201).json({
        message:"post created sucssesfully .",
        post
    })
    
}

module.exports = {
    createPostController
};