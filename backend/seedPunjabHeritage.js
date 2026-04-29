const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const punjabSites = [
  {
    name: "Golden Temple",
    state: "Punjab",
    district: "Amritsar",
    category: "Monument",
    annualVisitors: 30000000,
    views: 120000,
    description: "Sri Harmandir Sahib, the holiest Gurdwara and the most important pilgrimage site of Sikhism.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/1280px-The_Golden_Temple_of_Amrithsar_7.jpg",
  },
  {
    name: "Jallianwala Bagh",
    state: "Punjab",
    district: "Amritsar",
    category: "Monument",
    annualVisitors: 2500000,
    views: 28000,
    description: "A historic garden and memorial of national importance honoring innocent people killed in the 1919 massacre.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/jallianwala-bagh-amritsar-punjab-1-attr-hero?qlt=82&ts=1726662275638",
  },
  {
    name: "Wagah Border",
    state: "Punjab",
    district: "Amritsar",
    category: "Monument",
    annualVisitors: 2000000,
    views: 35000,
    description: "The famous border crossing between India and Pakistan, renowned for its daily beating retreat border ceremony.",
    image: "https://cdn.britannica.com/04/272604-050-1391477D/Pakistani-Rangers-And-Indian-Border-Security-Force-Soldiers-Take-Part-In-Beating-Retreat-Ceremony-On-The-Eve-Of-Pakistan-Independence-Day-Celebrations-At-The-Pakistan-India-Wagah-Border-Post-About-35km-From-Lahore.jpg",
  },
  {
    name: "Qila Mubarak",
    state: "Punjab",
    district: "Bathinda",
    category: "Fort",
    annualVisitors: 500000,
    views: 10000,
    description: "One of the oldest surviving forts in India, associated with Razia Sultan, the first woman to take charge of the Delhi throne.",
    image: "https://assets.architecturaldigest.in/photos/600823ac345ead69c9c1aeee/master/pass/Qila-Mubarak-Patiala-Punjab-Panorama-1366x768.jpg",
  },
  {
    name: "Anandpur Sahib",
    state: "Punjab",
    district: "Rupnagar",
    category: "Monument",
    annualVisitors: 2000000,
    views: 20000,
    description: "Takht Sri Keshgarh Sahib is situated here, a city of historical significance where the Khalsa Panth was founded.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/1_Sri_Kesgarh_Takhat_Anandpur_Sahib_Khalsa_birthplace_Punjab_India.jpg",
  },
  {
    name: "Sheesh Mahal",
    state: "Punjab",
    district: "Patiala",
    category: "Palace",
    annualVisitors: 400000,
    views: 9000,
    description: "The Palace of Mirrors, built by Maharaja Narinder Singh, famous for its magnificent art and architecture.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/sheesh-mahal-patiala-punjab-1-attr-hero?qlt=82&ts=1742180406649",
  },
  {
    name: "Moorish Mosque",
    state: "Punjab",
    district: "Kapurthala",
    category: "Monument",
    annualVisitors: 150000,
    views: 4000,
    description: "A spectacular mosque commissioned by Maharaja Jagatjit Singh, modeled on the Grand Mosque of Marrakesh.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Moorish_Mosque.JPG",
  },
  {
    name: "Gobindgarh Fort",
    state: "Punjab",
    district: "Amritsar",
    category: "Fort",
    annualVisitors: 800000,
    views: 15000,
    description: "A historic military fort situated in the center of Amritsar, which has been opened to the public as a museum and theme park.",
    image: "https://amritsar.com/images/attraction/1/gobindfort.jpg",
  },
  {
    name: "Phillaur Fort",
    state: "Punjab",
    district: "Jalandhar",
    category: "Fort",
    annualVisitors: 250000,
    views: 6000,
    description: "A fort that served as Maharaja Ranjit Singh's eastern outpost and is now the Maharaja Ranjit Singh Punjab Police Academy.",
    image: "https://images.indianexpress.com/2023/02/Phillaur-fort.jpg",
  },
  {
    name: "Virasat-e-Khalsa",
    state: "Punjab",
    district: "Rupnagar",
    category: "Museum",
    annualVisitors: 1500000,
    views: 22000,
    description: "A museum of Sikhism celebrating 500 years of the Sikh history and the 300th anniversary of the birth of Khalsa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Khalsa_Heritage_Memorial_176_Edit.jpg",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    await HeritageSite.insertMany(punjabSites);

    console.log("Successfully inserted Punjab Heritage Sites into your database!");
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
