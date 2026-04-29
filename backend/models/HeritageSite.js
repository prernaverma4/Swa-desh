const mongoose = require('mongoose');

const heritageSiteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    category: { type: String, required: true },
    annualVisitors: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    description: { type: String, required: true },
    location: {
        lat: { type: Number },
        lng: { type: Number }
    },
    image: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('HeritageSite', heritageSiteSchema, 'heritagesites');
