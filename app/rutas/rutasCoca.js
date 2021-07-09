
const express = require('express');
const ControladorCoca = require ('../controlador/ControladorCoca');

const Router = express.Router();

Router.get('/',ControladorCoca.index)
.post('/',ControladorCoca.crear)
.get('/:key/:value',ControladorCoca.buscar,ControladorCoca.mostrar)
.put('/:key/:value',ControladorCoca.buscar,ControladorCoca.actualizar)
.delete('/:key/:value',ControladorCoca.buscar,ControladorCoca.eliminar);

module.exports = Router;