const {
    adicionarLivroService,
    listarLivrosService,
    removerLivroService,
    atualizarLivroService,
    buscarLivrosService
} = require('../services/livrosService');

function adicionarLivro(req, res) {
    const { title, author, year, genre } = req.body;
    const resultado = adicionarLivroService ({ title, author, year, genre});

    if (resultado.sucesso) {
        res.status(201).json(resultado.livro);
    } else {
        res.status(400).json({ message: resultado.mensagem }); 
    }
}

function listarLivros(req, res) {
    const livros = listarLivrosService();
    res.json(livros);
}

function atualizarLivro(req, res) {
    const { id } = req.params;
    const { title, author, year, genre } = req.body;
    const resultado = atualizarLivroService(id, { title, author, year, genre });

    if (resultado.sucesso) {
        res.json(resultado.livro);
    } else {
        res.status(404).json({ message: resultado.mensagem }); 
    }
}

function removerLivro(req, res) {
    const { id } = req.params;
    const resultado = removerLivroService(id);

    if (resultado.sucesso) {
        res.json({ message: 'Livro removido com sucesso' });
    } else {
        res.status(404).json({ message: resultado.mensagem }); 
    }
}

function buscarLivro(req, res) {
    const { title, author, year, genre } = req.query;
    const livros = buscarLivrosService({ title, author, year, genre });
    res.json(resultados);
}

module.exports = { adicionarLivro, listarLivros, atualizarLivro, removerLivro, buscarLivro };