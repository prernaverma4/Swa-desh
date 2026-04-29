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

    {
        title: "Muga Silk Textile",
        description: "Assam’s famous golden silk fabric used for mekhela chador and luxury garments.",
        date: new Date(),
        location: "Sivasagar, Assam",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 5000,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Assamese_Muga_With_Japi.jpg"
    },

    {
        title: "Tezpur Litchi",
        description: "Juicy litchi known for large pulp and sweetness.",
        date: new Date(),
        location: "Sonitpur, Assam",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 100,
        image: "https://i0.wp.com/asombarta.com/wp-content/uploads/2022/07/litchi-scaled.jpg"
    },

    {
        title: "Assam Orthodox Tea",
        description: "Premium black tea with golden tips produced in upper Assam tea estates.",
        date: new Date(),
        location: "Dibrugarh, Assam",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 800,
        image: "https://www.assamicaagro.in/cdn/shop/products/Organic-Assam-Orthodox-Tea_1000x1000.jpg"
    },

    {
        title: "Tea Plantation Products",
        description: "Small tea growers produce high-quality CTC and orthodox tea leaves.",
        date: new Date(),
        location: "Tinsukia, Assam",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 150,
        image: "https://amalgamatedplantations.co.in/sites/default/files/inline-images/img-5.png"
    },

    {
        title: "Assam Tea",
        description: "Historic tea gardens producing strong flavored premium Assam tea.",
        date: new Date(),
        location: "Jorhat, Assam",
        category: "Agriculture",
        totalAmount: 18000,
        availableAmount: 10000,
        productPrice: 200,
        image: "https://www.greendna.in/cdn/shop/products/assam_1208x.jpg"
    },

    {
        title: "Clay Pottery",
        description: "Handmade earthen pots and satra cultural masks used in religious performances.",
        date: new Date(),
        location: "Majuli, Assam",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg"
    },

    {
        title: "Assamese Japi",
        description: "Traditional bamboo hat symbolizing Assamese culture and hospitality.",
        date: new Date(),
        location: "Dhemaji, Assam",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://m.media-amazon.com/images/I/71QTH6ipSCL.jpg"
    },

    {
        title: "Bell Metal Utensils",
        description: "Handmade religious utensils and decorative metalware.",
        date: new Date(),
        location: "Barpeta, Assam",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 300,
        image: "https://m.media-amazon.com/images/I/81aM4wYOkML.jpg"
    },

    {
        title: "Gamusa Textile",
        description: "Traditional Assamese cloth used in rituals and cultural identity.",
        date: new Date(),
        location: "Nalbari, Assam",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 150,
        image: "https://m.media-amazon.com/images/I/717FcdTfNhL._AC_UY1100_.jpg"
    },

    {
        title: "Bodo Dokhona Dress",
        description: "Traditional Bodo women’s garment woven on handlooms.",
        date: new Date(),
        location: "Kokrajhar, Assam",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 1200,
        image: "https://m.media-amazon.com/images/I/81VhU52Eq6L.jpg"
    },

    {
        title: "Bamboo Mats",
        description: "Handwoven bamboo mats used for flooring and construction.",
        date: new Date(),
        location: "Goalpara, Assam",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 300,
        image: "https://www.gilliangladrag.co.uk/cdn/shop/products/IMG_4443.heic?v=1767801685&width=3840"
    },

    {
        title: "Jute Handicrafts",
        description: "Jute bags, mats and ropes made by rural artisans.",
        date: new Date(),
        location: "Dhubri, Assam",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 80,
        image: "https://tiimg.tistatic.com/fp/1/002/677/jute-handicrafts-915.jpg"
    },

    {
        title: "Fishery Products",
        description: "Freshwater fish and prawns from the wetlands of Morigaon, a key source of local livelihood.",
        date: new Date(),
        location: "Morigaon, Assam",
        category: "Food",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 120,
        image: "https://m.media-amazon.com/images/I/81+bzpG2W9L.jpg"
    },

    {
        title: "Areca Leaf Plates",
        description: "Eco-friendly disposable plates made from areca palm sheath.",
        date: new Date(),
        location: "Bongaigaon, Assam",
        category: "Eco Product",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 20,
        image: "https://upkgs.com/wp-content/uploads/2024/03/4Partition-Round-Areca-Leaf-Plate.jpg"
    },

    {
        title: "Joha Aromatic Rice",
        description: "Traditional Assamese aromatic rice used in sweets and special meals.",
        date: new Date(),
        location: "Nagaon, Assam",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 90,
        image: "https://images.pexels.com/photos/14518996/pexels-photo-14518996.jpeg"
    },

    {
        title: "Karbi Anglong Ginger",
        description: "Strong flavored ginger cultivated in hill districts.",
        date: new Date(),
        location: "Diphu (Karbi Anglong), Assam",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 7000,
        productPrice: 60,
        image: "https://images.pexels.com/photos/1337585/pexels-photo-1337585.jpeg"
    },

    {
        title: "Eri Silk Fabric",
        description: "Non-violent silk used in shawls and scarves.",
        date: new Date(),
        location: "Golaghat, Assam",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 500,
        image: "https://images.pexels.com/photos/1475033/pexels-photo-1475033.jpeg"
    },

    {
        title: "Bodo Handloom",
        description: "Traditional Bodo textiles woven by tribal communities.",
        date: new Date(),
        location: "Chirang, Assam",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 200,
        image: "https://old.wti.org.in/wp-content/uploads/2020/06/Panja-Brahma-New-Karikor_Kochugaon-Forest-Division.jpg"
    },

    {
        title: "Traditional Japi",
        description: "Decorated bamboo hats representing Assamese culture.",
        date: new Date(),
        location: "Lakhimpur, Assam",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 400,
        image: "https://m.media-amazon.com/images/I/51p0JK+KWuL.jpg"
    },

    {
        title: "Bamboo Baskets",
        description: "Strong bamboo baskets used for agriculture and storage.",
        date: new Date(),
        location: "Silchar (Cachar), Assam",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 150,
        image: "https://m.media-amazon.com/images/I/71a+1jseHVL.jpg"
    },

    {
        title: "Hill Bamboo Products",
        description: "Traditional bamboo crafts used in tribal lifestyle.",
        date: new Date(),
        location: "Dima Hasao, Assam",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 300,
        image: "https://m.media-amazon.com/images/I/71dwakFd8xL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Paddy (Rice)",
        description: "Staple rice cultivation in floodplains.",
        date: new Date(),
        location: "South Salmara-Mankachar, Assam",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 22,
        image: "https://m.media-amazon.com/images/I/61pjSJzxxuL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Rice Cultivation",
        description: "Hojai district is known for large-scale rice production.",
        date: new Date(),
        location: "Hojai, Assam",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 50,
        image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=750/globalassets/blog/rice_flood-irrigation.jpg?v=4a847c"
    },

    {
        title: "Areca Nut",
        description: "Areca nut cultivation is common in rural Kamrup district.",
        date: new Date(),
        location: "Kamrup, Assam",
        category: "Agriculture",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 200,
        image: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/03/22095125/2-2-741x452.jpg"
    },

    {
        title: "Handloom Textile",
        description: "Traditional Assamese weaving products.",
        date: new Date(),
        location: "Kamrup Metropolitan, Assam",
        category: "Handloom",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 2000,
        image: "https://m.media-amazon.com/images/I/711VSDzWxmL._AC_UY1100_.jpg"
    },

    {
        title: "Rubber Plantation",
        description: "Latex production from rubber plantations.",
        date: new Date(),
        location: "Karimganj, Assam",
        category: "Agriculture",
        totalAmount: 7000,
        availableAmount: 4000,
        productPrice: 180,
        image: "https://img.freepik.com/free-photo/rubber-tree-bowl-filled-with-latex_1150-10344.jpg?semt=ais_hybrid&w=740&q=80"
    },

    {
        title: "Karbi Anglong Turmeric",
        description: "High-curcumin turmeric cultivated in the hill district of West Karbi Anglong.",
        date: new Date(),
        location: "West Karbi Anglong, Assam",
        category: "Agriculture",
        totalAmount: 6000,
        availableAmount: 4000,
        productPrice: 120,
        image: "https://5.imimg.com/data5/SELLER/Default/2022/11/BO/WG/EF/7538151/lakadong-turmeric-root.jpg"
    },

    {
        title: "Hailakandi Orange",
        description: "Sweet and juicy oranges grown in the orchards of Hailakandi district.",
        date: new Date(),
        location: "Hailakandi, Assam",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 80,
        image: "https://m.media-amazon.com/images/I/41DIoJA1RhL.jpg"
    },

    {
        title: "Rice (Paddy)",
        description: "Bajali district is known for rice cultivation in fertile plains.",
        date: new Date(),
        location: "Bajali, Assam",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 25,
        image: "https://www.fertiglobal.com/wp-content/uploads/2020/07/Paddy-Rice.jpg"
    },

    {
        title: "Silk Weaving",
        description: "Traditional weaving including eri and muga silk.",
        date: new Date(),
        location: "Baksa, Assam",
        category: "Handloom",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 1500,
        image: "https://media.licdn.com/dms/image/v2/D4D12AQHmQa7lSekw1g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694689658347?e=2147483647&v=beta&t=koL4rdpoT1-rJagO8uyGayKG-osoEBYTW6-roJ57nS0"
    },

    {
        title: "Rice Cultivation",
        description: "Large-scale paddy farming.",
        date: new Date(),
        location: "Biswanath, Assam",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 7000,
        productPrice: 40,
        image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=750/globalassets/blog/rice_flood-irrigation.jpg?v=4a847c"
    },

    {
        title: "Mustard Oil",
        description: "Oil extraction from mustard seeds.",
        date: new Date(),
        location: "Darrang, Assam",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 150,
        image: "https://m.media-amazon.com/images/I/61MczZNpndL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Tea Processing",
        description: "Tea packaging and processing units.",
        date: new Date(),
        location: "Charaideo, Assam",
        category: "Industrial",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 300,
        image: "https://teafloor.com/blog/wp-content/uploads/2018/03/Tea-Processing-Techniques-and-Classification-of-Tea.jpg"
    },

    {
        title: "Bodo Handloom",
        description: "Traditional tribal weaving of Bodo community.",
        date: new Date(),
        location: "Udalguri, Assam",
        category: "Handloom",
        totalAmount: 3000,
        availableAmount: 1800,
        productPrice: 1200,
        image: "https://bododimasaarchive.org/system/files/atoms/image/si%20danai.jpg"
    },

    {
        title: "Forest Bamboo Products",
        description: "Utility items made from forest bamboo.",
        date: new Date(),
        location: "Tamulpur, Assam",
        category: "Forest Produce",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 250,
        image: "https://sahyadale.com/cdn/shop/articles/Bamboo-Featured-Napi_1200x1200.jpg?v=1593064275"
    },


    // U.P. DATA----------------------------------------------------

    {
        title: "Leather & Marble Handicrafts",
        description: "Famous leather goods and marble handicrafts.",
        date: new Date(),
        location: "Agra, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 1200,
        image: "https://www.deskera.com/blog/content/images/2023/03/kelly-sikkema-qATevUkntlo-unsplash.jpg"
    },

    {
        title: "Locks & Hardware",
        description: "Traditional lock manufacturing hub.",
        date: new Date(),
        location: "Aligarh, Uttar Pradesh",
        category: "Industrial",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 300,
        image: "https://m.media-amazon.com/images/I/61WD1UPn4RL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Textile Products",
        description: "Powerloom textile manufacturing.",
        date: new Date(),
        location: "Ambedkar Nagar, Uttar Pradesh",
        category: "Textile",
        totalAmount: 18000,
        availableAmount: 10000,
        productPrice: 500,
        image: "https://tabseer.co/wp-content/uploads/2021/02/Articles-1593028629.png"
    },

    {
        title: "Moonj Products",
        description: "Eco-friendly grass handicrafts.",
        date: new Date(),
        location: "Amethi, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 150,
        image: "https://nestasia.in/cdn/shop/products/DSC04578.jpg?v=1626502396&width=2000"
    },

    {
        title: "Musical Instruments",
        description: "Traditional instrument making industry.",
        date: new Date(),
        location: "Amroha, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 2500,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Historical_instruments.jpg"
    },

    {
        title: "Desi Ghee",
        description: "Dairy-based clarified butter.",
        date: new Date(),
        location: "Auraiya, Uttar Pradesh",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 600,
        image: "https://cdn.shopify.com/s/files/1/0586/8234/3501/files/cow_desi_ghee_image.webp?v=1742634983"
    },

    {
        title: "Jaggery (Gur)",
        description: "Sugarcane-based traditional sweetener.",
        date: new Date(),
        location: "Ayodhya, Uttar Pradesh",
        category: "Food",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 50,
        image: "https://twobrothersindiashop.com/cdn/shop/articles/Best_Gur_and_Jaggery_cd71774c-942e-4cb1-a6d3-be5e9a56f444.jpg?v=1749200250&width=1024"
    },

    {
        title: "Black Pottery",
        description: "Unique black clay pottery craft.",
        date: new Date(),
        location: "Azamgarh, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 400,
        image: "https://meghtour.web-assets.org/cdn-cgi/image/format=auto,width=1366,quality=90,fit=scale-down,slow-connection-quality=45/overview/larnai-black-pottery.webp"
    },

    {
        title: "Home Furnishing",
        description: "Curtains, bedsheets and decor items.",
        date: new Date(),
        location: "Baghpat, Uttar Pradesh",
        category: "Textile",
        totalAmount: 12000,
        availableAmount: 7000,
        productPrice: 600,
        image: "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/04/A3848-How-to-enhance-Soft-Furnishing-Aesthetics-in-your-house-Image2.jpg?w=999"
    },

    {
        title: "Wheat Stalk Craft",
        description: "Eco-friendly straw handicrafts.",
        date: new Date(),
        location: "Bahraich, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 200,
        image: "https://5.imimg.com/data5/EE/HC/KP/ANDROID-10331833/20190309-153626-jpg-500x500.jpg"
    },

    {
        title: "Bindi (Tikuli)",
        description: "Traditional decorative bindis.",
        date: new Date(),
        location: "Ballia, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 50,
        image: "https://pbs.twimg.com/media/FguEkiAakAAstGO.jpg"
    },

    {
        title: "Wood Craft",
        description: "Traditional wood carving.",
        date: new Date(),
        location: "Basti, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 500,
        image: "https://i.ytimg.com/vi/kxIaWL-xiKE/maxresdefault.jpg"
    },

    {
        title: "Pulses Processing",
        description: "Dal processing industry.",
        date: new Date(),
        location: "Balrampur, Uttar Pradesh",
        category: "Food",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 80,
        image: "https://www.ndplgrains.com/assets/img/pulse/pulse.jpg"
    },

    {
        title: "Carpet (Dari)",
        description: "Handwoven carpets.",
        date: new Date(),
        location: "Bhadohi, Uttar Pradesh",
        category: "Textile",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 2000,
        image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/22866576/2025/3/12/f1f38c08-9c0a-4611-b1a5-7199a8e52c201741778724008-Storyhome-Blue--Yellow-Anti-skid-Floor-Carpet-57174177872334-1.jpg"
    },

    {
        title: "Shazar Stone Craft",
        description: "Decorative stone carving.",
        date: new Date(),
        location: "Banda, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 1500,
        image: "https://static.toiimg.com/thumb/106212996/106212996.jpg?height=746&width=420&resizemode=76&imgsize=40400"
    },

    {
        title: "Wood Craft",
        description: "Traditional wooden items.",
        date: new Date(),
        location: "Bijnor, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 600,
        image: "https://i.ytimg.com/vi/kxIaWL-xiKE/maxresdefault.jpg"
    },

    {
        title: "Textile Products",
        description: "Fabric manufacturing.",
        date: new Date(),
        location: "Barabanki, Uttar Pradesh",
        category: "Textile",
        totalAmount: 12000,
        availableAmount: 8000,
        productPrice: 500,
        image: "https://tabseer.co/wp-content/uploads/2021/02/Articles-1593028629.png"
    },

    {
        title: "Zari Zardozi",
        description: "Traditional embroidery work.",
        date: new Date(),
        location: "Budaun, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 1200,
        image: "https://www.mptourism.com/web/image/catalog/Blog%2014%20%20Art%20and%20Craft-Zari%20Zardozi%20-%20Culture%20Section.jpg"
    },

    {
        title: "Ceramic Products",
        description: "Clay and ceramic goods.",
        date: new Date(),
        location: "Bulandshahr, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 7000,
        availableAmount: 4000,
        productPrice: 400,
        image: "https://cdn.shopify.com/s/files/1/0588/0302/8166/files/india-circus-by-krsnaa-mehta-cacatua-galeritas-realm-dinner-set-20-pieces-52152000sd01646-1_1100x_1_1024x1024.jpg?v=1640594487"
    },

    {
        title: "Black Rice",
        description: "Nutrient-rich rice variety.",
        date: new Date(),
        location: "Chandauli, Uttar Pradesh",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 120,
        image: "https://5.imimg.com/data5/OE/UN/MY-50453273/aromatic-brown-rice.jpg"
    },

    {
        title: "Wooden Toys",
        description: "Handmade wooden toys.",
        date: new Date(),
        location: "Chitrakoot, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 300,
        image: "https://m.media-amazon.com/images/I/71HMkHYcbcL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Decorative Items",
        description: "Embroidery and decor products.",
        date: new Date(),
        location: "Deoria, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 300,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/12/477453384/OA/XG/YT/139441482/home-wall-decorative-items.jpeg"
    },

    {
        title: "Garments & Embroidery",
        description: "Textile and tailoring products.",
        date: new Date(),
        location: "Etawah, Uttar Pradesh",
        category: "Textile",
        totalAmount: 9000,
        availableAmount: 5000,
        productPrice: 600,
        image: "https://garmentsmerchandising.com/wp-content/uploads/2015/08/Islamic-style-gold-work-embroidery-for-SIBLING.jpg"
    },

    {
        title: "Brass Products",
        description: "Metal bells and brass items.",
        date: new Date(),
        location: "Etah, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2000,
        productPrice: 500,
        image: "https://brassglobe.com/cdn/shop/files/New_Project_4_1.png?v=1728475075&width=4003"
    },

    {
        title: "Textile Printing",
        description: "Printed textile fabrics.",
        date: new Date(),
        location: "Farrukhabad, Uttar Pradesh",
        category: "Textile",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 500,
        image: "https://lh4.googleusercontent.com/QzZAa6lhwSKUnE8UM5ZMaO8_3hYUVfNBc-K-ngtlNIi_IcNqUxT8u5xhKwYOWs244oyFZV5DX_M5oylLrYxP5WaGIMH--Dn8TYnt5gAXOVPZzcFLN1FYYAts7-M_C--ESlfqlWNYP0aadJj18w"
    },

    {
        title: "Bedsheets",
        description: "Cotton bedsheet production.",
        date: new Date(),
        location: "Fatehpur, Uttar Pradesh",
        category: "Textile",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 400,
        image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2026/JANUARY/29/rOfCMPvF_71641ce9fc5f4668b3c80928b4c1d68a.jpg"
    },

    {
        title: "Glassware",
        description: "Famous glass industry products.",
        date: new Date(),
        location: "Firozabad, Uttar Pradesh",
        category: "Industrial",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 300,
        image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/5/glassware-glasses_0_1200.jpg.webp"
    },

    {
        title: "Garments",
        description: "Readymade garment production.",
        date: new Date(),
        location: "Gautam Buddha Nagar, Uttar Pradesh",
        category: "Textile",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 800,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiypyeJve_xKjilm5_EFH_bMk1XitH6_IWwAHiE9NmQt5WHdfxL_IIZiu2jgGs3zXLyomhQjTj3qQCaXdNLSkCVzyr4NMRPLBmSXM6wuH2LW4DNvFunzKA2x_6N3YFleymfg0lwXGhS-MDXCKmn4TOv15RtTz8uCvAgMiDuZvYwhENF-mK3W7hxc-isDs/s1600/Garment%20definition%20and%20meaning.jpg"
    },

    {
        title: "Jute Wall Hanging",
        description: "Decorative jute products.",
        date: new Date(),
        location: "Ghazipur, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 300,
        image: "https://m.media-amazon.com/images/I/71tZhecs81L.jpg"
    },

    {
        title: "Engineering Goods",
        description: "Industrial engineering products.",
        date: new Date(),
        location: "Ghaziabad, Uttar Pradesh",
        category: "Industrial",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 1500,
        image: "https://content.jdmagicbox.com/comp/def_content/engineering-goods-dealers/6b6090d42d-engineering-goods-dealers-3-9qzlm.jpg"
    },

    {
        title: "Pulses",
        description: "Dal processing.",
        date: new Date(),
        location: "Gonda, Uttar Pradesh",
        category: "Food",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 80,
        image: "https://www.protectourlivelihood.in/wp-content/uploads/2025/04/Image-Pulses.jpg"
    },

    {
        title: "Terracotta",
        description: "Clay handicrafts.",
        date: new Date(),
        location: "Gorakhpur, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 300,
        image: "https://brownliving.in/cdn/shop/files/terracotta-nawabi-pot-handcrafted-clay-multipurpose-jar-sp-1-the-handicraftian-pack-of-1-jar-containers-1915043.jpg?v=1763573387"
    },

    {
        title: "Home Furnishing",
        description: "Textile decor items.",
        date: new Date(),
        location: "Hapur, Uttar Pradesh",
        category: "Textile",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 600,
        image: "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/04/A3848-How-to-enhance-Soft-Furnishing-Aesthetics-in-your-house-Image2.jpg?w=999"
    },

    {
        title: "Handloom",
        description: "Traditional weaving products.",
        date: new Date(),
        location: "Hardoi, Uttar Pradesh",
        category: "Textile",
        totalAmount: 7000,
        availableAmount: 4000,
        productPrice: 500,
        image: "https://sueestore.com/cdn/shop/articles/IMG_20190726_143429.jpg?v=1717837007"
    },

    {
        title: "Hing (Asafoetida)",
        description: "Spice processing.",
        date: new Date(),
        location: "Hathras, Uttar Pradesh",
        category: "Food",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 600,
        image: "https://i.etsystatic.com/6959842/r/il/ec9acc/6260919786/il_570xN.6260919786_b21l.jpg"
    },

    {
        title: "Shoes",
        description: "Footwear production.",
        date: new Date(),
        location: "Hamirpur, Uttar Pradesh",
        category: "Industrial",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 800,
        image: "https://bugattishoes.in/cdn/shop/files/322-A9S01-6900-4100.jpg?v=1762412735"
    },

    {
        title: "Paper Art",
        description: "Handmade paper crafts.",
        date: new Date(),
        location: "Jalaun, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 200,
        image: "https://i.ytimg.com/vi/DwP5Tin70oQ/maxresdefault.jpg"
    },

    {
        title: "Carpets",
        description: "Woollen carpets.",
        date: new Date(),
        location: "Jaunpur, Uttar Pradesh",
        category: "Textile",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 2000,
        image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/22866576/2025/3/12/f1f38c08-9c0a-4611-b1a5-7199a8e52c201741778724008-Storyhome-Blue--Yellow-Anti-skid-Floor-Carpet-57174177872334-1.jpg"
    },

    {
        title: "Soft Toys",
        description: "Stuffed toys manufacturing.",
        date: new Date(),
        location: "Jhansi, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 400,
        image: "https://m.media-amazon.com/images/I/61-DnBSho5L._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Banana",
        description: "Banana cultivation.",
        date: new Date(),
        location: "Kaushambi, Uttar Pradesh",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 30,
        image: "https://media.istockphoto.com/id/2197760431/photo/half-peeled-banana-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=CxMtulpl0li3CR8fCtNV2D__SV9eMcUd5PLp1zFd4GM="
    },

    {
        title: "Perfume (Attar)",
        description: "Traditional fragrance industry.",
        date: new Date(),
        location: "Kannauj, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 3000,
        image: "https://m.media-amazon.com/images/I/71Rt86TIqhL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Banana Fiber",
        description: "Eco-friendly fiber products.",
        date: new Date(),
        location: "Kushinagar, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 200,
        image: "https://i0.wp.com/ecosilky.com.vn/wp-content/uploads/2023/03/Banana-fibre-uses-5.jpg?resize=800%2C449&ssl=1"
    },

    {
        title: "Aluminium Utensils",
        description: "Metal cookware industry.",
        date: new Date(),
        location: "Kanpur Dehat, Uttar Pradesh",
        category: "Industrial",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 500,
        image: "https://m.media-amazon.com/images/I/61JEo-NKCVL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Leather Products",
        description: "Major leather industry hub.",
        date: new Date(),
        location: "Kanpur Nagar, Uttar Pradesh",
        category: "Industrial",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 1500,
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/12/369170448/BB/BD/QZ/205327149/product-jpeg.jpg"
    },

    {
        title: "Zari Zardozi",
        description: "Embroidery work.",
        date: new Date(),
        location: "Kasganj, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 1200,
        image: "https://www.mptourism.com/web/image/catalog/Blog%2014%20%20Art%20and%20Craft-Zari%20Zardozi%20-%20Culture%20Section.jpg"
    },

    {
        title: "Jaggery & Tribal Craft",
        description: "Agro + craft products.",
        date: new Date(),
        location: "Lakhimpur Kheri, Uttar Pradesh",
        category: "Food",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 50,
        image: "https://s3.ap-south-1.amazonaws.com/media.florafoods.in/wp-content/uploads/2019/07/24015405/Kolhapur-bella-01-.png"
    },

    {
        title: "Zari Silk Saree",
        description: "Traditional silk sarees.",
        date: new Date(),
        location: "Lalitpur, Uttar Pradesh",
        category: "Textile",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 2500,
        image: "https://m.media-amazon.com/images/I/A1yeCB4IjkL._AC_UY1100_.jpg"
    },

    {
        title: "Chikankari",
        description: "Hand embroidery craft.",
        date: new Date(),
        location: "Lucknow, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 1500,
        image: "https://m.media-amazon.com/images/I/91L6Dd--zFL._AC_UY1100_.jpg"
    },

    {
        title: "Furniture",
        description: "Wooden furniture manufacturing.",
        date: new Date(),
        location: "Maharajganj, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 2000,
        image: "https://m.media-amazon.com/images/I/71u3F2NZ9gL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Sports Goods",
        description: "Sports equipment manufacturing.",
        date: new Date(),
        location: "Meerut, Uttar Pradesh",
        category: "Industrial",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 800,
        image: "https://www.drhsports.com/uploaded_files/category_images/Sporting-Goods21_03_2024_06_47_02.jpg"
    },

    {
        title: "Stone Craft",
        description: "Decorative stone carving.",
        date: new Date(),
        location: "Mahoba, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 1500,
        image: "https://m.media-amazon.com/images/I/8147qv3szeL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Carpets",
        description: "Carpet weaving.",
        date: new Date(),
        location: "Mirzapur, Uttar Pradesh",
        category: "Textile",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 2000,
        image: "https://m.media-amazon.com/images/I/919VrDVTH3L._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Tarkashi Art",
        description: "Wood inlay art.",
        date: new Date(),
        location: "Mainpuri, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 1500,
        image: "https://m.media-amazon.com/images/I/410K+rdRZWL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Metal Craft",
        description: "Brass handicrafts.",
        date: new Date(),
        location: "Moradabad, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 1000,
        image: "https://m.media-amazon.com/images/I/51pGIGdwRiL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Religious Items",
        description: "Temple decorative items.",
        date: new Date(),
        location: "Mathura, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 500,
        image: "https://m.media-amazon.com/images/I/71H666zDKML._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Jaggery",
        description: "Sugarcane-based product.",
        date: new Date(),
        location: "Muzaffarnagar, Uttar Pradesh",
        category: "Food",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 50,
        image: "https://m.media-amazon.com/images/I/71z0pgt5ezS._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Powerloom Textile",
        description: "Textile industry hub.",
        date: new Date(),
        location: "Mau, Uttar Pradesh",
        category: "Textile",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 600,
        image: "https://m.media-amazon.com/images/I/81TFsY0VlcL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Flute",
        description: "Wooden musical instrument.",
        date: new Date(),
        location: "Pilibhit, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 300,
        image: "https://m.media-amazon.com/images/I/41ZNYmHTWRL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Moonj Products",
        description: "Eco-friendly grass products.",
        date: new Date(),
        location: "Prayagraj, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 7000,
        availableAmount: 4000,
        productPrice: 150,
        image: "https://m.media-amazon.com/images/I/91v9mFAHXML._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Amla Products",
        description: "Processed gooseberry items.",
        date: new Date(),
        location: "Pratapgarh, Uttar Pradesh",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 120,
        image: "https://m.media-amazon.com/images/I/61zeyfbV0TL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Wood Work",
        description: "Wooden handicrafts.",
        date: new Date(),
        location: "Raebareli, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 600,
        image: "https://m.media-amazon.com/images/I/71IL25mgRyL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Patch Work",
        description: "Textile patch embroidery.",
        date: new Date(),
        location: "Rampur, Uttar Pradesh",
        category: "Textile",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 500,
        image: "https://m.media-amazon.com/images/I/71bHzKeZXLL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Brassware",
        description: "Brass handicraft products.",
        date: new Date(),
        location: "Sant Kabir Nagar, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 600,
        image: "https://m.media-amazon.com/images/I/71V-9M3vaLL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Zari Zardozi",
        description: "Embroidery craft.",
        date: new Date(),
        location: "Shahjahanpur, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 1200,
        image: "https://www.mptourism.com/web/image/catalog/Blog%2014%20%20Art%20and%20Craft-Zari%20Zardozi%20-%20Culture%20Section.jpg"
    },

    {
        title: "Iron Art",
        description: "Metal handicraft products.",
        date: new Date(),
        location: "Shamli, Uttar Pradesh",
        category: "Industrial",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 800,
        image: "https://i.ytimg.com/vi/_x4auUWRmz8/maxresdefault.jpg"
    },

    {
        title: "Wood Craft",
        description: "Famous wooden carving industry.",
        date: new Date(),
        location: "Saharanpur, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 1500,
        image: "https://i.ytimg.com/vi/kxIaWL-xiKE/maxresdefault.jpg"
    },

    {
        title: "Tribal Craft",
        description: "Traditional tribal handmade products.",
        date: new Date(),
        location: "Shravasti, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 200,
        image: "https://www.indianholiday.com/wordpress/wp-content/uploads/2025/06/Immersing-In-Tribal-Arts-A-Guide-To-Indias-Rich-Handicrafts.jpg"
    },

    {
        title: "Horn Bone Craft",
        description: "Decorative horn-bone handicrafts.",
        date: new Date(),
        location: "Sambhal, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 700,
        image: "https://odopup.in/images/sambhal1.jpg"
    },

    {
        title: "Kala Namak Rice",
        description: "Aromatic rice variety.",
        date: new Date(),
        location: "Siddharthnagar, Uttar Pradesh",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 120,
        image: "https://m.media-amazon.com/images/I/61-t+Shk3TL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Dari Carpet",
        description: "Handwoven floor carpets.",
        date: new Date(),
        location: "Sitapur, Uttar Pradesh",
        category: "Textile",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 1500,
        image: "https://m.media-amazon.com/images/I/81R9VBT1WkL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Carpets",
        description: "Handmade carpets.",
        date: new Date(),
        location: "Sonbhadra, Uttar Pradesh",
        category: "Textile",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 2000,
        image: "https://m.media-amazon.com/images/I/81R9VBT1WkL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Moonj Products",
        description: "Grass handicrafts.",
        date: new Date(),
        location: "Sultanpur, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 150,
        image: "https://m.media-amazon.com/images/I/91v9mFAHXML._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Zari & Leather",
        description: "Embroidery and leather goods.",
        date: new Date(),
        location: "Unnao, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 1200,
        image: "https://www.kiransboutique.com/wp-content/uploads/2022/07/Golden-zari-work-leather-juties.jpeg"
    },

    {
        title: "Banarasi Silk Saree",
        description: "World-famous silk saree.",
        date: new Date(),
        location: "Varanasi, Uttar Pradesh",
        category: "Textile",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 5000,
        image: "https://m.media-amazon.com/images/I/51ZuMnlUwSL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Lacquer Craft",
        description: "Traditional lacquerware including toys, bangles, and decorative items.",
        date: new Date(),
        location: "Bareilly, Uttar Pradesh",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 300,
        image: "https://i0.wp.com/pari.education/wp-content/uploads/2021/11/06-lacquer_kitchenware-1-SS-_Sustaining-lacquered-wood-craft-layer-by-layer_.jpg?resize=1024%2C512&ssl=1"
    },


    // ARUNACHAL PRADESH DATA----------

    {
        title: "Mandarin Orange",
        description: "Citrus fruit grown in eastern hills.",
        date: new Date(),
        location: "Anjaw, Arunachal Pradesh",
        category: "Agriculture",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 80,
        image:"https://pluckk.s3.ap-south-1.amazonaws.com/product_thumbnail/242121263AF/orange_mandarin.jpg"
    },

    {
        title: "Tangsa Textile",
        description: "Traditional handwoven fabric with tribal motifs made using natural dyes.",
        date: new Date(),
        location: "Changlang, Arunachal Pradesh",
        category: "Textile",
        totalAmount: 500,
        availableAmount: 400,
        productPrice: 3500,
        image: "https://arunachallivingheritage.com/uploads/images/1663841987Tangsa_Lifestyle-of-Tangsas_blog-cover.jpg"
    },

    {
        title: "Idu Mishmi Shawl",
        description: "Colorful tribal shawl with geometric patterns representing Idu culture.",
        date: new Date(),
        location: "Dibang Valley, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 300,
        availableAmount: 200,
        productPrice: 2200,
        image: "https://moracollective.org/textile/shawl/5534823mr21063/"
    },

    {
        title: "Bamboo Basket",
        description: "Strong handmade baskets used for agriculture and storage.",
        date: new Date(),
        location: "East Kameng, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 1500,
        availableAmount: 900,
        productPrice: 400,
        image: "https://m.media-amazon.com/images/I/71IkCzYSgbL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Apong Rice Beer",
        description: "Traditional fermented rice beer central to Adi festivals and rituals.",
        date: new Date(),
        location: "East Siang, Arunachal Pradesh",
        category: "Beverage",
        totalAmount: 1000,
        availableAmount: 600,
        productPrice: 150,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Nogin_Apong%2C_Lakhimpur.jpg"
    },

    {
        title: "Nyishi Handloom",
        description: "Traditional woven cloth worn during ceremonies and daily life.",
        date: new Date(),
        location: "Kra Daadi, Arunachal Pradesh",
        category: "Textile",
        totalAmount: 300,
        availableAmount: 200,
        productPrice: 1800,
        image: "https://jd-institute-of-fashion-technology.b-cdn.net/wp-content/uploads/2024/10/Nyishi-Atirre-The-timeless-beauty-of-Nyishi-8.webp"
    },

    {
        title: "Bamboo & Cane Crafts",
        description: "Eco-friendly handmade bamboo and cane products.",
        date: new Date(),
        location: "Kurung Kumey, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 500,
        image:"https://greengoldbamboo.com/wp-content/uploads/2017/01/BambooCane-crafts-of-Northeast-India.jpg"
    },

    {
        title: "Millet (Organic)",
        description: "Staple crop grown in hill agriculture.",
        date: new Date(),
        location: "Lepa Rada, Arunachal Pradesh",
        category: "Agriculture",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 60,
        image:"https://www.truly-organics.com/wp-content/uploads/2015/09/Organic-Millet.jpg"
    },

    {
        title: "Wakro Orange",
        description: "Juicy mandarin orange known for sweetness and thin peel.",
        date: new Date(),
        location: "Lohit, Arunachal Pradesh",
        category: "Fruit",
        totalAmount: 8000,
        availableAmount: 6000,
        productPrice: 80,
        image: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg"
    },

    {
        title: "Wancho Dao",
        description: "Traditional tribal machete used in farming and cultural rituals.",
        date: new Date(),
        location: "Longding, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 1000,
        availableAmount: 500,
        productPrice: 500,
        image: "https://newsarenaindia.com/_next/image?url=https%3A%2F%2Fimages.newsarenaindia.com%2Fdaojpg_1763725086036.jpg&w=1920&q=75"
    },

    {
        title: "Rattan Basket",
        description: "Durable baskets made from forest rattan, used for transport.",
        date: new Date(),
        location: "Lower Dibang Valley, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 1000,
        availableAmount: 700,
        productPrice: 500,
        image: "https://m.media-amazon.com/images/I/81lPFnV69ML.jpg"
    },

    {
        title: "Local Rice Beer",
        description: "Fermented drink widely consumed during festivals.",
        date: new Date(),
        location: "Lower Siang, Arunachal Pradesh",
        category: "Beverage",
        totalAmount: 800,
        availableAmount: 500,
        productPrice: 170,
        image: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/05/Traditional-naga-beverage.jpg?size=*:900"
    },

    {
        title: "Bamboo Hat",
        description: "Traditional hat used for protection and rituals.",
        date: new Date(),
        location: "Lower Subansiri, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 1000,
        availableAmount: 600,
        productPrice: 600,
        image: "https://images.pexels.com/photos/35263326/pexels-photo-35263326.jpeg"
    },

    {
        title: "Khampti Rice",
        description: "Aromatic short grain rice widely used in traditional dishes.",
        date: new Date(),
        location: "Namsai, Arunachal Pradesh",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 9000,
        productPrice: 120,
        image: "https://thenewsmill.com/wp-content/uploads/2020/03/rice-grains.jpg"
    },

    {
        title: "Forest Honey",
        description: "Pure wild honey collected from forest regions.",
        date: new Date(),
        location: "Pakke Kessang, Arunachal Pradesh",
        category: "Food",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 250,
        image: "https://cdn.shopify.com/s/files/1/0636/6920/7236/files/Pure_forest_honey_A_natural_health_booster_480x480.webp?v=1731403412"
    },

    {
        title: "Nyishi Handicrafts",
        description: "Traditional bamboo and cane crafts of Nyishi tribe.",
        date: new Date(),
        location: "Papum Pare, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 1500,
        availableAmount: 900,
        productPrice: 400,
        image:"https://jd-institute-of-fashion-technology.b-cdn.net/wp-content/uploads/2024/10/Nyishi-Atirre-The-timeless-beauty-of-Nyishi-8.webp"
    },

    {
        title: "Medicinal Herbs",
        description: "Wild herbs used in traditional medicine.",
        date: new Date(),
        location: "Shi Yomi, Arunachal Pradesh",
        category: "Forest Produce",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 300,
        image:"https://png.pngtree.com/png-vector/20240530/ourmid/pngtree-medicinal-herbs-in-mortar-png-image_12545903.png"
    },

    {
        title: "Galo Shawl",
        description: "Traditional colorful shawl worn during festivals.",
        date: new Date(),
        location: "Siang, Arunachal Pradesh",
        category: "Textile",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 1800,
        image: "https://img.indiahandmade.com/catalog/product/cache/e8d0c7854f47ab55850e387a2d84e645/d/_/d_5_12.jpg"
    },

    {
        title: "Yak Churpi",
        description: "Hard dried cheese made from yak milk in high altitude regions.",
        date: new Date(),
        location: "Tawang, Arunachal Pradesh",
        category: "Food",
        totalAmount: 1000,
        availableAmount: 700,
        productPrice: 1200,
        image: "https://m.media-amazon.com/images/I/71UACmrfElL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Wooden Tribal Mask",
        description: "Hand-carved masks used in rituals and festivals.",
        date: new Date(),
        location: "Tirap, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 300,
        availableAmount: 200,
        productPrice: 800,
        image: "https://images.pexels.com/photos/999283/pexels-photo-999283.jpeg"
    },

    {
        title: "Adi Handloom",
        description: "Traditional woven textile with unique tribal identity.",
        date: new Date(),
        location: "Upper Siang, Arunachal Pradesh",
        category: "Textile",
        totalAmount: 400,
        availableAmount: 250,
        productPrice: 2200,
        image: "https://content.jdmagicbox.com/comp/puri/s6/9999p6752.6752.180528123156.k1s6/catalogue/adi-handloom-garden-puri-zxzde.jpg"
    },

    {
        title: "Organic Ginger",
        description: "Strong flavored ginger grown in organic hill farms.",
        date: new Date(),
        location: "Upper Subansiri, Arunachal Pradesh",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 120,
        image: "https://m.media-amazon.com/images/I/61SCxbFGpWL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Yak Wool Products",
        description: "Warm woolen items made from yak hair.",
        date: new Date(),
        location: "West Kameng, Arunachal Pradesh",
        category: "Textile",
        totalAmount: 400,
        availableAmount: 250,
        productPrice: 1500,
        image: "https://i.etsystatic.com/39264161/r/il/a30ca2/6229089030/il_fullxfull.6229089030_alk1.jpg"
    },

    {
        title: "Millet Beer",
        description: "Traditional fermented drink consumed in tribal festivals.",
        date: new Date(),
        location: "West Siang, Arunachal Pradesh",
        category: "Beverage",
        totalAmount: 600,
        availableAmount: 300,
        productPrice: 180,
        image: "https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2018%2F07%2F10%2Fragi-beer-biere-street.jpg?w=undefined&auto=format%2Ccompress&fit=max"
    },

    {
        title: "Organic Rice",
        description: "Locally grown organic rice using traditional farming methods.",
        date: new Date(),
        location: "Kamle, Arunachal Pradesh",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 90,
        image: "https://tiimg.tistatic.com/fp/1/007/292/natural-fresh-organic-rice-for-cooking-781.jpg"
    },

    {
        title: "Aka Textile",
        description: "Traditional tribal cloth with unique weaving patterns.",
        date: new Date(),
        location: "Bichom, Arunachal Pradesh",
        category: "Textile",
        totalAmount: 400,
        availableAmount: 250,
        productPrice: 2000,
        image: "https://akaacoustics.com/cdn/shop/collections/acoustic-textiles-853189.jpg?v=1736392298"
    },

    {
        title: "Bamboo Utility Products",
        description: "Daily use items made from bamboo showcasing eco-friendly lifestyle.",
        date: new Date(),
        location: "Keyi Panyor, Arunachal Pradesh",
        category: "Handicraft",
        totalAmount: 1200,
        availableAmount: 900,
        productPrice: 250,
        image: "https://image.made-in-china.com/2f0j00wcUYpZAhfekg/Eco-Friendly-100-Organic-Bamboo-Products-Wholesale.jpg"
    },

    // Chhattisgarh DATA-----------------------------------------

    {
        title: "Handloom Cotton Bedsheets",
        description: "Durable handwoven cotton bedsheets made by local artisans.",
        date: new Date(),
        location: "Balod, Chhattisgarh",
        category: "Textile",
        totalAmount: 800,
        availableAmount: 500,
        productPrice: 700,
        image: "https://m.media-amazon.com/images/I/811s6uf5VmL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Cotton Sarees",
        description: "Lightweight and breathable cotton sarees produced in rural looms.",
        date: new Date(),
        location: "Baloda Bazar-Bhatapara, Chhattisgarh",
        category: "Textile",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 1500,
        image: "https://theuseeshop.com/cdn/shop/collections/Georgette_3.jpg?v=1756984845&width=4032"
    },

    {
        title: "Forest Honey",
        description: "Natural wild honey collected from forest areas with medicinal benefits.",
        date: new Date(),
        location: "Balrampur, Chhattisgarh",
        category: "Food",
        totalAmount: 1500,
        availableAmount: 900,
        productPrice: 400,
        image: "https://www.liflic.in/wp-content/uploads/2026/03/Forest-Honey.png"
    },

    {
        title: "Dhokra Art",
        description: "Traditional tribal metal casting craft made using ancient techniques.",
        date: new Date(),
        location: "Bastar, Chhattisgarh",
        category: "Handicraft",
        totalAmount: 300,
        availableAmount: 150,
        productPrice: 2500,
        image: "https://www.gitagged.com/wp-content/uploads/2020/10/Bastar-Dhokra-Swan-Art-GiTAGGED-6.jpg"
    },

    {
        title: "Paddy Rice",
        description: "Major staple crop grown in fertile agricultural fields.",
        date: new Date(),
        location: "Bemetara, Chhattisgarh",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 15000,
        productPrice: 25,
        image: "https://m.media-amazon.com/images/I/81oM8ueyqxL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Bamboo Baskets",
        description: "Handmade bamboo baskets used for storage and farming.",
        date: new Date(),
        location: "Bijapur, Chhattisgarh",
        category: "Handicraft",
        totalAmount: 700,
        availableAmount: 400,
        productPrice: 250,
        image: "https://orumindicus.com/wp-content/uploads/2023/02/169.png"
    },

    {
        title: "Kosa Silk Fabric",
        description: "Premium kosa silk known for its natural shine and strength.",
        date: new Date(),
        location: "Bilaspur, Chhattisgarh",
        category: "Textile",
        totalAmount: 400,
        availableAmount: 200,
        productPrice: 3000,
        image: "https://m.media-amazon.com/images/I/81C0pywuJAS.jpg"
    },

    {
        title: "Wrought Iron Craft",
        description: "Unique tribal iron craft reflecting traditional Bastar art.",
        date: new Date(),
        location: "Dantewada, Chhattisgarh",
        category: "Handicraft",
        totalAmount: 300,
        availableAmount: 150,
        productPrice: 1800,
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/bastar-iron-craft-chhattisgarh-1-craft-hero?qlt=82&ts=1726641319572"
    },

    {
        title: "Peddi Rice",
        description: "Traditional rice variety cultivated in local farming systems.",
        date: new Date(),
        location: "Dhamtari, Chhattisgarh",
        category: "Forest Produce",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 150,
        image: "https://thumbs.dreamstime.com/b/rice-peddi-grasses-green-leafs-plants-198504082.jpg"
    },

    {
        title: "Steel Products",
        description: "Industrial steel goods used in construction and manufacturing.",
        date: new Date(),
        location: "Durg, Chhattisgarh",
        category: "Industrial",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 50000,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/11/464958282/MG/MO/DG/1083675/stainless-steel-product.jpg"
    },

    {
        title: "Mahua Products",
        description: "Traditional mahua-based food and beverages from forest produce.",
        date: new Date(),
        location: "Gariaband, Chhattisgarh",
        category: "Food",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 150,
        image: "https://www.aranyapurefood.com/cdn/shop/collections/IMG-20221124-WA0089.jpg?v=1670500303"
    },

    {
        title: "Chironji Seeds",
        description: "Forest-grown seeds widely used in sweets and traditional cooking.",
        date: new Date(),
        location: "Gaurela-Pendra-Marwahi, Chhattisgarh",
        category: "Forest Produce",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 900,
        image: "https://www.aranyapurefood.com/cdn/shop/files/IMG-20231121-WA0016.jpg?v=1700623019"
    },

    {
        title: "Kosa Silk Sarees",
        description: "Elegant silk sarees known for rich texture and cultural value.",
        date: new Date(),
        location: "Janjgir-Champa, Chhattisgarh",
        category: "Textile",
        totalAmount: 300,
        availableAmount: 150,
        productPrice: 4000,
        image: "https://images.pexels.com/photos/35108809/pexels-photo-35108809.jpeg"
    },

    {
        title: "Herbal Products",
        description: "Locally sourced herbal items used in traditional medicine.",
        date: new Date(),
        location: "Jashpur, Chhattisgarh",
        category: "Herbal",
        totalAmount: 1500,
        availableAmount: 900,
        productPrice: 400,
        image: "https://medlineplus.gov/images/HerbalMedicine_share.jpg"
    },

    {
        title: "Organic Jaggery",
        description: "Natural jaggery made using traditional sugarcane processing methods.",
        date: new Date(),
        location: "Kabirdham, Chhattisgarh",
        category: "Food",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 50,
        image: "https://m.media-amazon.com/images/I/71V7El3oAjS.jpg"
    },

    {
        title: "Bamboo Crafts",
        description: "Traditional bamboo handicrafts used for daily utility and decoration.",
        date: new Date(),
        location: "Kanker, Chhattisgarh",
        category: "Handicraft",
        totalAmount: 800,
        availableAmount: 400,
        productPrice: 250,
        image: "https://theheritageartifacts.com/cdn/shop/collections/cd12ad6924cd75b38c747fcb8950c757.jpg?v=1678684828"
    },

    {
        title: "Bell Metal Craft",
        description: "Handcrafted bell metal items used in rituals and home décor.",
        date: new Date(),
        location: "Kondagaon, Chhattisgarh",
        category: "Handicraft",
        totalAmount: 400,
        availableAmount: 200,
        productPrice: 1800,
        image: "https://www.mptourism.com/web/image/catalog/Blog%20Image/Bell-metal-Banner.jpg"
    },

    {
        title: "Coal",
        description: "Major coal mining hub supplying fuel for power and industries.",
        date: new Date(),
        location: "Korba, Chhattisgarh",
        category: "Mineral",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 6000,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Bituminous_Coal.JPG"
    },

    {
        title: "Korea Amrit Laddoo",
        description: "Popular traditional sweet made from local ingredients.",
        date: new Date(),
        location: "Korea, Chhattisgarh",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 8000,
        productPrice: 120,
        image: "https://www.koreaamrit.com/cdn/shop/files/Rectangle_23945.png?v=1763220340&width=600"
    },

    {
        title: "Eucalyptus Oil",
        description: "Herbal oil extracted from eucalyptus leaves used in medicine.",
        date: new Date(),
        location: "Mahasamund, Chhattisgarh",
        category: "Herbal",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 800,
        image: "https://www.health.com/thmb/0fpQBwjdY22QHIm2IWZLKTNrTxU=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/ole-extract-gettyimages-950794390-2000-2e0e33dd216f45eb91bf7fc1d8643f98.jpg"
    },

    {
        title: "Sal Seeds",
        description: "Forest produce used for oil extraction and traditional use.",
        date: new Date(),
        location: "Manendragarh-Chirmiri-Bharatpur, Chhattisgarh",
        category: "Forest Produce",
        totalAmount: 3000,
        availableAmount: 1500,
        productPrice: 200,
        image: "https://www.aranyapurefood.com/cdn/shop/files/IMG-20231121-WA0016.jpg?v=1700623019"
    },

    {
        title: "Lac Products",
        description: "Natural resin-based products used in varnish and handicrafts.",
        date: new Date(),
        location: "Mohla-Manpur-Ambagarh Chowki, Chhattisgarh",
        category: "Forest Produce",
        totalAmount: 2500,
        availableAmount: 1400,
        productPrice: 350,
        image: "https://www.aranyapurefood.com/cdn/shop/files/IMG-20231121-WA0016.jpg?v=1700623019"
    },

    {
        title: "Irrigated Rice",
        description: "High-yield rice cultivated using irrigation systems.",
        date: new Date(),
        location: "Mungeli, Chhattisgarh",
        category: "Agriculture",
        totalAmount: 18000,
        availableAmount: 12000,
        productPrice: 30,
        image: "https://thumbs.dreamstime.com/b/irrigation-rice-fields-using-pump-irrigation-rice-fields-using-pump-wells-technique-pumping-water-285147377.jpg"
    },

    {
        title: "Wooden Crafts",
        description: "Hand-carved wooden items reflecting tribal craftsmanship.",
        date: new Date(),
        location: "Narayanpur, Chhattisgarh",
        category: "Handicraft",
        totalAmount: 200,
        availableAmount: 100,
        productPrice: 1500,
        image: "https://i.ytimg.com/vi/kxIaWL-xiKE/maxresdefault.jpg"
    },

    {
        title: "Coal Supply",
        description: "Coal extraction and supply for industrial energy needs.",
        date: new Date(),
        location: "Raigarh, Chhattisgarh",
        category: "Mineral",
        totalAmount: 8000,
        availableAmount: 4000,
        productPrice: 6500,
        image: "https://agromer.org/wp-content/uploads/2026/01/indonesian-coal-supplier.webp"
    },

    {
        title: "Rice Processing",
        description: "Major rice milling and processing hub supplying high-quality parboiled and raw rice to domestic markets.",
        date: new Date(),
        location: "Raipur, Chhattisgarh",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 30000,
        productPrice: 45,
        image: "https://static.chinaricemill.com/cloud/kkBqlKRlkSripinjjmi/Rice-Processing.jpg"
    },

    {
        title: "Bamboo Products",
        description: "Eco-friendly bamboo items used in daily household and crafts.",
        date: new Date(),
        location: "Rajnandgaon, Chhattisgarh",
        category: "Handicraft",
        totalAmount: 400,
        availableAmount: 200,
        productPrice: 250,
        image: "https://theheritageartifacts.com/cdn/shop/collections/cd12ad6924cd75b38c747fcb8950c757.jpg?v=1678684828"
    },

    {
        title: "Medicinal Herbs",
        description: "Forest-grown herbs used in traditional and Ayurvedic medicine.",
        date: new Date(),
        location: "Sarangarh-Bilaigarh, Chhattisgarh",
        category: "Herbal",
        totalAmount: 1800,
        availableAmount: 1000,
        productPrice: 500,
        image: "https://savetheland.org/wp-content/uploads/MedicinalPlants.jpg"
    },

    {
        title: "Rice Processing",
        description: "Processing and milling of rice for commercial distribution.",
        date: new Date(),
        location: "Sakti, Chhattisgarh",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 35,
        image: "https://static.chinaricemill.com/cloud/kkBqlKRlkSripinjjmi/Rice-Processing.jpg"
    },

    {
        title: "Tribal Textiles",
        description: "Traditional fabrics woven by tribal communities with unique patterns.",
        date: new Date(),
        location: "Sukma, Chhattisgarh",
        category: "Textile",
        totalAmount: 200,
        availableAmount: 100,
        productPrice: 1000,
        image: "https://tribaltextilesafrica.com/cdn/shop/collections/all-tribal-products-547287.jpg?v=1723132213"
    },

    {
        title: "Limestone",
        description: "Mineral resource used in cement and construction industries.",
        date: new Date(),
        location: "Surajpur, Chhattisgarh",
        category: "Mineral",
        totalAmount: 5000,
        availableAmount: 2500,
        productPrice: 700,
        image: "https://insgeo.com.ua/wp-content/uploads/2024/11/limestone-1024x738.jpg"
    },

    {
        title: "Kodo Millet",
        description: "Nutritious millet crop grown in dry farming conditions.",
        date: new Date(),
        location: "Surguja, Chhattisgarh",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 80,
        image: "https://www.chenabgourmet.com/wp-content/uploads/2023/08/139-1024x576.png"
    },

    {
        title: "Paddy Rice",
        description: "High-yield paddy rice cultivated extensively in the fertile plains of this district.",
        date: new Date(),
        location: "Khairagarh-Chhuikhadan-Gandai, Chhattisgarh",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 35,
        image: "https://www.fertiglobal.com/wp-content/uploads/2020/07/Paddy-Rice.jpg"
    },
    

    // Manipur Data-----------------------------------

    {
        title: "Stone Carving",
        description: "Traditional stone bowls and idols carved by artisans in Bishnupur",
        date: new Date(),
        location: "Bishnupur, Manipur",
        category: "Handicraft",
        totalAmount: 200,
        availableAmount: 120,
        productPrice: 500,
        image: "https://images.pexels.com/photos/6242546/pexels-photo-6242546.jpeg"
    },

    {
        title: "Likhai & Sangbai Baskets",
        description: "Intricately woven cane and bamboo baskets made by the Maring tribe in Chandel, used for storage and daily life.",
        date: new Date(),
        location: "Chandel, Manipur",
        category: "Handicraft",
        totalAmount: 1000,
        availableAmount: 600,
        productPrice: 150,
        image: "https://brownliving.in/cdn/shop/files/sustainable-100-eco-friendly-handcrafted-sabai-grass-basket-rustic-sustainable-design-by-kauseyah-at-brownliving-317606.jpg?v=1740898705&width=1200"
    },

    {
        title: "Banana Fiber Cloth",
        description: "Eco-friendly handwoven fabric made from banana fiber in Churachandpur, known for its durability and natural sheen.",
        date: new Date(),
        location: "Churachandpur, Manipur",
        category: "Textile",
        totalAmount: 300,
        availableAmount: 150,
        productPrice: 800,
        image: "https://tiimg.tistatic.com/fp/1/004/329/banana-fabric-749.jpg"
    },

    {
        title: "Wangkhei Phee Cloth",
        description: "Embroidered transparent weave from Imphal East’s traditional looms",
        date: new Date(),
        location: "Imphal East, Manipur",
        category: "Textile",
        totalAmount: 80,
        availableAmount: 40,
        productPrice: 1200,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Wangkhei_Phee.png"
    },

    {
        title: "Kauna Reed Mats",
        description: "Handwoven reed mats and chair covers from Imphal Valley",
        date: new Date(),
        location: "Imphal West, Manipur",
        category: "Handicraft",
        totalAmount: 1000,
        availableAmount: 700,
        productPrice: 300,
        image: "https://m.media-amazon.com/images/I/61W1ar4v1SL.jpg"
    },

    {
        title: "Bamboo Baskets",
        description: "Woven bamboo baskets and trays crafted in Jiribam",
        date: new Date(),
        location: "Jiribam, Manipur",
        category: "Handicraft",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 150,
        image: "https://m.media-amazon.com/images/I/71IkCzYSgbL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Bamboo Decor Items",
        description: "Traditional bamboo craft products made in Kakching",
        date: new Date(),
        location: "Kakching, Manipur",
        category: "Handicraft",
        totalAmount: 400,
        availableAmount: 250,
        productPrice: 200,
        image: "https://i.ytimg.com/vi/tN8AI5hRGf4/maxresdefault.jpg"
    },

    {
        title: "Bamboo Furniture",
        description: "Handcrafted bamboo chairs and stools from Kamjong",
        date: new Date(),
        location: "Kamjong, Manipur",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 50,
        productPrice: 1000,
        image: "https://images.pexels.com/photos/30947443/pexels-photo-30947443.jpeg"
    },

    {
        title: "Mara Naga Shawl",
        description: "Brightly woven shawl of the Mara tribe (Kangpokpi)",
        date: new Date(),
        location: "Kangpokpi, Manipur",
        category: "Textile",
        totalAmount: 150,
        availableAmount: 70,
        productPrice: 1200,
        image: "https://m.media-amazon.com/images/I/91VwcIfyYGL._AC_UY1100_.jpg"
    },

    {
        title: "Bamboo Handicrafts",
        description: "Assorted bamboo craft items (Noney)",
        date: new Date(),
        location: "Noney, Manipur",
        category: "Handicraft",
        totalAmount: 300,
        availableAmount: 150,
        productPrice: 200,
        image: "https://i.ytimg.com/vi/tN8AI5hRGf4/maxresdefault.jpg"
    },

    {
        title: "Ginger (Organic Hill Ginger)",
        description: "Pherzawl district is known for cultivating high-quality ginger through traditional hill farming, which is a major agricultural product of the region.",
        date: new Date(),
        location: "Pherzawl, Manipur",
        category: "Agriculture",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 70,
        image: "https://m.media-amazon.com/images/I/61n+6FilCnL.jpg"
    },

    {
        title: "Organic Honey",
        description: "Natural honey produced through traditional beekeeping.",
        date: new Date(),
        location: "Senapati, Manipur",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 400,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/11/465007441/KU/JM/BC/30736415/pure-honey-500x500.webp"
    },

    {
        title: "Orange (Hill Fruit)",
        description: "Juicy hill-grown oranges known for rich flavor.",
        date: new Date(),
        location: "Tamenglong, Manipur",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 80,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg"
    },

    {
        title: "Moyon Naga Shawl",
        description: "Distinctive handwoven shawl of the Moyon tribe, featuring traditional motifs and natural dyes, unique to Tengnoupal.",
        date: new Date(),
        location: "Tengnoupal, Manipur",
        category: "Textile",
        totalAmount: 120,
        availableAmount: 80,
        productPrice: 1500,
        image: "https://i0.wp.com/madeinnagalandcenter.in/wp-content/uploads/2023/07/angami.jpg?fit=1024%2C1024&ssl=1"
    },

    {
        title: "Fish (Wetland Aquaculture)",
        description: "Freshwater fish farming in ponds and wetlands.",
        date: new Date(),
        location: "Thoubal, Manipur",
        category: "Food",
        totalAmount: 9000,
        availableAmount: 5500,
        productPrice: 220,
        image: "https://www.worldanimalprotection.ca/cdn-cgi/image/width=1280,format=auto/siteassets/shutterstock_1899421132.jpg"
    },

    {
        title: "Naga Shawls & Handloom",
        description: "Traditional tribal shawls representing cultural identity.",
        date: new Date(),
        location: "Ukhrul, Manipur",
        category: "Textile",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 2500,
        image: "https://cdn.exoticindia.com/images/products/original/textiles/vi05_a06.jpg"
    },

    
    // Meghalaya DATA---------------------------------------------------

    {
        title: "Ryndia (Eri Silk Fabric)",
        description: "Eco-friendly traditional silk produced using non-violent methods.",
        date: new Date(),
        location: "Ri-Bhoi, Meghalaya",
        category: "Textile",
        totalAmount: 600,
        availableAmount: 350,
        productPrice: 2500,
        image: "https://www.selvedge.org/cdn/shop/articles/ryndia_lead.jpg?v=1618503243"
    },

    {
        title: "Sohra Pineapple",
        description: "Sweet pineapple grown in high rainfall areas of Sohra region.",
        date: new Date(),
        location: "East Khasi Hills, Meghalaya",
        category: "Agriculture",
        totalAmount: 18000,
        availableAmount: 12000,
        productPrice: 60,
        image: "https://m.media-amazon.com/images/I/81XA2GQIPOL.jpg"
    },

    {
        title: "Broom Grass (Thysanolaena maxima)",
        description: "Commercial broom grass widely exported for broom making.",
        date: new Date(),
        location: "West Khasi Hills, Meghalaya",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 60,
        image: "https://m.media-amazon.com/images/I/61WQjWn4kPL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Strawberry",
        description: "High-altitude strawberries grown in cool climate.",
        date: new Date(),
        location: "Eastern West Khasi Hills, Meghalaya",
        category: "Agriculture",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 250,
        image: "https://clv.h-cdn.co/assets/15/22/2048x2048/square-1432664914-strawberry-facts1.jpg"
    },

    {
        title: "Mandarin Orange (Khasi Mandarin)",
        description: "Juicy citrus fruit widely cultivated and traded.",
        date: new Date(),
        location: "South West Khasi Hills, Meghalaya",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 70,
        image: "https://greenlandsnursery.com/wp-content/uploads/2025/08/image-800x700-2025-08-05T184913.468.png"
    },

    {
        title: "Lakadong Turmeric",
        description: "High-curcumin GI-tag turmeric with strong medicinal value.",
        date: new Date(),
        location: "West Jaintia Hills, Meghalaya",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 7000,
        productPrice: 200,
        image: "https://homegrownplatter.b-cdn.net/wp-content/uploads/2022/09/41.png"
    },

    {
        title: "Coal (Mining)",
        description: "Coal extracted from local mines used in industries.",
        date: new Date(),
        location: "East Jaintia Hills, Meghalaya",
        category: "Mineral",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 5000,
        image: "https://etimg.etb2bimg.com/photo/125212029.cms"
    },

    {
        title: "Areca Nut (Betel Nut)",
        description: "Widely cultivated plantation crop in Garo Hills.",
        date: new Date(),
        location: "East Garo Hills, Meghalaya",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 7000,
        productPrice: 100,
        image: "https://i0.wp.com/sjexim.services/wp-content/uploads/2023/11/SS-Supari.jpg?ssl=1"
    },

    {
        title: "Bamboo & Cane Handicrafts",
        description: "Traditional baskets and household items made from bamboo.",
        date: new Date(),
        location: "West Garo Hills, Meghalaya",
        category: "Handicraft",
        totalAmount: 7000,
        availableAmount: 4000,
        productPrice: 350,
        image: "https://orumindicus.com/wp-content/uploads/2023/02/169.png"
    },

    {
        title: "Black Pepper",
        description: "Aromatic spice grown in hilly plantation areas.",
        date: new Date(),
        location: "South Garo Hills, Meghalaya",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 500,
        image: "https://cdn2.stylecraze.com/wp-content/uploads/2013/06/17-Amazing-Benefits-Of-Black-Pepper-For-Skin-Hair-And-Health.jpg.webp"
    },

    {
        title: "Organic Honey",
        description: "Natural forest honey collected by tribal communities.",
        date: new Date(),
        location: "North Garo Hills, Meghalaya",
        category: "Food",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 450,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/11/465007441/KU/JM/BC/30736415/pure-honey-500x500.webp"
    },

    {
        title: "Ginger (Organic)",
        description: "High-quality ginger cultivated in traditional farms.",
        date: new Date(),
        location: "South West Garo Hills, Meghalaya",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 7000,
        productPrice: 100,
        image: "https://m.media-amazon.com/images/I/61SCxbFGpWL.jpg"
    },


    // West Bengal DATA---------------------------------------------------

    {
        title: "Darjeeling Tea",
        description: "World-famous GI-tagged tea grown in high-altitude Himalayan slopes with muscatel flavor.",
        date: new Date(),
        location: "Darjeeling, West Bengal",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 30000,
        productPrice: 800,
        image: "https://www.theteashelf.com/cdn/shop/articles/tea-glass-cup-wooden-table-tea-plantations-background_1024x1024.jpg?v=1679396414"
    },

    {
        title: "Kalimpong Cheese",
        description: "Unique dairy product crafted using traditional European methods in the hills of Kalimpong.",
        date: new Date(),
        location: "Kalimpong, West Bengal",
        category: "Food",
        totalAmount: 3000,
        availableAmount: 1800,
        productPrice: 600,
        image: "https://www.civilsocietyonline.com/static/media/static/2024/07/29/cheese_1.869x568.jpg"
    },

    {
        title: "Murshidabad Silk (Korial & Baluchari)",
        description: "GI-tagged Baluchari silk sarees with intricate mythological motifs woven by skilled artisans.",
        date: new Date(),
        location: "Murshidabad, West Bengal",
        category: "Textile",
        totalAmount: 5000,
        availableAmount: 2800,
        productPrice: 8000,
        image: "https://grandmaslegacy.wordpress.com/wp-content/uploads/2018/03/baluchari_blackgold.png"
    },

    {
        title: "Bishnupur Terracotta Craft",
        description: "Renowned terracotta temples and craft items from the cultural heart of Bengal.",
        date: new Date(),
        location: "Bankura, West Bengal",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 500,
        image: "https://inditales.com/wp-content/uploads/2010/09/bankura-horses-terracotta-artifacts-at-art-mart-of-bishnupur.jpg"
    },

    {
        title: "Dhaniakhali Saree",
        description: "Lightweight cotton sarees with distinctive striped borders produced by traditional weavers.",
        date: new Date(),
        location: "Hooghly, West Bengal",
        category: "Textile",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 1200,
        image: "https://www.adhyavi.com/cdn/shop/files/rn-image_picker_lib_temp_1c7524b6-bcd2-4120-b582-1fe07d259111.jpg?v=1721297902"
    },

    {
        title: "Howrah Jute Products",
        description: "Eco-friendly jute bags, carpets and handicrafts from the jute processing hub of India.",
        date: new Date(),
        location: "Howrah, West Bengal",
        category: "Handicraft",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 300,
        image: "https://content.jdmagicbox.com/comp/def_content/jute-product-manufacturers/75c5ba46e5-jute-product-manufacturers-2-0oe76.jpg"
    },

    {
        title: "Kolkata Rosogolla",
        description: "GI-tagged iconic Bengali sweet made from chhena, soft and spongy in sugar syrup.",
        date: new Date(),
        location: "Kolkata, West Bengal",
        category: "Food",
        totalAmount: 100000,
        availableAmount: 60000,
        productPrice: 15,
        image: "https://bisarga.com/wp-content/uploads/2021/07/Bengali-Rosogolla-Bisarga-Food-Takeways-Food-Takeway-Kolkata-Howrah-Mumbai-Pune.jpg"
    },

    {
        title: "Shantipur Saree",
        description: "Fine cotton and silk sarees woven in traditional styles by the weavers of Shantipur.",
        date: new Date(),
        location: "Nadia, West Bengal",
        category: "Textile",
        totalAmount: 7000,
        availableAmount: 4000,
        productPrice: 1500,
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/Santipore-Saree-west-bengal-craft-hero?qlt=82&ts=1726641485735"
    },

    {
        title: "North 24 Parganas Hilsa Fish",
        description: "Prized freshwater fish from the Ganges delta, a cultural delicacy of Bengal.",
        date: new Date(),
        location: "North 24 Parganas, West Bengal",
        category: "Food",
        totalAmount: 25000,
        availableAmount: 15000,
        productPrice: 900,
        image: "https://media.assettype.com/indiawaterportal%2F2025-06-06%2Fys2en5zo%2FHilsaa.png?w=640&auto=format%2Ccompress"
    },

    {
        title: "South 24 Parganas Honey (Sundarbans)",
        description: "Wild forest honey harvested by Mouli communities from the Sundarbans mangrove forests.",
        date: new Date(),
        location: "South 24 Parganas, West Bengal",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 550,
        image: "https://www.biswabangla.in/wp-content/uploads/2023/09/Biswa-Bangla-Honey-490g-3_Biswa-Bangla-FMCG.webp"
    },

    {
        title: "Medinipur Sabai Grass Handicraft",
        description: "Eco-friendly baskets and mats woven from Sabai grass by tribal artisans.",
        date: new Date(),
        location: "Paschim Medinipur, West Bengal",
        category: "Handicraft",
        totalAmount: 9000,
        availableAmount: 5500,
        productPrice: 250,
        image: "https://orumindicus.com/wp-content/uploads/2023/02/401.png"
    },

    {
        title: "Purba Medinipur Betel Leaf (Pan)",
        description: "High-quality betel leaves cultivated along the coastal belt of East Medinipur.",
        date: new Date(),
        location: "Purba Medinipur (East Medinipur), West Bengal",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 18000,
        productPrice: 40,
        image: "https://images.apollo247.in/pd-cms/cms/2026-03/AdobeStock_1786024069.webp"
    },

    {
        title: "Purulia Chhau Mask",
        description: "Vibrant handcrafted masks used in the famous Chhau dance, a folk tradition of Purulia.",
        date: new Date(),
        location: "Purulia, West Bengal",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 700,
        image: "https://www.gitagged.com/wp-content/uploads/2020/01/Tribe-Couple-Chhau-Mask-Online-1.jpg"
    },

    {
        title: "Birbhum Kantha Stitch",
        description: "Traditional hand-embroidered Kantha textile with colorful folk motifs by rural women artisans.",
        date: new Date(),
        location: "Birbhum, West Bengal",
        category: "Textile",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 1800,
        image: "https://www.wbkvib.org.in/media/mj/s/img/images/images_slider/katha_image/4.jpeg"
    },

    {
        title: "Burdwan Sitabhog & Mihidana",
        description: "GI-tagged traditional sweets of Burdwan — fine grain sweets with distinct royal heritage.",
        date: new Date(),
        location: "Purba Burdwan (Bardhaman), West Bengal",
        category: "Food",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 200,
        image: "https://moha-mushkil.com/wp-content/uploads/2020/07/IMG_20200702_082003-scaled.jpg"
    },

    {
        title: "Asansol Coal & Steel Products",
        description: "Industrial coal and steel products from one of India's major industrial belts.",
        date: new Date(),
        location: "Paschim Bardhaman, West Bengal",
        category: "Mineral",
        totalAmount: 50000,
        availableAmount: 30000,
        productPrice: 4000,
        image: "https://content.jdmagicbox.com/comp/def_content/steel-plants/3-steel-plants-4-nuxkb.jpg"
    },

    {
        title: "Cooch Behar Zari Work",
        description: "Intricate golden zari embroidery on textiles reflecting the royal craftsmanship of the region.",
        date: new Date(),
        location: "Cooch Behar, West Bengal",
        category: "Textile",
        totalAmount: 3000,
        availableAmount: 1800,
        productPrice: 3500,
        image: "https://tiimg.tistatic.com/fp/1/008/195/light-weight-traditional-wear-silk-banarasi-saree-with-blouse-for-women-186.jpg"
    },

    {
        title: "Alipurduar Tea",
        description: "Premium CTC and orthodox tea from the Dooars region with rich brisk flavour.",
        date: new Date(),
        location: "Alipurduar, West Bengal",
        category: "Agriculture",
        totalAmount: 40000,
        availableAmount: 25000,
        productPrice: 400,
        image: "https://www.dabritea.in/assets/front/images/about-2.webp"
    },

    {
        title: "Jalpaiguri Dooars Tea",
        description: "Strong and aromatic tea grown in the lush Dooars forest belt of North Bengal.",
        date: new Date(),
        location: "Jalpaiguri, West Bengal",
        category: "Agriculture",
        totalAmount: 45000,
        availableAmount: 28000,
        productPrice: 380,
        image: "https://dooarstrip.com/images/destination/Nagrakata.jpg"
    },

    {
        title: "Raiganj Makhna (Fox Nut)",
        description: "Organically grown fox nuts from the wetlands of North Dinajpur, popular for nutrition.",
        date: new Date(),
        location: "Uttar Dinajpur (North Dinajpur), West Bengal",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 350,
        image: "https://almondhouse.com/cdn/shop/files/20220823-2022_08_23_IMG_5847_1.jpg?v=1744611985"
    },

    {
        title: "Balurghat Litchi",
        description: "Juicy and aromatic litchi variety cultivated in the fertile plains of South Dinajpur.",
        date: new Date(),
        location: "Dakshin Dinajpur (South Dinajpur), West Bengal",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 7000,
        productPrice: 120,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/5/308036597/GU/DC/WI/98217961/bhagalpur-shahi-litchi.jpg"
    },

    {
        title: "Malda Mango (Himsagar & Fazli)",
        description: "GI-tagged premium mangoes from Malda, known for their sweetness and unique aroma.",
        date: new Date(),
        location: "Malda, West Bengal",
        category: "Agriculture",
        totalAmount: 35000,
        availableAmount: 20000,
        productPrice: 150,
        image: "https://maldamango.com/wp-content/uploads/2022/04/malda-mango-king-size.jpg"
    },

    {
        title: "Jhargram Sal Leaf Products",
        description: "Eco-friendly plates and bowls made from Sal leaves by tribal forest communities.",
        date: new Date(),
        location: "Jhargram, West Bengal",
        category: "Handicraft",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 50,
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/5/311325001/LS/SF/XI/33154265/product-jpeg.jpg"
    },

    // Tripura DATA---------------------------------------------------

    {
        title: "Queen Pineapple",
        description: "GI-tagged sweet and aromatic Queen variety pineapple grown extensively in Tripura's fertile hills.",
        date: new Date(),
        location: "West Tripura, Tripura",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 18000,
        productPrice: 80,
        image: "https://st.focusedcollection.com/11312302/i/650/focused_490204806-stock-photo-queen-pineapple-close-view.jpg"
    },

    {
        title: "Tripura Natural Rubber",
        description: "High-quality natural rubber from plantations, making Tripura India's second largest rubber producer.",
        date: new Date(),
        location: "Sipahijala, Tripura",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 30000,
        productPrice: 200,
        image: "https://cpimg.tistatic.com/10329853/b/4/white-rubber-latex..jpg"
    },

    {
        title: "Risa Fabric",
        description: "Traditional handwoven fabric of Tripura's tribal communities, used in ceremonial attire.",
        date: new Date(),
        location: "Dhalai, Tripura",
        category: "Textile",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 900,
        image: "https://i0.wp.com/forumias.com/blog/wp-content/uploads/2021/01/n-451x300-1.jpg?resize=451%2C300&ssl=1"
    },

    {
        title: "Bamboo Handicraft",
        description: "Exquisite bamboo craft products including furniture, baskets, and décor made by tribal artisans.",
        date: new Date(),
        location: "North Tripura, Tripura",
        category: "Handicraft",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 400,
        image: "https://cdn.pixelbin.io/v2/patient-paper-41f385/original/Craft_Images/Bamboo_Craft/Bamboo_Craft_1(1).jpg"
    },

    {
        title: "Tripura Jackfruit",
        description: "Large and sweet jackfruit varieties cultivated widely across the southern districts of Tripura.",
        date: new Date(),
        location: "South Tripura, Tripura",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 60,
        image: "https://www.justnewsbd.com/np-uploads/content/images/2025August/untitled-1-20250806173110.jpg"
    },

    {
        title: "Twig & Cane Furniture",
        description: "Durable and artistic cane furniture crafted by skilled artisans in the Gomati region.",
        date: new Date(),
        location: "Gomati, Tripura",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 3500,
        image: "https://www.jangirdecor.in/cdn/shop/files/pixelcut-1_65.png?v=1715665379&width=1946"
    },

    {
        title: "Tripura Handloom Textile",
        description: "Colorful traditional handloom fabrics woven with tribal patterns unique to Khowai communities.",
        date: new Date(),
        location: "Khowai, Tripura",
        category: "Textile",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 1100,
        image: "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20240430112736.jpg"
    },

    {
        title: "Organic Turmeric",
        description: "High-quality organic turmeric grown in the hilly terrain of Unakoti district.",
        date: new Date(),
        location: "Unakoti, Tripura",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 180,
        image: "https://freshindiaorganics.com/cdn/shop/products/WhatsAppImage2023-02-25at4.54.46PM_1.jpg?v=1677487596"
    },

    // Punjab DATA---------------------------------------------------

    {
        title: "Amritsar Phulkari Embroidery",
        description: "GI-tagged vibrant folk embroidery tradition of Punjab with floral patterns on handwoven fabric.",
        date: new Date(),
        location: "Amritsar, Punjab",
        category: "Textile",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 2500,
        image: "https://cdn.exoticindia.com/images/products/original/textiles-09-2025/gam436.jpg"
    },

    {
        title: "Ludhiana Hosiery & Knitwear",
        description: "India's largest hosiery hub producing world-class woolen and cotton knitwear products.",
        date: new Date(),
        location: "Ludhiana, Punjab",
        category: "Textile",
        totalAmount: 200000,
        availableAmount: 120000,
        productPrice: 500,
        image: "https://media.fashionnetwork.com/m/a6a3/5553/fc08/85a1/729f/1e09/75eb/c1c3/93a8/ca7f/650x1019.60/ca7f.jpg"
    },

    {
        title: "Jalandhar Sports Goods",
        description: "World-renowned sports equipment including footballs, hockey sticks and cricket gear.",
        date: new Date(),
        location: "Jalandhar, Punjab",
        category: "Handicraft",
        totalAmount: 50000,
        availableAmount: 30000,
        productPrice: 800,
        image: "https://static.wixstatic.com/media/ad40e9_aa1e1193b7de442c9cdd5a4431c526bd~mv2.jpg/v1/fill/w_640,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad40e9_aa1e1193b7de442c9cdd5a4431c526bd~mv2.jpg"
    },

    {
        title: "Patiala Salwar",
        description: "Traditional Patiala-style pleated salwar, an iconic garment representing Punjabi fashion heritage.",
        date: new Date(),
        location: "Patiala, Punjab",
        category: "Textile",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 1200,
        image: "https://www.lavanyathelabel.com/cdn/shop/files/01_lbl101ks461_10.jpg?v=1755064960"
    },

    {
        title: "SAS Nagar Pharmaceutical Products",
        description: "Mohali hosts major pharma manufacturing units producing generic medicines for domestic and global markets.",
        date: new Date(),
        location: "Sahibzada Ajit Singh Nagar (Mohali), Punjab",
        category: "Mineral",
        totalAmount: 100000,
        availableAmount: 70000,
        productPrice: 100,
        image: "https://cdn.who.int/media/images/default-source/topics/medicines-medical-devices-and-medical-care/substandard-and-falsified-medical-products/pills.tmb-1200v.jpg?sfvrsn=7b842a15_6"
    },

    {
        title: "Gurdaspur Basmati Rice",
        description: "Aromatic long-grain Basmati rice grown along the fertile banks of the Ravi river.",
        date: new Date(),
        location: "Gurdaspur, Punjab",
        category: "Agriculture",
        totalAmount: 40000,
        availableAmount: 25000,
        productPrice: 120,
        image: "https://5.imimg.com/data5/SELLER/Default/2022/12/GC/KQ/QE/61243493/whatsapp-image-2022-12-20-at-11-00-39-am-1--500x500.jpeg"
    },

    {
        title: "Hoshiarpur Carved Woodwork",
        description: "Intricate hand-carved wooden furniture and decorative items crafted by traditional artisans.",
        date: new Date(),
        location: "Hoshiarpur, Punjab",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 5000,
        image: "https://i0.wp.com/travelshoebum.com/wp-content/uploads/2016/01/img_5294.jpg?resize=1200%2C900&ssl=1"
    },

    {
        title: "Rupnagar (Ropar) Wheat",
        description: "High-yield wheat varieties grown in the agriculturally rich Rupnagar district.",
        date: new Date(),
        location: "Rupnagar, Punjab",
        category: "Agriculture",
        totalAmount: 60000,
        availableAmount: 38000,
        productPrice: 25,
        image: "https://5.imimg.com/data5/SELLER/Default/2021/3/AQ/GJ/DY/5021656/wheat-500x500.jpg"
    },

    {
        title: "Kapurthala Pottery",
        description: "Traditional blue pottery and terracotta items crafted by local artisans reflecting Punjabi aesthetics.",
        date: new Date(),
        location: "Kapurthala, Punjab",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 350,
        image: "https://i.ytimg.com/vi/7zlvz_x8w94/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAIQLAtXvk24OC-LI8kkZs1R_vyQQ"
    },

    {
        title: "Firozpur Sugarcane & Jaggery",
        description: "Premium quality jaggery produced from organically grown sugarcane in the Firozpur belt.",
        date: new Date(),
        location: "Firozpur, Punjab",
        category: "Agriculture",
        totalAmount: 25000,
        availableAmount: 15000,
        productPrice: 60,
        image: "https://image.cdn.shpy.in/394829/Kolhapur-bella-01--1725464516941.webp?format=webp"
    },

    {
        title: "Fazilka Cotton",
        description: "High-quality cotton crop from one of Punjab's major cotton-producing districts along the Pakistan border.",
        date: new Date(),
        location: "Fazilka, Punjab",
        category: "Agriculture",
        totalAmount: 35000,
        availableAmount: 22000,
        productPrice: 70,
        image: "https://cpimg.tistatic.com/07903612/b/4/Row-Cotton-Fiber.jpg"
    },

    {
        title: "Muktsar Kinnow",
        description: "Juicy and vitamin-rich Kinnow mandarin oranges grown in the sandy soil of Sri Muktsar Sahib.",
        date: new Date(),
        location:  "Muktsar, Punjab",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 50,
        image: "https://hasiruagro.com/wp-content/uploads/2023/07/kinnow-orange.webp"
    },

    {
        title: "Moga Dairy Products",
        description: "High-quality milk, ghee and dairy products from Moga, home to Nestle's largest India factory.",
        date: new Date(),
        location: "Moga, Punjab",
        category: "Food",
        totalAmount: 80000,
        availableAmount: 50000,
        productPrice: 90,
        image: "https://img.freepik.com/free-photo/dairy-products_114579-8756.jpg?semt=ais_incoming&w=740&q=80"
    },

    {
        title: "Bathinda Thermal & Cotton",
        description: "Cotton-based textiles and thermal power sector products from the industrial city of Bathinda.",
        date: new Date(),
        location: "Bathinda, Punjab",
        category: "Agriculture",
        totalAmount: 45000,
        availableAmount: 28000,
        productPrice: 65,
        image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/07/17/Pictures/bathinda-bathinda-july05-thermal-sanjeev-hindustan-plant_d4ff9066-c799-11ea-bb10-7020e33bb367.jpg"
    },

    {
        title: "Mansa Desi Ghee",
        description: "Pure desi ghee prepared from the milk of indigenous cow breeds in rural Mansa households.",
        date: new Date(),
        location: "Mansa, Punjab",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 700,
        image: "https://cdn.shopify.com/s/files/1/0586/8234/3501/files/cow_desi_ghee_image.webp?v=1742634983"
    },

    {
        title: "Barnala Woolen Fabrics",
        description: "Traditional woolen blankets and shawls manufactured by cottage industry weavers in Barnala.",
        date: new Date(),
        location: "Barnala, Punjab",
        category: "Textile",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 900,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/knitted-fabric-zzfzv41-250.jpg"
    },

    {
        title: "Sangrur Maize (Corn)",
        description: "High-yielding maize cultivated as a key Kharif crop in the Sangrur agricultural belt.",
        date: new Date(),
        location: "Sangrur, Punjab",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 18000,
        productPrice: 20,
        image: "https://images.pexels.com/photos/28447659/pexels-photo-28447659.jpeg"
    },

    {
        title: "Malerkotla Brassware",
        description: "Traditional brass utensils and decorative items crafted by skilled kaarigars of Malerkotla.",
        date: new Date(),
        location: "Malerkotla, Punjab",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 600,
        image: "https://m.media-amazon.com/images/I/612Zmt8nlLL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Fatehgarh Sahib Iron & Steel Tools",
        description: "Traditional and modern iron tools and agricultural implements manufactured in local forges.",
        date: new Date(),
        location: "Fatehgarh Sahib, Punjab",
        category: "Mineral",
        totalAmount: 15000,
        availableAmount: 9000,
        productPrice: 400,
        image: "https://img.freepik.com/free-vector/blacksmith-black-icons-set_1284-33987.jpg?semt=ais_incoming&w=740&q=80"
    },

    {
        title: "Nawanshahr Timber & Wood Products",
        description: "High-quality timber and wood-based furniture crafted from shisham and other local hardwood trees.",
        date: new Date(),
        location: "Nawanshahr (Shahid Bhagat Singh Nagar), Punjab",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 7000,
        image: "https://thumbs.dreamstime.com/b/olive-wood-products-kitchen-utensil-selection-over-papyrus-background-34512243.jpg"
    },

    {
        title: "Tarn Taran Pappad & Wadi",
        description: "Traditional handmade sun-dried papads and wadis prepared by local women's self-help groups.",
        date: new Date(),
        location: "Tarn Taran, Punjab",
        category: "Food",
        totalAmount: 6000,
        availableAmount: 3500,
        productPrice: 120,
        image: "https://m.media-amazon.com/images/I/81bya-vG2pL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Pathankot Shawls & Woolen Craft",
        description: "Warm woolen shawls and handloom textiles produced by weavers in the foothills of Pathankot.",
        date: new Date(),
        location: "Pathankot, Punjab",
        category: "Textile",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 1400,
        image: "https://m.media-amazon.com/images/I/712sVvN-B+L._AC_UY1100_.jpg"
    },

    {
        title: "Ferozepur Footwear (Jutis)",
        description: "Handcrafted embroidered Punjabi Jutis made by skilled cobblers, a heritage craft of the region.",
        date: new Date(),
        location: "Ferozepur, Punjab",
        category: "Handicraft",
        totalAmount: 7000,
        availableAmount: 4000,
        productPrice: 800,
        image: "https://m.media-amazon.com/images/I/814U1W3cOQL._AC_UY1000_.jpg"
    },

    // Sikkim DATA---------------------------------------------------

    {
        title: "Sikkim Organic Cardamom",
        description: "GI-tagged large cardamom (Alachi) — Sikkim is India's largest producer of this prized spice.",
        date: new Date(),
        location: "East Sikkim, Sikkim",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 1200,
        image: "https://m.media-amazon.com/images/I/71OFZ3vXuxL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Temi Tea",
        description: "Premium organic tea from the only tea garden in Sikkim, known for its delicate muscatel aroma.",
        date: new Date(),
        location: "South Sikkim, Sikkim",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 700,
        image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/28a13af9-93f7-4f51-ae12-d47262140fd5.__CR0,286,1500,928_PT0_SX970_V1___.jpg"
    },

    {
        title: "Churpi (Yak Cheese)",
        description: "Traditional hard cheese made from yak and cow milk, a protein-rich highland food of Sikkim.",
        date: new Date(),
        location: "North Sikkim, Sikkim",
        category: "Food",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 500,
        image: "https://m.media-amazon.com/images/I/71UACmrfElL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Thangka Painting",
        description: "Intricate Buddhist scroll paintings on cotton/silk depicting deities, crafted by Sikkimese artists.",
        date: new Date(),
        location: "West Sikkim, Sikkim",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 5000,
        image: "https://m.media-amazon.com/images/I/91jocOJZQyL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Singling Organic Ginger",
        description: "Organic ginger grown at high altitudes in Soreng with strong aroma and high volatile oil content.",
        date: new Date(),
        location: "Soreng, Sikkim",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 6000,
        productPrice: 150,
        image: "https://m.media-amazon.com/images/I/61SCxbFGpWL.jpg"
    },

    {
        title: "Cane & Bamboo Craft",
        description: "Handcrafted cane and bamboo furniture, baskets and utility items by artisans of Pakyong.",
        date: new Date(),
        location: "Pakyong, Sikkim",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 600,
        image: "https://m.media-amazon.com/images/I/71owecwHJ8L.jpg"
    },


    // RAJASTHAN DATA----------------------------------------------------

    {
        title: "Ajmer Sharif Zardozi Embroidery",
        description: "Intricate gold and silver thread embroidery (Zardozi) on fabric, a heritage craft of Ajmer's Muslim artisans.",
        date: new Date(),
        location: "Ajmer, Rajasthan",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 2500,
        image: "https://m.media-amazon.com/images/I/91fl81pysEL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Alwar Milk Cake (Kalakand)",
        description: "Famous traditional Alwar Milk Cake, a rich dairy sweet made from condensed milk and sugar, GI-tagged delicacy.",
        date: new Date(),
        location: "Alwar, Rajasthan",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 400,
        image: "https://gannug.com/wp-content/uploads/2025/02/Baba-Thakur-Das-Sons%E2%80%94where-every-bite-is-a-journey-back-to-the-roots.-Branches-Ghanta-Ghar-Nangli-Circle-Jain-Mandir-Ambedkar-Nagar-Telco-Circle-BhiwadiContact-9214326100-9214342100BabaThakurDasAndS.jpg"
    },

    {
        title: "Banswara Tribal Textiles",
        description: "Vibrant tribal handloom textiles and Pithora art crafted by the Bhil tribal community of Banswara.",
        date: new Date(),
        location: "Banswara, Rajasthan",
        category: "Handloom",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 800,
        image: "https://www.sahapedia.org/sites/default/files/styles/sp_page_banner_800x800/public/Bastar_474.jpg?itok=dDlZRLEH"
    },

    {
        title: "Baran Kota Doria Saree",
        description: "Lightweight Kota Doria cotton and silk weave fabric, a traditional handloom product of the Hadoti region.",
        date: new Date(),
        location: "Baran, Rajasthan",
        category: "Handloom",
        totalAmount: 6000,
        availableAmount: 4000,
        productPrice: 1200,
        image: "https://www.craftandartisans.com/wp-content/uploads/2024/04/kotasaree-8.jpeg"
    },

    {
        title: "Barmer Applique & Embroidery",
        description: "Traditional Barmer applique patchwork (Rakhi work) and mirror embroidery on cloth, a centuries-old desert craft.",
        date: new Date(),
        location: "Barmer, Rajasthan",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 1500,
        image: "https://amounee.com/cdn/shop/files/16618616841964017425.jpg?v=1767603245&width=600"
    },

    {
        title: "Bharatpur Brasso Metalware",
        description: "Traditional brass and bell metal utensils and decorative items crafted by skilled artisans of Bharatpur.",
        date: new Date(),
        location: "Bharatpur, Rajasthan",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 900,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/10/455875961/FX/FG/CJ/48590353/500ml-brasso-metal-polish.png"
    },

    {
        title: "Bhilwara Textile (Suitings)",
        description: "Bhilwara is India's largest textile hub producing polyester-viscose suitings and dress materials for national and global markets.",
        date: new Date(),
        location: "Bhilwara, Rajasthan",
        category: "Textile",
        totalAmount: 50000,
        availableAmount: 30000,
        productPrice: 350,
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/12/368822388/CG/QK/DH/50262768/product-jpeg-500x500.jpg"
    },

    {
        title: "Bikaner Bikaneri Bhujia",
        description: "Iconic crispy gram flour sev snack, GI-tagged as Bikaneri Bhujia — a globally famous product made since 1877.",
        date: new Date(),
        location: "Bikaner, Rajasthan",
        category: "Food",
        totalAmount: 20000,
        availableAmount: 15000,
        productPrice: 200,
        image: "https://www.bbassets.com/media/uploads/p/l/70000453_2-bikano-namkeen-bikaneri-bhujia.jpg"
    },

    {
        title: "Bundi Koftagari Metalwork",
        description: "Intricate Koftagari gold inlay work on metal surfaces — a rare decorative craft practiced by skilled artisans in Bundi.",
        date: new Date(),
        location: "Bundi, Rajasthan",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 3500,
        image: "https://lh7-us.googleusercontent.com/docsz/AD_4nXewEVFmdckAEgMD4Vx7vn9n3qgECyiCQIuoUZ1nuu89iQ_QVc_FYUACkN0Kp2LPllXlvvFxDYruDqi7HsvkpR4eUYjeHq618dOUNTfS5ZjetCLd1kjqgzu5xg9fx6W1Y7Dexv1ngN_XIepioRRE3367Kys?key=BM1NnA0fk_oly4k2Sk2IcA"
    },

    {
        title: "Chittorgarh Meenakari Jewelry",
        description: "GI-tagged Meenakari jewellery — colourful enamel work on gold and silver, a royal craft tradition of Chittorgarh.",
        date: new Date(),
        location: "Chittorgarh, Rajasthan",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1800,
        productPrice: 4000,
        image: "https://satoribox.in/cdn/shop/files/PRODUCT7.1.jpg?v=1694180325"
    },

    {
        title: "Churu Shekawati Frescos & Khadi",
        description: "Churu is famed for Shekhawati painted havelis and Khadi cotton fabric woven by village artisans.",
        date: new Date(),
        location: "Churu, Rajasthan",
        category: "Handloom",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 600,
        image: "https://www.indianexcursions.co/wp-content/uploads/2017/04/IMG_3877-1024x768.jpg"
    },

    {
        title: "Dausa Chunri Tie-Dye Fabric",
        description: "Traditional Rajasthani Chunri (Bandhani) tie-dye dupatta and sarees produced by artisans in Dausa.",
        date: new Date(),
        location: "Dausa, Rajasthan",
        category: "Handloom",
        totalAmount: 6000,
        availableAmount: 4000,
        productPrice: 700,
        image: "https://m.media-amazon.com/images/I/81dlfdm7tML._SL1500_.jpg"
    },

    {
        title: "Dholpur Red Sandstone",
        description: "Famous Dholpur red sandstone used in monuments and construction including the Red Fort and Rashtrapati Bhavan.",
        date: new Date(),
        location: "Dholpur, Rajasthan",
        category: "Mineral",
        totalAmount: 100000,
        availableAmount: 80000,
        productPrice: 150,
        image: "https://naturalstonecreation.com/wp-content/uploads/2016/11/L_Sandstone_9387_Dholpur_Red_MC.jpg"
    },

    {
        title: "Dungarpur Tribal Silver Jewelry",
        description: "Traditional silver tribal jewelry crafted by the Bhil and Garasia communities of hilly Dungarpur.",
        date: new Date(),
        location: "Dungarpur, Rajasthan",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 1800,
        image: "https://ahamjewellery.com/cdn/shop/files/203325050028_JaisalmeriTribalSilverNeckpiece_1_720x@2x.jpg?v=1753359408"
    },

    {
        title: "Hanumangarh Wheat & Kinnow",
        description: "Hanumangarh is the wheat bowl of Rajasthan, also famous for large-scale Kinnow citrus fruit cultivation.",
        date: new Date(),
        location: "Hanumangarh, Rajasthan",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 30,
        image: "https://assets.ramen.101reporters.com/imgs/2022/6/1200*630/101RPT1374622/1.jpg"
    },

    {
        title: "Jaipur Blue Pottery",
        description: "GI-tagged traditional Jaipur Blue Pottery made from quartz, a unique Turko-Persian art form with vivid cobalt-blue glaze.",
        date: new Date(),
        location: "Jaipur, Rajasthan",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 600,
        image: "https://m.media-amazon.com/images/I/715ekxswgFL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Jaisalmer Fossil Stone Craft",
        description: "Decorative items carved from yellow Jaisalmer limestone, which is embedded with ancient fossils — a unique desert heritage craft.",
        date: new Date(),
        location: "Jaisalmer, Rajasthan",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 1200,
        image: "https://m.media-amazon.com/images/I/81rN37shWeL.jpg"
    },

    {
        title: "Jalore Granite Stone",
        description: "High-quality granite stone quarried in Jalore, exported globally for construction and decorative applications.",
        date: new Date(),
        location: "Jalore, Rajasthan",
        category: "Mineral",
        totalAmount: 100000,
        availableAmount: 70000,
        productPrice: 100,
        image: "https://5.imimg.com/data5/SELLER/Default/2021/10/LP/SR/JX/133393143/new-product.jpeg"
    },

    {
        title: "Jhalawar Coriander & Orange",
        description: "Jhalawar is the 'Orange City' of Rajasthan and a major producer of coriander (dhania) seeds.",
        date: new Date(),
        location: "Jhalawar, Rajasthan",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 90,
        image: "https://m.media-amazon.com/images/I/41FBgfVMzQL.jpg"
    },

    {
        title: "Jhunjhunu Thewa Art Jewelry",
        description: "Thewa is a rare art of fusing 23-carat gold artwork on glass — practiced exclusively by the Raj Soni family in Pratapgarh-Jhunjhunu belt.",
        date: new Date(),
        location: "Jhunjhunu, Rajasthan",
        category: "Handicraft",
        totalAmount: 1500,
        availableAmount: 900,
        productPrice: 8000,
        image: "https://thewastore.com/cdn/shop/products/19.png?v=1659131117"
    },

    {
        title: "Jodhpur Antique Furniture",
        description: "Jodhpur is India's largest exporter of antique and reproduction furniture crafted from old Indian wood and metals.",
        date: new Date(),
        location: "Jodhpur, Rajasthan",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 15000,
        image: "https://antiquehomedecors.com/wp-content/uploads/2024/06/340304838_553851813405530_217249.jpg"
    },

    {
        title: "Karauli Soapstone Craft",
        description: "Fine soapstone carving of idols, decorative panels and gifts, an age-old craft of Karauli artisans.",
        date: new Date(),
        location: "Karauli, Rajasthan",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1800,
        productPrice: 700,
        image: "https://cdn.vastrashilpakosh.in//vol2/Cultural_AIP_Record/nift_del/cfp/nift_del-412-cfp/nift_del-412-cfp_main/Image/JPEG/nift_del-412-cfp-1p.jpeg"
    },

    {
        title: "Kota Doria Saree",
        description: "GI-tagged Kota Doria — ultra-lightweight cotton-silk woven saree with distinctive square checks, made on handlooms in Kaithoon village.",
        date: new Date(),
        location: "Kota, Rajasthan",
        category: "Handloom",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 1500,
        image: "https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/p/r/printed-kota-doria-saree-in-purple-v1-scca247.jpg"
    },

    {
        title: "Nagaur Mustard Oil & Methi",
        description: "Nagaur is India's largest market for fenugreek (methi) seeds and a major producer of cold-pressed kacchi ghani mustard oil.",
        date: new Date(),
        location: "Nagaur, Rajasthan",
        category: "Agriculture",
        totalAmount: 40000,
        availableAmount: 28000,
        productPrice: 180,
        image: "https://m.media-amazon.com/images/I/71bS0N1ViVL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Pali Bandhani (Tie-Dye)",
        description: "Pali is a major textile and printing centre producing traditional Bandhani tie-and-dye fabric in vivid Rajasthani patterns.",
        date: new Date(),
        location: "Pali, Rajasthan",
        category: "Textile",
        totalAmount: 12000,
        availableAmount: 8000,
        productPrice: 800,
        image: "https://www.indiainch.org/wp-content/uploads/2019/04/6-1.jpg"
    },

    {
        title: "Pratapgarh Thewa Glass Art",
        description: "GI-tagged Thewa art — intricate 23-carat gold work fused onto coloured glass to make exquisite jewellery and showpieces.",
        date: new Date(),
        location: "Pratapgarh, Rajasthan",
        category: "Handicraft",
        totalAmount: 1000,
        availableAmount: 600,
        productPrice: 12000,
        image: "https://ebnw.net/wp-content/uploads/2021/02/Thewa-art.jpg"
    },

    {
        title: "Rajsamand Marble Products",
        description: "Rajsamand produces the finest Indian white and coloured marble used in sculptures, tiles and monuments across the country.",
        date: new Date(),
        location: "Rajsamand, Rajasthan",
        category: "Mineral",
        totalAmount: 80000,
        availableAmount: 60000,
        productPrice: 250,
        image: "https://5.imimg.com/data5/MH/IF/MY-3684351/2.jpeg"
    },

    {
        title: "Sawai Madhopur Daal-Baati Churma",
        description: "Traditional Rajasthani cuisine — Daal-Baati-Churma made using authentic wood-fire method, famous across Hadoti region.",
        date: new Date(),
        location: "Sawai Madhopur, Rajasthan",
        category: "Food",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 250,
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/2/Dal_Baati_Churma.webp?updatedAt=1730794235991"
    },

    {
        title: "Sikar Guar Gum",
        description: "Sikar is the leading producer of guar (cluster bean) and guar gum powder used globally in food, pharmaceutical and oil industries.",
        date: new Date(),
        location: "Sikar, Rajasthan",
        category: "Agriculture",
        totalAmount: 60000,
        availableAmount: 45000,
        productPrice: 80,
        image: "https://content.jdmagicbox.com/comp/def_content/guar-gum-powder-manufacturers/4ce8e4df38-guar-gum-powder-manufacturers-2-boqub.jpg"
    },

    {
        title: "Sirohi Abu Stone Craft",
        description: "Intricate white Abu marble carving for temples, idols and decorative panels by skilled Sirohi artisans near Mount Abu.",
        date: new Date(),
        location: "Sirohi, Rajasthan",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 1800,
        image: "https://images.jdmagicbox.com/comp/sirohi/l4/9999p2972.2972.181222191038.c2l4/catalogue/veer-marble-articles-pindwara-sirohi-marble-dealers-jfbef30c3p.jpg"
    },

    {
        title: "Sri Ganganagar Kinnow Fruit",
        description: "GI-tagged Sri Ganganagar Kinnow — a premium mandarin-hybrid citrus fruit grown in the fertile canal-irrigated plains.",
        date: new Date(),
        location: "Sri Ganganagar, Rajasthan",
        category: "Agriculture",
        totalAmount: 100000,
        availableAmount: 70000,
        productPrice: 40,
        image: "https://m.media-amazon.com/images/I/41SN44--WKL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Tonk Nakkasihi (Wood Carving)",
        description: "Tonk's rare Nakkashi wood carving tradition — delicate floral and geometric patterns etched into sandalwood and teak.",
        date: new Date(),
        location: "Tonk, Rajasthan",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 3000,
        image: "https://hanumantimbers.com/wp-content/uploads/2022/06/1.jpg"
    },

    {
        title: "Udaipur Pichhwai Painting",
        description: "GI-tagged Pichhwai — elaborate cloth paintings depicting Lord Krishna, hung behind temple idols, a Nathdwara heritage craft.",
        date: new Date(),
        location: "Udaipur, Rajasthan",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1800,
        productPrice: 5000,
        image: "https://cdn.rajasthanstudio.com/2024/05/Pichwai-Painting-Rajaram-Sharma-Udaipur-2-2024-05-30_10-49-56_866420.jpg.webp"
    },

    // HIMACHAL PRADESH DATA----------------------------------------------------

    {
        title: "Bilaspur Sirkah Grass Craft",
        description: "Traditional grass-weaving craft of Bilaspur — artisans create baskets, mats and utility items from locally harvested sirkah grass.",
        date: new Date(),
        location: "Bilaspur, Himachal Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 1800,
        productPrice: 400,
        image: "https://4.imimg.com/data4/XW/HU/MY-4260473/sikki-grass-products-500x500.jpg"
    },

    {
        title: "Chamba Rumal Embroidery",
        description: "GI-tagged Chamba Rumal — a centuries-old double-satin embroidery art on fine muslin depicting Pahari miniature paintings.",
        date: new Date(),
        location: "Chamba, Himachal Pradesh",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 4500,
        image: "https://www.sahapedia.org/sites/default/files/styles/share_1200_630/public/2020-08/Banner%20Image%20Module%20Introduction.JPG?itok=n0iAQp30"
    },

    {
        title: "Hamirpur Handloom Cloth",
        description: "Traditional handloom fabric including shawls and woolen plaids woven by village artisans of Hamirpur district.",
        date: new Date(),
        location: "Hamirpur, Himachal Pradesh",
        category: "Handloom",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 700,
        image: "https://5.imimg.com/data5/SELLER/Default/2022/5/JS/BF/WX/98111269/whatsapp-image-2022-05-12-at-3-11-37-pm-2-.jpeg"
    },

    {
        title: "Kangra Tea",
        description: "GI-tagged Kangra Tea — aromatic orthodox tea grown in the foothills of Dhauladhar range, India's oldest tea growing region.",
        date: new Date(),
        location: "Kangra, Himachal Pradesh",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 600,
        image: "https://himalayanbrew.com/cdn/shop/products/Kangra-Special_mint-Green-Tea-3.jpg?v=1677042448"
    },

    {
        title: "Kinnaur Shawl (Kinnauri Shawl)",
        description: "GI-tagged Kinnauri shawl — hand-woven in vibrant geometric patterns using fine wool and angora, a prized Himalayan textile.",
        date: new Date(),
        location: "Kinnaur, Himachal Pradesh",
        category: "Handloom",
        totalAmount: 3000,
        availableAmount: 1800,
        productPrice: 5000,
        image: "https://bhutticoshawls.com/cdn/shop/articles/12_b2cfc4c8-d691-4dfa-b1ae-28fee166f09d.jpg?v=1763546508&width=1100"
    },

    {
        title: "Kullu Shawl",
        description: "GI-tagged Kullu Shawl — handloom woolen shawl with distinctive geometric patterns and natural dyed colours, a cultural identity of Kullu.",
        date: new Date(),
        location: "Kullu, Himachal Pradesh",
        category: "Handloom",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 2500,
        image: "https://www.azafashions.com/blog/wp-content/uploads/2025/12/image-1.jpeg"
    },

    {
        title: "Lahaul Spiti Seabuckthorn",
        description: "Wild-growing seabuckthorn berries from cold deserts of Lahaul & Spiti, used for nutrient-rich juice, jam and health supplements.",
        date: new Date(),
        location: "Lahaul & Spiti, Himachal Pradesh",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 350,
        image: "https://stg.incrediblespiti.com/wp-content/uploads/2024/09/IMG_0974-768x1024.jpg"
    },

    {
        title: "Mandi Leather Chappals",
        description: "Traditionally stitched Pahari leather footwear and chappals crafted by local cobblers in Mandi.",
        date: new Date(),
        location: "Mandi, Himachal Pradesh",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 600,
        image: "https://images.jdmagicbox.com/quickquotes/images_main/himaanchal-pure-leather-handmade-chamba-chappal-yellowish-brown-2029586229-y2rp5hqf.jpg"
    },

    {
        title: "Shimla Apple",
        description: "Himachal's pride — Shimla Apple, known globally for its crispness, vibrant red colour and premium quality grown in high-altitude orchards.",
        date: new Date(),
        location: "Shimla, Himachal Pradesh",
        category: "Agriculture",
        totalAmount: 200000,
        availableAmount: 150000,
        productPrice: 120,
        image: "https://maatarafruitscompany.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-11-at-16.53.57-1.jpeg"
    },

    {
        title: "Sirmaur Adrak (Ginger)",
        description: "Organic hill ginger grown in Sirmaur's fertile valleys, known for its strong aroma and high essential oil content.",
        date: new Date(),
        location: "Sirmaur (Sirmour), Himachal Pradesh",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 100,
        image: "https://5.imimg.com/data5/QA/FS/MY-25867984/organic-ginger-from-sirmour-2c-himachal-pradesh.jpg"
    },

    {
        title: "Solan Mushroom",
        description: "Solan is the 'Mushroom City of India', producing button, oyster and shiitake mushrooms supplied across the country.",
        date: new Date(),
        location: "Solan, Himachal Pradesh",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 200,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg"
    },

    {
        title: "Una Honey (Pahari Honey)",
        description: "Pure multifloral Pahari honey collected from traditional bee boxes in the foothills of Una, rich in antioxidants and medicinal properties.",
        date: new Date(),
        location: "Una, Himachal Pradesh",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 450,
        image: "https://www.mahakaalprasad.com/cdn/shop/files/jungleehoney5.jpg?v=1710578030"
    },

    // GOA DATA----------------------------------------------------

    {
        title: "Cashew Feni",
        description: "GI-tagged Goa Feni — a traditional double-distilled spirit made from fermented cashew apple juice, Goa's iconic heritage liquor.",
        date: new Date(),
        location: "North Goa, Goa",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 700,
        image: "https://oceankingdistillers.com/images/products/feni/jack-carlosey-premium-cashew-fenny.jpg"
    },

    {
        title: "Goa Kokum",
        description: "Dried kokum (Garcinia indica) rind and kokum syrup — a tangy souring agent and refreshing summer drink unique to Goa's coastal cuisine.",
        date: new Date(),
        location: "South Goa, Goa",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 180,
        image: "https://goldenkaju.in/cdn/shop/files/black-dried-kokum_77ac9194-64cd-43e7-ab7b-b125b9184b58.jpg?v=1701523865&width=1946"
    },

    // HARYANA DATA----------------------------------------------------

    {
        title: "Ambala Scientific Instruments",
        description: "Ambala is India's top producer of scientific instruments, microscopes, surgical tools and lab equipment, exported globally.",
        date: new Date(),
        location: "Ambala, Haryana",
        category: "Industrial",
        totalAmount: 20000,
        availableAmount: 12000,
        productPrice: 2500,
        image: "https://5.imimg.com/data5/SELLER/PDFImage/2025/6/517954249/GR/CA/VQ/214486252/100x-digital-microscope.png"
    },

    {
        title: "Bhiwani Handloom Cotton Fabric",
        description: "Bhiwani is famous for its traditional handloom industry producing cotton dhotis, fabrics and grey cloth in large quantities.",
        date: new Date(),
        location: "Bhiwani, Haryana",
        category: "Handloom",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 400,
        image: "https://cpimg.tistatic.com/06459304/b/4/Pure-Cotton-Handloom-Fabrics.jpg"
    },

    {
        title: "Charkhi Dadri Mustard Oil",
        description: "Cold-pressed kacchi ghani mustard oil produced from high-yielding mustard crops grown in the fertile plains of Charkhi Dadri.",
        date: new Date(),
        location: "Charkhi Dadri, Haryana",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 200,
        image: "https://content.jdmagicbox.com/comp/charkhi-dadri/p6/9999p1664.1664.111224100533.e6p6/catalogue/shri-balaji-oil-mills-dadri-cd-charkhi-dadri-mustard-oil-mills-gz005o9hjg.jpg?clr="
    },

    {
        title: "Faridabad Auto Parts",
        description: "Faridabad is a major industrial hub producing auto parts, machine tools and engineering goods for domestic and export markets.",
        date: new Date(),
        location: "Faridabad, Haryana",
        category: "Industrial",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 1500,
        image: "https://content.jdmagicbox.com/v2/comp/delhi/y4/011pxx11.xx11.120426181238.v1y4/catalogue/m-k-auto-parts-faridabad-faridabad-motorcycle-repair-and-services-f2jjay03js.jpg"
    },

    {
        title: "Fatehabad Cotton",
        description: "Fatehabad is Haryana's cotton belt, producing large quantities of desi and hybrid cotton for the textile industry.",
        date: new Date(),
        location: "Fatehabad, Haryana",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 55,
        image: "https://th-i.thgim.com/public/incoming/gm2rv5/article70784348.ece/alternates/LANDSCAPE_1200/COTTON%20FARMER%20HARYANA%20SPOTLIGHT%205.JPG"
    },

    {
        title: "Gurugram IT & Software Products",
        description: "Gurugram (Gurgaon) is India's 'Millennium City' and a global IT hub housing Fortune 500 companies and tech start-ups.",
        date: new Date(),
        location: "Gurugram (Gurgaon), Haryana",
        category: "Industrial",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 5000,
        image: "https://www.pstechglobal.com/media/img/blog-img/blog-image-106.webp"
    },

    {
        title: "Hisar Steel & Agro Machinery",
        description: "Hisar is Haryana's steel city, producing steel pipes, TMT bars and agricultural machinery widely used in construction and farming.",
        date: new Date(),
        location: "Hisar, Haryana",
        category: "Industrial",
        totalAmount: 40000,
        availableAmount: 28000,
        productPrice: 800,
        image: "https://www.hisarmetal.com/images/slider1.jpg"
    },

    {
        title: "Jhajjar Paper & Printing",
        description: "Jhajjar is known for its large paper mills and printing industry supplying newsprint, books and stationery across North India.",
        date: new Date(),
        location: "Jhajjar, Haryana",
        category: "Industrial",
        totalAmount: 20000,
        availableAmount: 13000,
        productPrice: 300,
        image: "https://www.jiyaprintshop.in/uploaded_files/flex-printing.jpg"
    },

    {
        title: "Jind Jaggery (Desi Gur)",
        description: "Traditional desi gur (jaggery) made from sugarcane juice in small crushers — a rural agro-industry of Jind district.",
        date: new Date(),
        location: "Jind, Haryana",
        category: "Food",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 60,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/jaggery-u9yxehc-250.jpg"
    },

    {
        title: "Kaithal Basmati Rice",
        description: "Premium long-grain Basmati rice grown in Kaithal's fertile alluvial soil — known for its signature aroma and soft-cooked texture.",
        date: new Date(),
        location: "Kaithal, Haryana",
        category: "Agriculture",
        totalAmount: 40000,
        availableAmount: 28000,
        productPrice: 120,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/12/370404147/JJ/VW/KB/56047510/1718-basmati-rice-500x500.png"
    },

    {
        title: "Karnal Basmati & Dairy",
        description: "Karnal is India's Basmati capital and home to the National Dairy Research Institute (NDRI), producing premium basmati and dairy products.",
        date: new Date(),
        location: "Karnal, Haryana",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 110,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/12/370404147/JJ/VW/KB/56047510/1718-basmati-rice-500x500.png"
    },

    {
        title: "Kurukshetra Khes (Handloom)",
        description: "Traditional Haryanvi Khes — a thick handwoven double-cloth bed cover made on pit looms, a cultural identity of Kurukshetra.",
        date: new Date(),
        location: "Kurukshetra, Haryana",
        category: "Handloom",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 900,
        image: "https://sueestore.com/cdn/shop/articles/IMG_20190726_143429.jpg?v=1717837007"
    },

    {
        title: "Mahendragarh Desi Ghee",
        description: "Pure cow desi ghee prepared using traditional wooden churner (bilona) method by dairy farmers of Mahendragarh.",
        date: new Date(),
        location: "Mahendragarh, Haryana",
        category: "Food",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 750,
        image: "https://cdn.shopify.com/s/files/1/0586/8234/3501/files/cow_desi_ghee_image.webp?v=1742634983"
    },

    {
        title: "Nuh Brass & Bell Metal Craft",
        description: "Traditional brass and bell metal utensils crafted by the Mewat artisan community of Nuh — a centuries-old heritage craft.",
        date: new Date(),
        location: "Nuh, Haryana",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 600,
        image: "https://lh4.googleusercontent.com/RSla9RCb5YSd-AMK9j_XsrcC9F2nwp_w_bkbesRE-sNoigXQaqZftFynZQNqseHqks1ya9MqWzUeeRZ2WjaFMrZNKlLn4U7wzf_wrXdQ59Hqp9AQKklhH_h4RzMX_dpCUHBavahH"
    },

    {
        title: "Palwal Pottery & Terracotta",
        description: "Traditional earthen pottery and terracotta products made by kumhars (potters) of Palwal — used in households and for decorative purposes.",
        date: new Date(),
        location: "Palwal, Haryana",
        category: "Handicraft",
        totalAmount: 6000,
        availableAmount: 4000,
        productPrice: 250,
        image: "https://content.jdmagicbox.com/v2/comp/delhi/d8/011pxx11.xx11.210416212457.q7d8/catalogue/ved-prakash-terracotta-works-uttam-nagar-delhi-terracotta-diya-distributors-4edoe3615s.jpg"
    },

    {
        title: "Panchkula Herbal Products",
        description: "Morinda (aal) and herbal plant-based products, natural dyes and ayurvedic formulations produced from foothills of Panchkula.",
        date: new Date(),
        location: "Panchkula, Haryana",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 350,
        image: "https://www.nuticaherbocare.com/nuticaweb/wp-content/uploads/2024/06/Herbal-PCD-Pharma-Companies-in-Panchkula.jpg"
    },

    {
        title: "Panipat Recycled Blankets (Shoddy)",
        description: "Panipat is the 'Cast-off Capital of the World', recycling old clothes into affordable woolen blankets, daris and industrial fabric.",
        date: new Date(),
        location: "Panipat, Haryana",
        category: "Textile",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 300,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/7/321687675/GE/AS/TX/92173956/rpet-fleece-blankets-500x500.jpg"
    },

    {
        title: "Rewari Brass Utensils",
        description: "Rewari has a centuries-old tradition of crafting fine brass utensils, decorative items and religious artifacts.",
        date: new Date(),
        location: "Rewari, Haryana",
        category: "Handicraft",
        totalAmount: 6000,
        availableAmount: 4000,
        productPrice: 700,
        image: "https://m.media-amazon.com/images/I/812D0jnawRL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Rohtak Sports Goods",
        description: "Rohtak is a key producer of leather sports goods — boxing gloves, footballs and cricket equipment supplied to national teams.",
        date: new Date(),
        location: "Rohtak, Haryana",
        category: "Industrial",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 1200,
        image: "https://png.pngtree.com/png-vector/20240902/ourmid/pngtree-sports-equipments-solid-white-background-png-image_13720459.png"
    },

    {
        title: "Sirsa Cotton Textiles",
        description: "Sirsa is a large cotton-producing district whose raw cotton feeds local spinning mills, producing yarn and grey fabric.",
        date: new Date(),
        location: "Sirsa, Haryana",
        category: "Agriculture",
        totalAmount: 40000,
        availableAmount: 28000,
        productPrice: 60,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/fabric-9rbe1r6-250.jpg"
    },

    {
        title: "Sonipat Athletic Equipment",
        description: "Sonipat is Haryana's sports hub producing athletic gear — javelins, shot puts, wrestling mats and gymnasium equipment.",
        date: new Date(),
        location: "Sonipat, Haryana",
        category: "Industrial",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 1500,
        image: "https://img.freepik.com/free-vector/sports-equipment-icons-set_1284-13032.jpg?semt=ais_hybrid&w=740&q=80"
    },

    {
        title: "Yamunanagar Timber & Plywood",
        description: "Yamunanagar is India's plywood capital, manufacturing timber, plywood boards, furniture panels and wood-based products.",
        date: new Date(),
        location: "Yamunanagar, Haryana",
        category: "Industrial",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 1800,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/3/402362579/TI/OY/NR/71163384/timber-wood-plywood.jpg"
    },


];


const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
        console.log('\n✅ MongoDB connection open...');

        // await Event.deleteMany({
        //     $or: [
        //         { location: /Assam/i },
        //         { location: /Uttar Pradesh/i }
        //     ]
        // });
        // console.log('🗑️  Cleared existing data for Assam and UP.');

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