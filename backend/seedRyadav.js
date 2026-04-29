const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');
const Event = require('./Models/Event.js');


const events = [

    // Gujarat Data

    // {
    //     title: "Jamnagari Bandhani",
    //     description: "Jamnagari Bandhani is a traditional tie-and-dye textile art from Jamnagar.",
    //     date: new Date(),
    //     location: "Jamnagar, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: "₹ 800",
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/jamnagari_bandhani_48127553a3.jpg"
    // },

    // {
    //     title: "Fafda - jalebi ",
    //     description: "Fafda–Jalebi is a popular Gujarati snack combination.",
    //     date: new Date(),
    //     location: "Ahmedabad, Gujarat",
    //     category: "Handicraft",
    //     totalAmount: 50,
    //     availableAmount: 50,
    //     productPrice: " ₹350 Per KG",
    //     image: "https://t4.ftcdn.net/jpg/18/55/24/99/360_F_1855249956_5HSeXcoEcMxn682MBxjTmJnGWx5rImqF.jpg"
    // },

    // {
    //     title: "Thepla",
    //     description: "Thepla is a soft Gujarati flatbread made from whole wheat flour.",
    //     date: new Date(),
    //     location: "Vadodara, Gujarat",
    //     category: "Food Product",
    //     totalAmount: 200,
    //     availableAmount: 200,
    //     productPrice: 7 ,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAH4E0_a7xt4PYawvEld6K9FZ3cW2Pq269Ug&s"
    // },

    // {
    //     title: "Dhokla",
    //     description: "Dhokla is a soft, spongy Gujarati snack made from fermented gram flour or rice batter.",
    //     date: new Date(),
    //     location: "Gandhinagar, Gujarat",
    //     category: "Fruit",
    //     totalAmount: 300,
    //     availableAmount: 300,
    //     productPrice: 150,
    //     image: "https://images.getrecipekit.com/20230615073642-2-20-6.jpg?aspect_ratio=4:3&quality=90&"
    // },

    // {
    //     title: "Amul Dairy",
    //     description: "Amul Dairy largest dairy brands known for producing milk, butter, cheese, ice cream.",
    //     date: new Date(),
    //     location: "Mehsana, Gujarat",
    //     category: "Textile",
    //     totalAmount: 80,
    //     availableAmount: 80,
    //     productPrice: 400,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/dairy_19da9fb9d8.jpg"
    // },

    // {
    //     title: "Undhiyu",
    //     description: "Undhiyu is a traditional Gujarati mixed vegetable dish, especially popular in winter.",
    //     date: new Date(),
    //     location: "Surat, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 420,
    //     image: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1756352439615_2v2ij_2048x1365.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75"
    // },

    // {
    //     title: "Patola Silk",
    //     description: "Patola Silk is a luxurious handwoven textile from patan.",
    //     date: new Date(),
    //     location: "Patan, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 1200,
    //     image: "https://www.utsavpedia.com/wp-content/uploads/2013/06/Gujarat-patola-work3.jpg"
    // },

    // {
    //     title: "Surti Locho ",
    //     description: "Surti Locho is a popular street food from Navsari, Gujarat",
    //     date: new Date(),
    //     location: "Navsari, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 50,
    //     image: "https://www.nehascookbook.com/wp-content/uploads/2022/09/2-type-surti-locho-WS-1068x601.jpg"
    // },

    // {
    //     title: "Ceramic tiles",
    //     description: "Ceramic tiles are durable building materials made from clay and hardened by heat.",
    //     date: new Date(),
    //     location: "Morbi , Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 70,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/ceramic_tiles_and_sanitary_ware_28d0e1d3b5.jpg"
    // },

    // {
    //     title: "Kutchi dabeli",
    //     description: "Kutchi Dabeli is a popular street food from Kutch, Gujarat.",
    //     date: new Date(),
    //     location: "Kutch, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 30,
    //     image: "https://img.freepik.com/premium-photo/dabeli-kutchi-dabeli-double-roti-is-popular-snack-food-india-originating-kutch-kachchh-region-gujarat_466689-51847.jpg"
    // },

    // {
    //     title: "Diamonds",
    //     description: "Diamonds are precious gemstones known for their exceptional hardness and brilliance.",
    //     date: new Date(),
    //     location: "Panchmahal, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 700000,
    //     image: "https://www.diamondlinejewellery.com.au/wp-content/uploads/2015/09/diamonds3-2000x1200.png"
    // },

    // {
    //     title: "Salt",
    //     description: "Salt is a common mineral composed mainly of sodium chloride.",
    //     date: new Date(),
    //     location: "Bhavnagar, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 28,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/salt_e0ca8de4de.jpg"
    // },

    // {
    //     title: "Chikoo",
    //     description: "Chikoo (sapodilla) is a sweet, brown tropical fruit with soft, grainy pulp.",
    //     date: new Date(),
    //     location: "Valsad, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 50,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXz9QKYCJ3pONnDlEuTjzwV8WwONPPI0JIA&s"
    // },

    // {
    //     title: "Kesar Mango",
    //     description: "Kesar Mango is a famous variety of mango from Gir Somnath, Gujarat",
    //     date: new Date(),
    //     location: "Gir Somnath, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 90,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/kesar_mango_f3b6264d49.jpg"
    // },

    // {
    //     title: "Brass Part ",
    //     description: "Brass parts are components made from an alloy of copper and zinc.",
    //     date: new Date(),
    //     location: "Rajkot, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 1200,
    //     image: "https://content.jdmagicbox.com/comp/def_content_category/brass-manufacturers/6df8039f29-brass-manufacturers-1-nxmrj.jpg"
    // },

    // {
    //     title: "HandiCrafts ",
    //     description: "Handicrafts are handmade items created by skilled artisans using traditional techniques.",
    //     date: new Date(),
    //     location: "Surendranagar, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 700,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/handicraft_items_c25d4612bf.jpg"
    // },

    // {
    //     title: "Rice ",
    //     description: "Rice is a staple food grain widely consumed around the world, especially in Kheda.",
    //     date: new Date(),
    //     location: "Kheda, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 70,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/rice_bf5fe95e7f.jpg"
    // },

    // {
    //     title: "Ground Nut ",
    //     description: "Groundnut (peanut) is a nutritious legume rich in protein, healthy fats, and vitamins.",
    //     date: new Date(),
    //     location: "Amreli, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 110,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/ground_nut_c9a1fc8385.jpg"
    // },

    // {
    //     title: "Nagali Product ",
    //     description: "Nagali products are nutritious foods made from a highly healthy grain.",
    //     date: new Date(),
    //     location: "Dang, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 170,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/nagali_products_0194742b6b.webp"
    // },

    // {
    //     title: "Corn Product ",
    //     description: "Corn products are foods made from maize, such as corn flour.",
    //     date: new Date(),
    //     location: "Dahod, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 60,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/corn_products_1ea6b21657.jpg"
    // },

    // {
    //     title: "Agates of cambayt ",
    //     description: "Agates of Cambay are beautifully polished semi-precious stones found mainly in Gujarat.",
    //     date: new Date(),
    //     location: "Anand, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 400,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/agates_of_cambay_77e727278f.jpg"
    // },

    // {
    //     title: "Soof embroidery ",
    //     description: "Soof Embroidery is a traditional embroidery style from Gujarat.",
    //     date: new Date(),
    //     location: "Banaskantha, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 900,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/soof_embroidery_9f0bf2d43e.jpg"
    // },

    // {
    //     title: "Chemicals (Chemicals,Agro) ",
    //     description: "Chemicals refer to products used in agriculture and industrial processes.",
    //     date: new Date(),
    //     location: "Bharuch, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 140,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/chemicals_chemicals_agro_chemicals_a4ed5031ea.jpg"
    // },

    // {
    //     title: "Jining ",
    //     description: "Ginning is the process of separating cotton fibers from their seeds.",
    //     date: new Date(),
    //     location: "Botad, Gujarat",
    //     category: "Manufacturing Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 600,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/jining_0e9c11bdb7.jpg"
    // },

    // {
    //     title: "Pithora ",
    //     description: "Pithora is a traditional ritual painting style practiced by tribal communities of Gujarat.",
    //     date: new Date(),
    //     location: "Chhota Udaipur, Gujarat",
    //     category: "Handicrafts Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 1000,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/pithora_cd121d1a40.jpg"
    // },

    // {
    //     title: "Dholdara fish ",
    //     description: "Dholara Fish is a traditional dried fish product from the coastal regions of Gujarat.",
    //     date: new Date(),
    //     location: "Devbhoomi Dwarka, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 200,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/dholdara_fish_f79faa9f6b.jpg"
    // },

    // {
    //     title: "Bamboo Products ",
    //     description: "Bamboo Products are eco-friendly items made from Tapi.",
    //     date: new Date(),
    //     location: "Tapi, Gujarat",
    //     category: "Agriculture Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 250,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/bamboo_products_63f28e43d1.jpg"
    // },

    // {
    //     title: "Mixture of spices",
    //     description: "Mixture of Spices refers to a blend of different spices combined to enhance the flavor.",
    //     date: new Date(),
    //     location: "Vav-Tharad, Gujarat",
    //     category: "Manufacturing Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 70,
    //     image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_680/https://www.myweekendkitchen.in/wp-content/uploads/2018/05/List_of_Indian_Spices_English_Hindi.jpg"
    // },

    // {
    //     title: "Terracotta ",
    //     description: "Terracotta is a type of baked clay used to make pottery.",
    //     date: new Date(),
    //     location: "Sabar kantha, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 50,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/terracotta_3ce2b43041.jpg"
    // },

    // {
    //     title: "Marine (Queen Fish) ",
    //     description: "Queen Fish is a popular marine fish found in coastal waters of Porbandar.",
    //     date: new Date(),
    //     location: "Porbandar, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 250,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/marine_queen_fish_892c35748e.jpg"
    // },

    // {
    //     title: "Plastic Products ",
    //     description: "Plastic Products are items made from synthetic materials called plastics.",
    //     date: new Date(),
    //     location: "Panchmahal, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 90,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/plastic_products_dfffc181bb.jpg"
    // },

    // {
    //     title: "Banana ",
    //     description: "Banana is a widely consumed fruit known for its sweet taste.",
    //     date: new Date(),
    //     location: "Narmada, Gujarat",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 30,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/banana_aa5efaf02f.jpg"
    // },

    // {
    //     title: "Agro Processing ",
    //     description: "Agro Processing refers to the process of converting raw agricultural products.",
    //     date: new Date(),
    //     location: "Arvalli, Gujarat",
    //     category: "Agricultural Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 5000,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/agro_processing_aa3b4557bd.jpg"
    // },

    // {
    //     title: "Green Dates ",
    //     description: "Green Dates are the unripe form of dates harvested from the date palm tree.",
    //     date: new Date(),
    //     location: "Kachchh, Gujarat",
    //     category: "Agriculture Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 110,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/green_dates_f0aa8fa66f.jpg"
    // },

    // Bihar Data

    {
        title: "Makhana",
        description: "Famous fox nut (makhana) cultivated in Araria district.",
        date: new Date(),
        location: "Araria, Bihar",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 700,
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
        productPrice: 180,
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
        category: "Food Product",
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
        category: "Textile Product",
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
        category: "Agriculture Product",
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
        category: "HandiCraft Product",
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
        category: "Food",
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
        category: "Textile Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 80,
        image: "https://static.india.gov.in/npiprod/odop/uploads/handloom_25d26f7b2e.jpg"
    },

    {
        title: "Mango",
        description: "Famous product from Darbhanga, Bihar.",
        date: new Date(),
        location: "Darbhanga, Bihar",
        category: " Fruit ",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 120,
        image: "https://healthybuddha.in/image/cache/catalog/fazilmango-500x515.jpeg"
    },

    {
        title: "Lac Bangles",
        description: "Famous product from Supaul, Bihar.",
        date: new Date(),
        location: "Supaul, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 600,
        image: "https://static.india.gov.in/npiprod/odop/uploads/lac_bangles_d2df1cb8b3.jpg"
    },

    {
        title: "Carpet",
        description: "Famous product from Aurangabad, Bihar.",
        date: new Date(),
        location: "Aurangabad, Bihar",
        category: "Textiile Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 300,
        image: "https://static.india.gov.in/npiprod/odop/uploads/carpet_26671772d7.jpg"
    },

    {
        title: "Lemon Grass",
        description: "Famous product from Banka, Bihar.",
        date: new Date(),
        location: "Banka, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1200,
        image: "https://static.india.gov.in/npiprod/odop/uploads/lemon_grass_8439d7a9d0.jpg"
    },

    {
        title: "Silk",
        description: "Famous product from Bhagalpur, Bihar.",
        date: new Date(),
        location: "Bhagalpur, Bihar",
        category: "Textile Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 700,
        image: "https://static.india.gov.in/npiprod/odop/uploads/bhagalpur_silk_2f4a78283d.png"
    },

    {
        title: "Brass Utensil Work",
        description: "Famous product from Patna, Bihar.",
        date: new Date(),
        location: "Patna, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 3500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/brass_metal_work_ba705ef109.jpg"
    },

    {
        title: "Mushroom",
        description: "Famous product from West Champaran, Bihar.",
        date: new Date(),
        location: "West Champaran, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 300,
        image: "https://static.india.gov.in/npiprod/odop/uploads/mushroom_0465bc1ecf.jpg"
    },

    {
        title: " Litti-Chokha",
        description: "Litti Chokha is a traditional, rustic dish originating from Arwal, Bihar.",
        date: new Date(),
        location: "Arwal, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 40,
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/litti_chokha.webp?updatedAt=1727157685190"
    },

    {
        title: "Chhena Murki",
        description: "Chhena Murki is a popular, dry Indian sweet made from Motihari, Bihar.",
        date: new Date(),
        location: "Motihari, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://www.flavouroffood.com/wp-content/uploads/2022/01/cropped-Chena-Murkhi-Recipe-4.jpg"
    },

    {
        title: "Jackfruit",
        description: "Famous product from Jamui, Bihar.",
        date: new Date(),
        location: "Jamui, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 60,
        image: "https://static.india.gov.in/npiprod/odop/uploads/jackfruit_afa8afb281.jpg"
    },

    {
        title: "Rice",
        description: "Famous product from Jahanabad, Bihar.",
        date: new Date(),
        location: "Jehanabad, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 35,
        image: "https://static.india.gov.in/npiprod/odop/uploads/rice_c89e1f46be.jpg"
    },

    {
        title: "Bamboo art",
        description: "Khagaria district in the Indian state of Bihar is known for its exquisite bamboo art. .",
        date: new Date(),
        location: "Khagaria, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 250,
        image: "https://static.india.gov.in/npiprod/odop/uploads/bamboo_art_f75daef564.jpg"
    },

    {
        title: "Pulses (Masoor)",
        description: "The traditional methods of cultivation, combined with the fertile land and the River Ganges from Patna, Bihar.",
        date: new Date(),
        location: "Lakhisarai, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 85,
        image: "https://static.india.gov.in/npiprod/odop/uploads/brass_metal_work_ba705ef109.jpg"
    },

    {
        title: "Pineapple",
        description: "Famous product from Kishanganj, Bihar.",
        date: new Date(),
        location: "Kishanganj, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 120,
        image: "https://static.india.gov.in/npiprod/odop/uploads/pineapple_046db44a7b.jpg"
    },

    {
        title: "Lemon Grass",
        description: "The sweet fragrance of lemongrass permeates the air in Munger, Bihar.",
        date: new Date(),
        location: "Munger, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 60,
        image: "https://static.india.gov.in/npiprod/odop/uploads/lemon_grass_8439d7a9d0.jpg"
    },

    {
        title: "Jute",
        description: "Purnea, nestled in the eastern region of Bihar, is renowned for its exquisite production of jute.",
        date: new Date(),
        location: "Purnia, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 50,
        image: "https://static.india.gov.in/npiprod/odop/uploads/jute_5b656e5757.jpg"
    },

    {
        title: "Menthol",
        description: "Rohtas, a district in Bihar, is known for producing high-quality menthol.",
        date: new Date(),
        location: "Rohtas, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1100,
        image: "https://static.india.gov.in/npiprod/odop/uploads/menthol_eebd54c852.jpg"
    },

    {
        title: "Pottery",
        description: "Famous product from Saran, Bihar.",
        date: new Date(),
        location: "Saran, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 150,
        image: "https://images.pexels.com/photos/18776184/pexels-photo-18776184.jpeg"
    },

    {
        title: "Maize",
        description: "Maize is a versatile grain that finds its use in various sectors Sheohar,Bihar.",
        date: new Date(),
        location: "Sheohar, Bihar",
        category: "Agriculture  Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 30,
        image: "https://static.india.gov.in/npiprod/odop/uploads/maize_380a17424d.jpg"
    },

    {
        title: "Onion",
        description: "Onion cultivation in Sheikhpura, Bihar, is an important agricultural activity in the region.",
        date: new Date(),
        location: "Sheikhpura, Bihar",
        category: "Agriculture  Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 25,
        image: "https://static.india.gov.in/npiprod/odop/uploads/onion_d11356b758.jpg"
    },

    {
        title: "Applique (Khatwa) Work of Bihar",
        description: "Sitamarhi, is renowned for its intricate and exquisite applique work.",
        date: new Date(),
        location: "Sitamarhi, Bihar",
        category: "HandiCraft Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 300,
        image: "https://static.india.gov.in/npiprod/odop/uploads/applique_khatwa_work_of_bihar_6636e22bc2.jpg"
    },

    {
        title: "Chilli",
        description: "Begusarai has a rich tradition of chilli cultivation located in the eastern indian state of Bihar.",
        date: new Date(),
        location: "Begusarai, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 700,
        image: "https://static.india.gov.in/npiprod/odop/uploads/chilli_53cb4137be.jpg"
    },

    {
        title: "Mentha",
        description: "Famous product from Buxar, Bihar.",
        date: new Date(),
        location: "Buxar, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 900,
        image: "https://static.india.gov.in/npiprod/odop/uploads/mentha_c513a4c94e.jpg"
    },

    {
        title: "Makhana",
        description: "Famous product from Saharsa, Bihar.",
        date: new Date(),
        location: "Saharsa, Bihar",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 700,
        image: "https://static.india.gov.in/npiprod/odop/uploads/makhana_8eaaadf7e0.jpg"
    },

    // Jharkhand

    {
        title: "Woodcraft",
        description: "Bokaro Woodcraft ranges from intricate wooden boxes, to beautiful and functional furniture pieces.",
        date: new Date(),
        location: "Bokaro, Jharkhand",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/woodcraft_211ef97354.jpg"
    },

    {
        title: "Vegetables",
        description: "Chatra region produces a variety of vegetables which are known for its high quality.",
        date: new Date(),
        location: "Chatra, Jharkhand",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 50,
        image: "https://static.india.gov.in/npiprod/odop/uploads/vegetables_8df224b3bd.jpg"
    },

    {
        title: "Lac Products",
        description: "Deogarh Lac Products are made from a natural resin obtained from the lac insect.",
        date: new Date(),
        location: "Deoghar, Jharkhand",
        category: "Manufacturing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 150,
        image: "https://static.india.gov.in/npiprod/odop/uploads/lac_products_0cd7b90d9f.jpg"
    },

    {
        title: "Coal",
        description: "The coal mines in Dhanbad are among the largest in India.",
        date: new Date(),
        location: "Dhanbad, Jharkhand",
        category: "Manufacturing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 4500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/coal_bd18d1f1c8.jpg"
    },

    {
        title: "Bamboo",
        description: "Dumka is amongst the largest bamboo cluster in Jharkhand specialising in utility products such as mats, baskets and winnowing trays (Supa).",
        date: new Date(),
        location: "Dumka, Jharkhand",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://static.india.gov.in/npiprod/odop/uploads/bamboo_b2f93c6416.jpg"
    },

    {
        title: "Paithkar Painting",
        description: "Paithkar paintings are a traditional form of folk art of Jharkhand and a testament to the rich artistic heritage of the region.",
        date: new Date(),
        location: "East Singhbhum, Jharkhand",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 800,
        image: "https://static.india.gov.in/npiprod/odop/uploads/paithkar_painting_481b5bf85b.jpg"
    },

    {
        title: "Carpets",
        description: "Garhwa Carpets are a popular choice for both residential and commercial use.",
        date: new Date(),
        location: "Garhwa, Jharkhand",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 300,
        image: "https://static.india.gov.in/npiprod/odop/uploads/carpets_873be62038.jpg"
    },

    {
        title: "Steel- Tmt Bars",
        description: "Giridih Steel-TMT Bars are a popular choice for construction, engineering andinfrastructure projects.",
        date: new Date(),
        location: "Giridih, Jharkhand",
        category: "Manufacturing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 5000,
        image: "https://static.india.gov.in/npiprod/odop/uploads/steel_tmt_bars_19c973ea05.jpg"
    },

    {
        title: "Tasar Silk",
        description: "Tasar silk is renowned for its exquisite craftsmanship and natural elegance.",
        date: new Date(),
        location: "Godda, Jharkhand",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/tasar_silk_eb0d9e6ea0.jpg"
    },

    {
        title: "Mango",
        description: "Gumla district in jharkhand is known for its delectable mangoes, celebrated for their succulent flavor and juiciness.",
        date: new Date(),
        location: "Gumla, Jharkhand",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 110,
        image: "https://static.india.gov.in/npiprod/odop/uploads/mango_1e29f52ed4.jpg"
    },

    {
        title: "Sohrai Panting",
        description: "Sohrai Panting is a traditional form of tribal art from the Hazaribagh district of Jharkhand. ",
        date: new Date(),
        location: "Hazaribag, Jharkhand",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 800,
        image: "https://static.india.gov.in/npiprod/odop/uploads/sohrai_painting_a614337987.jpg"
    },

    {
        title: "Nuts-Cashew",
        description: "Cashews are a popular nut crop grown in the Indian state of Jharkhand, spacifically in the district of jamtara.",
        date: new Date(),
        location: "Jamtara, Jharkhand",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 250,
        image: "https://static.india.gov.in/npiprod/odop/uploads/nuts_cashew_fb54e26ec4.jpg"
    },

    {
        title: "Lac",
        description: "Lac is a natural resin produced by tiny Lac insects that feed on the sap of trees.",
        date: new Date(),
        location: "Khunti, Jharkhand",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 450,
        image: "https://static.india.gov.in/npiprod/odop/uploads/lac_af713a75a4.jpg"
    },

    {
        title: "Mica",
        description: "Mica is a naturally occurring mineral that is widely used in various industries, including electronics, cosmetics, and construction.",
        date: new Date(),
        location: "Koderma, Jharkhand",
        category: "Manufacturing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 45,
        image: "https://static.india.gov.in/npiprod/odop/uploads/mica_c2b5a530e7.jpg"
    },

    {
        title: "Mahua",
        description: "Mahua is a type of flowering tree that is native to India and its edible flowers, seeds, and oil are used in regional dishes.",
        date: new Date(),
        location: "Latehar, Jharkhand",
        category: "Food processing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 60,
        image: "https://static.india.gov.in/npiprod/odop/uploads/mahua_5eb2686a8f.jpg"
    },

    {
        title: "Honey",
        description: "Honey produced in lohardaga is know for its high quality and unique flavor, given the richness of the local flora.",
        date: new Date(),
        location: "Lohardaga, Jharkhand",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 160,
        image: "https://static.india.gov.in/npiprod/odop/uploads/honey_f92fd7cbeb.jpg"
    },

    {
        title: "Jute",
        description: "Produced from the finest quality jute plants, Pakur jute is grown and processed into high quality finished products.",
        date: new Date(),
        location: "Pakur, Jharkhand",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 90,
        image: "https://static.india.gov.in/npiprod/odop/uploads/jute_7259946216.jpg"
    },

    {
        title: "Pulses-Arhar",
        description: "Well supported by region's warm and humid climate along with the availablity of fertile agricultural land.",
        date: new Date(),
        location: "Palamu, Jharkhand",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 130,
        image: "https://static.india.gov.in/npiprod/odop/uploads/pulses_arhar_c04d162b33.jpg"
    },

    {
        title: "Silver Jewellery",
        description: "Jharkhand is a leading producer of minerals in India.",
        date: new Date(),
        location: "Ramgarh, Jharkhand",
        category: "Manufacturing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 2500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/silver_jewellery_cbd93c064e.jpg"
    },

    {
        title: "Readymade Garments",
        description: "Ranchi is the capital city of the Indian state of Jharkhand and is known for its ready-made garments industry.",
        date: new Date(),
        location: "Ranchi, Jharkhand",
        category: "Textile",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 250,
        image: "https://static.india.gov.in/npiprod/odop/uploads/readymade_garments_fd45acc26c.jpg"
    },

    {
        title: "Jute",
        description: "Located on the banks of the Ganges River and surrounded by fertile land, Sahibgang district of jharkhand.",
        date: new Date(),
        location: "Sahibganj, Jharkhand",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 900,
        image: "https://static.india.gov.in/npiprod/odop/uploads/jute_2d42cea42a.jpg"
    },

    {
        title: "Kharsawan Silk",
        description: "The traditional silk weaving industry in the region produces high-quality silk saris, fabrics and other silk products.",
        date: new Date(),
        location: "Seraikela-Kharsawan, Jharkhand",
        category: "Textile",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 2000,
        image: "https://www.shalvifashion.com/images/products/tussar-silk-saree.jpg"
    },

    {
        title: "Minor Forest Product",
        description: "Simdega district in the Indian state of Jharkhand is surrounded by dense forests and thus, has a rich variety of forest products such as bamboo, honey, medicinal plants, and herbs.",
        date: new Date(),
        location: "Simdega, Jharkhand",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 40,
        image: "https://static.india.gov.in/npiprod/odop/uploads/minor_forest_produce_89094149a6.jpg"
    },

    {
        title: "Custard Apple",
        description: "Custard apple, also known as Sitaphal in India, is widely grown in West Singhbhum region of Jharkhand.",
        date: new Date(),
        location: "West Singhbhum, Jharkhand",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/custard_apple_4990ce87dd.jpg"
    },

    // Kerala

    {
        title: "Alleppey Coir",
        description: "Alappuzha, located in Kerala, is renowned as the heart of the state's thriving coir industry.",
        date: new Date(),
        location: "Alappuzha, Kerala",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 40,
        image: "https://static.india.gov.in/npiprod/odop/uploads/alleppey_coir_1688934fbf.jpg"
    },

    {
        title: "Oleoresins",
        description: "Ernakulam is popular for oleoresins as they have the same properties as the original spice.",
        date: new Date(),
        location: "Ernakulam, Kerala",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1700,
        image: "https://static.india.gov.in/npiprod/odop/uploads/oleoresins_a1a2cab14b.jpg"
    },

    {
        title: "Spices",
        description: "Idukki district in Kerala is renowned for its rich cultivation of spices.",
        date: new Date(),
        location: "Idukki, Kerala",
        category: "Agriculture Product", 
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 700,
        image: "https://static.india.gov.in/npiprod/odop/uploads/spices_2fecf06729.jpg"
    },

    {
        title: "Handloom Products",
        description: "Kannur district in Kerala, known as the 'Handloom City' or the 'Manchester of Kerala",
        date: new Date(),
        location: "Kannur, Kerala",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/handloom_products_c88854155f.jpg"
    },

    {
        title: "Cashew Products",
        description: "Kasaragod district in Kerala is renowned for its thriving cashew plantations and processing industry.",
        date: new Date(),
        location: "Kasaragod, Kerala",
        category: "Food Processing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 800,
        image: "https://static.india.gov.in/npiprod/odop/uploads/cashew_products_570d39d5be.jpg"
    },

    {
        title: "Cashew Nut Products",
        description: "Kollam district in Kerala is a significant center for the cashew industry in India.",
        date: new Date(),
        location: "Kollam, Kerala",
        category: "Food Processing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 900,
        image: "https://static.india.gov.in/npiprod/odop/uploads/cashew_nut_products_de0cd4ff00.jpg"
    },

    {
        title: "Robber Products",
        description: "Kottayam district in Kerala is renowned for its thriving rubber industry.",
        date: new Date(),
        location: "Kottayam, Kerala",
        category: "Manufacturing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://static.india.gov.in/npiprod/odop/uploads/rubber_products_f2b6337adb.jpg"
    },

    {
        title: "Coconut Products",
        description: "Kozhikode is famous for its traditional method of extracting coconut oil known as wodern chekku or ghani",
        date: new Date(),
        location: "Kozhikode, Kerala",
        category: "Food Processing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 80,
        image: "https://static.india.gov.in/npiprod/odop/uploads/coconut_products_1dbef7c65e.jpg"
    },

    {
        title: "Food Products",
        description: "Malappuram district in Kerala is renowned for its delectable food products, representing the diverse cuisine of the region.",
        date: new Date(),
        location: "Malappuram, Kerala",
        category: "Food Processing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://static.india.gov.in/npiprod/odop/uploads/food_products_99bc6c6fd5.jpg"
    },

    {
        title: "Palakkadan Matta Rice",
        description: "Matta Rice, also known as Palakkadan Matta Rice, hails from the Palakkad district of Kerala.",
        date: new Date(),
        location: "Palakkad, Kerala",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 70,
        image: "https://static.india.gov.in/npiprod/odop/uploads/palakkadan_matta_rice_be6aae9171.jpg"
    },

    {
        title: "Food Products",
        description: "Pathanamthitta district in Kerala is renowned for its delectable food offerings.",
        date: new Date(),
        location: "Pathanamthitta, Kerala",
        category: "Food Processing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 60,
        image: "https://static.india.gov.in/npiprod/odop/uploads/food_products_6955014a28.jpg"
    },

    {
        title: "Handloom Products",
        description: "The handloom industry in Thiruvananthapuram is known for its high-quality fabrics and intricate designs.",
        date: new Date(),
        location: "Thiruvananthapuram, Kerala",
        category: "Textile",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 100,
        image: "https://static.india.gov.in/npiprod/odop/uploads/handloom_products_e56eda1b68.jpg"
    },

    {
        title: "Coconut Product",
        description: "Some of the most popular coconut products produced in Thrissur include coconut oil, desiccated coconut, coconut milk, and coconut water.",
        date: new Date(),
        location: "Thrissur, Kerala",
        category: "Food Processing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 60,
        image: "https://static.india.gov.in/npiprod/odop/uploads/coconut_products_26cbceaa0e.jpg"
    },

    {
        title: "Wayanaad Robusta Coffee",
        description: "Coffee cultivation in Wayanad is a major contributor to the local economy.",
        date: new Date(),
        location: "Wayanad, Kerala",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://static.india.gov.in/npiprod/odop/uploads/wayanaad_robusta_coffee_d9359eaded.jpg"
    },

    // Jammu and Kashmir

    {
        title: "Trout Fish",
        description: "The trout fish from Anantnag district of Jammu and Kashmir is a delectable delicacy, prized for its delicate texture.",
        date: new Date(),
        location: "Anantnag, Jammu and Kashmir",
        category: "Marine",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 350,
        image: "https://static.india.gov.in/npiprod/odop/uploads/trout_fish_4f307ca89c.jpg"
    },

    {
        title: "Crewal Based Shawl",
        description: "The crewel-based shawl from Bandipora district of Jammu and Kashmir is a stunning piece of wearable art.",
        date: new Date(),
        location: "Bandipore, Jammu and Kashmir",
        category: "Textile",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 2500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/crewal_based_shawl_ba32a27694.jpg"
    },

    {
        title: "Apple",
        description: "The apples from Baramulla district of Jammu and Kashmir are a marvel of nature, nurtured in the lap of the Himalayas.",
        date: new Date(),
        location: "Baramulla, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 150,
        image: "https://static.india.gov.in/npiprod/odop/uploads/apples_242d82c453.jpg"
    },

    {
        title: "Kani Shawl",
        description: "The Kani shawl from Budgam district of Jammu and Kashmir is a rare and stunning masterpiece of weaving.",
        date: new Date(),
        location: "Budgam, Jammu and Kashmir",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 100,
        productPrice:300,
        image: "https://static.india.gov.in/npiprod/odop/uploads/kani_shawl_df1be591ca.jpg"
    },

    {
        title: "Natural Oils (Lavender)",
        description: "The natural lavender oil from Doda district of Jammu and Kashmir is a sought-after oil with soothing and therapeutic properties.",
        date: new Date(),
        location: "Doda, Jammu and Kashmir",
        category: "Manufacturing",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/natural_oils_lavender_dc42e6f841.jpg"
    },

    {
        title: "Wicker Willow",
        description: "The wicker willow from Ganderbal district of Jammu and Kashmir is a versatile and durable material, woven by skilled artisans using traditional techniques.",
        date: new Date(),
        location: "Ganderbal, Jammu and Kashmir",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://static.india.gov.in/npiprod/odop/uploads/wicker_willow_40c5c27a57.jpg"
    },

    {
        title: "Basmati",
        description: "The Basmati rice from Jammu district of Jammu and Kashmir is renowned for its fragrant aroma and flavorful taste.",
        date: new Date(),
        location: "Jammu, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 120,
        image: "https://static.india.gov.in/npiprod/odop/uploads/basmati_b0f38d4180.jpg"
    },

    {
        title: "Basohli Painting",
        description: "The Basholi painting from Kathua district of Jammu and Kashmir is a vibrant and intricate art form with a fascinating history.",
        date: new Date(),
        location: "Kathua, Jammu and Kashmir",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/basohli_painting_900b9f41ee.jpg"
    },

    {
        title: "Kashmir Saffron",
        description: "The saffron from Kishtwar district of Jammu and Kashmir is a prized spice known for its exceptional quality.",
        date: new Date(),
        location: "Kishtwar, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/kashmir_saffron_9ceaf4871d.jpg"
    },

    {
        title: "Garlic",
        description: "The garlic from Kulgam district of Jammu and Kashmir is a prized herb known for its bold flavor and medicinal properties.",
        date: new Date(),
        location: "Kulgam, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 80,
        image: "https://static.india.gov.in/npiprod/odop/uploads/garlic_2f275205cc.jpg"
    },

    {
        title: "Walnuts",
        description: "The walnuts from Kupwara district of Jammu and Kashmir are highly prized for their flavor and health benefits.",
        date: new Date(),
        location: "Kupwara, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 600,
        image: "https://static.india.gov.in/npiprod/odop/uploads/walnuts_2dd6f2d1ec.jpg"
    },

    {
        title: "Pecannut",
        description: "The peanuts from Poonch district of Jammu and Kashmir are a delicious and nutritious legume that is prized for its rich flavor and versatile uses.",
        date: new Date(),
        location: "Poonch, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1200,
        image: "https://static.india.gov.in/npiprod/odop/uploads/pecannut_d48c593995.jpg"
    },

    {
        title: "Kashmir Saffron",
        description: "The saffron from Pulwama district of Jammu and Kashmir is a highly prized spice renowned for its delicate flavor, vivid color, and potent health benefits.",
        date: new Date(),
        location: "Pulwama, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/kashmir_saffron_688c9fc012.jpg"
    },

    {
        title: "Walnuts",
        description: "The walnuts from Rajouri district of Jammu and Kashmir are highly prized for their rich flavor, creamy texture, and health benefits.",
        date: new Date(),
        location: "Rajouri, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,   
        productPrice: 600,
        image: "https://static.india.gov.in/npiprod/odop/uploads/walnuts_625ef318f5.jpg"
    },

    {
        title: "Honey",
        description: "The honey from Ramban district of Jammu and Kashmir is a rare and precious natural sweetener prized for its distinct flavor and powerful health benefits.",
        date: new Date(),
        location: "Ramban, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 350,
        image: "https://static.india.gov.in/npiprod/odop/uploads/honey_1b9828fedc.jpg"
    },

    {
        title: "Aromatic Plants",
        description: "The aromatic plants from Reasi district of Jammu and Kashmir are highly valued for their unique flavors, scents, and therapeutic properties.",
        date: new Date(),
        location: "Reasi, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 250,
        image: "https://static.india.gov.in/npiprod/odop/uploads/aromatic_plants_157ad83e93.jpg"
    },

    {
        title: "Mushroom",
        description: "The mushrooms from Samba district of Jammu and Kashmir are prized for their earthy, rich flavor and tender, meaty texture.",
        date: new Date(),
        location: "Samba, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/mushroom_1e39b37608.jpg"
    },

    {
        title: "Apple",
        description: "The apples from Shopian district of Jammu and Kashmir are a rare and precious fruit prized for their juicy.",
        date: new Date(),
        location: "Shopian, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 150,
        image: "https://static.india.gov.in/npiprod/odop/uploads/apple_a1de8486fa.jpg"
    },

    {
        title: "Kashmiri Hand Knotted Carpet",
        description: "The silk carpets from Srinagar district of Jammu and Kashmir are a true testament to the artistry and craftsmanship of skilled artisans.",
        date: new Date(),
        location: "Srinagar, Jammu and Kashmir",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 500,
        image: "https://static.india.gov.in/npiprod/odop/uploads/kashmiri_hand_knotted_carpet_bf0a4d5db6.jpg"
    },

    {
        title: "Garlic",
        description: "The garlic from Udhampur district of Jammu and Kashmir is a flavorful and aromatic herb known for its pungent, savory taste and distinct aroma.",
        date: new Date(),
        location: "Udhampur, Jammu and Kashmir",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 80,
        image: "https://static.india.gov.in/npiprod/odop/uploads/garlic_ebdae6800a.jpg"
    },

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