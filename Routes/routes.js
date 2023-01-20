const express = require('express');
const film = require('../src/models/film');

//Crear el nombre de la ruta
const rutas = express.Router()


rutas.get('/', async (req, res) => {

    const listModel = await film.find().lean() //Convierto toda mi informacion en un objeto
    //La propiedad lean() me devuelve una lista tipica de JavaScript y no una tradicional de mongoDB
    console.log(listModel)


    res.render('index', { info: listModel })//Creo mi arreglo
});

rutas.get('/create', (req, res) => {
    res.render('create')
})

//Ruta para editar
rutas.get('/edit/:id', async (req, res) => {

    const pelicula = await film.findById(req.params.id).lean()


    res.render('edit', { pelicula })
})

//Ruta para eliminar

rutas.get('/delete/:id', async (req, res) => {

    await film.findByIdAndDelete(req.params.id, req.body)

    res.redirect("/")
})

//Exportar una ruta
module.exports = rutas;

