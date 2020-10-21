const User = require('./user');

/**
 // Hitting the /users/register route will trigger the constructor of this class
 // resulting in "User.getUserEmail is not a function"
 */
module.exports = class Message {

    constructor(userId, messageText) {
        this.toEmail = User.getUserEmail(userId); // TypeError User.getUserEmail is not a function
        this.messageText = messageText;
    }

    sendMessage(fromEmail) {
        // some code that will send this.messageText to somebody at toEmail from this.email
        // and return a JSON response
        return {
            to: this.toEmail,
            from: fromEmail,
            message: this.messageText
        }
    }

}