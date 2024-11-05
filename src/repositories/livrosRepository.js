let books = [];

function adicionarLivroRepo(livro) {
    books.push(livro);
}

function listarLivrosRepo() {
    return books;
}

function buscarIdRepo(id) {
    return books.find(livro => livro.id === id);
}

function buscarTituloEAutorRepo(title, author) {
    return books.find(livro => livro.title === title && livro.author === author);
}

function atualizarRepo(id, livroAtualizado) {
    const index = books.findIndex(livro => livro.id === id);
    if (index !== -1) {
        books[index] = livroAtualizado;
    }
}

function removerRepo(id) {
    books = books.filter(livro =>livro.id === id);
}

function buscarRepo({ title, author, year, genre }) {
    return books.filter(livro => 
        (!title || livro.title.toLowerCase().includes(title.toLowerCase())) &&
        (!author || livro.author.toLowerCase().includes(author.toLowerCase())) &&
        (!year || livro.year === parseInt(year)) &&
        (!genre || livro.genre.toLowerCase().includes(genre.toLowerCase()))
    );
}

module.exports = {
    adicionarLivroRepo,
    listarLivrosRepo,
    buscarIdRepo,
    buscarTituloEAutorRepo,
    atualizarRepo,
    removerRepo,
    buscarRepo,
}
