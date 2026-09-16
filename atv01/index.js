// index.js :arquivo principal do back-end

// importando o express.js para o projeto
const express = require("express") // forma clássica (CommonJS Modules);

const app = express() // Criando uma instância do Express

// configurando o ejs
app.set('view engine', 'ejs');

// configurando a pasta "public" para arquivos estáticos
app.use(express.static("public"));

// aqui irão as rotas do site
// rota principal
// .get() -> cria uma rota na aplicação
app.get("/", (req, res) =>{
    res.render('index');
});

app.get("/clubes", (req, res) =>{
    res.render('clubes');
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