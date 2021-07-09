const mongoose = require('mongoose');
const CONFIG = require('../configuracion/config')

module.exports={
connection  :null,
connect: function(){
    if(this.connection) return this.connection
    return mongoose.connect(CONFIG.BD).then(conexion =>{
        this.connection = conexion;
        conexion
    })
}
}