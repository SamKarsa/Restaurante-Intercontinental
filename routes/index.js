const express = require('express');
const router  = express.Router();

//Importamos el controlador
const homeController = require('../controllers/homeController');
const menuController = require('../controllers/menuController');
const about_usController = require('../controllers/about_usController');
const order_nowController = require('../controllers/order_nowController');
const reserveController = require('../controllers/reserveController');

module.exports = function (){
    //Ruta Home
    router.get('/', homeController.Home);

    //Ruta Menu 
    router.get('/Menu', menuController.Menu);

    //Ruta About Us
    router.get('/About_Us', about_usController.AboutUs);

    //Ruta Order Now
    router.get('/Order_Now', order_nowController.OrderNow);

    //Ruta Reserve
    router.get('/Reserve', reserveController.Reserve);

    return router;
}