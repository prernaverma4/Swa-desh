const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const rajasthanSites = [
  {
    name: "Amer Fort",
    state: "Rajasthan",
    district: "Jaipur",
    category: "Fort",
    annualVisitors: 2500000,
    views: 45000,
    description: "A majestic fort built with pale yellow and pink sandstone, and white marble, located high on a hill.",
    image: "https://www.swantour.com/blogs/wp-content/uploads/2018/09/Amer-Fort.jpg",
  },
  {
    name: "Hawa Mahal",
    state: "Rajasthan",
    district: "Jaipur",
    category: "Monument",
    annualVisitors: 2000000,
    views: 38000,
    description: "The Palace of Winds, a five-storey exterior akin to a honeycomb with its 953 small windows called Jharokhas.",
    image: "https://www.maharajatrails.com/public/images/attractions/hawa-mahal-jaipur-rajasthan.webp",
  },
  {
    name: "City Palace",
    state: "Rajasthan",
    district: "Udaipur",
    category: "Palace",
    annualVisitors: 1500000,
    views: 30000,
    description: "A palace complex built over a period of nearly 400 years, located peacefully on the banks of Lake Pichola.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-1-new-attr-hero?qlt=82&ts=1742171011440",
  },
  {
    name: "Jaisalmer Fort",
    state: "Rajasthan",
    district: "Jaisalmer",
    category: "Fort",
    annualVisitors: 1000000,
    views: 25000,
    description: "A massive yellow sandstone fortification that is one of the very few living forts in the world.",
    image: "https://img.hexahome.in/media/blogs/hexahome-blogs/jaisalmer-fort/hero-section.webp",
  },
  {
    name: "Mehrangarh Fort",
    state: "Rajasthan",
    district: "Jodhpur",
    category: "Fort",
    annualVisitors: 1200000,
    views: 28000,
    description: "One of the largest forts in India, built in around 1459 by Rao Jodha, the fort is situated 410 feet above the city.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg",
  },
  {
    name: "Kumbhalgarh Fort",
    state: "Rajasthan",
    district: "Rajsamand",
    category: "Fort",
    annualVisitors: 800000,
    views: 18000,
    description: "A Mewar fortress known for having the second largest continuous wall in the world after the Great Wall of China.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Kumbhalgarh_055.jpg",
  },
  {
    name: "Chittorgarh Fort",
    state: "Rajasthan",
    district: "Chittorgarh",
    category: "Fort",
    annualVisitors: 900000,
    views: 20000,
    description: "One of the largest forts in India and a UNESCO World Heritage Site, bearing the scars of devastating historical sieges.",
    image: "https://static.toiimg.com/photo/50900339.cms",
  },
  {
    name: "Jal Mahal",
    state: "Rajasthan",
    district: "Jaipur",
    category: "Palace",
    annualVisitors: 1800000,
    views: 32000,
    description: "A palace situated in the middle of the Man Sagar Lake in Jaipur city, providing a picturesque view.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c4/72/f6/jal-mahal-jaipur-tour.jpg?w=900&h=500&s=1",
  },
  {
    name: "Jantar Mantar",
    state: "Rajasthan",
    district: "Jaipur",
    category: "Monument",
    annualVisitors: 1200000,
    views: 22000,
    description: "A collection of 19 architectural astronomical instruments built by the Rajput king Sawai Jai Singh II.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jantar_Mantar_at_Jaipur.jpg",
  },
  {
    name: "Ranthambore Fort",
    state: "Rajasthan",
    district: "Sawai Madhopur",
    category: "Fort",
    annualVisitors: 600000,
    views: 15000,
    description: "A formidable fort situated within the Ranthambore National Park, known for the historic glory and valor of the Chauhans.",
    image: "https://cdn.cholantours.com/city_attraction_todos/1773148040_ranthambore-fort.webp",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(rajasthanSites);

    console.log("Successfully inserted Rajasthan Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
