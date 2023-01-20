# Crud 

1. Iniciar proyecto (Crear package.json)
```sh
npm init -y
```
---
2. Instalación de dependencias

```sh
npm i express
```
---
3. Instalación de Handlebars

```sh
npm i express-handlebars
```

4. Instalación de mongoose (Conectar con la base de datos)

```sh
npm i mongoose
```
---

---
* Una vez todo instalado procedemos a crear la carpeta src y dentro un archivo index.js
---
* npm i -D (Dependencias de desarrollo)
---
 
5. Instalación de nodemon (Instalacion de un 
refrescador )
```sh
npm i nodemon -D
```
---
* Creamos un archivo .babelrc para configurar babel dependiendo del lenguaje con el que queremos trabajar
---
```
## Configuracion de index.js

```js
import express from 'express'

const app = express()

app.listen(3000)
console.log('Servidor funcionando en el puesto', 3000)
```
---

## Utilizando Node
* Iniciar el servidor con Node (Creamos un script)
### Recomendado 

### Configuracion

* Archivo package.json
```js

"scripts": {
    "dev": "nodemon src/index.js --exec babel-node"
  },

```
```sh

$ npm run dev

```
---

* Vamos a utilizar handlebars para facilitarnos la escritura de nuestro html en un archivo mas compacto y el cual podemos renderizar 

## Handlebars 

* Motor de plantilla que extiende el html con bucles , condicionales que puede ser entendido por nuestro backend el cual lo unico que muestra es una vista , generando html para el navegador. 
express no entiende un archivo html unico , por ello necesita de un motor de plantilla para servirlo

-----

* Solicitar una pagina o datos (Methot:GET)
* Guardar datos (Methot : POST)