const pool = require('./database.js'); //Para manejar la información directa de la DB
const query = require('./queries.js'); //Para realizar consultas a la DB

/* Módulo para el manejo de peticiones HTTP */

/*Función que dirige la búsqueda de las películas*/
function getMovies(req, res) {
	pool.query(query.getMovies, function (error, results) {
		if (error) {
			throw error; //Default callback para captura de errores
		} else if (req.query.genre) {
			//Filtro para la búsqueda específica
			var movies = [];
			for (let i = 0; i < results.rows.length; i++) {
				//Recorrido de lista de películas existentes en la DB

				genero_movie = results.rows[i].genero; //Género de pelicula i en la lista
				genero_peticion = req.query.genre; //Género consultado

				if (results.rows[i].genero) {
					//Filtro de objetos en  lista de películas (revisar)
					if (genero_movie == genero_peticion) {
						movies.push(results.rows[i]); //Se guardan solo las películas del género consultado
					}
				}
			}
            if(movies.length == 0){
			    return res.status(400).send('no movies found in this genre');
            }
            else{
			    return res.status(200).send(movies); //Envío al cliente de las películas del género consultado
            }
		} else {
			//Búsqueda general
			return res.status(200).send(results.rows);
		}
	});
}

/*Función que crea una película en la DB*/
function insertMovie(req, res) {
	const { nombre, costo_de_creacion, genero, fecha_de_lanzamiento } =
		req.body; //Guardado de elementos del JSON enviado por el cliente
	pool.query(
		query.insertMovie,
		[nombre, fecha_de_lanzamiento, costo_de_creacion, genero], //Parámetros de consulta
		function (error) {
			//Uso de consulta para guardar película en DB
			if (error) {
				throw error;
			} else {
				//Código para obtener la película una vez guardada en la DB (con id)
				pool.query(
					`select * from pelicula where nombre = $1`,
					[nombre],
					function (error, results) {
						if (error) {
							throw error;
						} else {
							res.status(200).json(results.rows);
						}
					}
				);
			}
		}
	);
}

/*Función para eliminar una película existente*/
function deleteMovie(req, res) {
	pool.query(
		query.deleteMovie,
		[req.params.id], //Se usa id del request (endpoint)
		function (error, results) {
			if (error) {
				throw error;
			} else {
				res.status(200).send('Eliminado satisfactoriamente.'); // :D
			}
		}
	);
}

/*Función para la actualización (o reemplazo) de película existente basado en su id*/
function updateMovie(req, res) {
	const { nombre, fecha_de_lanzamiento, costo_de_creacion, genero } =
		req.body; //Parámetros del request
	pool.query(
		query.updateMovie,
		[
			nombre,
			fecha_de_lanzamiento,
			costo_de_creacion,
			genero,
			req.params.id,
		], //Parámetros de consulta (ojo id)
		function (error) {
			if (error) {
				throw error;
			} else {
				res.status(200).send(req.body); //Envío al cliente de la correcta actualización de la película
			}
		}
	);
}

/*Función utilizada al iniciar métodos HTTP para verificar que la película a consultar existe (de ser necesario)*/
function checkMovieExists(req, res) {
	switch (
		req.method //Dependiendo de operación a realizar
	) {
		case 'POST':
			pool.query(
				query.checkMovieExistsbyNombre,
				[req.body.nombre],
				function (error, results) {
					//Verificar que existe (nombre)
					if (error) {
						throw error;
					} else {
						if (results.rows.length) {
							//Filtro para saber si existe
							res.status(200).send('Movie already in database'); //No se realiza operación
						} else {
							insertMovie(req, res); //Se crea la película
						}
					}
				}
			);
			break;

		case 'DELETE':
			pool.query(
				query.checkMovieExistsbyid,
				[req.params.id],
				function (error, results) {
					//Verificar que existe (id)
					if (error) {
						throw error;
					} else {
						if (results.rows.length) {
							//Se elimina la película
							deleteMovie(req, res);
						} else {
							res.status(200).send('Movie not in database yet'); //No se realiza operación
						}
					}
				}
			);
			break;

		case 'PUT':
			pool.query(
				query.checkMovieExistsbyid,
				[req.params.id],
				function (error, results) {
					//Verificar que existe (id)
					if (error) {
						throw error;
					} else {
						if (results.rows.length) {
							//Se actualiza la película
							updateMovie(req, res);
						} else {
							res.status(404).send('Movie not in database yet'); //No se realiza operación
						}
					}
				}
			);
			break;
	}
}

module.exports = {
	getMovies,
	checkMovieExists,
	insertMovie,
	updateMovie,
	deleteMovie,
};
