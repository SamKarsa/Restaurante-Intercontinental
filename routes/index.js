const express = require('express');
const router  = express.Router();

//Importamos el controlador
const homeController = require('../controllers/homeController');
const menuController = require('../controllers/menuController');
const about_usController = require('../controllers/about_usController');
const reserveController = require('../controllers/reserveController');
const loginadminController = require('../controllers/loginadminController');

module.exports = function (){
    //Ruta Home
    router.get('/', homeController.Home);

    //Ruta Menu 
    router.get('/Menu', menuController.Menu);

    //Ruta About Us
    router.get('/About_Us', about_usController.AboutUs);

    //Ruta Reserve
    router.get('/Reserve', reserveController.Reserve);

    //Ruta Log In Admin
    router.get('/Log_In_Admin', loginadminController.LogIn);

    return router;
}