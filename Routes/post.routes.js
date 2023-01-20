const express = require('express');
const multer = require('multer'); //Requiero la libreria multer
const fs = require('fs')

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => { //Renombrano el archivo subido
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];//Extraigo la extension

            cb(null, `${fileName}${fileExtension}`)
        }
    }),
});//Carpeta de destino de las imagenes 

const film = require('../src/models/film'); //Importo el modelo de la carpeta models
const { extname } = require('path');

const rutaPost = express.Router() //Creo una nueva ruta para el metodo post

rutaPost.post('/create/add', upload.single('img'), async (req, res) => {

    const newFilm = film({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        genero: req.body.genero,
        img: req.file.path
    }) //Guardar el la información de mi formulario en mi modelo creado anteriormente

    const guardarModelo = await newFilm.save() //Guardar daos del modelo

    console.log(guardarModelo)
    console.log(req.file)
    res.redirect('/')
})


//Enrutador para editar almacenar los datos de la edicion


rutaPost.post('/edit/:id', async (req, res) => {
    //Editar y cambiar los datos , una vez que encuentre el id editar los datos que hemos actualizado

    await film.findByIdAndUpdate(req.params.id, req.body)

    console.log(req.body)
    res.redirect('/')
})



module.exports = rutaPost; //Exporto la ruta post