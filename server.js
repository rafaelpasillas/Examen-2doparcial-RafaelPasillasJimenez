const app  = require ('./app/app');
const CONFIG = require ('./app/configuracion/config');
const morgan = require('morgan');
const conexion = require('./app/configuracion/conexion');



app.use(morgan('dev'));

app.listen(CONFIG.PORT,function(erro){
    if(erro) return console.log(error);
    console.log(`servidor en el puerto ${CONFIG.PORT}`);

});


conexion.connect();