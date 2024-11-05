const express = require('express');
const router = express.Router();
const {
    adicionarLivro,
    listarLivros,
    removerLivro,
    atualizarLivro,
    buscarLivro
} = require('../controllers/livrosController');

router.post('/', adicionarLivro);
router.get('/', listarLivros);
router.delete('/:id', removerLivro);
router.put('/:id', atualizarLivro);
router.get('/buscar', buscarLivro);

module.exports = router;
