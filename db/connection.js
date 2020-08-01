 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/archivista', { useNewUrlParser: true })
mongoose.Promise = Promise

module.exports = mongoose