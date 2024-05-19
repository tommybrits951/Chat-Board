const db = require('../data/dbConfig')


function getAllUsers() {
    return db("users")
}

async function getById(user_id) {
    const user = await db('users').where("user_id", user_id).first()
    return user
}

async function insertUser(user) {
    let [user_id] = await db("users").insert(user).returning("user_id")
    user_id = user_id.user_id
    console.log(user_id)
    const result = await getById(user_id)
    return result
}

async function getByUsername(username) {
    const user = await db("users").where("username", username).first()
    return user
}

async function getByEmail(user_email) {
    const user = await db("users").where("user_email", user_email).first()
    return user
}


module.exports = {
    insertUser,
    getAllUsers,
    getByEmail,
    getById,
    getByUsername
}