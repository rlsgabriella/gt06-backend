// IMPORTANDO O MÓDULO EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
// PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
app.use(express.json())

// EXPORTAR ROTAS
const login = require('./routes/RouterLogin')
app.use('/login', login)

const user = require('./routes/RouterUser')
const { Model } = require('sequelize')
app.use('/users', user)

// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})


// 1 - CRIAR Model
// 2 - RODAR SYNC ATUALIZADO
// 3 - CRIAR ENDPOINTS DA NOVA TABELA
