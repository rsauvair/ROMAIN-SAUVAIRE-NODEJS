const mongoose = require('mongoose');

// Schema
const bikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 200
    },
    brand: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 150
    },
    accessories: {
        type: [String],
        required: true,
        enum: [
            'front basket',
            'back basket',
            'rear view mirror',
            'flowers',
            'premium tires',
            'bell',
            'bag',
            'pump',
        ],
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    releaseDate: {
        type: Date,
        required: false,
        default: Date.now(),
    },
    isElectric: {
        type: Boolean,
        required: false,
        default: false,
    },
});

// Model
const Bikes = mongoose.model('Bike', bikeSchema);

// Export
module.exports = Bikes;
