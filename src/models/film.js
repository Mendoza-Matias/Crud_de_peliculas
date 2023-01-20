const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')

const filmModel = new Schema({
    nombre: String,
    genero: String,
    fecha: Number,
    img: String
}, {
    timestamps: true
})

module.exports = mongoose.model('film', filmModel)  //Creo la colleccion film en mongodb