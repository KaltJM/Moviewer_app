const router = require('express').Router();
const controller = require('./controller.js');

router.post('/movies', controller.checkMovieExists);
router.get('/movies', controller.getMovies);
router.delete('/movies/:id',controller.checkMovieExists);
router.put('/movies/:id',controller.checkMovieExists);


module.exports = router;