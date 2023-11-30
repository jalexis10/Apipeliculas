const enviarCorreo = require('./correo.service');
const {models} = require('../libs/sequelize')

//Funcion para listar todos los eventos
async function index() {
    const pelicula = await models.pelicula.findAll();
    return pelicula;
}

//Funcion para crear un nuevo evento
async function store(body) {
    try {
    // Lógica para almacenar el registro en la base de datos
    const nuevaPelicula = await models.pelicula.create(body);

    // Enviar correo electrónico después de crear el registro
    const destinatario = 'jose.34172688@ucaldas.edu.co'; 
    const asunto = 'Nueva película creada';
    const contenido = `<p>Se ha creado una nueva película con el título: ${nuevaPelicula.pelicula_titulo}</p>`;

    await enviarCorreo(destinatario, asunto, contenido);

    return nuevaPelicula;
  } catch (error) {
    console.error('Error al almacenar la película:', error);
    throw error;
  }
}


//Funcion para mostrar un evento
async function show(id) {
    const pelicula = await models.pelicula.findByPk(id);
    return pelicula;
}

//Funcion para actualizar un evento
async function update(id, body) {
    const [affectedRows, [updatedPelicula]] = await models.pelicula.update(body, {
        where: {
            id
        },
        returning: true
    });
    return updatedPelicula;
}

//Funcion para eliminar un evento
async function destroy(id) {
    const pelicula = await models.pelicula.findByPk(id);
    const deletedPelicula = await models.pelicula.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedPelicula){
        return pelicula;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}