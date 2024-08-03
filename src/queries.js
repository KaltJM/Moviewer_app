getMovies = "SELECT * from Pelicula;";
getMoviesbyGenero = "SELECT * from Pelicula where genero = $1;";
insertMovie = `insert into Pelicula(nombre,fecha_de_lanzamiento,costo_de_creacion,genero)
               values ($1,$2,$3,$4)`;
checkMovieExistsbyNombre = `select * from Pelicula
                            where Nombre = $1`;
checkMovieExistsbyid = `select * from Pelicula
                        where id = $1`;
deleteMovie = `delete from Pelicula where id = $1`;
updateMovie = `update Pelicula
               set nombre = $1, fecha_de_lanzamiento = $2, costo_de_creacion = $3, genero = $4
               where id = $5`;
module.exports = {getMovies,insertMovie,checkMovieExistsbyNombre,checkMovieExistsbyid,updateMovie,deleteMovie};