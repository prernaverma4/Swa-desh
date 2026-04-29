const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');
const Event = require('./Models/Event.js');


const events = [

    // {
    //     title: "Makhana",
    //     description: "Famous fox nut (makhana) cultivated in Araria district.",
    //     date: new Date(),
    //     location: "Araria, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 400,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/makhana_2ae7660066.jpg"
    // },

    // {
    //     title: "Madhubani Painting",
    //     description: "Traditional hand-painted Madhubani art from Bihar.",
    //     date: new Date(),
    //     location: "Madhubani, Bihar",
    //     category: "Handicraft",
    //     totalAmount: 50,
    //     availableAmount: 50,
    //     productPrice: 1000,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/madhubhani_paintings_c43aff0588.jpg"
    // },

    // {
    //     title: "Tilkut",
    //     description: "Traditional sweet made from sesame and jaggery.",
    //     date: new Date(),
    //     location: "Gaya, Bihar",
    //     category: "Food Product",
    //     totalAmount: 200,
    //     availableAmount: 200,
    //     productPrice: 200,
    //     image: "https://bazaarmantri.com/images/products/40367.jpg"
    // },

    // {
    //     title: "Shahi Litchi",
    //     description: "World famous Muzaffarpur Shahi Litchi fruit.",
    //     date: new Date(),
    //     location: "Muzaffarpur, Bihar",
    //     category: "Fruit",
    //     totalAmount: 300,
    //     availableAmount: 300,
    //     productPrice: 100,
    //     image: "https://5.imimg.com/data5/ANDROID/Default/2022/5/MB/WG/EU/152554225/product-jpeg.jpg"
    // },

    // {
    //     title: "Bhagalpuri Silk",
    //     description: "Famous Bhagalpuri silk fabric.",
    //     date: new Date(),
    //     location: "Bhagalpur, Bihar",
    //     category: "Textile",
    //     totalAmount: 80,
    //     availableAmount: 80,
    //     productPrice: 2000,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/bhagalpuri_silk_eb07d7a3c8.jpg"
    // },

    // {
    //     title: "Brass Utensils",
    //     description: "Famous product from Nalanda, Bihar.",
    //     date: new Date(),
    //     location: "Nalanda, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 500,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/brass_utensils.jpg"
    // },

    // {
    //     title: "Jaggery",
    //     description: "Famous product from Saran, Bihar.",
    //     date: new Date(),
    //     location: "Saran, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 50,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/jaggery.jpg"
    // },

    // {
    //     title: "Khaja",
    //     description: "Famous product from Bhojpur, Bihar.",
    //     date: new Date(),
    //     location: "Bhojpur, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 30,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/silao_khaja_f16c1730a6.webp"
    // },

    // {
    //     title: "Jute",
    //     description: "Famous product from Katihar, Bihar.",
    //     date: new Date(),
    //     location: "Katihar, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 4800,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/jute_9d3b04e272.jpg"
    // },

    // {
    //     title: "Sugarcane",
    //     description: "Famous product from Gopalganj, Bihar.",
    //     date: new Date(),
    //     location: "Gopalganj, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 400,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/sugarcane_4016a507b2.jpg"
    // },

    // {
    //     title: "Bamboo Art",
    //     description: "Famous product from Madhepura, Bihar.",
    //     date: new Date(),
    //     location: "Madhepura, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 20,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/bamboo_art_4c88180af9.jpg"
    // },

    // {
    //     title: "Stone Craft",
    //     description: "Famous product from Kaimur, Bihar.",
    //     date: new Date(),
    //     location: "Kaimur, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 300,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/stone_art_b10a9a1a99.jpg"
    // },

    // {
    //     title: "Banana",
    //     description: "Famous product from Vaishali, Bihar.",
    //     date: new Date(),
    //     location: "Vaishali, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 25,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/banana_e4884a955a.jpg"
    // },

    // {
    //     title: "Handloom Fabric",
    //     description: "Famous product from Nawada, Bihar.",
    //     date: new Date(),
    //     location: "Nawada, Bihar",
    //     category: "ODOP Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 100,
    //     image: "https://static.india.gov.in/npiprod/odop/uploads/handloom_25d26f7b2e.jpg"
    // },

    //ASSAM DATA------------

    // {
    //     title: "Muga Silk Textile",
    //     description: "famous golden silk fabric used for mekhela chador and luxury garments.",
    //     date: new Date(),
    //     location: "Guwahati, Assam",
    //     category: "Handloom",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 5000,
    //     image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Assamese_Muga_With_Japi.jpg"
    // },

    // {
    //     title: "Tezpur Litchi",
    //     description: "Juicy litchi known for large pulp and sweetness.",
    //     date: new Date(),
    //     location: "Tezpur, Assam",
    //     category: "Agriculture",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 100,
    //     image: "https://i0.wp.com/asombarta.com/wp-content/uploads/2022/07/litchi-scaled.jpg"
    // },

    // {
    //     title: "Assam Orthodox Tea",
    //     description: "Premium black tea with golden tips produced in upper Assam tea estates.",
    //     date: new Date(),
    //     location: "Dibrugarh, Assam",
    //     category: "Agriculture",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 800,
    //     image: "https://www.assamicaagro.in/cdn/shop/products/Organic-Assam-Orthodox-Tea_1000x1000.jpg"
    // },

    // {
    //     title: "Tea Plantation Products",
    //     description: "Small tea growers produce high-quality CTC and orthodox tea leaves.",
    //     date: new Date(),
    //     location: "Tinsukia, Assam",
    //     category: "Agriculture",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 150,
    //     image: "https://amalgamatedplantations.co.in/sites/default/files/inline-images/img-5.png"
    // },

    // {
    //     title: "Assam Tea",
    //     description: "Historic tea gardens producing strong flavored premium Assam tea.",
    //     date: new Date(),
    //     location: "Jorhat, Assam",
    //     category: "Agriculture",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 200,
    //     image: "https://www.greendna.in/cdn/shop/products/assam_1208x.jpg"
    // },

    // {
    //     title: "Clay Pottery",
    //     description: "Handmade earthen pots and satra cultural masks used in religious performances.",
    //     date: new Date(),
    //     location: "Majuli, Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 200,
    //     image: "https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg"
    // },

    // {
    //     title: "Assamese Japi",
    //     description: "Traditional bamboo hat symbolizing Assamese culture and hospitality.",
    //     date: new Date(),
    //     location: "Sivasagar, Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 400,
    //     image: "https://m.media-amazon.com/images/I/71QTH6ipSCL.jpg"
    // },

    // {
    //     title: "Bell Metal Utensils",
    //     description: "Handmade religious utensils and decorative metalware.",
    //     date: new Date(),
    //     location: "Barpeta, Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 300,
    //     image: "https://m.media-amazon.com/images/I/81aM4wYOkML.jpg"
    // },

    // {
    //     title: "Gamusa Textile",
    //     description: "Traditional Assamese cloth used in rituals and cultural identity.",
    //     date: new Date(),
    //     location: "Nalbari, Assam",
    //     category: "Handloom",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 150,
    //     image: "https://images.picxy.com/cache/2020/6/7/5d9204090dfe3a4d84a032e9ace4f580.jpg"
    // },

    // {
    //     title: "Bodo Dokhona Dress",
    //     description: "Traditional Bodo women’s garment woven on handlooms.",
    //     date: new Date(),
    //     location: "Kokrajhar, Assam",
    //     category: "Handloom",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 1200,
    //     image: "https://m.media-amazon.com/images/I/81VhU52Eq6L.jpg"
    // },

    // {
    //     title: "Bamboo Mats",
    //     description: "Handwoven bamboo mats used for flooring and construction.",
    //     date: new Date(),
    //     location: "Goalpara, Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 300,
    //     image: "https://rukminim2.flixcart.com/image/480/640/l58iaa80/mat/z/t/w/medium-natural-korai-grass-sleeping-mat.jpeg"
    // },

    // {
    //     title: "Jute Handicrafts",
    //     description: "Jute bags, mats and ropes made by rural artisans.",
    //     date: new Date(),
    //     location: "Dhubri, Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 80,
    //     image: "https://tiimg.tistatic.com/fp/1/002/677/jute-handicrafts-915.jpg"
    // },

    // {
    //     title: "Jute Products",
    //     description: "Home décor items and mats made from jute fiber.",
    //     date: new Date(),
    //     location: "Morigaon, Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 100,
    //     image: "https://tiimg.tistatic.com/fp/1/002/677/jute-handicrafts-915.jpg"
    // },

    // {
    //     title: "Areca Leaf Plates",
    //     description: "Eco-friendly disposable plates made from areca palm sheath.",
    //     date: new Date(),
    //     location: "Bongaigaon, Assam",
    //     category: "Eco Product",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 20,
    //     image: "https://www.jiomart.com/images/product/original/rvqfkbyekh/areca-palm-leaf-plates.jpg"
    // },

    // {
    //     title: "Joha Aromatic Rice",
    //     description: "Traditional Assamese aromatic rice used in sweets and special meals.",
    //     date: new Date(),
    //     location: "Nagaon, Assam",
    //     category: "Agriculture",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 90,
    //     image: "https://images.pexels.com/photos/14518996/pexels-photo-14518996.jpeg"
    // },

    // {
    //     title: "Karbi Anglong Ginger",
    //     description: "Strong flavored ginger cultivated in hill districts.",
    //     date: new Date(),
    //     location: "Diphu (Karbi Anglong), Assam",
    //     category: "Agriculture",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 60,
    //     image: "https://images.pexels.com/photos/1337585/pexels-photo-1337585.jpeg"
    // },

    // {
    //     title: "Eri Silk Fabric",
    //     description: "Non-violent silk used in shawls and scarves.",
    //     date: new Date(),
    //     location: "Golaghat, Assam",
    //     category: "Handloom",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 500,
    //     image: "https://images.pexels.com/photos/1475033/pexels-photo-1475033.jpeg"
    // },

    // {
    //     title: "Bamboo Crafts",
    //     description: "Baskets, mats and small furniture made from bamboo.",
    //     date: new Date(),
    //     location: "Chirang, Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 200,
    //     image: "https://images.pexels.com/photos/35105859/pexels-photo-35105859.jpeg"
    // },

    // {
    //     title: "Traditional Japi",
    //     description: "Decorated bamboo hats representing Assamese culture.",
    //     date: new Date(),
    //     location: "Lakhimpur, Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 400,
    //     image: "https://m.media-amazon.com/images/I/51p0JK+KWuL.jpg"
    // },

    // {
    //     title: "Bamboo Baskets",
    //     description: "Strong bamboo baskets used for agriculture and storage.",
    //     date: new Date(),
    //     location: "Silchar (Cachar), Assam",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 150,
    //     image: "https://m.media-amazon.com/images/I/71a+1jseHVL.jpg"
    // },

    // // U.P. DATA----------

    // {
    //     title: "Locks",
    //     description: "Traditional lock industry",
    //     date: new Date(),
    //     location: "Aligarh, Uttar Pradesh",
    //     category: "Hardware",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 80,
    //     image: "https://odopup.in/images/lock2.jpg"
    // },

    // {
    //     title: "Black Pottery",
    //     description: "GI black clay craft",
    //     date: new Date(),
    //     location: "Azamgarh, Uttar Pradesh",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 300,
    //     image: "https://odopup.in/images/black-pottery.jpg"
    // },

    // {
    //     title: "Zari Zardozi",
    //     description: "Metallic embroidery",
    //     date: new Date(),
    //     location: "Bareilly, Uttar Pradesh",
    //     category: "Handicraft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 1000,
    //     image: "https://odopup.in/images/bareilly-product.jpg"
    // },

    // {
    //     title: "Carpets",
    //     description: "Hand-knotted carpets",
    //     date: new Date(),
    //     location: "Bhadohi, Uttar Pradesh",
    //     category: "Textile",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 2000,
    //     image: "https://odopup.in/images/bhadoi4.jpg"
    // },

    // {
    //     title: "Glass Bangles",
    //     description: "Decorative bangles",
    //     date: new Date(),
    //     location: "Firozabad, Uttar Pradesh",
    //     category: "Glass Craft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 100,
    //     image: "https://odopup.in/images/firozabad.jpg"
    // },

    // {
    //     title: "Hing",
    //     description: "Asafoetida processing",
    //     date: new Date(),
    //     location: "Hathras, Uttar Pradesh",
    //     category: "Spice",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 2000,
    //     image: "https://odopup.in/images/hathras.jpg"
    // },

    // {
    //     title: "Perfume (Attar)",
    //     description: "Natural essential oils",
    //     date: new Date(),
    //     location: "Kannauj, Uttar Pradesh",
    //     category: "Fragrance",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 500,
    //     image: "https://odopup.in/images/kannauj-pro5.jpg"
    // },

    // {
    //     title: "Saddlery",
    //     description: "Horse gear",
    //     date: new Date(),
    //     location: "Kanpur Nagar, Uttar Pradesh",
    //     category: "Leather",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 2000,
    //     image: "https://odopup.in/images/kanpurnagar.jpg"
    // },

    // {
    //     title: "Chikankari",
    //     description: "Hand embroidery",
    //     date: new Date(),
    //     location: "Lucknow, Uttar Pradesh",
    //     category: "Textile",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 800,
    //     image: "https://odopup.in/images/lucknow4.jpg"
    // },

    // {
    //     title: "Tarkashi (Brass Inlay)",
    //     description: "Brass wire inlay",
    //     date: new Date(),
    //     location: "Mainpuri, Uttar Pradesh",
    //     category: "Craft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 1000,
    //     image: "https://odopup.in/images/Mainpuripro5.jpg"
    // },

    // {
    //     title: "Peda",
    //     description: "Milk sweet",
    //     date: new Date(),
    //     location: "Mathura, Uttar Pradesh",
    //     category: "Sweet",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 300,
    //     image: "https://odopup.in/images/Mathurapro1.jpg"
    // },

    // {
    //     title: "Sports Goods",
    //     description: "Cricket gear",
    //     date: new Date(),
    //     location: "Meerut, Uttar Pradesh",
    //     category: "Industrial",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 500,
    //     image: "https://odopup.in/images/meerut.jpg"
    // },

    // {
    //     title: "Durries",
    //     description: "Floor rugs",
    //     date: new Date(),
    //     location: "Mirzapur, Uttar Pradesh",
    //     category: "Textile",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 800,
    //     image: "https://ii1.pepperfry.com/media/catalog/product/m/u/1100x1210/multicolor-polyester-carpet-abstract-6-ft-x-4-ft-machine-made-carpet-multicolor-polyester-carpet-abs-ldmuo2.jpg"
    // },

    // {
    //     title: "Brassware",
    //     description: "Decorative metal",
    //     date: new Date(),
    //     location: "Moradabad, Uttar Pradesh",
    //     category: "Metal Craft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 500,
    //     image: "https://odopup.in/images/moradabad.jpg"
    // },

    // {
    //     title: "Jaggery",
    //     description: "Gur blocks",
    //     date: new Date(),
    //     location: "Muzaffarnagar, Uttar Pradesh",
    //     category: "Agro",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 40,
    //     image: "https://odopup.in/images/muzaffarnagar.jpg"
    // },

    // {
    //     title: "Patchwork Knife",
    //     description: "Traditional knife making craft",
    //     date: new Date(),
    //     location: "Rampur, Uttar Pradesh",
    //     category: "Hardware",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 500,
    //     image: "https://odopup.in/images/Rampurpro1.jpg"
    // },

    // {
    //     title: "Wood Carving",
    //     description: "Carved wooden decor items",
    //     date: new Date(),
    //     location: "Saharanpur, Uttar Pradesh",
    //     category: "Craft",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 1000,
    //     image: "https://m.media-amazon.com/images/I/61NEmftqOmL.jpg"
    // },

    // {
    //     title: "Kala Namak Rice",
    //     description: "Aromatic GI-tagged rice",
    //     date: new Date(),
    //     location: "Siddharthnagar, Uttar Pradesh",
    //     category: "Agro",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 60,
    //     image: "https://odopup.in/images/siddharthnagar.jpg"
    // },

    // {
    //     title: "Banarasi Saree",
    //     description: "Silk brocade saree",
    //     date: new Date(),
    //     location: "Varanasi, Uttar Pradesh",
    //     category: "Textile",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 5000,
    //     image: "https://odopup.in/images/Varanasipro1.jpg"
    // },

    // {
    //     title: "Petha",
    //     description: "Ash gourd sweet famous in Agra",
    //     date: new Date(),
    //     location: "Agra, Uttar Pradesh",
    //     category: "Food",
    //     totalAmount: 100,
    //     availableAmount: 100,
    //     productPrice: 200,
    //     image: "https://odopup.in/images/leather-product.jpg"
    // },

    // gujarat

    {
        title: "Jamnagari Bandhani",
        description: "Jamnagari Bandhani is a traditional tie-and-dye textile art from Jamnagar.",
        date: new Date(),
        location: "Jamnagar, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 800,
        image: "https://static.india.gov.in/npiprod/odop/uploads/jamnagari_bandhani_48127553a3.jpg"
    },

    {
        title: "Patola Silk",
        description: "Patola Silk is a luxurious handwoven textile from patan.",
        date: new Date(),
        location: "Patan, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1200,
        image: "https://www.utsavpedia.com/wp-content/uploads/2013/06/Gujarat-patola-work3.jpg"
    },

    {
        title: "Ceramic tiles",
        description: "Ceramic tiles are durable building materials made from clay and hardened by heat.",
        date: new Date(),
        location: "Morbi , Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 70,
        image: "https://static.india.gov.in/npiprod/odop/uploads/ceramic_tiles_and_sanitary_ware_28d0e1d3b5.jpg"
    },

    {
        title: "Diamonds",
        description: "Diamonds are precious gemstones known for their exceptional hardness and brilliance.",
        date: new Date(),
        location: "Panchmahal, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 700000,
        image: "https://www.diamondlinejewellery.com.au/wp-content/uploads/2015/09/diamonds3-2000x1200.png"
    },
    {
        title: "Brass Part ",
        description: "Brass parts are components made from an alloy of copper and zinc.",
        date: new Date(),
        location: "Rajkot, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1200,
        image: "https://content.jdmagicbox.com/comp/def_content_category/brass-manufacturers/6df8039f29-brass-manufacturers-1-nxmrj.jpg"
    },
    {
        title: "HandiCrafts ",
        description: "Handicrafts are handmade items created by skilled artisans using traditional techniques.",
        date: new Date(),
        location: "Surendranagar, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 700,
        image: "https://static.india.gov.in/npiprod/odop/uploads/handicraft_items_c25d4612bf.jpg"
    },

    {
        title: "Fafda - jalebi ",
        description: "Fafda–Jalebi is a popular Gujarati snack combination.",
        date: new Date(),
        location: "Ahmedabad, Gujarat",
        category: "Handicraft",
        totalAmount: 50,
        availableAmount: 50,
        productPrice: 350,
        image: "https://t4.ftcdn.net/jpg/18/55/24/99/360_F_1855249956_5HSeXcoEcMxn682MBxjTmJnGWx5rImqF.jpg"
    },

    {
        title: "Thepla",
        description: "Thepla is a soft Gujarati flatbread made from whole wheat flour.",
        date: new Date(),
        location: "Vadodara, Gujarat",
        category: "Food Product",
        totalAmount: 200,
        availableAmount: 200,
        productPrice: 7 ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAH4E0_a7xt4PYawvEld6K9FZ3cW2Pq269Ug&s"
    },

    {
        title: "Dhokla",
        description: "Dhokla is a soft, spongy Gujarati snack made from fermented gram flour or rice batter.",
        date: new Date(),
        location: "Gandhinagar, Gujarat",
        category: "Fruit",
        totalAmount: 300,
        availableAmount: 300,
        productPrice: 150,
        image: "https://images.getrecipekit.com/20230615073642-2-20-6.jpg?aspect_ratio=4:3&quality=90&"
    },

    {
        title: "Amul Dairy",
        description: "Amul Dairy largest dairy brands known for producing milk, butter, cheese, ice cream.",
        date: new Date(),
        location: "Mehsana, Gujarat",
        category: "Textile",
        totalAmount: 80,
        availableAmount: 80,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/dairy_19da9fb9d8.jpg"
    },

    {
        title: "Undhiyu",
        description: "Undhiyu is a traditional Gujarati mixed vegetable dish, especially popular in winter.",
        date: new Date(),
        location: "Surat, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 420,
        image: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1756352439615_2v2ij_2048x1365.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75"
    },

    {
        title: "Surti Locho ",
        description: "Surti Locho is a popular street food from Navsari, Gujarat",
        date: new Date(),
        location: "Navsari, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 50,
        image: "https://www.nehascookbook.com/wp-content/uploads/2022/09/2-type-surti-locho-WS-1068x601.jpg"
    },

    {
        title: "Ceramic tiles",
        description: "Ceramic tiles are durable building materials made from clay and hardened by heat.",
        date: new Date(),
        location: "Morbi , Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 70,
        image: "https://static.india.gov.in/npiprod/odop/uploads/ceramic_tiles_and_sanitary_ware_28d0e1d3b5.jpg"
    },

    {
        title: "Kutchi dabeli",
        description: "Kutchi Dabeli is a popular street food from Kutch, Gujarat.",
        date: new Date(),
        location: "Kutch, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 30,
        image: "https://img.freepik.com/premium-photo/dabeli-kutchi-dabeli-double-roti-is-popular-snack-food-india-originating-kutch-kachchh-region-gujarat_466689-51847.jpg"
    },

    {
        title: "Salt",
        description: "Salt is a common mineral composed mainly of sodium chloride.",
        date: new Date(),
        location: "Bhavnagar, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 28,
        image: "https://static.india.gov.in/npiprod/odop/uploads/salt_e0ca8de4de.jpg"
    },

    {
        title: "Chikoo",
        description: "Chikoo (sapodilla) is a sweet, brown tropical fruit with soft, grainy pulp.",
        date: new Date(),
        location: "Valsad, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXz9QKYCJ3pONnDlEuTjzwV8WwONPPI0JIA&s"
    },

    {
        title: "Kesar Mango",
        description: "Kesar Mango is a famous variety of mango from Gir Somnath, Gujarat",
        date: new Date(),
        location: "Gir Somnath, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 90,
        image: "https://static.india.gov.in/npiprod/odop/uploads/kesar_mango_f3b6264d49.jpg"
    },

    {
        title: "Rice  ",
        description: "Rice is a staple food grain widely consumed around the world, especially in Kheda.",
        date: new Date(),
        location: "Kheda, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 70,
        image: "https://static.india.gov.in/npiprod/odop/uploads/rice_bf5fe95e7f.jpg"
    },

    {
        title: "Ground Nut ",
        description: "Groundnut (peanut) is a nutritious legume rich in protein, healthy fats, and vitamins.",
        date: new Date(),
        location: "Amreli, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 110,
        image: "https://static.india.gov.in/npiprod/odop/uploads/ground_nut_c9a1fc8385.jpg"
    },

    {
        title: "Nagali Product ",
        description: "Nagali products are nutritious foods made from a highly healthy grain.",
        date: new Date(),
        location: "Dang, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 170,
        image: "https://static.india.gov.in/npiprod/odop/uploads/nagali_products_0194742b6b.webp"
    },

    {
        title: "Corn Product ",
        description: "Corn products are foods made from maize, such as corn flour.",
        date: new Date(),
        location: "Dahod, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 60,
        image: "https://static.india.gov.in/npiprod/odop/uploads/corn_products_1ea6b21657.jpg"
    },

    {
        title: "Agates of cambayt ",
        description: "Agates of Cambay are beautifully polished semi-precious stones found mainly in Gujarat.",
        date: new Date(),
        location: "Anand, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://static.india.gov.in/npiprod/odop/uploads/agates_of_cambay_77e727278f.jpg"
    },

    {
        title: "Soof embroidery ",
        description: "Soof Embroidery is a traditional embroidery style from Gujarat.",
        date: new Date(),
        location: "Banaskantha, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 900,
        image: "https://static.india.gov.in/npiprod/odop/uploads/soof_embroidery_9f0bf2d43e.jpg"
    },

    {
        title: "Chemicals (Chemicals,Agro) ",
        description: "Chemicals refer to products used in agriculture and industrial processes.",
        date: new Date(),
        location: "Bharuch, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 140,
        image: "https://static.india.gov.in/npiprod/odop/uploads/chemicals_chemicals_agro_chemicals_a4ed5031ea.jpg"
    },

    {
        title: "Jining ",
        description: "Ginning is the process of separating cotton fibers from their seeds.",
        date: new Date(),
        location: "Botad, Gujarat",
        category: "Manufacturing Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 600,
        image: "https://static.india.gov.in/npiprod/odop/uploads/jining_0e9c11bdb7.jpg"
    },

    {
        title: "Pithora ",
        description: "Pithora is a traditional ritual painting style practiced by tribal communities of Gujarat.",
        date: new Date(),
        location: "Chhota Udaipur, Gujarat",
        category: "Handicrafts Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1000,
        image: "https://static.india.gov.in/npiprod/odop/uploads/pithora_cd121d1a40.jpg"
    },

    {
        title: "Dholdara fish ",
        description: "Dholara Fish is a traditional dried fish product from the coastal regions of Gujarat.",
        date: new Date(),
        location: "Devbhoomi Dwarka, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://static.india.gov.in/npiprod/odop/uploads/dholdara_fish_f79faa9f6b.jpg"
    },

    {
        title: "Bamboo Products ",
        description: "Bamboo Products are eco-friendly items made from Tapi.",
        date: new Date(),
        location: "Tapi, Gujarat",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 250,
        image: "https://static.india.gov.in/npiprod/odop/uploads/bamboo_products_63f28e43d1.jpg"
    },

    {
        title: "Mixture of spices",
        description: "Mixture of Spices refers to a blend of different spices combined to enhance the flavor.",
        date: new Date(),
        location: "Vav-Tharad, Gujarat",
        category: "Manufacturing Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 70,
        image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_680/https://www.myweekendkitchen.in/wp-content/uploads/2018/05/List_of_Indian_Spices_English_Hindi.jpg"
    },

    {
        title: "Terracotta ",
        description: "Terracotta is a type of baked clay used to make pottery.",
        date: new Date(),
        location: "Sabar kantha, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 50,
        image: "https://static.india.gov.in/npiprod/odop/uploads/terracotta_3ce2b43041.jpg"
    },

    {
        title: "Marine (Queen Fish) ",
        description: "Queen Fish is a popular marine fish found in coastal waters of Porbandar.",
        date: new Date(),
        location: "Porbandar, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 250,
        image: "https://static.india.gov.in/npiprod/odop/uploads/marine_queen_fish_892c35748e.jpg"
    },

    {
        title: "Plastic Products ",
        description: "Plastic Products are items made from synthetic materials called plastics.",
        date: new Date(),
        location: "Panchmahal, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 90,
        image: "https://static.india.gov.in/npiprod/odop/uploads/plastic_products_dfffc181bb.jpg"
    },

    {
        title: "Banana ",
        description: "Banana is a widely consumed fruit known for its sweet taste.",
        date: new Date(),
        location: "Narmada, Gujarat",
        category: "ODOP Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 30,
        image: "https://static.india.gov.in/npiprod/odop/uploads/banana_aa5efaf02f.jpg"
    },

    {
        title: "Agro Processing ",
        description: "Agro Processing refers to the process of converting raw agricultural products.",
        date: new Date(),
        location: "Arvalli, Gujarat",
        category: "Agricultural Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 5000,
        image: "https://static.india.gov.in/npiprod/odop/uploads/agro_processing_aa3b4557bd.jpg"
    },

    {
        title: "Green Dates ",
        description: "Green Dates are the unripe form of dates harvested from the date palm tree.",
        date: new Date(),
        location: "Kachchh, Gujarat",
        category: "Agriculture Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 110,
        image: "https://static.india.gov.in/npiprod/odop/uploads/green_dates_f0aa8fa66f.jpg"
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