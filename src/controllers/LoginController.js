const userModel = require('../models/UserModel')

const Login = async (req, res, next)  => {
    try {
        const email = req.body.email
        const senha = req.body.senha
        // RETORNANDO UM USUÁRIO COM O EMAIL INFORMADO
        const user = await userModel.findOne({
            where: { email }
        })

        const bcrypt = require('bcrypt')
        const userPassword = user ? user.password : ''
        const hastValid = await bcrypt.compare(senha, userPassword)
        
        if (hastValid){
            const jwt = require('jsonwebtoken')
            const token = jwt.sign({id: 1, name: 'David'}, 'SKFhsa73$(sgs')
            
            res.send({
                sucess: true,
                token: token,
                error: ''
            })
        } else {
            res.send({
                sucess: true,
                token: '',
                error: 'Email ou senha inválidos!'
            })
        }

    } catch (error) {
        res.send({
            sucess: false,
            token: '',
            error: `Erro na requisição: ${error}`
        })
    }
}

module.exports = {
    Login
}
