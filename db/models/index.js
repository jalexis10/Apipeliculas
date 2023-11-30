const definePelicula = require("./peliculas.model");


function defineModels( sequelize ){
    definePelicula(sequelize)
    //Other models go here
}

module.exports = defineModels