const express = require('express')

const {
    sendMessage,
    reciveMessage,
} = require('../controllers/message-controller')

//Creating a const of Router
const messageRouter = express.Router()
//Using post requests with the relevant controller functions
messageRouter.post('/send', sendMessage)
messageRouter.post('/recive', reciveMessage)

module.exports = messageRouter
