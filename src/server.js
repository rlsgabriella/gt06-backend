// IMPORTANDO O MÓDULO EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
// PERMITE QUE O SERVIDOR ENTENDA JSON NO CORPO DAS REQUISIÇÕES
app.use(express.json())

// EXPORTAR ROTAS
const login = require('./routes/RouterLogin')
app.use('/login', login)

// SUBINDO O SERVIDOR NA PORTA 3000
const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})



// CRIANDO UMA ROTA PARA A API
// app.get('/home', (req, res) => {
//   res.send('Hello World')
// })

// CRIANDO UMA ROTA PARA A API
app.get('/login', (req, res) => {
  try {
    const email = req.query.email
    const senha = req.query.senha

    const emailUser = 'david@exemplo.com.br'
    const senhaUser = '123456'

    if (email === emailUser && senha === senhaUser){
      const jwt = require('jsonwebtoken')
      const token = jwt.sign({id: 1, name: 'David'}, 'asdsdjfgfkjsd')

      res.send({
        'sucess': true,
        'token': token,
        'error': ''
      })
    } else {
      res.send({
        'sucess': true,
        'token': '',
        'error': 'Usuário ou senha inválida!'
      })
    }
  } catch(error) {
    res.send({
      'sucess': false,
      'token': '',
      'error': 'Deu ruim!'
    })
  }
})



// FAÇA A LOGICA DE LOGIN PARA RETORNAR O TOKEN DO USUÁRIO. E A FUNÇÃO DE PRODUTOS SÓ MOSTRARÁ OS DADOS SE O TOKEN FOR VÁLIDO.

// const jwt = require('jsonwebtoken')
// const token = jwt.sign({id: 1, name: 'David'}, 'asdsdjfgfkjsd')

// const jwtVerify = (tokenUser) => {
//   try {
//     const decoded = jwt.verify(tokenUser, 'asdsdjfgfkjsdAASAS')
//     return decoded

//   } catch (error) {
//     console.log(`Deu ruim! ${error}`)
//   }
// }
// console.log(jwtVerify(token))

// function login(email, senha) {
//   const UserEmail = "thiago.arruda.09@hotmail.comsdasd";
//   const UserSenha = "thiago123";

//   if (email == UserEmail && senha == UserSenha) {
//     const jwt = require('jsonwebtoken');
//     const token = jwt.sign({ id: 1, name: "thiago" }, "sudgsajkcsiuchsck");
//     return token
//   } else {
//     console.log("email ou senha invalidos");
//   }
// }

// console.log(login("thiago.arruda.09@hotmail.com", "thiago123"))

//   const produtos = (tokenUser) => {
//     const jwt = require('jsonwebtoken');
//     try {
//       const decoded = jwt.verify(tokenUser, "sudgsajkcsiuchsck");
//       const data = [
//         {
//           nome: "sapato nike1",
//           preço: 300,
//         },
//         {
//           nome: "sapato nike2",
//           preço: 400,
//         },
//         {
//           nome: "sapato nike3",
//           preço: 500,
//         },
//       ];
//       if (decoded) {
//         console.log(data);
//       }
//       return decoded;

   
//     } catch (error) {
//       console.log(`Deu ruim! ${error}`);
//     }
//   };

// console.log(produtos('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRoaWFnbyIsImlhdCI6MTczMDQ2MTg4M30.B5pgJrUPKR-9qUhkGBmTo8L9WHtNcR6WXCN1u8OX0eA'))