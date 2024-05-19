const db = require("../data/dbConfig")

function getById(post_id) {
    return db("posts").where("post_id", post_id).first()
}

async function insertPost(post) {
    let [post_id] = await db("posts").insert(post).returning("post_id")
    post_id = post_id.post_id
    const result = await getById(post_id)
    return result
}

async function getByRoom(room_id) {
    const posts = await db("posts as p").leftJoin("users as u", "p.user_id", "u.user_id").select("p.*", "u.user_id", "u.username").where("room_id", room_id)
    return posts
}
function getRoom(room_id) {
    return db("rooms").where("room_id", room_id).first()
}
async function insertRoom(room) {
let [room_id] = await db("rooms").insert(room).returning("room_id");
room_id = room_id.room_id
const result = await getRoom(room_id)
return result
}

module.exports = {
    getById,
    insertPost,
    getByRoom,
    insertRoom
}