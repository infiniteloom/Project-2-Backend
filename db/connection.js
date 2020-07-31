

  
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/gifs', { useNewUrlParser: true })
mongoose.Promise = Promise

module.exports = mongoose