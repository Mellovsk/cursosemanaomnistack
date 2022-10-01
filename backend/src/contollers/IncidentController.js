//const { response } = require('express');
const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        /**
         * isso se chama desestruturação é o mesmo que "const page = request.query.page;"
         * é o jeito do java script fazer com que o programador use menos texto para programar
         */
        const { page = 1 } = request.query;
        
        /**
         * colocando .first() retorna somente um registro (nao vem como array)
         */
        // const count = await connection('incidents')
        //     .count()
        //     .first(); 
        // return response.json(count);
        
        /**
         * Pegando somente o primeiro registro do array
         */
        // const count = await connection('incidents')
        //     .count();
        // return response.json(count[0]);    

        /**
         * Pegando o valor do json { "count(*)": X} e transformando em { "contador": X }
         */
        // const count = await connection('incidents')
        //     .count()
        //     .first(); 
        // const contador = count['count(*)'];
        // return response.json({ contador });

        /**
         * colocar count entre [] o JS já entende que é pra pegar o primeiro registro
         */
         const [count] = await connection('incidents')
         .count();
         
         response.header('X-Total-Count', count['count(*)']);        

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //, '=', 'incidents.ong_id'
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);

        return response.json(incidents);
    },
     
    async create (request, response){
        /**
         * o comando insert() criar um insert SQL, com os nomes das "columns", iguais aos nomes dos "fields" que estiverem no json
         * se for enviado um "field", que nao exista na tabela, mas que conste no json, fará com que ocorra erro de sql
         */

        /**
         * Dessa forma pega do json somente o que é necessario, se for enviado algo a mais, nao fará parte do insert, assim, não ocasionará erro
         */
        const { description, title , value } = request.body; //os nomes das variaveis, os nomes do campo da tabela, e os nomes do json devem ser iguais, para gerar o sql de forma correta
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        {
            title,
            description,
            value,
            ong_id
        }

        return response.json({ id });

        /**
         * Dessa forma pega o json inteiro, e inclui
         */
        // const incidents = request.body;
        // incidents.ong_id = request.headers.authorization;

        // const [id] = await connection('incidents').insert(incidents);

        // return response.json({ id });        
    },

    async delete (resquest, response){
        const { id } = resquest.params; 
        const ong_id = resquest.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incidents.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }    

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};