const express = require('express'); //Framework Express Librería
const router = require('./src/router.js'); //Routers para manejo de métodos HTTP

/* Creación de aplicación */

const app = express(); //Creación de aplicación (objeto Express)
app.use(express.json()); //Middleware para usar métodos para manejo de json con Express
const port = process.env.port ? process.env.port : 3000; //Puerto a convenir

app.use('', router); //Router estándar para operaciones normales

app.use((req, res) =>
	res.status(404).send('ERROR 404: Dirección no localizada')
); //Cualquier otra ruta

app.listen(port);
console.log(`Escuchando en el puerto: ${port}`);

module.exports = app;
