const express = require('express');
const routes = require('./routes');
const path = require('path');

//Crear APP Express
const app = express();

//MIDDLEWARE Static files
app.use(express.static(path.join(__dirname,'/public')))

//Routes
app.use('/',routes());

//Carpeta donde estaran las vistas
app.set('views',path.join(__dirname,'./views'));

app.listen(3000); 