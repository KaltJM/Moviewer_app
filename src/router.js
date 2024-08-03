const router = require('express').Router();
const controller = require('./controller.js'); //Para realizar operaciones de conexión a la DB

/* Módulo de Rutas establecidas para el funcionamiento de la aplicación */

router.get('/movies', controller.getMovies); //Para este método se realiza búsqueda general y específica (género)
router.post('/movies', controller.checkMovieExists);
router.delete('/movies/:id',controller.checkMovieExists);
router.put('/movies/:id',controller.checkMovieExists);


module.exports = router;