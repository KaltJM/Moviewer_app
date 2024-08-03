const http = require('http');
const express = require('express');
const router = require('./src/router.js');

const app = express();
app.use(express.json());
const port  = (process.env.port)? process.env.port:3000;

app.use('', router);
app.use((req, res) => {
    res.status(404).send('ERROR 404: Dirección no localizada')
  });

app.listen(port);
console.log(`pilas en el ${port}`);
