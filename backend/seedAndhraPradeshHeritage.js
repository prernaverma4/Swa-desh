const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const andhraPradeshSites = [
  {
    name: "Sri Venkateswara Swami Temple",
    state: "Andhra Pradesh",
    district: "Tirupati",
    category: "Temple",
    annualVisitors: 30000000,
    views: 100000,
    description: "A landmark Vaishnavite temple dedicated to Lord Venkateswara, it is one of the richest and most visited religious sites globally.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeteKt0KTkz4sUiBcuHNCrM7N-umi7XOsdQw&s",
  },
  {
    name: "Borra Caves",
    state: "Andhra Pradesh",
    district: "Alluri Sitharama Raju",
    category: "Caves",
    annualVisitors: 500000,
    views: 15000,
    description: "Famous for million-year-old stalactite and stalagmite formations, these are one of the largest caves in the country.",
    image: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/09/caves.jpg?fit=1024%2C678&ssl=1",
  },
  {
    name: "Undavalli Caves",
    state: "Andhra Pradesh",
    district: "Guntur",
    category: "Caves",
    annualVisitors: 300000,
    views: 10000,
    description: "A monolithic example of Indian rock-cut architecture, particularly known for its reclining statue of Lord Vishnu.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR41iIcaKr-baqQdmku9ZRxI4Dt4IZxRbneQ&s",
  },
  {
    name: "Lepakshi Temple",
    state: "Andhra Pradesh",
    district: "Sri Sathya Sai",
    category: "Temple",
    annualVisitors: 400000,
    views: 12000,
    description: "Known for its hanging pillar, monolithic Nandi, and spectacular Vijayanagara architectural murals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Front_side_of_Veerabhadra_Temple%2C_Lepakshi.jpg/1280px-Front_side_of_Veerabhadra_Temple%2C_Lepakshi.jpg",
  },
  {
    name: "Kondapalli Fort",
    state: "Andhra Pradesh",
    district: "NTR",
    category: "Fort",
    annualVisitors: 250000,
    views: 8000,
    description: "A 14th-century fort famous for the light wood used by artisans for Kondapalli toys, found in the region.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTR3Yy6XgoYjjrdOflQ6ZcPEG0TDXAC2dmsQ&s",
  },
  {
    name: "Gandikota Fort",
    state: "Andhra Pradesh",
    district: "YSR Kadapa",
    category: "Fort",
    annualVisitors: 350000,
    views: 13000,
    description: "Often called the Grand Canyon of India, this fort overlooks a steep gorge cut by the Pennar river.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e4/c9/bc/gandikota-camping.jpg?w=700&h=400&s=1",
  },
  {
    name: "Chandragiri Fort",
    state: "Andhra Pradesh",
    district: "Tirupati",
    category: "Fort",
    annualVisitors: 200000,
    views: 7000,
    description: "An 11th century fort built by the Yadavarayas, consisting of the Raja Mahal and Rani Mahal.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/chandragiri-fort-tirupati-andhra-pradesh-1-new-attr-hero?qlt=82&ts=1742149835282",
  },
  {
    name: "Amaravati Stupa",
    state: "Andhra Pradesh",
    district: "Palnadu",
    category: "Monument",
    annualVisitors: 150000,
    views: 5000,
    description: "Ruins of an important ancient Buddhist monument containing intricate carvings telling stories from the life of Buddha.",
    image: "https://travel-blog.happyeasygo.com/wp-content/uploads/2020/04/Amaravati-Stupa.jpg",
  },
  {
    name: "Sri Mallikarjuna Swamy Temple",
    state: "Andhra Pradesh",
    district: "Nandyal",
    category: "Temple",
    annualVisitors: 5000000,
    views: 20000,
    description: "Located in Srisailam, it is one of the twelve Jyotirlingas of Lord Shiva and also a Shakti Peetha.",
    image: "https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/11/Mallikarjuna-Temple-History.jpg",
  },
  {
    name: "Kanaka Durga Temple",
    state: "Andhra Pradesh",
    district: "NTR",
    category: "Temple",
    annualVisitors: 6000000,
    views: 25000,
    description: "A famous Hindu temple of Goddess Durga located in Vijayawada, situated on the Indrakeeladri hill.",
    image: "https://cdn.yatradham.org/media/catalog/product/i/m/img_9988.jpg",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(andhraPradeshSites);

    console.log("Successfully inserted Andhra Pradesh Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
