const mongoose = require('./index')

const panierSchema = new mongoose.Schema({
    id: Number,
    parentId: Number
})

module.exports = mongoose.model('Panier', panierSchema)