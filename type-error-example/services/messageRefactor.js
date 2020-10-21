module.exports = class MessageRefactor {

    constructor(toEmail, messageText) {
        this.toEmail = toEmail; // no problem here
        this.messageText = messageText;
    }

    sendMessageRefactor(fromEmail) {
        // some code that will send this.messageText to somebody at toEmail from this.email
        // and return a JSON response
        return {
            to: this.toEmail,
            from: fromEmail,
            message: this.messageText
        }
    }

}