const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

//autenticação
routes.post('/autenticar',(request, response) => {
  const body = request.body;
  return response.json({teste:"Hello"});
});

//usuario
routes.get('/usuario', async (reequest, response) => {
  const usuario = await connection('usuario').select('*');
  return response.json({usuario});
});

routes.post('/usuario', async (request, response) => {
  const {nome,codigo,senha} = request.body;
  const id = crypto.randomBytes(4).toString('HEX');
  const excluido = true;

  await connection('usuario').insert({
    id,nome,codigo,senha,excluido
  })
  return response.json({id});
});

module.exports = routes;