
const mongoose = require('mongoose');

const RefrescoSchema = new mongoose.Schema({
    codigo:{
        type:Number,
        require:true
    },
    nombre:{
    type:String,
    required:true
    },
    descripcion:{
        type:String,
        required:true
        },
    precio:{
        type:Number,
        require:true
    },
    fechaderegistro:{
        type:Date,
        require:true
    
    }
})

const Refre = mongoose.model('Refre', RefrescoSchema);

module.exports = Refre;