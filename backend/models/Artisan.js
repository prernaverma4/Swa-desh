const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
    name: { type: String, required: true },
    craft: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String },
    image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Artisan', artisanSchema);
