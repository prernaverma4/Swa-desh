const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const manipurSites = [
  {
    name: "Loktak Lake & Keibul Lamjao National Park",
    state: "Manipur",
    district: "Bishnupur",
    category: "Natural Heritage",
    annualVisitors: 150000,
    views: 12000,
    description:
      "The largest freshwater lake in Northeast India, famous for its phumdis (floating circular swamps) and the world's only floating national park, home to the endangered Sangai deer.",
    image:
      "https://travelwithabong.com/wp-content/uploads/elementor/thumbs/IMG_20181129_120301_HDR-o4bxn0gjth1w27e1zo6ije4gwbg388l3rxsc7gquiw.jpg",
  },
  {
    name: "Kangla Fort",
    state: "Manipur",
    district: "Imphal West",
    category: "Fort",
    annualVisitors: 200000,
    views: 15000,
    description:
      "The ancient capital of Manipur, this historic fort holds immense archaeological, religious, and historical significance to the people of Manipur.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/kangla-fort-imphal-manipur-3-musthead-hero?qlt=82&ts=1742157557628",
  },
  {
    name: "Shree Govindajee Temple",
    state: "Manipur",
    district: "Imphal East",
    category: "Monument",
    annualVisitors: 300000,
    views: 18000,
    description:
      "A historic Vaishnavite temple with twin gold domes, originally built during the reign of Maharaja Nara Singh.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/4d/52/35/govindjee-temple.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "INA Memorial Complex",
    state: "Manipur",
    district: "Bishnupur",
    category: "Monument",
    annualVisitors: 100000,
    views: 8000,
    description:
      "Located in Moirang, this is the historic site where the Indian National Army (INA) hoisted the Indian tricolor flag for the first time on Indian soil in 1944.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWD2DQWP_Mdyw-PA_yp7QT3dJ4NsDQorvX7g&s",
  },
  {
    name: "Shirui Kashong Peak",
    state: "Manipur",
    district: "Ukhrul",
    category: "Natural Heritage",
    annualVisitors: 50000,
    views: 5000,
    description:
      "Famous for the rare Shirui Lily (Lilium mackliniae) that blooms only on this peak, a major ecological hotspot in Manipur.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBey1xSrzPTR_RSjiybf5y_RuPkTiALyUq2g&s",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    // Add the Manipur heritage sites data
    await HeritageSite.insertMany(manipurSites);

    console.log(
      "Successfully inserted Manipur Heritage Sites with working images into your database!",
    );
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
