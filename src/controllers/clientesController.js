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
        const clientesCompradores = compradores.map((e) => {
            return {
                nome: e.nome,
                email: e.email
            }
        });
        return res.status(200).send(clientesCompradores);
    });
};
exports.getClientePorCpf = (req, res, next) => {
    Model.find({"cpf": req.cpf}, (err, cliente) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(cliente);
    });
};
exports.updateCliente = (req, res, next) => {
    Model.update(
        { cpf: req.params.cpf },
        { $set: req.body },
        { upsert: true },
        (err) => {
            if (err) return res.status(500).send(err);
        });    
        res.status(200).send({ mensagem: "Atualizado com sucesso!" });
};
exports.deleteCliente = (req, res, next) => {
    Model.remove();
};