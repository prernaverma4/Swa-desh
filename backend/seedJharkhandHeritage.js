const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const jharkhandSites = [
  {
    name: "Baidyanath Temple",
    state: "Jharkhand",
    district: "Deoghar",
    category: "Temple",
    annualVisitors: 6000000,
    views: 25000,
    description: "One of the twelve Jyotirlingas, the most sacred abodes of Shiva, attracting millions of pilgrims annually.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/09/7f/87/bol-bam.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Palamu Forts",
    state: "Jharkhand",
    district: "Latehar",
    category: "Fort",
    annualVisitors: 150000,
    views: 5000,
    description: "Two ruined forts deep in the forests of Betla National Park, built by the Chero dynasty kings.",
    image: "https://pbs.twimg.com/media/E_yJBXTVEAYzxZT.jpg",
  },
  {
    name: "Maluti Temples",
    state: "Jharkhand",
    district: "Dumka",
    category: "Temple",
    annualVisitors: 100000,
    views: 4000,
    description: "A group of 72 extant terracotta temples adorned with scenes from Hindu epics.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Temples_of_Maluti.JPG/250px-Temples_of_Maluti.JPG",
  },
  {
    name: "Navratangarh Fort",
    state: "Jharkhand",
    district: "Gumla",
    category: "Fort",
    annualVisitors: 50000,
    views: 2000,
    description: "Ruins of a historical fort and capital of the Nagvanshi dynasty, featuring unique architecture.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExQry60uzctg42F1axKkg8eoKj-_hoKsbzg&s",
  },
  {
    name: "Rajrappa Temple",
    state: "Jharkhand",
    district: "Ramgarh",
    category: "Temple",
    annualVisitors: 800000,
    views: 12000,
    description: "A famous Hindu pilgrimage centre dedicated to Goddess Chhinnamasta, situated at the confluence of Damodar and Bhairavi rivers.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/77/2c/3c/fb-img-1529564784353.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Parasnath Hill",
    state: "Jharkhand",
    district: "Giridih",
    category: "Monument",
    annualVisitors: 1200000,
    views: 18000,
    description: "Also known as Shikharji, it is the most important Jain Tirtha (pilgrimage site) where 20 of the 24 Tirthankaras attained Moksha.",
    image: "https://images.trvl-media.com/place/553248635974899511/f7a1deb6-aa4c-487e-981f-11577751826a.jpg",
  },
  {
    name: "Jagannath Temple",
    state: "Jharkhand",
    district: "Ranchi",
    category: "Temple",
    annualVisitors: 500000,
    views: 9000,
    description: "A 17th-century Hindu temple built by king of Barkagarh on a hillock, resembling the famous temple in Puri.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYopB3GteVRSL7ITaa-qtsXSrz0NBWCbF9g&s",
  },
  {
    name: "Tagore Hill",
    state: "Jharkhand",
    district: "Ranchi",
    category: "Monument",
    annualVisitors: 250000,
    views: 6000,
    description: "Also known as Morabadi Hill, associated with Jyotirindranath Tagore (elder brother of Rabindranath Tagore).",
    image: "https://holaciti.com/assets/place/1765952869place.webp",
  },
  {
    name: "Itkhori",
    state: "Jharkhand",
    district: "Chatra",
    category: "Monument",
    annualVisitors: 150000,
    views: 4000,
    description: "A historic site featuring a confluence of Hindu, Buddhist, and Jain faiths with the Maa Bhadrakali temple complex.",
    image: "https://i0.wp.com/indroyc.com/wp-content/uploads/2019/08/maa-bhadrakali-mandir-itkhori.jpg?fit=960%2C720&ssl=1&w=640",
  },
  {
    name: "Deori Temple",
    state: "Jharkhand",
    district: "Ranchi",
    category: "Temple",
    annualVisitors: 450000,
    views: 8000,
    description: "an ancient temple dedicated to Goddess Durga, distinguished by its icon with sixteen arms instead of the usual ten.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/18/2e/c0/40/deori-temple.jpg",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(jharkhandSites);

    console.log("Successfully inserted Jharkhand Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
