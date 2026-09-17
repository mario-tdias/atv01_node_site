import express from "express";
const route = express.Router();

route.get("/jogadores", (req, res) => {

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
            imagem: "/images/.png"
        }
    ];

    res.render('jogadores', {jogadores});
})

export default route;