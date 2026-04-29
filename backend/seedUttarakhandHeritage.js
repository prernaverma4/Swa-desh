const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const uttarakhandSites = [
  {
    name: "Kedarnath Temple",
    state: "Uttarakhand",
    district: "Rudraprayag",
    category: "Temple",
    annualVisitors: 1500000,
    views: 50000,
    description: "A highly revered Hindu temple dedicated to Lord Shiva, located in the Garhwal Himalayan range near the Mandakini river.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg",
  },
  {
    name: "Badrinath Temple",
    state: "Uttarakhand",
    district: "Chamoli",
    category: "Temple",
    annualVisitors: 1800000,
    views: 55000,
    description: "A Hindu temple dedicated to Lord Vishnu, one of the Chardham pilgrimage sites situated along the Alaknanda River.",
    image: "https://travelvaidya.com/blog/wp-content/uploads/2025/07/ChatGPT-Image-Jul-8-2025-05_08_04-PM.png.webp",
  },
  {
    name: "Jageshwar Temples",
    state: "Uttarakhand",
    district: "Almora",
    category: "Temple",
    annualVisitors: 300000,
    views: 15000,
    description: "A group of over 100 Hindu temples dating between 7th and 12th century near Almora, showcasing Nagara style architecture.",
    image: "https://www.chirpinghillsresort.com/wp-content/uploads/2025/05/jageshwar-dham.jpg",
  },
  {
    name: "Baijnath Temple",
    state: "Uttarakhand",
    district: "Bageshwar",
    category: "Temple",
    annualVisitors: 200000,
    views: 12000,
    description: "A complex of stone temples situated on the banks of Gomati River, famously built by the Katyuri kings.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Shiva_temple_baijnath_HP.jpg",
  },
  {
    name: "Koteshware Mahadev",
    state: "Uttarakhand",
    district: "Rudraprayag",
    category: "Temple",
    annualVisitors: 400000,
    views: 20000,
    description: "The highest Shiva temple in the world, closely connected with the Panch Kedar temples, located just below the peak of Chandrashila.",
    image: "https://www.chardhamtour.in/blog/wp-content/uploads/2024/03/Koteshwar-Mahadev-Temple-Rudraprayag.jpg",
  },
  {
    name: "Hemkund Sahib",
    state: "Uttarakhand",
    district: "Chamoli",
    category: "Temple",
    annualVisitors: 600000,
    views: 25000,
    description: "A revered Sikh place of worship and pilgrimage site set amidst the Himalayas next to a glacial lake.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Hemkunt-003.jpg",
  },
  {
    name: "Katarmal Sun Temple",
    state: "Uttarakhand",
    district: "Almora",
    category: "Temple",
    annualVisitors: 150000,
    views: 8000,
    description: "A 9th-century Surya (Sun) temple noted for its exquisite architecture, built by the Katyuri Kings.",
    image: "https://assets.cntraveller.in/photos/61f9153c5dabee8b6de788c9/master/pass/katarmal%20temple%20lead.jpg",
  },
  {
    name: "Lakhamandal Temple",
    state: "Uttarakhand",
    district: "Dehradun",
    category: "Temple",
    annualVisitors: 100000,
    views: 5000,
    description: "An ancient Hindu temple complex dedicated to Shiva, associated with the Mahabharata epic.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c2/fb/3a/caption.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Dronasagar Lake & Fort Ruins",
    state: "Uttarakhand",
    district: "Udham Singh Nagar",
    category: "Fort",
    annualVisitors: 250000,
    views: 10000,
    description: "A lake associated with ancient Indian sage Dronacharya, bordered by temples and ruins in Kashipur.",
    image: "https://www.chardhamtours.in/gallery/cityImage/1463123353_Drona%20Sagar.jpg",
  },
  {
    name: "Pithoragarh Fort",
    state: "Uttarakhand",
    district: "Pithoragarh",
    category: "Fort",
    annualVisitors: 80000,
    views: 4000,
    description: "A fort constructed by the Gorkhas in 1789, situated on a hill on the outskirts of the town.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVYmGqoLxA9E54Xo2JBHGR0puhDZ3_g6cyg&s",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(uttarakhandSites);

    console.log("Successfully inserted Uttarakhand Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
