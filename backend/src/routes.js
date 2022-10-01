const express = require('express');
const IncidentController = require('./contollers/IncidentController');
const OngController = require('./contollers/OngController');
const ProfileController = require('./contollers/ProfileController');
const SessionController = require('./contollers/SessionController');

const routes = express.Router();

/**
 * Rota / Recurso
 * Exemplo: https://localhost:3333/users
 * users é o recurso
 */

/**
 * Metodos HTTP
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviador na rota após o "?", servem pra filtros, paginação 
 * Exemplo: http://localhost:3333/users?page=2&nome=Danilo&idade=29
 * 
 * Route Params: Parametros utilizados para identificar recursos
 * Exemplo: "app.get('/users/:id', ..." o que vir depois de ":" é usado como nome do parametroee
 *          na requisição é usado "http://localhost:3333/users/1"
 * 
 * Resquet Body: Corpo da requisicao, utilizado para criar ou alterar recursos 
 */


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/sessions', SessionController.create);


//exemplos de como usar o get, e o post
routes.get('/app', (request, response) => {
    //return response.send('Olá mundo!');
    return response.json({
        programa: "Olá, esse é o meu App",
        aluno: "Danilo Mello"
    });
});

routes.get('/app/meuapp', (request, response) => {
    //return response.send('Olá mundo!');
    return response.json({
        programa: "Meu Primeiro Programinha",
        aluno: "Danilo Mello"
    });
});

//exibindo parametros nomeados (query params)
routes.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json(params);    

    //return response.json({
    //    nome: "Danilo Mello",
    //    endereco: "Rua Joaquim Alves Filho, 1028"
    //});
});

//exibindo o paramentro id (route params)
routes.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        nome: "Danilo Mello",
        endereco: "Rua Joaquim Alves Filho, 1028"
    });
});

//recebendo parametros por meio do request body
routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);
    body.id = 1; //criar um variavel chamada id, em um objeto, quando for exibido o json, vai ter mais um campo chamado id

    return response.json(body);
});


module.exports = routes;