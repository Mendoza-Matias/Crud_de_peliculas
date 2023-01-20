const express = require('express');
const { engine } = require('express-handlebars');
const moongose = require('mongoose');
const multer = require('multer');
const fs = require('fs')
const img = multer({ dest: 'public/images' });

//-----------------------
const rutaPost = require('..//Routes/post.routes');
const rutas = require('../Routes/routes');



const app = express();
//-------------------Handlebars

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

//----------Conectar la base de datos

async function connect() {
    try {
        console.log('Iniciando servidor');

        await moongose.connect('mongodb://127.0.0.1:27017/crud')

        console.log('conectado a la base de datos')

    }
    catch (err) {
        console.log(`No hubo conección ${err}`)
    }
}
connect()


//Ruta importada de routes.js-----
app.use(rutas)
app.use(rutaPost) //RUTA POST

//-----Middleware ()

app.use(express.urlencoded({ extended: true })) //Middleware para decodificar la información del formulario
app.use(express.static('./uploads/uploads'))

//Controlador del puerto
const PORT = 3000

app.listen(PORT, (err) => {
    if (err) throw new Error(`Error ${err}`)
    console.log(`Funciona el puerto ${PORT}`)
});

