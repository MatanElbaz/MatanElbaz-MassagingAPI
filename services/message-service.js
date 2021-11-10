let Db = require('./DB.json')

function insertMessage(messageObj) {
    //Get all the name of who waiting for message
    let names = Object.keys(Db); 
    if (names.includes(messageObj.target)) {
        Db[messageObj.target].push(messageObj);
    }
    else {
        //Get the relvant value by the given key
        Db[messageObj.target] = [messageObj];
    }
    return Db[messageObj.target];
}
function getMessages(recipient) {
    let messages = Db[recipient];
    if (messages) {
        return messages
    }
    return [`No messages for user ${recipient}`];

}

module.exports = { insertMessage, getMessages }