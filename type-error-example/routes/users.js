const express = require('express');
const router = express.Router();
const User = require('../services/user');

/**
// GET registration -- obviously, this would be a post function if we were actually registering something
// Hitting this route will result in "User.getUserEmail is not a function"
 */
router.get('/register', function(req, res, next) {
  let user = new User("Nate", "email@example.com").registerUser();
  res.send(user);
});

router.get('/refactor', function(req, res, next) {
  let user = new User("Nate", "email@example.com").registerUserRefactor();
  res.send(user);
});

module.exports = router;
