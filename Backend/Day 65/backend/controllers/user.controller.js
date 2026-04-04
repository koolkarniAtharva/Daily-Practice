const followModel = require("../models/follow.model")
const userModel = require("../models/user.models")

async function followUserController(req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if(followeeUsername == followerUsername){
        return res.status(400).json({
            message:"You cannot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username:followeeUsername
    })

    if(!isFolloweeExists){
        return res.status(404).json({
            message:"User you are trying to follow does not exists"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        followee: followeeUsername,
        follower: followerUsername
    })
    if(isAlreadyFollowing){
        return res.status(200).json({
            message:`You are already follwing ${followeeUsername} `,
            follow:isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower:followerUsername,
        followee:followeeUsername 
    })

    res.status(201).json({
        message:`You are now Following ${followeeUsername}`,
        follow:followRecord
    })

}

async function unfollowUserController(req,res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message:"You are not following this User"
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message:`You have unfollowed ${followerUsername}`
    })

    

}

module.exports = {
    followUserController,
    unfollowUserController
}