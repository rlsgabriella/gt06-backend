const userModel = require('../models/UserModel')

const UsersList = async( req, res, next ) => {
    try{
        const users = await userModel.findAll()
        res.send(users)

    } catch (error) {
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`
        })
    }
}

const UsersCreate = async (req, res, next) => {
    try {
        const firstname = req.body.firstname
        const surname = req.body.surname
        const email = req.body.email
        const password = req.body.password

        // CRIPTOGRAFANDO A SENHA DO USUÁRIO PARA SALVAR NO BANCO
        const bcrypt = require('bcrypt')
        const saltRound = 10
        const hash = await bcrypt.hash(password, saltRound)

        const user = await userModel.create ({ 
            firstname: firstname,
            surname: surname,
            email: email,
            password: hash
        });
        
        res.status(201).send({
            'sucess': true,
            'message': ` Usuário criado com sucesso! ID: ${user.id - user.name}`
        })

    } catch (error) {
        res.status(400)
        res.send({
            'success':false,
            'error':`erro na requisiçao ${error}`

        })
    }
}

module.exports = {
    UsersList,
    UsersCreate
}