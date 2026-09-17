import express from "express";
const route = express.Router();

route.get("/ligas", (req, res) => {
    const ligas = [
        {
            nome: "Brasileirão Série A",
            pais: "Brasil",
            maiorCampeao: "Palmeiras",
            confederacao: "CONMEBOL",
            imagem: "/images/ligas/brasileirao.png"
        },
        {
            nome: "Premier League",
            pais: "Inglaterra",
            maiorCampeao: "Manchester United",
            confederacao: "UEFA",
            imagem: "/images/ligas/premierleague.png"
        },
        {
            nome: "Libertadores",
            pais: "América do Sul",
            maiorCampeao: "Independiente",
            confederacao: "CONMEBOL",
            imagem: "/images/ligas/libertadores.png"
        },
        {
            nome: "Serie A TIM",
            pais: "Itália",
            maiorCampeao: "Juventus",
            confederacao: "UEFA",
            imagem: "/images/ligas/seriea.png"
        },
        {
            nome: "La Liga",
            pais: "Espanha",
            maiorCampeao: "Real Madrid",
            confederacao: "UEFA",
            imagem: "/images/ligas/laliga.png"
        }
    ];

    res.render('ligas', { ligas });
});

export default route;