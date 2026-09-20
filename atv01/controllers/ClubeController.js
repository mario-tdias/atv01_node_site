import express from "express";
const route = express.Router();

route.get("/clubes", (req, res) =>{
    
    const clubes  = [
        {
            nome: "São Paulo",
            pais: "Brasil",
            estadio: "Morumbi",
            imagem: "/images/clubes/saopaulo.png"
        },
        {
            nome: "Cienciano",
            pais: "Peru",
            estadio: "Estádio Inca Garcilasso",
            imagem: "/images/clubes/cienciano.png"
        },
        {
            nome: "AS Roma",
            pais: "Itália",
            estadio: "Stadio Olimpico",
            imagem: "/images/clubes/asroma.png"

        },
        {
            nome: "Beşiktaş",
            pais: "Turquia",
            estadio: "Tüpraş Stadium",
            imagem: "/images/clubes/besiktas.png"
        },
        {
            nome: "River Plate",
            pais: "Argentina",
            estadio: "Monumental de Nuñez",
            imagem: "/images/clubes/riverplate.png"
        },
           {
            nome: "Real Madrid",
            pais: "Espanha",
            estadio: "Santiago Bernabéu",
            imagem: "/images/clubes/realmadrid.png"
        },
          {
            nome: "Nacional",
            pais: "Uruguai",
            estadio: "Gran Parque Central",
            imagem: "/images/clubes/nacional.png"
        },
          {
            nome: "Guarani",
            pais: "Brasil",
            estadio: "Brinco de Ouro da Princesa",
            imagem: "/images/clubes/guarani.png"
        }
    ]

    res.render('clubes', {clubes});
});


export default route;
