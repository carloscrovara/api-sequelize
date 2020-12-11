const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

const Sequelize = require('sequelize');
const Nuevos = require('./models').nuevos

app.use(logger('dev'));

//variables de entorno
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


//rutas y funciones.
app.get("/", function (req, res) {
  
     return Nuevos.findAll({})
     .then(Nuevos => res.status(200).send(Nuevos))
     .catch(error => res.status(400).send(error))

});

app.post("/", function(req, res){
     return Nuevos.create({
          nombre: req.body.nombre, 
     })
     .then(Nuevos => res.status(200).send(Nuevos))
     .catch(error => res.status(400).send(error))
});
    

app.get("/:id", function (req, res) {
  
     return Nuevos.findAll({
          where: {
               id: req.params.id
          }
     })
     .then(Nuevos => res.status(200).send(Nuevos))
     .catch(error => res.status(400).send(error))

});

//Verificación Ambiente   
let port;
//es node "puro"
if(process.env.NODE_ENV === "production"){
     port =  process.env.PORT_PROD;
}else{
     port =  process.env.PORT_DEV;
}
//const server = http.createServer(app)
//server.listen(port);
 
//express
app.listen(port, function () {
    console.log("Servidor Activo", port, process.env.NODE_ENV);
  });