const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const arunachalPradeshSites = [
  {
    name: "Tawang Monastery",
    state: "Arunachal Pradesh",
    district: "Tawang",
    category: "Monument",
    annualVisitors: 300000,
    views: 40000,
    description: "The largest monastery in India and second largest in the world, an important seat of Mahayana Buddhism.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/tawang-monastery-tawang-arunachal-pradesh-1-attr-hero?qlt=82&ts=1742169936069",
  },
  {
    name: "Jaswant Garh",
    state: "Arunachal Pradesh",
    district: "Tawang",
    category: "Monument",
    annualVisitors: 200000,
    views: 15000,
    description: "A war memorial honoring rifleman Jaswant Singh Rawat of the Indian Army who showed immense bravery during the 1962 Sino-Indian War.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/e7/57/bb/images-largejpg.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Bhismaknagar Fort",
    state: "Arunachal Pradesh",
    district: "Lower Dibang Valley",
    category: "Fort",
    annualVisitors: 50000,
    views: 5000,
    description: "An ancient clay-brick fort and archaeological site associated with the Chutiya kingdom, dating back to 8th century BC.",
    image: "https://banasri.in/wp-content/uploads/2024/06/Bhismaknagar-Fort-Arunachal-Pradesh.jpg",
  },
  {
    name: "Ita Fort",
    state: "Arunachal Pradesh",
    district: "Papum Pare",
    category: "Fort",
    annualVisitors: 100000,
    views: 8000,
    description: "The 'Fort of Bricks', from which the capital city Itanagar takes its name, an irregular medieval fort built by Chutiya kings.",
    image: "https://arunachaltimes.in/wp-content/uploads/2025/09/Itafort-Forgotten-but-unforgettable.webp",
  },
  {
    name: "Malinithan",
    state: "Arunachal Pradesh",
    district: "Lower Siang",
    category: "Temple",
    annualVisitors: 80000,
    views: 6000,
    description: "An archaeological site consisting of ruins of a Hindu temple dating to the 14th century, exhibiting classical architectural elements.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdQJyS2QsgByNRNbfe82Z-Tz5M5igZ12wig&s",
  },
  {
    name: "Dirang Dzong",
    state: "Arunachal Pradesh",
    district: "West Kameng",
    category: "Fort",
    annualVisitors: 150000,
    views: 10000,
    description: "A tribal area fort acting as a representation of Monpa culture, built in 1831 to protect the people from neighbor invasions.",
    image: "https://www.tourmyindia.com/states/arunachalpradesh/images/dirang-dzong1.jpg",
  },
  {
    name: "Gorsam Chorten",
    state: "Arunachal Pradesh",
    district: "Tawang",
    category: "Monument",
    annualVisitors: 40000,
    views: 4000,
    description: "The largest Stupa of the area standing 93 feet tall, modeled after the Boudhanath stupa of Nepal.",
    image: "https://cdn-ilejdpd.nitrocdn.com/buEnUrMONSWZvEULrnjpcseiWXBrFWCC/assets/images/optimized/rev-5432299/www.trypdeals.com/wp-content/uploads/2024/12/Gorsam-Chorten-Overview-A-Spiritual-Marvel-in-Arunachal-Pradesh.jpg",
  },
  {
    name: "Urgelling Monastery",
    state: "Arunachal Pradesh",
    district: "Tawang",
    category: "Monument",
    annualVisitors: 120000,
    views: 9000,
    description: "A famous Buddhist monastery widely recognized as the birthplace of the 6th Dalai Lama.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/urgelling-monastery-tawang-arunachal-pradesh-1-attr-hero?qlt=82&ts=1742170308465",
  },
  {
    name: "Tawang War Memorial",
    state: "Arunachal Pradesh",
    district: "Tawang",
    category: "Monument",
    annualVisitors: 250000,
    views: 12000,
    description: "A 40-foot high multi-hued memorial built to commemorate the sacrifice of the Indian Army soldiers during the 1962 Sino-Indian War.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/tawang-war-memorial-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1742187542676",
  },
  {
    name: "Naksha Parbat",
    state: "Arunachal Pradesh",
    district: "East Kameng",
    category: "Monument",
    annualVisitors: 15000,
    views: 2000,
    description: "An important archaeological site located in the dense forest featuring monolithic stone pillars and ancient structural remains.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILpDS6VTB3BByfyOIfXfoIsadtQUkaaBIVw&s",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(arunachalPradeshSites);

    console.log("Successfully inserted Arunachal Pradesh Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
