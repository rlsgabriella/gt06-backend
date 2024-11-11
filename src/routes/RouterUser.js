const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UsersController')

router.get('/', UserController.UsersList)
router.post('/', UserController.UsersCreate)
router.put('/:id', UserController.UsersUpdate)

module.exports = router