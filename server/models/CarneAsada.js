const mongoose = require ('mongoose')

const CarneAsadaSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    Orders:{
        type: Number,
        required: true,
    },
    
});
const CarneAsada = mongoose.model("Food", CarneAsadaSchema);
module.exports = CarneAsada;

