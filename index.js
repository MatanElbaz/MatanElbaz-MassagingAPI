const express = require('express')
const messageRouter = require('./routers/message-router')

const app = express()
const port = 8080

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
//We going to use "messageRouter" as a main router to '/'
app.use('/', messageRouter)

const server = app.listen(port, () => console.log(`server started on port ${port}`))
module.exports = { app, server }
