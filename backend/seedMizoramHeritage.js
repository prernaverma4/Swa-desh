const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const mizoramSites = [
  {
    name: "Vantawng Falls",
    state: "Mizoram",
    district: "Serchhip",
    category: "Natural Heritage",
    annualVisitors: 80000,
    views: 7000,
    description:
      "The highest and most spectacular waterfall in Mizoram, cascading from a height of 750 feet amidst thick bamboo forests.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/vantawng-khawthla-aizawl-mizoram-2-attr-hero?qlt=82&ts=1726665729651",
  },
  {
    name: "Phawngpui Peak",
    state: "Mizoram",
    district: "Lawngtlai",
    category: "Natural Heritage",
    annualVisitors: 40000,
    views: 4500,
    description:
      "The highest mountain peak in Mizoram, considered highly revered by the local people and known for its exotic flora and fauna.",
    image:
      "https://res.cloudinary.com/roundglass/image/upload/f_auto/q_auto/f_auto/c_limit,w_auto:breakpoints_200_2560_100_5:1265/v1665107906/rg/collective/media/mizoram-phawngpui-np-blue-mountain-thlazuang-kham-cliff-habitat-top-dhritiman-mukherjee-1665107906285.jpg",
  },
  {
    name: "Reiek Tlang",
    state: "Mizoram",
    district: "Mamit",
    category: "Natural Heritage",
    annualVisitors: 100000,
    views: 8500,
    description:
      "A prominent mountain offering a breathtaking panoramic view of the surrounding valleys and hills, a popular destination for trekking.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-tlang-mountain-aizawl-mizoram-blog-ntr-exp-cit-pop?qlt=82&ts=1726674782400",
  },
  {
    name: "Solomon's Temple",
    state: "Mizoram",
    district: "Aizawl",
    category: "Monument",
    annualVisitors: 250000,
    views: 15000,
    description:
      "A magnificent architectural marvel in Aizawl, built by the Kohhran Thianghlim (The Holy Church) over two decades.",
    image:
      "https://lh5.googleusercontent.com/proxy/2qpw_gNhrr4Aq2oQGLU0c1ikOouf5BAZiqKIv_70CBwqj7nW9pUIF-toE8Kyh8mUUG8oUjlM5AcCiNuvMZAKh_zCoAIjhgWdMOKez-VCM90L_t2wypjD1l-yG1Xj1A",
  },
  {
    name: "Palak Dil",
    state: "Mizoram",
    district: "Siaha",
    category: "Natural Heritage",
    annualVisitors: 25000,
    views: 3000,
    description:
      "The largest natural lake in Mizoram, surrounded by untouched forests and believed to be the home of various mythical creatures.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/palak-lake-aizawl-mizoram-2-attr-hero?qlt=82&ts=1726665779413",
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    // Add the Mizoram heritage sites data
    await HeritageSite.insertMany(mizoramSites);

    console.log(
      "Successfully inserted Mizoram Heritage Sites with working images into your database!",
    );
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
