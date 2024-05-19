const router = require("express").Router()
const controller = require("../controllers/authController")


router.post("/", controller.loginUser)


module.exports = router