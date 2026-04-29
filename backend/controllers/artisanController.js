const Artisan = require('../models/Artisan');

exports.getArtisans = async (req, res) => {
    try {
        const { state, district, search, craft } = req.query;
        let query = {};

        if (state) query.state = state;
        if (district) query.district = district;
        if (craft) query.craft = craft;
        if (search) query.name = { $regex: search, $options: 'i' };

        const artisans = await Artisan.find(query);

        res.json(artisans);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getArtisanById = async (req, res) => {
    try {
        const artisan = await Artisan.findById(req.params.id);

        if (!artisan)
            return res.status(404).json({ message: 'Artisan not found' });

        res.json(artisan);

    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId')
            return res.status(404).json({ message: 'Artisan not found' });

        res.status(500).json({ message: 'Server Error' });
    }
};

exports.addArtisan = async (req, res) => {
    try {
        const newArtisan = new Artisan(req.body);

        const artisan = await newArtisan.save();

        res.json(artisan);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateArtisan = async (req, res) => {
    try {

        let artisan = await Artisan.findById(req.params.id);

        if (!artisan)
            return res.status(404).json({ message: 'Artisan not found' });

        artisan = await Artisan.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.json(artisan);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteArtisan = async (req, res) => {
    try {

        let artisan = await Artisan.findById(req.params.id);

        if (!artisan)
            return res.status(404).json({ message: 'Artisan not found' });

        await Artisan.findByIdAndDelete(req.params.id);

        res.json({ message: 'Artisan removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};