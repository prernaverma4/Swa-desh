const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const maharashtraSites = [
  {
    name: "Ajanta Caves",
    state: "Maharashtra",
    district: "Aurangabad",
    category: "Caves",
    annualVisitors: 450000,
    views: 12000,
    description:
      "About 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE, famous for their magnificent paintings.",
    image:
      "https://aurangabadtourism.in/images/v2/places-to-visit/ajanta-caves-aurangabad-tourism-header.jpg",
  },
  {
    name: "Ellora Caves",
    state: "Maharashtra",
    district: "Aurangabad",
    category: "Caves",
    annualVisitors: 500000,
    views: 15000,
    description:
      "A UNESCO World Heritage Site featuring Hindu, Buddhist, and Jain monuments carved from solid rock, including the colossal Kailasha temple.",
    image:
      "https://res.klook.com/image/upload/c_crop,h_1562,w_2499,x_0,y_19,z_0.2/w_1265,h_791,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/kdhxyfyruusxsrqqwyvd.webp",
  },
  {
    name: "Elephanta Caves",
    state: "Maharashtra",
    district: "Mumbai",
    category: "Caves",
    annualVisitors: 300000,
    views: 8000,
    description:
      "A collection of ancient cave temples predominantly dedicated to the Hindu god Shiva, located on Elephanta Island in Mumbai Harbour.",
    image:
      "https://res.klook.com/image/upload/c_crop,h_1562,w_2499,x_0,y_19,z_0.2/w_1265,h_791,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/kdhxyfyruusxsrqqwyvd.webp",
  },
  {
    name: "Chhatrapati Shivaji Maharaj Terminus",
    state: "Maharashtra",
    district: "Mumbai",
    category: "Monument",
    annualVisitors: 1000000,
    views: 20000,
    description:
      "A historic operational railway terminus and UNESCO World Heritage Site displaying outstanding Victorian Gothic Revival architecture.",
    image: "https://holaciti.com/assets/place/1746179773_4s0Txb7TFe.webp",
  },
  {
    name: "Gateway of India",
    state: "Maharashtra",
    district: "Mumbai",
    category: "Monument",
    annualVisitors: 1500000,
    views: 25000,
    description:
      "An iconic arch-monument built to commemorate the landing of King-Emperor George V, the first British monarch to visit India.",
    image:
      "https://experiencemyindia.com/wp-content/uploads/2024/12/Gateway-of-India.jpg.webp",
  },
  {
    name: "Raigad Fort",
    state: "Maharashtra",
    district: "Raigad",
    category: "Fort",
    annualVisitors: 250000,
    views: 5000,
    description:
      "A massive historic hill fort that served as the capital of the Maratha Empire under the legendary Chhatrapati Shivaji Maharaj.",
    image:
      "https://extranet.traveldhamaka.com/assets/sightseeing/Raigad%20Fort.JPG",
  },
  {
    name: "Bibi Ka Maqbara",
    state: "Maharashtra",
    district: "Aurangabad",
    category: "Monument",
    annualVisitors: 350000,
    views: 9000,
    description:
      "A mausoleum built by Mughal emperor Aurangzeb in memory of his first and chief wife. It bears a striking resemblance to the Taj Mahal.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/The_Tomb_of_Dilras_Banu_Begum.jpg/1280px-The_Tomb_of_Dilras_Banu_Begum.jpg",
  },
  {
    name: "Shaniwar Wada",
    state: "Maharashtra",
    district: "Pune",
    category: "Fort",
    annualVisitors: 400000,
    views: 11000,
    description:
      "A historical fortification in the city of Pune. Built in 1732, it was the great seat of the Peshwas of the Maratha Empire until 1818.",
    image:
      "https://d1zvcmhypeawxj.cloudfront.net/blogs/cover_web/shaniwar-wada-webp-6f1c11e970-1762328963941.webp",
  },
  {
    name: "Aga Khan Palace",
    state: "Maharashtra",
    district: "Pune",
    category: "Monument",
    annualVisitors: 150000,
    views: 3000,
    description:
      "Built by Sultan Muhammed Shah Aga Khan III in 1892, this palace served as a prison for Mahatma Gandhi during the Quit India Movement.",
    image: "https://www.mkgandhi.org/images/agakhan.jpg",
  },
  {
    name: "Pratapgad Fort",
    state: "Maharashtra",
    district: "Satara",
    category: "Fort",
    annualVisitors: 200000,
    views: 4500,
    description:
      "A large mountain fort located in the Satara district. It is famously known for the Battle of Pratapgad fought in 1659.",
    image:
      "https://static.wixstatic.com/media/d37a82_13e11323f9a7477fa4f6467ae8c2752e~mv2.jpg/v1/fill/w_1110,h_1233,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d37a82_13e11323f9a7477fa4f6467ae8c2752e~mv2.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
            console.log('\n✅ MongoDB connection open...');
    // Add the Maharashtra heritage sites data
    await HeritageSite.insertMany(maharashtraSites);

    console.log(
      "Successfully inserted Maharashtra Heritage Sites with working images into your database!",
    );
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
