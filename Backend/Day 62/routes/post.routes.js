const express = require("express")
const postRouter = express.Router()
const postController  = require("../controllers/post.controller")
const IdentifyUser = require("../middleware/auth.middleware")

const multer  = require("multer")
const upload = multer({storage:multer.memoryStorage()})

postRouter.post("/",upload.single("image"),IdentifyUser,postController.createPostController)

postRouter.get("/",IdentifyUser,postController.getPostController)

postRouter.get("/details/:postId",IdentifyUser,postController.getPostDetails)

module.exports = postRouter