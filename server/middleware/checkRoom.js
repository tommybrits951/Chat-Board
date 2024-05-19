const Posts = require("../models/Posts")
const {format} = require("date-fns")
async function createRoom(req, res, next) {
    try {
        const {title, host_id} = req.body
        const created = format(new Date(), "HH:mm:ss MM/dd/yyyy")
        const room = await Posts.insertRoom({title, host_id, date_created: created})
        if (room) {
            req.room_id = room.room_id
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createRoom
}