// const mongo = require('./index')

// module.exports = mongo.model('user', { 
//     mail: String,
//     password: String
// });

const mongoose = require('./index');

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);