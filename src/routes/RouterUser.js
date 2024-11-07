const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UsersController')

router.get('/', UserController.UsersList)
router.post('/', UserController.UsersCreate)

module.exports = router