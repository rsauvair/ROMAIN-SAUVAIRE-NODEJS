const mongoose = require('mongoose');

// Connecting to the db
mongoose.connect('mongodb://localhost/socksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to the sal database'))
    .catch(err => console.error(`Error connecting to the sal db: ${err}`));

// Exporting all models
module.exports.Sock = require('./sock');
