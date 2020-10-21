const express = require('express');
const router = express.Router();
const Issue = require('../services/issue');

// GET issue -- obviously, this would be a post function if we were actually saving something
// Hitting this route will work just fine
router.get('/save', function(req, res, next) {
    let issue = new Issue("myUserId").saveIssue("Some issue");
    res.send(issue);
});

module.exports = router;