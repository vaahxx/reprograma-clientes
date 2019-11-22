const controller = require('../controllers/clientesController');
const router = require('express').Router();

// middleware que anexa o CPF do cliente em uma propriedade do objeto request
router.use('/:cpf', (req, res, next) => {
    req.cpf = req.params.cpf;
    next();
});

router.post('/', controller.postClientes);
router.get('/', controller.getClientes);
router.get('/compradores', controller.getCompradores);
router.get('/:cpf', controller.getClientePorCpf);
router.put('/:cpf', controller.updateCliente);
// router.delete('/:cpf', controller.deleteCliente);

module.exports = router;

