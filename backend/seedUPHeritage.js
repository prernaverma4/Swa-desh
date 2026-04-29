const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const upSites = [
  {
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    district: "Agra",
    category: "Monument",
    annualVisitors: 8000000,
    views: 200000,
    description: "An ivory-white marble mausoleum on the right bank of the river Yamuna, commissioned by Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
    image: "",
  },
  {
    name: "Agra Fort",
    state: "Uttar Pradesh",
    district: "Agra",
    category: "Fort",
    annualVisitors: 3000000,
    views: 50000,
    description: "A historical fort and UNESCO World Heritage site, the main residence of the emperors of the Mughal Dynasty till 1638.",
    image: "https://plus.unsplash.com/premium_photo-1697730373510-51b7fcf2ff52?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyYSUyMGZvcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Fatehpur Sikri",
    state: "Uttar Pradesh",
    district: "Agra",
    category: "Monument",
    annualVisitors: 2500000,
    views: 40000,
    description: "A town founded by a 16th-century Mughal emperor, featuring beautiful red sandstone buildings and the grand Buland Darwaza.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/fatehpur-sikri-agra-uttar-pradesh-1-attr-hero?qlt=82&ts=1726650332548",
  },
  {
    name: "Bara Imambara",
    state: "Uttar Pradesh",
    district: "Lucknow",
    category: "Monument",
    annualVisitors: 1500000,
    views: 35000,
    description: "An imambara complex built by Asaf-ud-Daula, Nawab of Awadh, famous for its incredible maze known as Bhool Bhulaiya.",
    image: "https://holaciti.com/assets/place/1765957284place.webp",
  },
  {
    name: "Dhamek Stupa",
    state: "Uttar Pradesh",
    district: "Varanasi",
    category: "Monument",
    annualVisitors: 2000000,
    views: 30000,
    description: "A massive stupa located at Sarnath, where the Buddha gave his first sermon after attaining enlightenment.",
    image: "https://www.daiwikhotels.com/wp-content/uploads/2024/07/Dhamek-Stupa-2.jpg",
  },
  {
    name: "Kashi Vishwanath Temple",
    state: "Uttar Pradesh",
    district: "Varanasi",
    category: "Temple",
    annualVisitors: 10000000,
    views: 80000,
    description: "One of the most famous Hindu temples dedicated to Lord Shiva, located on the western bank of the holy river Ganga.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpRB4Eq66_2JUG4kt0w9SVDhsRi5b41--ZA&s",
  },
  {
    name: "Jhansi Fort",
    state: "Uttar Pradesh",
    district: "Jhansi",
    category: "Fort",
    annualVisitors: 500000,
    views: 20000,
    description: "A historic fortress situated on a large hilltop, deeply associated with Rani Lakshmi Bai and the 1857 rebellion.",
    image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1702046081_jhansi_jahangir_mahal_jpg.jpg.webp",
  },
  {
    name: "Allahabad Fort",
    state: "Uttar Pradesh",
    district: "Prayagraj",
    category: "Fort",
    annualVisitors: 600000,
    views: 15000,
    description: "Built by Emperor Ashoka and later repaired by Emperor Akbar, located on the banks of the Yamuna near its confluence with the river Ganges.",
    image: "https://holaciti.com/assets/place/1744734345_y1BRwWmaWL.webp",
  },
  {
    name: "Rumi Darwaza",
    state: "Uttar Pradesh",
    district: "Lucknow",
    category: "Monument",
    annualVisitors: 1000000,
    views: 25000,
    description: "An imposing gateway which is an iconic symbol of Lucknow, built in Awadhi architecture style.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-rumi-darwaza-lucknow-uttar-pradesh-attr-hero?qlt=82&ts=1742166081307",
  },
  {
    name: "Chunar Fort",
    state: "Uttar Pradesh",
    district: "Mirzapur",
    category: "Fort",
    annualVisitors: 400000,
    views: 12000,
    description: "A historical fort that has served as a strategic military base over centuries, with legendary myths attached to it.",
    image: "https://static.toiimg.com/thumb/35113094/7122153997_32167988f6_b.jpg?width=1200&height=900",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(upSites);

    console.log("Successfully inserted Uttar Pradesh Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
