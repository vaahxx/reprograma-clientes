const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema de clientes
// instancia um novo schema, que representa o objeto cliente - utilizado no model
const clientesSchema = new Schema({
    nome: {type: String, required: true},
    email: {type: String},
    cpf: {type: Number},
    dataNascimento: {type: Date},
    estadoCivil: {type: String},
    telefone: {type: Number},
    comprou: {type: Boolean}
}, 
{
    versionKey: false
});

// cria o model de clientes
// este método recebe uma string com o nome do model e um objeto Schema
const Clientes = new mongoose.model('Clientes', clientesSchema);

module.exports = Clientes;