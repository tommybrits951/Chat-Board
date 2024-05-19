require("dotenv").config()
const express = require('express')
const cookieParser = require("cookie-parser")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const PORT = process.env.PORT || 9000
const userRouter = require("./routes/userRouter")
const authRouter = require("./routes/authRouter")
const postsRouter = require("./routes/postsRouter")
const app = express()

app.use(express.urlencoded({extended: false}))

app.use(cors())
app.use(cookieParser())
app.use(fileUpload())
app.use(express.json())
app.use("/users", userRouter)
app.use("/auth", authRouter)
app.use("/posts", postsRouter)


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})