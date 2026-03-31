const jwt = require('jsonwebtoken')

async function IdentifyUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Token not Provided , unauthorised Access"
        })
    }

    let decoded = null

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch (err) {
        return res.status(401).json({
            message: "User not Authorised"
        })
    }

    req.user= decoded 

    next()
}

module.exports = IdentifyUser