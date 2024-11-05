const {
    adicionarLivroRepo,
    listarLivrosRepo,
    buscarIdRepo,
    buscarTituloEAutorRepo,
    atualizarRepo,
    removerRepo,
    buscarRepo
} = require('../repositories/livrosRepository'); 

function adicionarLivroService({ title, author, year, genre }) {
    if (!title || !author || !year || !genre) {
        return { sucesso: false, mensagem: "Todos os campos são obrigatóros" };
    }

    const existe = buscarTituloEAutorRepo(title, author);
    if (existe) {
        return { sucesso: false, mensagem: "Já existe um livro com essas informações."}
    }

    const novoLivro = {
        id: Date.now().toString(),
        title: title.trim(),
        author: author.trim(),
        year: year,
        genre: genre.trim(),
    };

    adicionarLivroRepo(novoLivro);
    return { sucesso: true, livro: novoLivro };
}

function listarLivrosService() {
    return listarLivrosRepo();
}

function atualizarLivroService(id, { title, author, year, genre }) {
    const livro = buscarIdRepo(id);
    if (!livro) {
        return { sucesso: false, mensagem: "Livro não encontrado." };
    }

    const livroAtualizado = {
        id: id,
        title: title ? title.trim() : livro.title,
        author: author ? author.trim() : livro.author,
        year: year ? year : livro.year,
        genre: genre ? genre.trim() : livro.genre,
    };

    atualizarRepo(id, livroAtualizado);
    return { sucesso: true, livro: livroAtualizado };
}

function removerLivroService(id) {
    const livro = buscarIdRepo(id);
    if (!livro) {
        return { sucesso: false, mensagem: "Livro não encontrado." };
    }

    removerRepo(id);
    return { sucesso: true };
}

function buscarLivrosService({ title, author, year, genre }) {
    return buscarRepo({ title, author, year, genre });
}

module.exports = {
    adicionarLivroService,
    listarLivrosService,
    atualizarLivroService,
    removerLivroService,
    buscarLivrosService,
};
