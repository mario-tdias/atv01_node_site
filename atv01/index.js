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
    
    const clubes  = [
        {
            nome: "São Paulo",
            pais: "Brasil",
            estadio: "Morumbi",
            imagem: "/images/saopaulo.png"
        },
        {
            nome: "Cienciano",
            pais: "Peru",
            estadio: "Estádio Inca Garcilasso",
            imagem: "/images/cienciano.png"
        },
        {
            nome: "AS Roma",
            pais: "Itália",
            estadio: "Stadio Olimpico",
            imagem: "/images/asroma.png"

        }
    ]

    res.render('clubes', {clubes});
});
app.get("/ligas", (req, res) => {
    const ligas = [
        {
            nome: "Brasileirão Série A",
            pais: "Brasil",
            maiorCampeao: "Palmeiras",
            confederacao: "CONMEBOL",
            imagem: "/images/brasileirao.png"
        },
        {
            nome: "Premier League",
            pais: "Inglaterra",
            maiorCampeao: "Manchester United",
            confederacao: "UEFA",
            imagem: "/images/premierleague.png"
        },
        {
            nome: "Libertadores",
            pais: "América do Sul",
            maiorCampeao: "Independiente",
            confederacao: "CONMEBOL",
            imagem: "/images/libertadores.png"
        },
        {
            nome: "Serie A TIM",
            pais: "Itália",
            maiorCampeao: "Juventus",
            confederacao: "UEFA",
            imagem: "/images/seriea.png"
        },
        {
            nome: "La Liga",
            pais: "Espanha",
            maiorCampeao: "Real Madrid",
            confederacao: "UEFA",
            imagem: "/images/laliga.png"
        }
    ];

    res.render('ligas', { ligas });
});

app.get("/jogadores", (req, res) => {

   const jogadores = [
        {
            nome: "Lucas Moura",
            posicao: "Atacante / Meia",
            clube: "São Paulo",
            nacionalidade: "Brasil",
            numero: 7,
            imagem: "/images/lucasmoura.png"
        },
        {
            nome: "Paulo Dybala",
            posicao: "Meia / Atacante",
            clube: "AS Roma",
            nacionalidade: "Argentina",
            numero: 21,
            imagem: "/images/dybala.png"
        },
        {
            nome: "Carlos Gárces",
            posicao: "Meia",
            clube: "Cienciano",
            nacionalidade: "Equador",
            numero: 21,
            imagem: "/images/carlosgarces.png"
        }
    ];

    res.render('jogadores', {jogadores});
})

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