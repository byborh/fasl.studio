const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/admin', { user: 'root', pass: 'example' })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;