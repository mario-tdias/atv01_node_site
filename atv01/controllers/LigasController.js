import express from "express";
const route = express.Router();

route.get("/ligas", (req, res) => {
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

export default route;