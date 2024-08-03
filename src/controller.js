const pool = require('./database.js')
const query = require('./queries.js')

function getMovies (req,res) {
    pool.query(query.getMovies,function (error,results) {
        if (error){
            throw error;
        }
        else if (req.query.genre){
            var movies = [];
            for(let i = 0; i < results.rows.length; i++){
                genero_movie = results.rows[i].genero;
                genero_peticion = req.query.genre;
                if (results.rows[i].genero){
                    if (genero_movie == genero_peticion){
                        movies.push(results.rows[i])
                    }
                }
            }
            res.send(movies)
        }
        else{
            res.send(results.rows)
        }
    });
}

function insertMovie (req,res) {

    const {nombre, costo_de_creacion, genero, fecha_de_lanzamiento} = req.body;
    pool.query(query.insertMovie,[nombre,fecha_de_lanzamiento,costo_de_creacion,genero], function (error) {
        if (error){
            throw error;
        }
        else{
            pool.query(`select * from pelicula where nombre = $1`,[nombre],function (error,results) {
                if (error){
                    throw error;
                }
                else{
                    res.status(200).json(results.rows);
                }
            });
        }
    });
}

function deleteMovie (req,res) {
    pool.query(query.deleteMovie,[req.params.id],function(error,results){
        if (error){
            throw error;
        }else{
            res.status(200).send('Eliminado satisfactoriamente.');
        }
    });
}

function updateMovie (req,res) {
    const {nombre,fecha_de_lanzamiento,costo_de_creacion,genero} = req.body;
    pool.query(query.updateMovie,[nombre,fecha_de_lanzamiento,costo_de_creacion,genero,req.params.id], function (error) {
        if (error){
            throw error;
        }
        else{
            res.status(200).send(req.body);
        }
    });
}

function checkMovieExists (req,res) {
    switch(req.method){
        case 'POST':
            pool.query(query.checkMovieExistsbyNombre,[req.body.nombre],function(error,results){
                if (error){
                    throw error;
                }
                else{
                    if (results.rows.length){
                        res.status(200).send('Movie already in database');
                    }
                    else{
                        insertMovie(req,res);
                    }
                }
            })
            break;
        
        case 'DELETE':
            pool.query(query.checkMovieExistsbyid,[req.params.id],function(error,results){
                if (error){
                    throw error;
                }
                else{
                    if (results.rows.length){
                        deleteMovie(req,res);
                    }
                    else{
                        res.status(200).send('Movie not in database yet');
                    }
                }
            })
            break;

        case 'PUT':
            pool.query(query.checkMovieExistsbyid,[req.params.id],function(error,results){
                if (error){
                    throw error;
                }
                else{
                    if (results.rows.length){
                        updateMovie(req,res);
                    }
                    else{
                        res.status(404).send('Movie not in database yet');
                    }
                }
            })
            break;
    }
}

module.exports = {getMovies, checkMovieExists};