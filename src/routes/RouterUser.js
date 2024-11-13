const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UsersController')
const UsersValidation = require('../middleware/UsersValidation')

router.get('/', UserController.UsersList)
router.post('/', UsersValidation.UserCreateValidation, UserController.UsersCreate)
router.put('/:id', UserController.UsersUpdate)
router.delete('/:id', UserController.UsersDelete)

module.exports = router