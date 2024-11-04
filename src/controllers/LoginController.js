const Login = async (req, res, next)  => {
    try {
        const email = req.body.email
        const senha = req.body.senha

        const emailUser = 'david@exemplo.com'
        const senhaUser = '12345'

        if (email == emailUser && senha == senhaUser){
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
