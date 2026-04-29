const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const keralaSites = [
  {
    name: "Sree Padmanabhaswamy Temple",
    state: "Kerala",
    district: "Thiruvananthapuram",
    category: "Temple",
    annualVisitors: 3000000,
    views: 40000,
    description: "A famous Hindu temple known for its enormous wealth and intricate Dravidian and Kerala style of architecture.",
    image: "https://www.bluebirdtravels.in/wp-content/uploads/Sree-Padmanabhaswamy-Temple.1-1200x1200-cropped.jpg",
  },
  {
    name: "Bekal Fort",
    state: "Kerala",
    district: "Kasaragod",
    category: "Fort",
    annualVisitors: 800000,
    views: 15000,
    description: "The largest fort in Kerala, known for its keyhole shape and scenic views of the Arabian Sea.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ec/59/3c/bekal-fort.jpg?w=900&h=-1&s=1",
  },
  {
    name: "Mattancherry Palace",
    state: "Kerala",
    district: "Ernakulam",
    category: "Palace",
    annualVisitors: 600000,
    views: 12000,
    description: "Also known as the Dutch Palace, it features Kerala murals depicting Hindu temple art, portraits and exhibits of the Rajas of Kochi.",
    image: "https://holaciti.com/assets/place/1764406815place.webp",
  },
  {
    name: "Edakkal Caves",
    state: "Kerala",
    district: "Wayanad",
    category: "Caves",
    annualVisitors: 450000,
    views: 10000,
    description: "Prehistoric caves featuring ancient pictorial writings from the Neolithic era, situated on the Ambukuthi Hills.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Edakkal_Caves.jpg",
  },
  {
    name: "Hill Palace",
    state: "Kerala",
    district: "Ernakulam",
    category: "Palace",
    annualVisitors: 500000,
    views: 9000,
    description: "The largest archaeological museum in Kerala and the former official residence of the Maharaja of Cochin.",
    image: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fhill-palace-museum-1728479853_a4ee705d28a66f8a750e.webp&w=1920&q=75",
  },
  {
    name: "Thalassery Fort",
    state: "Kerala",
    district: "Kannur",
    category: "Fort",
    annualVisitors: 300000,
    views: 6000,
    description: "A historical monument built by the British East India Company in the 18th century on the Malabar Coast.",
    image: "https://www.keralatourism.org/images/thalassery/static-banner/large/-17032020153742.jpg",
  },
  {
    name: "Palakkad Fort",
    state: "Kerala",
    district: "Palakkad",
    category: "Fort",
    annualVisitors: 400000,
    views: 8000,
    description: "Also known as Tipu's Fort, it is one of the best-preserved forts in Kerala, built by Hyder Ali.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVNGG30yzQ0YfXujG7iCjlgZg9aKVQQ1Tww&s",
  },
  {
    name: "St. Francis Church",
    state: "Kerala",
    district: "Ernakulam",
    category: "Monument",
    annualVisitors: 350000,
    views: 7000,
    description: "One of the oldest European churches in India, originally built in 1503, famous as the initial burial place of Vasco da Gama.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWD8_m-F3fxFUy_49Nrct2KK3tGJsGg_ORg&s",
  },
  {
    name: "Krishnapuram Palace",
    state: "Kerala",
    district: "Alappuzha",
    category: "Palace",
    annualVisitors: 250000,
    views: 5000,
    description: "A palace and museum known for its exquisite Kerala architecture and the large Gajendra Moksha mural painting.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4d/cd/a7/krishnapuram-palace.jpg?w=900&h=500&s=1",
  },
  {
    name: "Guruvayur Temple",
    state: "Kerala",
    district: "Thrissur",
    category: "Temple",
    annualVisitors: 5000000,
    views: 35000,
    description: "A Hindu temple dedicated to Lord Guruvayurappan, one of the most important places of worship for Hindus in Kerala.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/15/44/38/13/guruvayur-temple.jpg",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(keralaSites);

    console.log("Successfully inserted Kerala Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
