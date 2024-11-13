const UserCreateValidation = (req, res, next) => {
    try {
        const { firstname, surname, email, password } = req.body
        
        if (!firstname || !surname || !email || !password){
            const message = 'firstname, surname, email e password são obrigatórios!'
            return res.status(400).json({
                sucess: false,
                message: message
            })
        }
        next()
    } catch (error) {
        return req.status(400).json({
            sucess: false,
            message: `Erro: ${error}`
        })
    }
}
module.exports = {
    UserCreateValidation
}