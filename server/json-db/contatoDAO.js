// export class Contato {
//     id: number;
//     nome: string;
//     telefone: string;
//     descricao: string;
// }

const ENVIRONMENT = require('../config/environment');
let id = 2;

module.exports = {
    
    getById: function(id) {
        var f = contatos.find(w => w.id == id);
        return f !== undefined ? f : 'undefined';
    },

    getNextId: function() {
        return ++id;
    },

    lista: function() {
        return contatos;
    },

    insere: function(contato) {
        contatos.push(contato);
    },

    edita: function(contato) {
        let aux = contatos.find(c => c.id == contato.id);
        aux.nome = contato.nome;
        aux.descricao = contato.descricao;
        aux.telefone = contato.telefone;
    },
};

let contatos = [
    { 
        id: 1,
        nome: 'Silvio Junior', 
        telefone: '9999-9999',
        descricao: 'Colega UFRJ'
    },
    { 
        id: 2,
        nome: 'Daniel Artini', 
        telefone: '9999-9998',
        descricao: 'Colega UFRJ'
    },
];