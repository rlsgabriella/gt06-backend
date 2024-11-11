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

        // const emailValid = await userModel.findOne({ where: { email: email } });


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
            'message': `Usuário criado com sucesso! ID: ${user.id - user.name}`
        })

    } catch (error) {
        res.status(400)
        res.send({
            'success':false,
            'error':`erro na requisiçao ${error}`

        })
    }
}


const UsersUpdate = async( req, res, next ) => {
    try{
        const id = req.params.id
        const user = await userModel.update(req.body, {
            where: { id }
        })

        res.status(200).send({
            'sucess': true,
            'message': `Usuário alterado com sucesso! ID: ${user.id - user.name}`
        })

    } catch (error) {
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`
        })
    }
}

const UsersDelete = async( req, res, next ) => {
    try {
        const id = req.params.id
        const user = await userModel.destroy({
            where: { id }
        })

        res.status(200).send({
            'sucess': true,
            'message': `Usuário deletado com sucesso! ID: ${user.id - user.name}`
        })

    } catch (error) {
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`
        })
    }
}

module.exports = {
    UsersList,
    UsersCreate,
    UsersUpdate,
    UsersDelete
}