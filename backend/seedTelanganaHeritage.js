const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const telanganaSites = [
  {
    name: "Charminar",
    state: "Telangana",
    district: "Hyderabad",
    category: "Monument",
    annualVisitors: 2000000,
    views: 35000,
    description: "An iconic monument and mosque constructed in 1591, known as the global icon of Hyderabad.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqbvpwexdrXXEAdhWstaKGw__EZBSu5ChEjdUcQtm3VXzRQ4qQ68ig3gQJBW9m5lf-valM5Co-PwNUmh7yIQz8uBCg4NbAhNlaAaimKSf5i6TBBYFn7sl_Nq_8U2SIQW-37wOw=s1360-w1360-h1020-rw",
  },
  {
    name: "Golconda Fort",
    state: "Telangana",
    district: "Hyderabad",
    category: "Fort",
    annualVisitors: 1500000,
    views: 28000,
    description: "A fortified citadel and an early capital city of the Qutb Shahi dynasty, known for its acoustics.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/golconda-fort-hyderabad-secunderabad-telangana-1-musthead-hero?qlt=82&ts=1742170130583",
  },
  {
    name: "Ramappa Temple",
    state: "Telangana",
    district: "Mulugu",
    category: "Temple",
    annualVisitors: 500000,
    views: 12000,
    description: "A UNESCO World Heritage Site, this Shiva temple is known for its intricate carvings and lightweight 'floating' bricks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Ramappa_Temple_%28Human_Scale%29.jpg",
  },
  {
    name: "Thousand Pillar Temple",
    state: "Telangana",
    district: "Hanamkonda",
    category: "Temple",
    annualVisitors: 400000,
    views: 9000,
    description: "A historic Hindu temple dedicated to Shiva, Vishnu and Surya, known for its richly carved pillars.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQuYQ--xC-elrL70HsMzP2MUBGyEEbSRaaQ&s",
  },
  {
    name: "Warangal Fort",
    state: "Telangana",
    district: "Warangal",
    category: "Fort",
    annualVisitors: 350000,
    views: 8000,
    description: "The ruins of the 13th-century fort famous for its four ornamental gates, known as Kakatiya Kala Thoranam.",
    image: "https://i0.wp.com/weekendyaari.in/wp-content/uploads/2025/09/Warangal-Fort-scaled.webp?fit=2560%2C1705&ssl=1",
  },
  {
    name: "Qutb Shahi Tombs",
    state: "Telangana",
    district: "Hyderabad",
    category: "Monument",
    annualVisitors: 400000,
    views: 10000,
    description: "The magnificent resting places of the Qutb Shahi kings, combining Persian, Pashtun and Hindu architectural styles.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZjzQ39BRVg1Hxx-RrT-GVtQ_TkzZWOLIqg&s",
  },
  {
    name: "Chowmahalla Palace",
    state: "Telangana",
    district: "Hyderabad",
    category: "Palace",
    annualVisitors: 600000,
    views: 15000,
    description: "The beautiful palace of the Nizams of Hyderabad, noted for its unique style and elegance.",
    image: "https://www.hyderabadtourism.travel/images//v2/header-places/chowmahalla-palace-hyderabad-tourism-entryfee-timings-reviews-header.jpg",
  },
  {
    name: "Bhongir Fort",
    state: "Telangana",
    district: "Yadadri Bhuvanagiri",
    category: "Fort",
    annualVisitors: 200000,
    views: 5000,
    description: "A massive fort built on a single monolithic rock by the Western Chalukya ruler Tribhuvanamalla Vikramaditya VI.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/bhongir-fort-bhongir-telangana-1-attr-hero?qlt=82&ts=1742170234924",
  },
  {
    name: "Salar Jung Museum",
    state: "Telangana",
    district: "Hyderabad",
    category: "Museum",
    annualVisitors: 1200000,
    views: 20000,
    description: "One of the three National Museums of India, it holds one of the largest one-man collections of antiques in the world.",
    image: "https://museumsofindia.gov.in/repository/extraContent//sjm_hyd/museum-image/sjm_image.jpg",
  },
  {
    name: "Kakatiya Kala Thoranam",
    state: "Telangana",
    district: "Warangal",
    category: "Monument",
    annualVisitors: 350000,
    views: 8000,
    description: "A historical arch that serves as a symbol of the Kakatiya dynasty and the state emblem of Telangana.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/A_torana%2C_gate_to_sacred_precinct%2C_Warangal_Fort_Park_and_Museum%2C_Telangana%2C_India_-_8.jpg",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    // Add the Telangana heritage sites data
    await HeritageSite.insertMany(telanganaSites);

    console.log(
      "Successfully inserted Telangana Heritage Sites into your database!",
    );
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
