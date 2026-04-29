const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const karnatakaSites = [
  {
    name: "Mysore Palace",
    state: "Karnataka",
    district: "Mysuru",
    category: "Palace",
    annualVisitors: 6000000,
    views: 50000,
    description: "A historical palace and a royal residence within Mysore, known for its stunning Indo-Saracenic architecture.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg",
  },
  {
    name: "Hampi Monuments",
    state: "Karnataka",
    district: "Vijayanagara",
    category: "Monument",
    annualVisitors: 1500000,
    views: 35000,
    description: "A UNESCO World Heritage Site featuring ruins of the magnificent Vijayanagara Empire, including the Virupaksha Temple.",
    image: "https://images.staybook.in/things-to-do/group-of-monuments-at-hampi-admission/5.jpg",
  },
  {
    name: "Gol Gumbaz",
    state: "Karnataka",
    district: "Vijayapura",
    category: "Monument",
    annualVisitors: 1000000,
    views: 20000,
    description: "The mausoleum of Mohammed Adil Shah, notable for its massive dome and whispering gallery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_tGfaVluuEZ_E4bfhPybqH2FoNczjlqSaQ&s",
  },
  {
    name: "Pattadakal Monuments",
    state: "Karnataka",
    district: "Bagalkote",
    category: "Temple",
    annualVisitors: 800000,
    views: 18000,
    description: "A complex of 7th and 8th century CE Hindu and Jain temples representing the pinnacle of Chalukyan architecture.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/pattadakal-bagalkote-karnataka-3-attr-hero?qlt=82&ts=1726717445346",
  },
  {
    name: "Badami Cave Temples",
    state: "Karnataka",
    district: "Bagalkote",
    category: "Caves",
    annualVisitors: 900000,
    views: 19000,
    description: "A complex of Hindu and Jain cave temples located at Badami, showcasing rock-cut architecture of the Chalukya dynasty.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6oqBjEdDlVOcdm6pD0ex1Js-zUDJEVDpIw&s",
  },
  {
    name: "Gommateshwara Statue",
    state: "Karnataka",
    district: "Hassan",
    category: "Monument",
    annualVisitors: 500000,
    views: 12000,
    description: "A 57-foot tall monolithic statue situated in Shravanabelagola, dedicated to the Jain figure Bahubali.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Gomateshwara_Statue%2C_Karkala.jpg",
  },
  {
    name: "Bidar Fort",
    state: "Karnataka",
    district: "Bidar",
    category: "Fort",
    annualVisitors: 400000,
    views: 9000,
    description: "A massive fort featuring the historic Bahmani monuments including palaces, mosques and the Madrasa of Mahmud Gawan.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/bidar-fort-bidar-1-attr-hero?qlt=82&ts=1726719091243",
  },
  {
    name: "Hoysaleswara Temple",
    state: "Karnataka",
    district: "Hassan",
    category: "Temple",
    annualVisitors: 700000,
    views: 16000,
    description: "A 12th-century Hindu temple located in Halebidu, acclaimed for its intricate detailed carvings.",
    image: "https://www.gudlu.in/blog/wp-content/uploads/2023/03/overview-4.jpg",
  },
  {
    name: "Chennakeshava Temple",
    state: "Karnataka",
    district: "Hassan",
    category: "Temple",
    annualVisitors: 750000,
    views: 17000,
    description: "Located in Belur, this magnificent star-shaped temple is a masterpiece of Hoysala architecture.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Le_temple_de_Chennakesava_%28Somanathapura%2C_Inde%29_%2814465165685%29.jpg",
  },
  {
    name: "Bangalore Palace",
    state: "Karnataka",
    district: "Bengaluru",
    category: "Palace",
    annualVisitors: 1200000,
    views: 22000,
    description: "A royal palace known for its Tudor Revival style architecture, extensive wooden interiors, and beautiful gardens.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bangalore_Mysore_Maharaja_Palace.jpg",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(karnatakaSites);

    console.log("Successfully inserted Karnataka Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
