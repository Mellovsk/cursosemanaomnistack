const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express(); //Cachoro cachorro = new Cachorro();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * 
 * uma comentario de teste
 */

//video tempo: 00:35

/**
 * pra começar um repositorio precisa executar no console: 
 * git init
 * se o repositorio não funciona, é necessario que executar:
 * git config --global --add safe.directory '*'
 */
