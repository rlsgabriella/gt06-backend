const connection = require('./database/connection')

require('../models/UserModel')
require('../models/EnderecoModel')

connection.sync({alter: true})