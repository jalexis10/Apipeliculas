const express = require('express')
const peliculasRouter = require('./peliculas.router')
const loggerMiddleware = require('../middlewares/resgitro'); // Importar el middleware de registro



function routerApi(app){    
    const router = express.Router();
    router.use(loggerMiddleware);
    app.use('/api/v1', router);    
    router.use('/peliculas', peliculasRouter);
}

module.exports = routerApi