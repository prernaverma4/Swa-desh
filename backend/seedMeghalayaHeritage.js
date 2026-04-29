const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const meghalayaSites = [
  {
    name: "Double Decker Living Root Bridge",
    state: "Meghalaya",
    district: "East Khasi Hills",
    category: "Natural Heritage",
    annualVisitors: 200000,
    views: 15000,
    description:
      "A magnificent natural wonder in Nongriat village, formed by training tree roots over decades to create a dual-level suspension bridge.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/double-decker-living-root-bridge-cherrapunjee-meghalaya-2-attr-hero?qlt=82&ts=1742167901740",
  },
  {
    name: "Nartiang Monoliths",
    state: "Meghalaya",
    district: "West Jaintia Hills",
    category: "Monument",
    annualVisitors: 50000,
    views: 4000,
    description:
      "A vast collection of megalithic stones setup by the Jaintia kings to commemorate important events and reigns.",
    image:
      "https://ychef.files.bbci.co.uk/1280x720/p0gjrxd9.jpg",
  },
  {
    name: "Mawphlang Sacred Grove",
    state: "Meghalaya",
    district: "East Khasi Hills",
    category: "Natural Heritage",
    annualVisitors: 100000,
    views: 6000,
    description:
      "An ancient, pristine forest preserved by local religious beliefs, rich in biodiversity and rare medicinal plants.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/0b/94/c9/sacred-forest.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Mawsmai Cave",
    state: "Meghalaya",
    district: "East Khasi Hills",
    category: "Caves",
    annualVisitors: 300000,
    views: 12000,
    description:
      "A stunning limestone cave system accessible to tourists, known for its fascinating stalactites and stalagmites.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/mawsmai-cave-cherrapunjee-meghalaya-2-attr-hero?qlt=82&ts=1751460282221",
  },
  {
    name: "Nohkalikai Falls",
    state: "Meghalaya",
    district: "East Khasi Hills",
    category: "Natural Heritage",
    annualVisitors: 400000,
    views: 20000,
    description:
      "The tallest plunge waterfall in India dropping from a height of 340 metres, named after a local legend involving a woman named Likai.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/NohKaLikai_Falls_V2_Wiki.jpg",
  },
  {
    name: "Krang Suri Falls",
    state: "Meghalaya",
    district: "West Jaintia Hills",
    category: "Natural Heritage",
    annualVisitors: 150000,
    views: 8500,
    description:
      "A spectacular waterfall characterized by its crystal clear blue waters and a natural pool at the bottom.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSvo-H-B9HEZ_WTdvIVtw4JQQcMcogn4Htg&s",
  },
  {
    name: "Dawki River",
    state: "Meghalaya",
    district: "West Jaintia Hills",
    category: "Natural Heritage",
    annualVisitors: 350000,
    views: 25000,
    description:
      "Famous for its crystal clear water where boats appear to float in the air, located near the Bangladesh border.",
    image:
      "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20241121-1075679804-1732173470.jpg",
  },
  {
    name: "Laitlum Canyons",
    state: "Meghalaya",
    district: "East Khasi Hills",
    category: "Natural Heritage",
    annualVisitors: 120000,
    views: 9000,
    description:
      "Breathtaking ridgelines and deep gorges providing sweeping, picturesque views of the Meghalayan landscape.",
    image:
      "https://static.toiimg.com/thumb/102723603/Laitlum-Canyons.jpg?width=1200&height=900",
  },
  {
    name: "Siju Cave",
    state: "Meghalaya",
    district: "South Garo Hills",
    category: "Caves",
    annualVisitors: 30000,
    views: 2500,
    description:
      "Also known as the Bat Cave, it is one of the longest cave systems in India, famous for its impressive limestone formations and hidden chambers.",
    image: "https://www.emeghalaya.com/uploads/articles/2021/09/siju-cave.jpg",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    // Add the Meghalaya heritage sites data
    await HeritageSite.insertMany(meghalayaSites);

    console.log(
      "Successfully inserted Meghalaya Heritage Sites with working images into your database!",
    );
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
