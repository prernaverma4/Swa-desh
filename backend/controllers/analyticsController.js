const HeritageSite = require('../models/HeritageSite');
const Artisan = require('../models/Artisan');
const User = require('../models/User');

exports.getDashboardStats = async (req, res) => {
    try {
        const sitesCount = await HeritageSite.countDocuments();
        const artisansCount = await Artisan.countDocuments();

        const statesData = await HeritageSite.distinct('state');
        const statesCovered = statesData.length;

        // Dummy logic for Annual Visitors summing up
        const sites = await HeritageSite.find();
        const annualVisitors = sites.reduce((acc, site) => acc + (site.annualVisitors || 0), 0);

        // Economic Impact (dummy calculation for now)
        const tourismRevenue = annualVisitors * 50;
        const artisanRevenue = artisansCount * 10000;
        const totalEconomicImpact = tourismRevenue + artisanRevenue;

        // Chart Data (dummy)
        const visitorTrends = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            data: [12000, 19000, 15000, 22000, 30000, 28000]
        };

        // State-wise Artisan Distribution (aggregation)
        const artisanDistribution = await Artisan.aggregate([
            { $group: { _id: "$state", count: { $sum: 1 } } }
        ]);

        res.json({
            sitesCount,
            artisansCount,
            statesCovered,
            annualVisitors,
            economicImpact: {
                tourismRevenue,
                artisanRevenue,
                totalEconomicImpact
            },
            visitorTrends,
            artisanDistribution: {
                labels: artisanDistribution.map(d => d._id),
                data: artisanDistribution.map(d => d.count)
            }
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
