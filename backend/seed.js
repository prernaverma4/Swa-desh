const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');
const Event = require('./Models/Event.js');


const events = [

    {
        title: "Makhana",
        description: "Famous fox nut (makhana) cultivated in Araria district.",
        date: new Date(),
        location: "Araria, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/makhana_2ae7660066.jpg"
    },

    {
        title: "Madhubani Painting",
        description: "Traditional hand-painted Madhubani art from Bihar.",
        date: new Date(),
        location: "Madhubani, Bihar",
        category: "Handicraft",
        totalAmount: 50,
        availableAmount: 50,
        productPrice: 1000,
        image: "https://static.india.gov.in/npiprod/odop/uploads/madhubhani_paintings_c43aff0588.jpg"
    },

    {
        title: "Tilkut",
        description: "Traditional sweet made from sesame and jaggery.",
        date: new Date(),
        location: "Gaya, Bihar",
        category: "Food Product",
        totalAmount: 200,
        availableAmount: 200,
        productPrice: 200,
        image: "https://bazaarmantri.com/images/products/40367.jpg"
    },

    {
        title: "Shahi Litchi",
        description: "World famous Muzaffarpur Shahi Litchi fruit.",
        date: new Date(),
        location: "Muzaffarpur, Bihar",
        category: "Fruit",
        totalAmount: 300,
        availableAmount: 300,
        productPrice: 100,
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/5/MB/WG/EU/152554225/product-jpeg.jpg"
    },

    {
        title: "Bhagalpuri Silk",
        description: "Famous Bhagalpuri silk fabric.",
        date: new Date(),
        location: "Bhagalpur, Bihar",
        category: "Textile",
        totalAmount: 80,
        availableAmount: 80,
        productPrice: 2000,
        image: "https://static.india.gov.in/npiprod/odop/uploads/bhagalpuri_silk_eb07d7a3c8.jpg"
    },

    {
        title: "Brass Utensils",
        description: "Famous product from Nalanda, Bihar.",
        date: new Date(),
        location: "Nalanda, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/brass_utensils.jpg"
    },

    {
        title: "Jaggery",
        description: "Famous product from Saran, Bihar.",
        date: new Date(),
        location: "Saran, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 50,
        image: "https://static.india.gov.in/npiprod/odop/uploads/jaggery.jpg"
    },

    {
        title: "Khaja",
        description: "Famous product from Bhojpur, Bihar.",
        date: new Date(),
        location: "Bhojpur, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 30,
        image: "https://static.india.gov.in/npiprod/odop/uploads/silao_khaja_f16c1730a6.webp"
    },

    {
        title: "Jute",
        description: "Famous product from Katihar, Bihar.",
        date: new Date(),
        location: "Katihar, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 4800,
        image: "https://static.india.gov.in/npiprod/odop/uploads/jute_9d3b04e272.jpg"
    },

    {
        title: "Sugarcane",
        description: "Famous product from Gopalganj, Bihar.",
        date: new Date(),
        location: "Gopalganj, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/sugarcane_4016a507b2.jpg"
    },

    {
        title: "Bamboo Art",
        description: "Famous product from Madhepura, Bihar.",
        date: new Date(),
        location: "Madhepura, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 20,
        image: "https://static.india.gov.in/npiprod/odop/uploads/bamboo_art_4c88180af9.jpg"
    },

    {
        title: "Stone Craft",
        description: "Famous product from Kaimur, Bihar.",
        date: new Date(),
        location: "Kaimur, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 300,
        image: "https://static.india.gov.in/npiprod/odop/uploads/stone_art_b10a9a1a99.jpg"
    },

    {
        title: "Banana",
        description: "Famous product from Vaishali, Bihar.",
        date: new Date(),
        location: "Vaishali, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 25,
        image: "https://static.india.gov.in/npiprod/odop/uploads/banana_e4884a955a.jpg"
    },

    {
        title: "Handloom Fabric",
        description: "Famous product from Nawada, Bihar.",
        date: new Date(),
        location: "Nawada, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 100,
        image: "https://static.india.gov.in/npiprod/odop/uploads/handloom_25d26f7b2e.jpg"
    }

];


const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
        console.log('\n✅ MongoDB connection open...');

        // await Event.deleteMany();
        // console.log('🗑️  Cleared existing data.');

        const createdEvents = await Event.insertMany(events);
        console.log(`🎉 Created ${createdEvents.length} distinct events.`);

        console.log('\n🚀 Database seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

seedDatabase();