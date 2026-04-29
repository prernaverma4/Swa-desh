const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const himachalSites = [
  {
    name: "Kangra Fort",
    state: "Himachal Pradesh",
    district: "Kangra",
    category: "Fort",
    annualVisitors: 250000,
    views: 12000,
    description: "One of the oldest and largest forts in India, built by the royal Rajput family of Kangra state.",
    image: "https://holaciti.com/assets/place/1765299414place.webp",
  },
  {
    name: "Hadimba Devi Temple",
    state: "Himachal Pradesh",
    district: "Kullu",
    category: "Temple",
    annualVisitors: 800000,
    views: 20000,
    description: "An ancient cave temple dedicated to Hidimbi Devi, famous for its unique wooden architecture and surrounding cedar forests in Manali.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/hidimba-temple-manali-himachal-pradesh-5-musthead-hero?qlt=82&ts=1726730757462",
  },
  {
    name: "Viceregal Lodge",
    state: "Himachal Pradesh",
    district: "Shimla",
    category: "Monument",
    annualVisitors: 300000,
    views: 15000,
    description: "Also known as Rashtrapati Niwas, it is an impressive British colonial-era building that formerly served as the residence of the British Viceroy of India.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ff/a4/24/viceregal-lodge-turned.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Key Monastery",
    state: "Himachal Pradesh",
    district: "Lahaul and Spiti",
    category: "Monastery",
    annualVisitors: 150000,
    views: 18000,
    description: "A prominent and beautiful Tibetan Buddhist monastery located at an altitude of 4,166 meters in the Spiti Valley.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggp0jSwnUy0GNEQHOUVj-uUGrskdhKw2_1w&s",
  },
  {
    name: "Masroor Rock Cut Temple",
    state: "Himachal Pradesh",
    district: "Kangra",
    category: "Temple",
    annualVisitors: 100000,
    views: 8000,
    description: "A complex of 8th-century rock-cut Hindu temples known as the 'Ellora of Himachal', known for intricate carvings.",
    image: "https://static-blog.treebo.com/wp-content/uploads/2024/08/Intro-3-1024x675.jpg",
  },
  {
    name: "Baijnath Temple",
    state: "Himachal Pradesh",
    district: "Kangra",
    category: "Temple",
    annualVisitors: 400000,
    views: 11000,
    description: "A highly revered 13th-century temple dedicated to Lord Shiva as Vaidyanath ('the Lord of physicians').",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Shiva_temple_baijnath_HP.jpg",
  },
  {
    name: "Tabo Monastery",
    state: "Himachal Pradesh",
    district: "Lahaul and Spiti",
    category: "Monastery",
    annualVisitors: 80000,
    views: 9000,
    description: "Founded in 996 CE, it is one of the oldest continually operating Buddhist enclaves in the Himalayas, noted for its exquisite frescoes.",
    image: "https://tigers9.com/wp-content/uploads/2020/04/Tabo-Monastery-2.jpg",
  },
  {
    name: "Jakhoo Temple",
    state: "Himachal Pradesh",
    district: "Shimla",
    category: "Temple",
    annualVisitors: 600000,
    views: 14000,
    description: "An ancient temple dedicated to the Hindu deity Hanuman, featuring a massive 108-foot statue situated on Shimla's highest peak.",
    image: "https://www.sterlingholidays.com/activities/kurfi/mustsee/bannerimage/kufri-jakhoo-temple.jpg.imgw.1280.1280.jpeg",
  },
  {
    name: "Chokling Monastery",
    state: "Himachal Pradesh",
    district: "Kangra",
    category: "Monastery",
    annualVisitors: 120000,
    views: 6000,
    description: "A beautiful Tibetan monastery in Bir Billing, a center for spiritual studies and surrounded by scenic mountains.",
    image: "https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/1723282293153_Chokling_Monastery,_Bir.jpg",
  },
  {
    name: "Naggar Castle",
    state: "Himachal Pradesh",
    district: "Kullu",
    category: "Palace",
    annualVisitors: 200000,
    views: 10000,
    description: "A magnificent historical edifice made of stone and wood in the traditional Himalayan architectural style, situated in Kullu.",
    image: "https://holaciti.com/assets/place/1765300357place.webp",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(himachalSites);

    console.log("Successfully inserted Himachal Pradesh Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
