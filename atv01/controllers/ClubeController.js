import express from "express";
const route = express.Router();

route.get("/clubes", (req, res) =>{
    
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


export default route;
