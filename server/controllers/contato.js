const ENVIRONMENT = require('../config/environment');
const contatoDAO = require('../json-db/contatoDAO');
const logService = require('../services/logService');

module.exports = function(app){

    const BASE_URL = '/api/contato'

    app.route(`${BASE_URL}/lista`)
        .get((req, res) => {
            logService.logRequestRecebida(`${BASE_URL}/lista`, 'GET');

            res.status(200).json(contatoDAO.lista());    
        });

    app.route(`${BASE_URL}/novo`)
        .post((req, res) => {
            logService.logRequestRecebida(`${BASE_URL}/novo`, 'POST');

            let contato = req.body;
            contato.id = contatoDAO.getNextId();

            contatoDAO.insere(contato);

            res.status(200).json(contato);  
        });

    app.route(`${BASE_URL}/edita`)
        .post((req, res) => {
            logService.logRequestRecebida(`${BASE_URL}/edita`, 'POST');

            let contato = req.body;
            if(contatoDAO.getById(contato.id) !== 'undefined') {
                contatoDAO.edita(contato);
            }

            res.status(200).json(contato);  
        });

    app.route(`${BASE_URL}/remove`)
        .post((req, res) => {
            logService.logRequestRecebida(`${BASE_URL}/remove`, 'POST');

            let contato = req.body;
            var contatos = contatoDAO.remove(contato);

            res.status(200).json(contatos);
        });
}