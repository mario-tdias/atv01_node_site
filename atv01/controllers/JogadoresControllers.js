import express from "express";
const route = express.Router();

route.get("/jogadores", (req, res) => {

   const jogadores = [
        {
            nome: "Rogério Ceni",
            posicao: "Goleiro",
            clube: "São Paulo",
            nacionalidade: "Brasil",
            numero: 1,
            imagem: "/images/jogadores/rogerioceni.png"
        },
        {
            nome: "Paulo Dybala",
            posicao: "Meia / Atacante",
            clube: "AS Roma",
            nacionalidade: "Argentina",
            numero: 21,
            imagem: "/images/jogadores/dybala.png"
        },
        {
            nome: "Carlos Gárces",
            posicao: "Meia",
            clube: "Cienciano",
            nacionalidade: "Equador",
            numero: 21,
            imagem: "/images/jogadores/carlosgarces.png"
        },
        {
            nome: "Ricardo Quaresma",
            posicao: "Atacante",
            clube: "Beşiktaş",
            nacionalidade: "Portugal",
            numero: 7,
            imagem: "/images/jogadores/ricardoquaresma.png"
        },
        {
            nome: "Enzo Francescoli",
            posicao: "Meia-Atacante",
            clube: "River Plate",
            nacionalidade: "Uruguai",
            numero: 10,
            imagem: "/images/jogadores/enzofrancescoli.png"
        },
        {
            nome: "Cristiano Ronaldo",
            posicao: "Atacante",
            clube: "Real Madrid",
            nacionalidade: "Portugal",
            numero: 7,
            imagem: "/images/jogadores/cr7.png"
        },
         {
            nome: "Hugo de Léon",
            posicao: "Zagueiro",
            clube: "Nacional",
            nacionalidade: "Uruguai",
            numero: 19,
            imagem: "/images/jogadores/hugodeleon.png"
        },
        {
            nome: "Careca",
            posicao: "Atacante",
            clube: "Guarani",
            nacionalidade: "Brasil",
            numero: 9,
            imagem: "/images/jogadores/careca.png"
        }
    ];

    res.render('jogadores', {jogadores});
})

export default route;