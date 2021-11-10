const { server } = require('../index')
const MessageService = require('../services/message-service')


after(() => {
  server.close()
  console.log("Server Closed");
})
