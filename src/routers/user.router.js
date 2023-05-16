// ROTAS:
//   Metodo HTTP - CRUD (creat = POST, read = GET, update = PUT/PATH, delete = DELETE)
//      GET - Buscar 
//      POST - Criar
//      PUT - Atualizar tudo
//      PATH - Altera parte da info
//      DELETE - Deletar
//   Name: UM IDENTIFICADOR DA ROTA
//   function (callbacks)

const route = require("express").Router();
const userControler = require("../controllers/user.controller");

route.get('/', userControler.soma)

module.exports =  route;