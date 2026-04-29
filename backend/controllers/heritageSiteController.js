const HeritageSite = require('../models/HeritageSite');

exports.getHeritageSites = async (req, res) => {
    try {
        const { state, district, search } = req.query;
        let query = {};

        if (state) query.state = state;
        if (district) query.district = district;
        if (search) query.name = { $regex: search, $options: 'i' };

        const sites = await HeritageSite.find(query);
        res.json(sites);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getHeritageSiteById = async (req, res) => {
    try {
        const site = await HeritageSite.findById(req.params.id);
        if (!site) return res.status(404).json({ msg: 'Site not found' });
        res.json(site);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Site not found' });
        res.status(500).send('Server Error');
    }
};

exports.addHeritageSite = async (req, res) => {
    try {
        // Admin validation could be added here
        const newSite = new HeritageSite(req.body);
        const site = await newSite.save();
        res.json(site);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateHeritageSite = async (req, res) => {
    try {
        let site = await HeritageSite.findById(req.params.id);
        if (!site) return res.status(404).json({ msg: 'Site not found' });

        site = await HeritageSite.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(site);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteHeritageSite = async (req, res) => {
    try {
        let site = await HeritageSite.findById(req.params.id);
        if (!site) return res.status(404).json({ msg: 'Site not found' });

        await HeritageSite.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Site removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
