const express = require('express');
const livrosRoutes = require('./routes/livrosRoutes');

const app = express();
app.use(express.json());
app.use('/livros', livrosRoutes);

app.get('/', (req, res) => {
  res.send('Gerenciador de Livros');
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
