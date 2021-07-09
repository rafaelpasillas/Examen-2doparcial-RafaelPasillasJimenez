
const mongoose = require('mongoose');

const VinosSchema = new mongoose.Schema({
    nombre:{
    type:String,
    required:true
    },
    codigo:{
        type:Number,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    existencia:{
        type:Number,
        default:5
    }
})

const Vino = mongoose.model('Vino', VinosSchema);

module.exports = Vino;

