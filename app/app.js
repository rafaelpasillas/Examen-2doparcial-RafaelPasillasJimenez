const express = require('express');
const  rutasVinos = require('./rutas/rutasVinos');
const  rutasCoca = require('./rutas/rutasCoca');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/Vino',rutasVinos);

app.use('/CocaCola',rutasCoca);




module.exports = app;