const mongoose = require('mongoose');

// Schema
const sockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 250
    },
    brand: {
        type: String,
        required: true,
    },
    colors: {
        type: [String],
        required: true,
        enum: ['black', 'red', 'yellow', 'blue', 'green', 'rainbow'],
    },
    stock: {
        type: Number,
        default: 0,
        min: 0,
    },
    isMadeInFrance: {
        type: Boolean,
        default: false,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
});

// Model
const Sock = mongoose.model('Sock', sockSchema);

// Export
module.exports = Sock;
