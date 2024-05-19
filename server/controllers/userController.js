const User = require("../models/User")
const bcrypt = require("bcrypt")
const {format} = require("date-fns")


async function registerUser(req, res, next) {
    try {
        const {password, username, user_email} = req.body
        
        if (!password || !user_email || !username) {
            return res.status(400).json({message: "all fields required!"})
        }
        const dupUsername = await User.getByUsername(username)
        const dupEmail = await User.getByEmail(user_email)
        if (dupEmail) {
            return res.status(400).json({message: "Email taken already!"})
        } else if (dupUsername) {
            return res.status(400).json({message: "Username taken already!"})
        }
        const hash = await bcrypt.hash(password, 8)
        const joined = format(new Date(), "MM/dd/yyyy HH:mm:ss")
        const user = {...req.body, password: hash, joined: joined}
        const result = await User.insertUser(user)
        if (result) {
            return res.status(201).json({message: `User ${username} created!`})
        }
    } catch (err) {
        next(err)
    }
}


module.exports = {
    registerUser
}