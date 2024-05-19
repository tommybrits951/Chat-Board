require('dotenv').config()
const accessSecret = process.env.ACCESS_SECRET
const refreshSecret = process.env.REFRESH_SECRET
const jwt = require('jsonwebtoken')
const User = require("../models/User")
const bcrypt = require('bcrypt')


function buildAccess(user) {
    const payload = {
        user_id: user.user_id,
        username: user.username,
        user_email: user.user_email
    }
    const options = {
        expiresIn: "1h"
    }
    return jwt.sign(payload, accessSecret, options)
}
function buildRefresh(user) {
    const payload = {
        user_id: user.user_id,
        username: user.username,
        user_email: user.user_email
    }
    const options = {
        expiresIn: "1d"
    }
    return jwt.sign(payload, refreshSecret, options)
}



async function loginUser(req, res, next) {
    try {
        const {user_email, password} = req.body
        const oldUser = await User.getByEmail(user_email)
        const match = await bcrypt.compare(password, oldUser.password)
        if (!match || !oldUser) {
            return res.status(400).json({message: "Email or Password incorrect!"})
        }
        const accessToken = buildAccess(oldUser)
        const refreshToken = buildRefresh(oldUser)
        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            crossSite: "None",
            secured: true,
            maxAge: 1000 * 60 * 60 * 24,
            signed: false
        })
        res.status(200).json(accessToken)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    loginUser
}