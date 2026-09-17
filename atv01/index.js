// index.js :arquivo principal do back-end

// importando o express.js para o projeto
import express from 'express';

const app = express();

app.set('view engine', 'ejs');

// configurando a pasta "public" para arquivos estáticos
app.use(express.static("public"));

import ClubeController from './controllers/ClubeController.js';
import LigasController from './controllers/LigasController.js';
import JogadoresController from './controllers/JogadoresControllers.js';

app.use("/",ClubeController);
app.use("/",LigasController);
app.use("/", JogadoresController);

// aqui irão as rotas do site
// rota principal
// .get() -> cria uma rota na aplicação
app.get("/", (req, res) =>{
    res.render('index');
});



// Método do Express para iniciar o servidor back-end
// app.listen()
const port = 8080;
app.listen(port, (error) => {
    // tratando erros de inicialização
    if(error){
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`)
    // em caso de sucesso
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
})