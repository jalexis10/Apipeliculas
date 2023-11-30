const { DataTypes } = require('sequelize');
const { all } = require('../../router/peliculas.router');

function definePelicula( sequelize ) {
    sequelize.define('pelicula', {
        //Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        pelicula_titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pelicula_director: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pelicula_año: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pelicula_genero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pelicula_duracion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pelicula_calificacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
});
}


module.exports = definePelicula;