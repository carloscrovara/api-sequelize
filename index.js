const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

app.use(logger('dev'));

//variables de entorno
require('dotenv').config()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {
   res.json("hola llegué")
    });
  
let port;
//es node "puro"
if(process.env.MODO === "PRODUCCION"){
     port =  process.env.PORT_PROD;
}else{
     port =  process.env.PORT_DEV;
}
//const server = http.createServer(app)
//server.listen(port);
 
//express
app.listen(port, function () {
    console.log("Servidor Activo", port, process.env.MODO);
  });
  