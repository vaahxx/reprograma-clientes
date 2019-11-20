const Model = require('../model/clientesModel');

exports.postClientes = (req, res, next) => {
    const cliente = new Model(req.body);
    cliente.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send({
            status: true,
            mensagem: 'cliente incluido com sucesso'
        });
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
        console.log(compradores);
        return res.status(200).send(compradores);
    });
};
exports.getClientePorCpf = (req, res, next) => {
    Model.find({"cpf": req.cpf}, (err, cliente) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(cliente);
    });
};