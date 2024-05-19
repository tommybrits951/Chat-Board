const Posts = require("../models/Posts")
const {format} = require("date-fns")

async function addPost(req, res, next) {
    try {
        let {room_id} = req.params
        if (!room_id) {
            room_id = req.room_id
        }
        const {content, user_id} = req.body;
        if (!content || !user_id) {
            return res.status(400).json({message: "All fields required!"})
        }
        const date_posted = format(new Date(), "HH:mm:ss MM/dd/yyyy")
        const result = await Posts.insertPost({...req.body, room_id, date_posted})
        if (!result) {
            return res.status(500).json({message: "Something's wrong!"})
        }
        res.status(201).json({message: "Posted!"})
    } catch (err) {
        next(err)
    }
}


async function getPostsRoom(req, res, next) {
    try {
        const {room_id} = req.params;
        const posts = await Posts.getByRoom(room_id)
        if (posts) {
            return res.status(200).json(posts)
        }
    } catch (err) {
        next(err)
    }
}


async function postError(err, req, res, next) {
    res.status(500).json({message: "Something went wrong whilt trying to post!"})
}


module.exports = {
    postError,
    addPost,
    getPostsRoom
}