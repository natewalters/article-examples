const User = require('./user');

/**
 // Hitting the /issues/save route will trigger the constructor of this class
 // Though it uses the exact same static getUserEmail method as the Message class
 // it will have no problem running.
 // This is because the Issue and User classes aren't mutually dependent.
 */
module.exports = class Issue {

    constructor(userId) {
        this.userId = userId;
        this.userEmail = User.getUserEmail(userId); // no problem here
    }

    saveIssue(issue) {
        // some code to persist a new Issue
        return {
            id: this.userId,
            email: this.userEmail,
            issue: issue
        }
    }

}