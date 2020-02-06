const mongoose = require('mongoose');

// Connecting to the db
mongoose.connect('mongodb://localhost/bikesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error(`Error connecting to the db: ${err}`));

// Exporting all models
module.exports.Bike = require('./bikes');
