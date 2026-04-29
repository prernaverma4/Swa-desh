const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const tamilNaduSites = [
  {
    name: "Meenakshi Amman Temple",
    state: "Tamil Nadu",
    district: "Madurai",
    category: "Temple",
    annualVisitors: 5000000,
    views: 45000,
    description: "A historic Hindu temple located on the southern bank of the Vaigai River, renowned for its dazzling architecture and towering gopurams.",
    image: "https://i0.wp.com/kidsnews.top/wp-content/uploads/2021/12/Meenakshi-Amman-Temple-Wikipedia.jpg?fit=1200%2C898&ssl=1",
  },
  {
    name: "Brihadisvara Temple",
    state: "Tamil Nadu",
    district: "Thanjavur",
    category: "Temple",
    annualVisitors: 2500000,
    views: 35000,
    description: "A Hindu temple dedicated to Shiva, one of the largest South Indian temples and an outstanding example of fully realized Dravidian architecture.",
    image: "https://cdn.britannica.com/66/250066-050-B34A9532/Brihadishvara-Temple-Thanjavur-Tamil-Nadu-India.jpg",
  },
  {
    name: "Shore Temple",
    state: "Tamil Nadu",
    district: "Chengalpattu",
    category: "Temple",
    annualVisitors: 2000000,
    views: 30000,
    description: "Built with blocks of granite, dating from the 8th century AD, it overlooks the shore of the Bay of Bengal.",
    image: "https://www.indiantempletour.com/wp-content/uploads/2022/11/Sea_shore_temple_1_mahabalipuram.jpg",
  },
  {
    name: "Ramanathaswamy Temple",
    state: "Tamil Nadu",
    district: "Ramanathapuram",
    category: "Temple",
    annualVisitors: 4000000,
    views: 28000,
    description: "A Hindu temple dedicated to the god Shiva located on Rameswaram island, it has the longest corridor among all Hindu temples in India.",
    image: "https://www.daiwikhotels.com/wp-content/uploads/2024/07/newone.jpg",
  },
  {
    name: "Vivekananda Rock Memorial",
    state: "Tamil Nadu",
    district: "Kanyakumari",
    category: "Monument",
    annualVisitors: 3000000,
    views: 25000,
    description: "A popular tourist monument built in 1970 in honour of Swami Vivekananda, who is said to have attained enlightenment on the rock.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/RockMemorial.jpg",
  },
  {
    name: "Nilgiri Mountain Railway",
    state: "Tamil Nadu",
    district: "The Nilgiris",
    category: "Monument",
    annualVisitors: 500000,
    views: 15000,
    description: "A 1000 mm metre gauge railway built by the British in 1908, it relies on its fleet of steam locomotives and is a UNESCO World Heritage Site.",
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/Train-on-Nilgiri-Railway-Track.jpg",
  },
  {
    name: "Rockfort Temple",
    state: "Tamil Nadu",
    district: "Tiruchirappalli",
    category: "Fort",
    annualVisitors: 1500000,
    views: 18000,
    description: "A historic fortification and temple complex built on an ancient rock overlooking the city.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/f2/2c/52/rock-fort-temple.jpg?w=1200&h=1200&s=1",
  },
  {
    name: "Kapaleeshwarar Temple",
    state: "Tamil Nadu",
    district: "Chennai",
    category: "Temple",
    annualVisitors: 2000000,
    views: 22000,
    description: "A temple of Shiva built in characteristic Dravidian architecture, located in Mylapore area of Chennai.",
    image: "https://www.tamilnadutourism.com/images/chennai/card/kapaleeshwarar-temple.webp",
  },
  {
    name: "Vellore Fort",
    state: "Tamil Nadu",
    district: "Vellore",
    category: "Fort",
    annualVisitors: 800000,
    views: 14000,
    description: "A large 16th-century fort situated in heart of the Vellore city containing the Jalakanteshwara Temple and a state museum.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5NrO9gUNuoq3pb43Gh6-cGVb72HhCEklwQ&s",
  },
  {
    name: "Airavatesvara Temple",
    state: "Tamil Nadu",
    district: "Thanjavur",
    category: "Temple",
    annualVisitors: 1000000,
    views: 19000,
    description: "A Hindu temple of Dravidian architecture located in Darasuram, a UNESCO World Heritage site forming the 'Great Living Chola Temples'.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d8/60/3b/darasuram-airavateswara.jpg?w=900&h=500&s=1",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(tamilNaduSites);

    console.log("Successfully inserted Tamil Nadu Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
