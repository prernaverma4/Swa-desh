const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    artisan: { type: mongoose.Schema.Types.ObjectId, ref: 'Artisan', required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    stock: { type: Number, default: 0 },
    image: { type: String },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
