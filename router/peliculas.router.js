//Crear un enrutador de express
const router = require('express').Router();
const {validatorHandler} = require('../middlewares/validator.handler');
const { getPeliculaSchema, createPeliculaSchema, updatePeliculaSchema } = require('../schemas/peliculas.schema');
//Importar el controlador de eventos
const service = require('../services/peliculas.service');

//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const peliculas = await service.index()
    res.json(peliculas);
});


router.get('/:id', 
validatorHandler(getPeliculaSchema, 'params'), async (req,res)=>{
    const id = req.params.id
    const peliculas = await service.show(id)
    res.json(peliculas)

});

router.post('/',validatorHandler(createPeliculaSchema, 'body')
, async (req,res)=>{
    const body = req.body
    const peliculas = await service.store(body)
    res.json(peliculas)
});

router.put('/:id', validatorHandler(updatePeliculaSchema, 'body'), async (req,res)=>{
    const id = req.params.id
    const body = req.body
    const peliculas = await service.update(id, body)
    res.json(peliculas)
});

router.delete('/:id', validatorHandler(getPeliculaSchema, 'params'), async (req,res)=>{
    const id = req.params.id
    const peliculas = await service.destroy(id)
    res.json(peliculas)
});

//Exportar el enrutador
module.exports = router;