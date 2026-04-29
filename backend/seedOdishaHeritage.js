const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const odishaSites = [
  {
    name: "Konark Sun Temple",
    state: "Odisha",
    district: "Puri",
    category: "Temple",
    annualVisitors: 2500000,
    views: 60000,
    description: "A 13th-century CE Sun temple attributed to king Narasimhadeva I, famous for its monumental chariot shape and intricate carvings.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/konark-temple-puri-odisha-2-attr-hero?qlt=82&ts=1726674676369",
  },
  {
    name: "Jagannath Temple",
    state: "Odisha",
    district: "Puri",
    category: "Temple",
    annualVisitors: 8000000,
    views: 75000,
    description: "An important Hindu temple dedicated to Jagannath, a form of Vishnu, and one of the Char Dham pilgrimage sites.",
    image: "https://admin.stayatpurijagannatha.in/images/frontend/main-slider-1_1670308972.jpg",
  },
  {
    name: "Lingaraja Temple",
    state: "Odisha",
    district: "Khordha",
    category: "Temple",
    annualVisitors: 2000000,
    views: 40000,
    description: "A Hindu temple dedicated to Harihara, a form of Shiva and Vishnu, and is one of the oldest and largest temples in Bhubaneswar.",
    image: "https://www.trawell.in/admin/images/upload/121219754Bhubaneswar_Lingaraja_Temple_Main.jpg",
  },
  {
    name: "Udayagiri and Khandagiri Caves",
    state: "Odisha",
    district: "Khordha",
    category: "Caves",
    annualVisitors: 1500000,
    views: 35000,
    description: "Partly natural and partly artificial caves of archaeological, historical and religious importance dating back to the 2nd century BCE.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Khandagari_and_Udaygiri_featured_image.jpg",
  },
  {
    name: "Dhauli Shanti Stupa",
    state: "Odisha",
    district: "Khordha",
    category: "Monument",
    annualVisitors: 1800000,
    views: 30000,
    description: "A peace pagoda built by the Japan Buddha Sangha on the Dhauli hills, standing on the site of the historic Kalinga War.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpt7y9Asf36yKP_fLcV4CJL8UPU1_DPcFBeA&s",
  },
  {
    name: "Mukteshvara Temple",
    state: "Odisha",
    district: "Khordha",
    category: "Temple",
    annualVisitors: 1000000,
    views: 20000,
    description: "A 10th-century Hindu temple dedicated to Shiva located in Bhubaneswar, considered a masterpiece of Odishan architecture.",
    image: "https://www.sahapediaexperiences.org/sites/default/files/2021-11/Mukteshvara-Temple-at-Bhubaneswar.jpg",
  },
  {
    name: "Barabati Fort",
    state: "Odisha",
    district: "Cuttack",
    category: "Fort",
    annualVisitors: 500000,
    views: 15000,
    description: "A 14th-century fort built by the Ganga dynasty, serving as the majestic gateway situated on the banks of river Mahanadi.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Barabati_Fort_%2C_Cuttack_01.jpg",
  },
  {
    name: "Rajarani Temple",
    state: "Odisha",
    district: "Khordha",
    category: "Temple",
    annualVisitors: 800000,
    views: 18000,
    description: "An 11th-century Hindu temple in Bhubaneswar, known as a 'love temple' due to the erotic carvings of women and couples in the temple.",
    image: "https://www.trawell.in/admin/images/upload/120956206Bhubaneswar_Rajarani_temple.jpg",
  },
  {
    name: "Lalitgiri",
    state: "Odisha",
    district: "Cuttack",
    category: "Monument",
    annualVisitors: 300000,
    views: 10000,
    description: "A major Buddhist complex containing significant stupas, an esoteric Buddha image, and monasteries (viharas), forming part of the Diamond Triangle.",
    image: "https://www.trawell.in/admin/images/upload/127574169lalitgiri.jpg",
  },
  {
    name: "Ratnagiri",
    state: "Odisha",
    district: "Jajpur",
    category: "Monument",
    annualVisitors: 400000,
    views: 12000,
    description: "An important Buddhist site showcasing a magnificent Mahavihara (major Buddhist monastery) with exquisitely carved doorways.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-BKn6UP3bzpbRg30d8Jji_oU_2BXATOY7Q&s",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(odishaSites);

    console.log("Successfully inserted Odisha Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
