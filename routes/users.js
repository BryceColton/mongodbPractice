const express = require('express')
const router = express.Router();
const UserController = require('../controllers/user')


// add a user
// localhost:[port] /
router.post('/', UserController.createUser)
// get all users
router.get('/', UserController.listUsers)
// get a user by id
router.get('/:id', UserController.listUser)

module.exports = router