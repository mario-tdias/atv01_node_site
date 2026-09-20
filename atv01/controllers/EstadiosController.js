import express from "express";
const route = express.Router();

route.get("/estadios", (req, res) => {
    const estadios = [
        {
            nome: "Morumbi",
            clube: "São Paulo Futebol Clube",
            cidade: "São Paulo",
            fundacao: 1960,
            imagem: "/images/estadios/morumbi.png"
        },
          {
            nome: "Estádio Inca Garcilaso de la Vega",
            clube: "Cienciano",
            cidade: "Cusco",
            fundacao: 1950,
            imagem: "/images/estadios/incagarcilasso.png"
        },
            {
            nome: "Stadio Olimpico di Roma",
            clube: "AS Roma",
            cidade: "Roma",
            fundacao: 1953,
            imagem: "/images/estadios/olimpicoroma.png"
        },
            {
            nome: "Tüpraş Stadium",
            clube: "Beşiktaş",
            cidade: "Istambul",
            fundacao: 2016,
            imagem: "/images/estadios/tuprasstadium.png"
        },
              {
            nome: "Monumental de Nuñez",
            clube: "River Plate",
            cidade: "Buenos Aires",
            fundacao: 1938,
            imagem: "/images/estadios/monumentalnunez.png"
        },
            {
            nome: "Estádio Santiago Bernabéu",
            clube: "Real Madrid",
            cidade: "Madrid",
            fundacao: 1947,
            imagem: "/images/estadios/santiagobernabeu.png"
        },
         {
            nome: "Gran Parque Central",
            clube: "Nacional",
            cidade: "Montevideo",
            fundacao: 1900,
            imagem: "/images/estadios/granparquecentral.png"
        },
         {
            nome: "Brinco de Ouro da Princesa",
            clube: "Guarani",
            cidade: "Campinas",
            fundacao: 1953,
            imagem: "/images/estadios/brincodeouro.png"
        }
        
        
        
        
    ]

    res.render('estadios' ,{estadios});
})

export default route;