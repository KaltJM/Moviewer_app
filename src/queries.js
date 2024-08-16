/* Módulo para almacenar consultas SQL para base de datos */

getMovies = 'SELECT * from Pelicula;'; //Consulta para búsqueda general de películas

getMoviesbyGenero = 'SELECT * from Pelicula where genero = $1;'; //Consulta para búsqueda específica por género

insertMovie = `insert into Pelicula(nombre,fecha_de_lanzamiento,costo_de_creacion,genero)
               values ($1,$2,$3,$4)`; //Consulta para creación de película

checkMovieExistsbyNombre = `select * from Pelicula
                            where Nombre = $1`; //Verificación existencia por nombre (mejorar)

checkMovieExistsbyid = `select * from Pelicula
                        where id = $1`; //Verificación existencia por id (mejorar)

deleteMovie = `delete from Pelicula where id = $1`; //Elimincación de película por id

updateMovie = `update Pelicula
               set nombre = $1, fecha_de_lanzamiento = $2, costo_de_creacion = $3, genero = $4
               where id = $5`; //Actualización (o reemplazo) )de película por id

module.exports = {
	getMovies,
	insertMovie,
	checkMovieExistsbyNombre,
	checkMovieExistsbyid,
	updateMovie,
	deleteMovie,
};
