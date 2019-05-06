'use strict';
const http = require('http');
const Chapi = require('whatsapp-chapi');
const CHAPI_INSTANCE_ID = 'XXXX-XXXX-XXXX-XXXX-XXXX'; // Learn how to get your instance at chapi.ai
const CHAPI_ACCESS_TOKEN = 'XXXX-XXXX-XXXX-XXXX-XXXX'; 
const URL = 'http://www.domain.com' // Your server domain
const port = process.env.PORT || 8080;

// Creating the bot with access token and instance id
const bot = new Chapi(
    CHAPI_INSTANCE_ID,
    CHAPI_ACCESS_TOKEN, 
);


http.createServer(botMiddleware).listen(port, () => bot.setWebhook(URL).catch((err) => {console.error('qq', err)}));

function botMiddleware(req, res) {
    const messages = req.body.messages;
    const author = getAuthorPhoneNumber(messages[0].author);
    bot.sendMessage(author, `Hello ${messages[0].senderName}`); // Send echo message
    res.sendStatus(200);
}

// changing message author phone format
function getAuthorPhoneNumber(author) {
    return author.split("@")[0];
}