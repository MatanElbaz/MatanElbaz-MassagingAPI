const MessageService = require('../services/message-service.js')

function sendMessage(request, response) {
    const { recipient, sender, message } = request.body
    if (!recipient) {
        return response.status(400).json({ error: 'recipient is a required body param' });
    }
    if (!sender) {
        return response.status(400).json({ error: 'sender is a required body param' });
    }
    if (!message) {
        return response.status(400).json({ error: 'message is a required body param' });
    }
    let messageObj = {
        target: request.body.recipient,
        source: request.body.sender,
        context: request.body.message,
        dateTime: new Date()
    }

    const messageDetails = MessageService.insertMessage(messageObj);
    return response.status(200).json(messageDetails);
}

function reciveMessage(request, response) {
    const recipient = request.body.recipient;
    if (!recipient) {
        return response.status(400).json({ error: 'recipient is a required body param' });
    }
    const messagesByRecipient = MessageService.getMessages(recipient);
    return response.status(200).json(messagesByRecipient);
}

module.exports = { sendMessage, reciveMessage }