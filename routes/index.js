const express = require('express');
const router  = express.Router();

//Importamos el controlador
const homeController = require('../controllers/homeController');

module.exports = function (){
    //Ruta Home
    router.get('/', homeController.Home);

    //Ruta Menu 
    router.get('/Menu', homeController.Menu);

    return router;
}