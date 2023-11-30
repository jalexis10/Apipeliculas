const Joi = require('joi');

const id = Joi.number()
const pelicula_titulo = Joi.string().min(5).max(255).required().label('Título de la Película');
const pelicula_director = Joi.string().min(5).max(255).required().label('Director de la Película');
const pelicula_año = Joi.number().integer().min(1900).max(new Date().getFullYear()).required().label('Año de la Película');
const pelicula_genero = Joi.string().min(5).max(255).required().label('Género de la Película');
const pelicula_duracion = Joi.number().integer().min(1).max(300).required().label('Duración de la Película');
const pelicula_calificacion = Joi.number().min(1).max(10).required().label('Calificación de la Película');


const createPeliculaSchema = Joi.object({
    pelicula_titulo: pelicula_titulo.required(),
    pelicula_director: pelicula_director.required(),
    pelicula_año: pelicula_año.required(),
    pelicula_genero: pelicula_genero.required(),
    pelicula_duracion: pelicula_duracion.required(),
    pelicula_calificacion: pelicula_calificacion.required(),

});

const updatePeliculaSchema = Joi.object({
    pelicula_titulo: pelicula_titulo,
    pelicula_director: pelicula_director,
    pelicula_año: pelicula_año,
    pelicula_genero: pelicula_genero,
    pelicula_duracion: pelicula_duracion,
    pelicula_calificacion: pelicula_calificacion,
});

const getPeliculaSchema = Joi.object({
    id: id.required()
});

module.exports = {
    createPeliculaSchema,
    updatePeliculaSchema,
    getPeliculaSchema
}