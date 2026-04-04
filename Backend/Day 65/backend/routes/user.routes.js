const express = require("express")
const userRouter = express.Router()

const identifyUser = require("../middleware/auth.middleware")
const UserController = require("../controllers/user.controller")

userRouter.post("/follow/:username",identifyUser,UserController.followUserController)

userRouter.post("/unfollow/:username",identifyUser,UserController.unfollowUserController)

module.exports = userRouter;