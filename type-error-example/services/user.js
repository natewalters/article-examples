const Message = require('./message');
const MessageRefactor = require('./messageRefactor');

module.exports = class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // function to persist user and send a "successful registration" email
    registerUser() {
        // "persist" user in dB and return id
        this.id = () => { return "userId" };
        // send message to user
        return new Message(this.id, "You've registered").sendMessage("registration@example.com");
    }

    // function to persist user and send a "successful registration" email
    registerUserRefactor() {
        // "persist" user in dB and return id
        this.id = () => { return "userId" };
        // send message to user
        return new MessageRefactor(this.email, "You've registered").sendMessageRefactor("registration@example.com");
    }

    static getUserEmail(id) {
        // some code to return a user id
        return "email@user.com";
    }

}