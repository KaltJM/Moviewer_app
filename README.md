# Moviewer App

## Description

RESTful Api para realizar consultas a una base de datos SQL y manejar información de películas (nombre, género, fecha de lanzamiento, ) por medio de métodos HTTP y transferencia de información a través de formato JSON. <br><br>
## Getting Started

### Dependencies

* Windows(?, Javascript, Node.js con Express, PostgreSQL, Postman (o algún servicio para usar métodos HTTP).<br><br>

### Installing

https://github.com/KaltJM/Moviewer_app/tree/main<br><br>

### Executing program

- Instalar dependencias a través del terminal:<br>
  - npm install express pg<br>
  (para devs):<br>
  - npm install express pg<br>
  - npm install  @types/express @types/nodes nodemon -D<br><br>


- Ejecución:<br>
   - npm run start

   (para devs):<br>
   - npm run nodemon (refresco constante a medida que se realizan modificaciones)<br><br>


- Uso:<br><br>
  Por medio de Postman, realizar una petición HTTP a través de las siguientes rutas:
  - GET /movies<br>
    Retorna todas las películas de la base de datos en formato JSON.<br><br>
  - GET /movies?genre=*géneroPorBuscar*<br>
    Retorna desde la base de datos en formato JSON todas las películas<br>que pertenezcan al género establecido como parámetro.<br><br>
  - POST /movies<br>
    Crea una nueva película con la información en formato JSON por medio de las keys ("nombre", "fecha_de_lanzamiento", "costo_de_creacion", "genero")<br><br>
  - PUT /movies/:*id*<br>
    Actualiza una película existente en la base de datos por medio de su respectiva id,<br>se registra la información provista en un formato JSON
    por medio de las keys ("nombre", "fecha_de_lanzamiento", "costo_de_creacion", "genero").<br><br>
  - DELETE /movies/:*id*<br>
    Elimina una película existente en la base de datos por medio de su respectiva id.<br>



## Help

- documentación, pruebas, etc<br>

## Authors
Ing. Jonathan Matheus<br>


## Acknowledgments

* [Beaufort Tek](github.com/austinbeaufort)
* [Fazt](faztweb.com)
