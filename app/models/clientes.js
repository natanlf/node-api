const mongoose = require("mongoose");

/*const clientSchema = mongoose.Schema({
    renach: { type: String, required: true },
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    pagamentos: { type: Array, required: true }
    
});*/

const pagSchema = new mongoose.Schema({ servico: String, status: String });
const clientSchema = new mongoose.Schema({
    renach: { type: String, required: true },
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    pagamentos: [pagSchema]
});

module.exports = mongoose.model("Client", clientSchema);