const router = require("express").Router()
const controller = require("../controllers/postsController")
const middle = require("../middleware/checkRoom")

router.get("/:room_id", controller.getPostsRoom)

router.post("/", middle.createRoom, controller.addPost)
router.post("/:room_id", controller.addPost)

module.exports = router
