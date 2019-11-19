const Model = require('../model/clientesModel');

exports.postClientes = (req, res, next) => {
    const cliente = new Model(req.body);
    cliente.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(cliente);
    });
};

exports.getClientes = (req, res, next) => {
    Model.find((err, clientes) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(clientes);
    });
};

exports.getCompradores = (req, res, next) => {
    Model.find({"comprou": true}, (err, compradores) => {
        if (err) return res.status(500).send(err);
    });
};
exports.getClientePorCpf = (req, res, next) => {

};