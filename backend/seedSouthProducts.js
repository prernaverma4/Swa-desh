const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Event = require('./Models/Event.js');
const { title } = require('process');

const events = [
    // ==========================================
    // TELANGANA DISTRICT PRODUCTS (ODOP)
    // ==========================================

    //     'Telangana': ['Adilabad', 'Bhadradri Kothagudem', , 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal (Rural)', 'Warangal (Urban)', 'Yadadri Bhuvanagiri'],

    {
        title: "Hyderabad Pearl Jewellery",
        description: "World-famous exquisite pearl jewellery and Nizami traditional ornaments.",
        date: new Date(),
        location: "Hyderabad, Telangana",
        category: "Handicraft",
        totalAmount: 500,
        availableAmount: 400,
        productPrice: 5000,
        image: "https://rudradhan.com/cdn/shop/products/IMG_4166.jpg?v=1757081423&width=1200"
    },
    {
        title: "Pochampally Ikat Sarees",
        description: "Traditional geometric patterns in Ikat style of dyeing.",
        date: new Date(),
        location: "Nalgonda, Telangana",
        category: "Handloom",
        totalAmount: 200,
        availableAmount: 150,
        productPrice: 4500,
        image: "https://www.psrsilks.com/cdn/shop/files/Dark_Turquoise_Pochampally_Ikat_Silk_Saree_cloueup_View.webp?v=1740723755"
    },
    {
        title: "Karimnagar Silver Filigree",
        description: "Ancient art of fine silver wire work and delicate craftsmanship.",
        date: new Date(),
        location: "Karimnagar, Telangana",
        category: "Handicraft",
        totalAmount: 100,
        availableAmount: 100,
        productPrice: 8500,
        image: "https://4.imimg.com/data4/WP/NK/ANDROID-46289535/product.jpeg"
    },
    {
        title: "Nirmal Toys and Paintings",
        description: "Traditional wooden toys and oil paintings famous for their vibrant colors.",
        date: new Date(),
        location: "Nirmal, Telangana",
        category: "Handicraft",
        totalAmount: 300,
        availableAmount: 250,
        productPrice: 1500,
        image: "https://shop.gaatha.com/image/catalog/Gaatha/03-Handmade-wooden-toy-(4).jpg"
    },
    {
        title: "Adilabad Dokra Craft",
        description: "Tribal metal craft using the traditional lost-wax casting technique.",
        date: new Date(),
        location: "Adilabad, Telangana",
        category: "Handicraft",
        totalAmount: 150,
        availableAmount: 100,
        productPrice: 3200,
        image: "https://www.shambhavicreations.co.in/cdn/shop/files/LRM_EXPORT_106553940619729_20190719_134929160_1_-min_d333e2aa-657d-4169-8674-bb4af7c05201.jpg?v=1675081508&width=1080"
    },
    {
        title: "Warangal Durries",
        description: "Thick handwoven cotton rugs with traditional block prints and geometric designs.",
        date: new Date(),
        location: "Warangal (Urban), Telangana",
        category: "Handloom",
        totalAmount: 400,
        availableAmount: 350,
        productPrice: 1200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1CrP0_U4UrJeqZfA0XXS_y1fSf0gOTla5Q&s"
    },
    {
        title: "Khammam Chilli",
        description: "High-quality, spicy, and brightly colored red chillies from Khammam.",
        date: new Date(),
        location: "Khammam, Telangana",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 4500,
        productPrice: 200,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/red-chilli-p4xtldq-250.jpg"
    },
    {
        title: "Siddipet Gollabhama Sarees",
        description: "Handloom sarees woven with motifs of milkmaids (Gollabhama).",
        date: new Date(),
        location: "Siddipet, Telangana",
        category: "Handloom",
        totalAmount: 150,
        availableAmount: 100,
        productPrice: 3800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsj-i6D6aEGB0XM_qIxxCI8sdTOLOzDb5aw&s"
    },
    {
        title: "Narayanpet Sarees",
        description: "Traditional distinct border and pallu sarees with Maratha influence.",
        date: new Date(),
        location: "Narayanpet, Telangana",
        category: "Handloom",
        totalAmount: 200,
        availableAmount: 180,
        productPrice: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrhknM5Zsccu646lohquBZ1K7p4KTtmZ_xg&s"
    },
    {
        title: "Pembarti Brassware",
        description: "Intricate sheet metal art and brass carvings from Pembarti.",
        date: new Date(),
        location: "Jangaon, Telangana",
        category: "Handicraft",
        totalAmount: 120,
        availableAmount: 80,
        productPrice: 4200,
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/ornate-utensils-pembarthi-telangana-rural-unique?qlt=82&ts=1726642208982"
    },
    {
        title: "Nizamabad Turmeric",
        description: "High-quality turmeric widely cultivated in Nizamabad region.",
        date: new Date(),
        location: "Nizamabad, Telangana",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 6000,
        productPrice: 150,
        image: "https://2.wlimg.com/product_images/bc-500/2025/11/15312150/watermark/nizamabad-turmeric-powder-1761389697-8400243.jpeg"
    },
    {
        title: "Jagtial Mangoes",
        description: "Sweet and large Banganapalli and local varieties of mangoes.",
        date: new Date(),
        location: "Jagtial, Telangana",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 8000,
        productPrice: 100,
        image: "https://sahasa.in/wp-content/uploads/2023/04/jagtial-mango.jpg"
    },

    {
        title: "Kothagudem Tribal Crafts",
        description: "Intricate tribal bamboo and wood crafts made by local Koya artisans.",
        date: new Date(),
        location: "Bhadradri Kothagudem, Telangana",
        category: "Handicraft",
        totalAmount: 150,
        availableAmount: 100,
        productPrice: 400,
        image: "https://th-i.thgim.com/public/news/national/telangana/jrcpdu/article34297400.ece/alternates/FREE_1200/hy12NAiKPOD"
    },
    {
        title: "Hanamkonda Cotton Handlooms",
        description: "Fine cotton woven fabrics and traditional garments from Hanamkonda.",
        date: new Date(),
        location: "Hanumakonda, Telangana",
        category: "Handloom",
        totalAmount: 300,
        availableAmount: 200,
        productPrice: 1200,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/cotton-dress-material-3gh4uby-250.jpg"
    },
    {
        title: "Bhoopalpally Forest Honey",
        description: "Pure and organic wild honey collected by tribal communities.",
        date: new Date(),
        location: "Jayashankar Bhoopalpally, Telangana",
        category: "Forest Produce",
        totalAmount: 500,
        availableAmount: 450,
        productPrice: 350,
        image: "https://madhyaearth.in/cdn/shop/files/Honey.jpg?v=1742291071"
    },
    {
        title: "Gadwal Sarees",
        description: "Famous sarees known for their cotton body and contrasting silk pallu.",
        date: new Date(),
        location: "Jogulamba Gadwal, Telangana",
        category: "Handloom",
        totalAmount: 150,
        availableAmount: 120,
        productPrice: 5500,
        image: "https://www.massakalisarees.in/cdn/shop/files/IMG20250622123358.jpg?v=1750587962"
    },
    {
        title: "Kamareddy Sugarcane & Jaggery",
        description: "High-quality, naturally processed jaggery from local sugarcane.",
        date: new Date(),
        location: "Kamareddy, Telangana",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 6000,
        productPrice: 60,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/organic-jaggery-k6e4wef-250.jpg"
    },
    {
        title: "Asifabad Bamboo Products",
        description: "Eco-friendly baskets, mats, and furniture crafted from local bamboo.",
        date: new Date(),
        location: "Komaram Bheem Asifabad, Telangana",
        category: "Handicraft",
        totalAmount: 400,
        availableAmount: 300,
        productPrice: 250,
        image: "https://content.jdmagicbox.com/comp/def_content_category/bamboo-product-manufacturers/6dfe211694-bamboo-product-manufacturers-2-44eke.jpg"
    },
    {
        title: "Mahabubabad Bay Leaf (Tej Patta)",
        description: "Aromatic bay leaves produced in the forest regions of Mahabubabad.",
        date: new Date(),
        location: "Mahabubabad, Telangana",
        category: "Agriculture",
        totalAmount: 2000,
        availableAmount: 1500,
        productPrice: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3hkptDYQE5rICPreZnu2ORP46DZiZthDHw&s"
    },
    {
        title: "Mahabubnagar Millets",
        description: "Nutrient-rich millets and sorghum cultivated using traditional farming.",
        date: new Date(),
        location: "Mahabubnagar, Telangana",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 80,
        image: "https://content.jdmagicbox.com/quickquotes/images_main/nachni-flakes-802084527-ely29nx8.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
    },
    {
        title: "Mancherial Ceramic Wares",
        description: "Traditional ceramic pipes and wares produced by local small scale industry.",
        date: new Date(),
        location: "Mancherial, Telangana",
        category: "Industrial",
        totalAmount: 800,
        availableAmount: 600,
        productPrice: 200,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/ceramic-wmb72x1-250.jpg"
    },
    {
        title: "Medak Brassware",
        description: "Beautifully carved brass utilities and decorative items.",
        date: new Date(),
        location: "Medak, Telangana",
        category: "Handicraft",
        totalAmount: 200,
        availableAmount: 150,
        productPrice: 800,
        image: "https://shop.gaatha.com/image/catalog/1-home-images/2022/Feb/Buy-Handmade-Brassware.jpg"
    },
    {
        title: "Medchal Ready Made Garments",
        description: "Locally manufactured textiles and readymade clothing.",
        date: new Date(),
        location: "Medchal-Malkajgiri, Telangana",
        category: "Textile",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 450,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/readymade-garment-rlrrnvw-250.jpg"
    },
    {
        title: "Mulugu Mahua Products",
        description: "Forest-gathered Mahua flowers used for traditional medicine and syrup.",
        date: new Date(),
        location: "Mulugu, Telangana",
        category: "Forest Produce",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 250,
        image: "https://www.aranyapurefood.com/cdn/shop/collections/IMG-20221124-WA0089.jpg?v=1670500303&width=750"
    },
    {
        title: "Nagarkurnool Mangoes",
        description: "Delicious varieties of mangoes sourced from Nagarkurnool farms.",
        date: new Date(),
        location: "Nagarkurnool, Telangana",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 6000,
        productPrice: 120,
        image: "https://img1.exportersindia.com/product_images/bc-small/2022/1/9741840/banginapalli-mango-1643259002-6174042.jpeg"
    },
    {
        title: "Telia Rumal Handlooms",
        description: "Unique double-ikat weaving with oil-treated yarn for distinct color.",
        date: new Date(),
        location: "Peddapalli, Telangana",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 80,
        productPrice: 3500,
        image: "https://www.matkatus.com/cdn/shop/files/DS36_016bdb1c-c2db-4484-958f-718fedddcbb5.jpg?v=1775491700&width=1080"
    },
    {
        title: "Sircilla Powerloom Textiles",
        description: "Affordable and durable fabrics from the powerloom hub of Telangana.",
        date: new Date(),
        location: "Rajanna Sircilla, Telangana",
        category: "Textile",
        totalAmount: 15000,
        availableAmount: 12000,
        productPrice: 200,
        image: "https://media.telanganatoday.com/wp-content/uploads/2025/08/weavers.jpg"
    },
    {
        title: "Ranga Reddy Grapes",
        description: "Fresh table grapes cultivated on the outskirts of Hyderabad.",
        date: new Date(),
        location: "Rangareddy, Telangana",
        category: "Agriculture",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 80,
        image: "https://tiimg.tistatic.com/fp/1/007/404/no-pesticides-juicy-rich-delicious-taste-organic-fresh-green-grapes-402.jpg"
    },
    {
        title: "Sangareddy Dairy",
        description: "Locally produced milk products and specialized dairy items.",
        date: new Date(),
        location: "Sangareddy, Telangana",
        category: "Food",
        totalAmount: 4000,
        availableAmount: 3000,
        productPrice: 100,
        image: "https://content3.jdmagicbox.com/v2/comp/sangareddy/g2/9999p8455.8455.240210091747.e9g2/catalogue/vijaya-milk-and-ice-cream-parlour-sangareddy-bypass-road-sangareddy-dairy-product-retailers-n59vvhosy9.jpg"
    },
    {
        title: "Suryapet Fine Rice",
        description: "High-grade fine rice varieties like Sona Masuri from local paddies.",
        date: new Date(),
        location: "Suryapet, Telangana",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 15000,
        productPrice: 60,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQYngGA9LfVeihftdW8UwqbROLYPaM1bU1w&s"
    },
    {
        title: "Vikarabad Red Gram (Toor Dal)",
        description: "Nutritious and protein-rich pigeon pea from Vikarabad district.",
        date: new Date(),
        location: "Vikarabad, Telangana",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 8500,
        productPrice: 150,
        image: "https://5.imimg.com/data5/ZR/PI/YF/GLADMIN-8615631/tur-dal-red-gram-non-pesticide.jpeg"
    },
    {
        title: "Wanaparthy Groundnut",
        description: "High-yield, oil-rich groundnuts sourced from local farmers.",
        date: new Date(),
        location: "Wanaparthy, Telangana",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 6500,
        productPrice: 110,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/8/337311147/GU/TX/ZA/180809480/40094998-2-1-bb-royal-organic-raw-peanuts-grande-500x500.jpg"
    },
    {
        title: "Yadadri Ikat Handlooms",
        description: "Vivid Bhoodan Pochampally style Ikat fabrics woven in Yadadri region.",
        date: new Date(),
        location: "Yadadri Bhuvanagiri, Telangana",
        category: "Handloom",
        totalAmount: 200,
        availableAmount: 150,
        productPrice: 3000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93K2zAUk6lD8jrfnp1n_QGK_cNMHzhlMw1A&s"
    },

    // ==========================================
    // ANDHRA PRADESH DISTRICT PRODUCTS (ODOP)
    // ==========================================

    //     'Andhra Pradesh': ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Prakasam', 'Srikakulam', 'Sri Potti Sriramulu Nellore', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR District, Kadapa (Cuddapah)'],

    {
        title: "Araku Valley Coffee",
        description: "Organic, tribal-grown Arabica coffee from the Eastern Ghats.",
        date: new Date(),
        location: "Alluri Sitharama Raju, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 1000,
        availableAmount: 800,
        productPrice: 600,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaGUZT80N_sG2MMB15_wkwZ8RIjUQM2EWIQ&s"
    },
    {
        title: "Guntur Chilli (Teja / Sannam)",
        description: "World-renowned hot and vibrant red chilli varieties.",
        date: new Date(),
        location: "Guntur, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 15000,
        productPrice: 250,
        image: "https://5.imimg.com/data5/SELLER/Default/2025/10/551099487/BQ/TL/RU/223551349/guntur-sannam-red-chilli-500x500.jpeg"
    },
    {
        title: "Kondapalli Toys",
        description: "Lightweight wooden toys made from Tella Poniki wood depicting rural life.",
        date: new Date(),
        location: "NTR, Andhra Pradesh",
        category: "Handicraft",
        totalAmount: 300,
        availableAmount: 200,
        productPrice: 1200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoATjPgV2PGq72N-qHIY-q5M0Xp4vTQNTqw&s"
    },
    {
        title: "Musalipatnam Kalamkari",
        description: "Block-printed cotton textile using natural vegetable dyes.",
        date: new Date(),
        location: "Krishna, Andhra Pradesh",
        category: "Handloom",
        totalAmount: 400,
        availableAmount: 300,
        productPrice: 2800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpnkKLUVILnFHHuCUi_q6TN3-VK7PDTtSJQ&s"
    },
    {
        title: "Uppada Jamdani Sarees",
        description: "Lightweight silk sarees with exquisite Jamdani weaving techniques.",
        date: new Date(),
        location: "Kakinada, Andhra Pradesh",
        category: "Handloom",
        totalAmount: 150,
        availableAmount: 120,
        productPrice: 6000,
        image: "https://5.imimg.com/data5/DC/NO/RE/ANDROID-76217205/product-jpeg.jpg"
    },
    {
        title: "Mangalagiri Handlooms",
        description: "Fine cotton fabrics and sarees featuring Nizam borders without zari.",
        date: new Date(),
        location: "Guntur, Andhra Pradesh",
        category: "Handloom",
        totalAmount: 350,
        availableAmount: 250,
        productPrice: 1800,
        image: "https://i.pinimg.com/236x/73/41/bd/7341bdf5eb3ff5477a73e139343f9cd4.jpg"
    },
    {
        title: "Bobbili Veena",
        description: "Classical musical instrument carved from Jackwood.",
        date: new Date(),
        location: "Vizianagaram, Andhra Pradesh",
        category: "Handicraft",
        totalAmount: 50,
        availableAmount: 30,
        productPrice: 15000,
        image: "https://www.gitagged.com/wp-content/uploads/2019/08/Bobbili-Veena-Saraswati-Veena-2.jpg"
    },
    {
        title: "Dharmavaram Silk Sarees",
        description: "Heavy Kanjeevaram-style silk sarees with broad borders and brocade.",
        date: new Date(),
        location: "Ananthapuramu, Andhra Pradesh",
        category: "Handloom",
        totalAmount: 100,
        availableAmount: 80,
        productPrice: 8500,
        image: "https://elampillaisareesonline.com/wp-content/uploads/2022/02/WhatsApp-Image-2023-12-30-at-14.21.23-1.jpeg"
    },
    {
        title: "Srikakulam Ponduru Khadi",
        description: "Finest handspun and handwoven khadi cotton famous nationwide.",
        date: new Date(),
        location: "Srikakulam, Andhra Pradesh",
        category: "Handloom",
        totalAmount: 500,
        availableAmount: 400,
        productPrice: 1200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCjt6uM9xy8SgusLvZJlKaR138exTIgc5Vw&s"
    },
    {
        title: "Narsapur Lace Craft",
        description: "Handcrafted intricate crochet lace products.",
        date: new Date(),
        location: "West Godavari, Andhra Pradesh",
        category: "Handicraft",
        totalAmount: 600,
        availableAmount: 400,
        productPrice: 800,
        image: "https://www.iasgyan.in//ig-uploads/images//NARSAPUR_CROCHET_LACE.jpg"
    },
    {
        title: "Kurnool Sona Masuri Rice",
        description: "Premium quality lightweight and aromatic medium-grain rice.",
        date: new Date(),
        location: "Kurnool, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 30000,
        productPrice: 120,
        image: "https://img500.exportersindia.com/product_images/bc-500/dir_105/3120973/non-basmati-rice-1251681.jpg"
    },
    {
        title: "Nellore Citrus (Lemon)",
        description: "Juicy, high-yield citrus and lemon production from the coastal region.",
        date: new Date(),
        location: "Nellore, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5000,
        productPrice: 60,
        image: "https://images.jdmagicbox.com/quickquotes/images_main/-yij7w.jpg"
    },

    {
        title: "Anakapalli Jaggery",
        description: "Renowned fine quality organic jaggery produced from Anakapalli sugarcane.",
        date: new Date(),
        location: "Anakapalli, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 60,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/jaggery-u9yxehc-250.jpg"
    },
    {
        title: "Madanapalle Tomatoes",
        description: "High-yield, top-quality tomatoes from the agricultural hub of Madanapalle.",
        date: new Date(),
        location: "Annamayya, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 40000,
        productPrice: 30,
        image: "https://storeassets.im-cdn.com/products/c5d790/NQug1nCVQwKDJBjPutee_5a329dc4c16aa8f6c64a5b5ab8d80fc6.jpg"
    },
    {
        title: "Chirala Handlooms",
        description: "Soft cotton and silk blend sarees famously known for intricate borders.",
        date: new Date(),
        location: "Bapatla, Andhra Pradesh",
        category: "Handloom",
        totalAmount: 300,
        availableAmount: 200,
        productPrice: 2000,
        image: "https://lh3.googleusercontent.com/Itw7AlL_PB0JwNtQzl3RGGKZEvxTHLMsAb1TZw3wmYjgG9XMTB8XEP2Kx1wQ8IttCvq25SElcFfZeHxdFLe6ZN8w9gY=w192-rw"
    },
    {
        title: "Chittoor Mangoes",
        description: "Famous sweet Totapuri and Banganapalli mangoes cultivated in local orchards.",
        date: new Date(),
        location: "Chittoor, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 15000,
        productPrice: 100,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/4/303690167/YA/DR/KG/11507125/mangoes-totapuri-250x250.webp"
    },
    {
        title: "Konaseema Coconut Products",
        description: "Fresh coconuts, coir, and coconut oil produced from the fertile delta region.",
        date: new Date(),
        location: "Dr. B.R. Ambedkar Konaseema, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 25000,
        availableAmount: 20000,
        productPrice: 50,
        image: "https://lh3.googleusercontent.com/proxy/-GkBphmOo4GmMewQQ_Jb8alRgwwVwUWJ_2tEKBY4G6Dt2AKjMuNLW-PAxDrYKZuaZsXLrXfFZopZ9wISCIK5wA"
    },
    {
        title: "Godavari Coir Products",
        description: "Eco-friendly natural coir mats and ropes made from coconut husk.",
        date: new Date(),
        location: "East Godavari, Andhra Pradesh",
        category: "Handicraft",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 200,
        image: "https://3.imimg.com/data3/NN/RA/GLADMIN-43764/coir-products-250x250.jpg"
    },
    {
        title: "Eluru Carpets",
        description: "Hand-knotted woollen pile carpets renowned worldwide.",
        date: new Date(),
        location: "Eluru, Andhra Pradesh",
        category: "Handloom",
        totalAmount: 150,
        availableAmount: 100,
        productPrice: 8500,
        image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/6927f77aa19daabf4da13bc2/img_1068-39--420x420.jpg"
    },
    {
        title: "Nandyal Turmeric",
        description: "High-curcumin content turmeric grown organically in Nandyal.",
        date: new Date(),
        location: "Nandyal, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 8500,
        productPrice: 120,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/turmeric-o3f1418-250.jpg"
    },
    {
        title: "Palnadu Red Chilli",
        description: "Famed extremely spicy chillies used for export and local cooking.",
        date: new Date(),
        location: "Palnadu, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 220,
        image: "https://www.justdial.com/palnadu/Red-Chilli-Retailers/nct-10402972"
    },
    {
        title: "Manyam Tribal Spices",
        description: "Authentic forest honey and wild tamarind harvested by local tribes.",
        date: new Date(),
        location: "Parvathipuram Manyam, Andhra Pradesh",
        category: "Forest Produce",
        totalAmount: 800,
        availableAmount: 600,
        productPrice: 300,
        image: "https://indocert.org/wp-content/uploads/2024/08/47-1-1024x1024.jpg"
    },
    {
        title: "Ongole Granite",
        description: "Premium black granite quarried primarily for architectural use.",
        date: new Date(),
        location: "Prakasam, Andhra Pradesh",
        category: "Industrial",
        totalAmount: 200,
        availableAmount: 150,
        productPrice: 2000,
        image: "https://tiimg.tistatic.com/fp/1/006/821/steel-grey-granite-slab-909.jpg"
    },
    {
        title: "Sathya Sai Silk",
        description: "Handloom silk woven products famous around the Puttaparthi region.",
        date: new Date(),
        location: "Sri Sathya Sai, Andhra Pradesh",
        category: "Handloom",
        totalAmount: 250,
        availableAmount: 180,
        productPrice: 4000,
        image: "https://content.jdmagicbox.com/comp/def_content_category/fancy-saree-wholesalers/360-f-769852360-vzw4qbuh11u5cvoe2o8shh4nsyuonkr4-fancy-saree-wholesalers-1-m8fjf-250.jpg"
    },
    {
        title: "Madhavamala Wood Carving",
        description: "Exquisite mythological figurines hand carved from local wood.",
        date: new Date(),
        location: "Sri Balaji District (Tirupati), Andhra Pradesh",
        category: "Handicraft",
        totalAmount: 200,
        availableAmount: 150,
        productPrice: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wsPNyrkrL5DFR3yBkjSRKYghuWyGtOL3OA&s"
    },
    {
        title: "Visakhapatnam Cashew",
        description: "Locally processed premium cashew nuts from coastal plantations.",
        date: new Date(),
        location: "Visakhapatnam, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 850,
        image: "https://tiimg.tistatic.com/fp/2/009/159/cashew-nuts-202.jpg"
    },
    {
        title: "Kadapa Banana",
        description: "High-yield, tasty banana varieties cultivated extensively in Kadapa.",
        date: new Date(),
        location: "YSR Kadapa, Andhra Pradesh",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 40,
        image: "https://cpimg.tistatic.com/07443543/b/4/Fresh-Yellow-Banana.jpg"
    },

    // ==========================================
    // TAMIL NADU DISTRICT PRODUCTS (ODOP)
    // ==========================================

    //     'Tamil Nadu': ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi (Tuticorin)', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'],

    {
        title: "Ariyalur Cashew Nuts",
        description: "Premium quality cashew nuts cultivated extensively in the Ariyalur region.",
        date: new Date(),
        location: "Ariyalur, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 1000,
        availableAmount: 850,
        productPrice: 800,
        image: "https://tiimg.tistatic.com/fp/0/008/681/cashews-kernels-297.jpg"
    },
    {
        title: "Chengalpattu Pottery",
        description: "Traditional handmade earthen pots and clay items.",
        date: new Date(),
        location: "Chengalpattu, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 150,
        image: "https://content.jdmagicbox.com/v2/comp/mayiladuthurai/r3/9999p4364.4364.231113222334.j8r3/catalogue/clay-culture-potteries-and-wedding-pots-mayiladuthurai-pottery-dealers-ios1zbc9kr.jpg"
    },
    {
        title: "Chennai Leather Goods",
        description: "High quality finished leather bags, shoes, and belts.",
        date: new Date(),
        location: "Chennai, Tamil Nadu",
        category: "Industrial",
        totalAmount: 2000,
        availableAmount: 1500,
        productPrice: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQdjgKrXbqiW9Cp-jwLh-3_8HcG5YVTYPeA&s"
    },
    {
        title: "Coimbatore Coir Products",
        description: "Eco-friendly coir mats, ropes, and pith blocks from coconut husks.",
        date: new Date(),
        location: "Coimbatore, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 1000,
        availableAmount: 700,
        productPrice: 350,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/coir-drkkv8m-250.jpg"
    },
    {
        title: "Cuddalore Cashew",
        description: "Top grade cashew kernels sourced from Panruti and surrounding areas.",
        date: new Date(),
        location: "Cuddalore, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 900,
        image: "https://sahasa.in/wp-content/uploads/2021/12/cuddalore-cashew-processing.jpg?w=600"
    },
    {
        title: "Dharmapuri Minor Millets",
        description: "Nutritious and organic minor millets cultivated in Dharmapuri.",
        date: new Date(),
        location: "Dharmapuri, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 120,
        image: "https://www.commodityonline.com/leads/2024/02/1676437270_63ec671698623_9_thumb.webp"
    },
    {
        title: "Dindigul Locks",
        description: "Sturdy, handcrafted traditional iron and brass locks.",
        date: new Date(),
        location: "Dindigul, Tamil Nadu",
        category: "Industrial",
        totalAmount: 500,
        availableAmount: 350,
        productPrice: 850,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSut6Jb9b209APQ51gOkHDdDUJS6JJK7x5_KA&s"
    },
    {
        title: "Erode Turmeric",
        description: "World-famous GI tagged turmeric known for high curcumin content.",
        date: new Date(),
        location: "Erode, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 8000,
        productPrice: 180,
        image: "https://tiimg.tistatic.com/fp/1/009/717/erode-turmeric--979.jpg"
    },
    {
        title: "Kallakurichi Wood Carvings",
        description: "Exquisite hand-carved wooden sculptures and temple cars.",
        date: new Date(),
        location: "Kallakurichi, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 150,
        availableAmount: 100,
        productPrice: 5500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIwUOfXjGE-WaP3WGplRW0k3jGjbOtuov1g&s"
    },
    {
        title: "Kanchipuram Silk Sarees",
        description: "World-renowned pure mulberry silk sarees with heavy zari borders.",
        date: new Date(),
        location: "Kanchipuram, Tamil Nadu",
        category: "Handloom",
        totalAmount: 200,
        availableAmount: 120,
        productPrice: 12000,
        image: "https://priyangaa.in/cdn/shop/files/127c.jpg?v=1717921093&width=720"
    },
    {
        title: "Kanyakumari Clove",
        description: "Highly aromatic cloves grown in the hilly terrain of Kanyakumari.",
        date: new Date(),
        location: "Kanyakumari, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 800,
        availableAmount: 600,
        productPrice: 1200,
        image: "https://tiimg.tistatic.com/fp/1/009/147/kerala-dry-cloves-960.jpg"
    },
    {
        title: "Karur Home Textiles",
        description: "Export-quality cotton handloom and home furnishing textiles.",
        date: new Date(),
        location: "Karur, Tamil Nadu",
        category: "Textile",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 850,
        image: "https://content.jdmagicbox.com/comp/def_content/home-textile-fabric-exporters/5092be37e5-home-textile-fabric-exporters-3-65v0d-250.jpg"
    },
    {
        title: "Krishnagiri Mangoes",
        description: "Sweet and juicy mangoes and mango pulp processing products.",
        date: new Date(),
        location: "Krishnagiri, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 15000,
        productPrice: 110,
        image: "https://cpimg.tistatic.com/06162778/b/4/Alphonso-Mangoes.jpg"
    },
    {
        title: "Madurai Malli (Jasmine)",
        description: "Highly fragrant jasmine flowers unique to the Madurai region.",
        date: new Date(),
        location: "Madurai, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0HET64O746EyIULCiZ6RtH6O-vVven0BJw&s"
    },
    {
        title: "Nagapattinam Marine Products",
        description: "Freshly caught and processed marine fish and seafood.",
        date: new Date(),
        location: "Nagapattinam, Tamil Nadu",
        category: "Food",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 600,
        image: "https://content.jdmagicbox.com/comp/def_content/seafood-retailers/seafood-retailers-1-seafood-retailers-1-4bdd7.jpg"
    },
    {
        title: "Namakkal Poultry Eggs",
        description: "High quality eggs from the poultry hub of South India.",
        date: new Date(),
        location: "Namakkal, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 45000,
        productPrice: 10,
        image: "https://tiimg.tistatic.com/fp/1/007/535/good-source-of-protein-healthy-natural-potassium-rich-fresh-organic-eggs-791.jpg"
    },
    {
        title: "Nilgiris Tea",
        description: "Dark, intensely aromatic, and flavourful black tea from the Blue Mountains.",
        date: new Date(),
        location: "Nilgiris, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 450,
        image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/29e6f1f7-e024-492b-b235-edd2ad2c22c3.__CR0,37,1536,950_PT0_SX970_V1___.png"
    },
    {
        title: "Perambalur Small Onion",
        description: "Flavorful shallots (small onions) extensively cultivated in Perambalur.",
        date: new Date(),
        location: "Perambalur, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 4000,
        availableAmount: 3000,
        productPrice: 60,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/onion-t1z1iid-250.jpg"
    },
    {
        title: "Pudukkottai Groundnut",
        description: "Rich and oil-dense groundnuts sourced from dryland farming.",
        date: new Date(),
        location: "Pudukkottai, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 6000,
        productPrice: 110,
        image: "https://content.jdmagicbox.com/comp/def_content_category/groundnut-wholesalers/360-f-331419421-km1faytiubdid8ewetjaktdpydjibmcl-groundnut-wholesalers-2-gp38o-250.jpg"
    },
    {
        title: "Ramanathapuram Mundu Chilli",
        description: "Round shaped chillies known for strong aroma and medium pungency.",
        date: new Date(),
        location: "Ramanathapuram, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 9000,
        availableAmount: 7000,
        productPrice: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJSsBTol-exyx-aLXzpDazxdlXvE3qVruLA&s"
    },
    {
        title: "Ranipet Leather Shoes",
        description: "Premium finished leather footwear oriented for export.",
        date: new Date(),
        location: "Ranipet, Tamil Nadu",
        category: "Industrial",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 3500,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/leather-shoe-ebe7329-250.jpg"
    },
    {
        title: "Salem Sago (Javvarisi)",
        description: "Pearls of sago made from tapioca roots, a major staple and snack ingredient.",
        date: new Date(),
        location: "Salem, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 80,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHOciMHNRbDEtWF5eN1z3f0_riz4NkJNZ8A&s"
    },
    {
        title: "Sivaganga Chettinad Kottan",
        description: "Traditional palmyra leaf woven colorful baskets from Sivaganga.",
        date: new Date(),
        location: "Sivaganga, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 800,
        availableAmount: 500,
        productPrice: 400,
        image: "https://krafteria.com/cdn/shop/articles/kottan-baskets-chettinad.jpg?v=1768904837"
    },
    {
        title: "Tenkasi Lemon",
        description: "Juicy, high-yielding lemon cultivated through indigenous methods.",
        date: new Date(),
        location: "Tenkasi, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 8000,
        productPrice: 50,
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/lemon-4p80dmw-250.jpg"
    },
    {
        title: "Thanjavur Art Plates",
        description: "Traditional embossed metal plates and classical South Indian gold foil paintings.",
        date: new Date(),
        location: "Thanjavur, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 150,
        availableAmount: 100,
        productPrice: 7500,
        image: "https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2020/10/thanja.jpg"
    },
    {
        title: "Theni Banana",
        description: "Nutrient-rich banana varieties grown in the fertile valleys.",
        date: new Date(),
        location: "Theni, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 25000,
        availableAmount: 18000,
        productPrice: 40,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/5/419828934/WY/BJ/NA/78684197/product-jpeg-1000x1000.jpg"
    },
    {
        title: "Thoothukudi Macaroons",
        description: "Unique cone-shaped macaroons made of cashew nuts, egg whites, and sugar.",
        date: new Date(),
        location: "Thoothukudi (Tuticorin), Tamil Nadu",
        category: "Food",
        totalAmount: 1200,
        availableAmount: 900,
        productPrice: 350,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_X9YeGgyg1F1HWjXx_fUharwjupAS1jUkAw&s"
    },
    {
        title: "Tiruchirappalli Artificial Diamonds",
        description: "Finely cut and polished artificial gem stones.",
        date: new Date(),
        location: "Tiruchirappalli, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 200,
        image: "https://content.jdmagicbox.com/v2/comp/surat/j1/0261px261.x261.240627151919.e2j1/catalogue/mira-gems-varachha-road-surat-diamond-manufacturers-nkisab3pf1.jpg"
    },
    {
        title: "Tirunelveli Pathamadai Mat",
        description: "Super fine handmade silk mats woven from korai grass.",
        date: new Date(),
        location: "Tirunelveli, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 300,
        availableAmount: 200,
        productPrice: 1500,
        image: "https://www.indicinspirations.com/cdn/shop/products/pattamadai-mat-6-feet-x-3-feet-floor-mats-364409.jpg?v=1613310389&width=899"
    },
    {
        title: "Tirupathur Leather Garments",
        description: "High-grade leather jackets and apparels.",
        date: new Date(),
        location: "Tirupathur, Tamil Nadu",
        category: "Textile",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 4500,
        image: "https://www.indicinspirations.com/cdn/shop/products/pattamadai-mat-6-feet-x-3-feet-floor-mats-364409.jpg?v=1613310389&width=899"
    },
    {
        title: "Tiruppur Knitwear",
        description: "High-quality hosiery and cotton knitwear garments.",
        date: new Date(),
        location: "Tiruppur, Tamil Nadu",
        category: "Textile",
        totalAmount: 10000,
        availableAmount: 8000,
        productPrice: 500,
        image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-196246,resizemode-75,msid-123545669/industry/cons-products/garments-/-textiles/indias-tirupur-knitwear-faces-us-tariff-shock-as-fresh-orders-stall-and-old-deals-renegotiated.jpg"
    },
    {
        title: "Tiruvallur Rice",
        description: "Premium quality paddy and milled rice.",
        date: new Date(),
        location: "Tiruvallur, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 55,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/11/361243573/ZF/OX/OF/39353464/compressjpeg-online-image-32-250x250.jpg"
    },
    {
        title: "Tiruvannamalai Groundnut",
        description: "Locally grown groundnuts known for their rich oil content.",
        date: new Date(),
        location: "Tiruvannamalai, Tamil Nadu",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 12000,
        productPrice: 110,
        image: "https://content.jdmagicbox.com/comp/def_content_category/groundnut-wholesalers/360-f-808204106-mc8tafiorwj4mj1tvmszpmznzigsw0dn-groundnut-wholesalers-4-vnmmm-250.jpg"
    },
    {
        title: "Tiruvarur Bamboo Crafts",
        description: "Household and decorative items crafted from local bamboo.",
        date: new Date(),
        location: "Tiruvarur, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 1000,
        availableAmount: 800,
        productPrice: 250,
        image: "https://content.jdmagicbox.com/comp/def_content_category/bamboo-product-manufacturers/8f77b92718-bamboo-product-manufacturers-4-0b1sp.jpg"
    },
    {
        title: "Vellore Leather Wallets",
        description: "Handcrafted and stitched leather wallets and small accessories.",
        date: new Date(),
        location: "Vellore, Tamil Nadu",
        category: "Industrial",
        totalAmount: 4000,
        availableAmount: 3000,
        productPrice: 800,
        image: "https://content.jdmagicbox.com/comp/def_content/leather-wallet-manufacturers/ea8ec819c7-leather-wallet-manufacturers-5-y7dts.jpg"
    },
    {
        title: "Viluppuram Wood Craving",
        description: "Traditional wooden art pieces and decorative figures.",
        date: new Date(),
        location: "Viluppuram, Tamil Nadu",
        category: "Handicraft",
        totalAmount: 600,
        availableAmount: 400,
        productPrice: 1200,
        image: "https://images.jdmagicbox.com/comp/villupuram/c3/9999p4146.4146.180901195401.f3c3/catalogue/sri-vinayaga-cnc-wood-curving-manalurpettai-villupuram-wooden-carved-product-dealers-irdu0w8qi7.jpg"
    },
    {
        title: "Virudhunagar Printing Products",
        description: "Sivakasi based high quality printed calendars, diaries, and notebooks.",
        date: new Date(),
        location: "Virudhunagar, Tamil Nadu",
        category: "Industrial",
        totalAmount: 50000,
        availableAmount: 40000,
        productPrice: 100,
        image: "https://content.jdmagicbox.com/v2/comp/virudhunagar/e4/9999p4562.4562.230323021301.h9e4/catalogue/kuriji-sublimation-printing-rajapalayam-virudhunagar-digital-printing-services-93g50asf3v.jpg"
    },

        // ==========================================
    // KARNATAKA DISTRICT PRODUCTS (ODOP) - 28 Districts
    // ==========================================

    //     'Karnataka': [, 'Ballari (Bellary)', 'Belagavi (Belgaum)', 'Bengaluru (Bangalore) Rural', 'Bengaluru (Bangalore) Urban', , 'Chamarajanagar', 'Chikballapur', 'Chikkamagaluru (Chikmagalur)', 'Chitradurga', 'Dakshina Kannada', 'Davangere', 'Dharwad', 'Hassan', 'Haveri', 'Kalaburagi (Gulbarga)', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru (Mysore)', 'Raichur', 'Ramanagara', 'Tumakuru (Tumkur)', 'Udupi', 'Uttara Kannada (Karwar)', 'Vijayapura (Bijapur)', 'Yadgir'],

    {
        title: "Ilkal Sarees",
        description: "Traditional handloom saree identified by its unique red pallu with contrasting borders.",
        date: new Date(),
        location: "Bagalkot, Karnataka",
        category: "Handloom",
        totalAmount: 300,
        availableAmount: 200,
        productPrice: 2200,
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/8/333157425/UV/HD/KA/193040836/product-jpeg.jpg" 
    },

    {
        title: "Bidriware",
        description: "Metal handicraft featuring silver inlay work against a striking black background.",
        date: new Date(),
        location: "Bidar, Karnataka",
        category: "Handicraft",
        totalAmount: 120,
        availableAmount: 80,
        productPrice: 4500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdlSuJZ3BJJa_84WKQlz-T2POtkYbsTQmKA&s" 
    },

    {
        title: "Chikmagalur Arabica Coffee",
        description: "World-renowned shade-grown Arabica coffee from the birthplace of coffee in India.",
        date: new Date(),
        location: "Chikkamagaluru (Chikmagalur), Karnataka",
        category: "Agriculture",
        totalAmount: 2500,
        availableAmount: 1800,
        productPrice: 650,
        image: "https://www.redcoral.in/wp-content/uploads/2020/05/coffee-5149246_1920.jpg"
    },

    {
        title: "Bangalore Rose Onion",
        description: "Small, pungent, and highly prized pink onions uniquely grown in the rural outskirts of Bangalore.",
        date: new Date(),
        location: "Bengaluru (Bangalore) Rural, Karnataka",
        category: "Agriculture",
        totalAmount: 4000,
        availableAmount: 3000,
        productPrice: 80,
        image: "https://3.imimg.com/data3/JM/XW/MY-9187327/bangalore-rose-onion.jpg"
    },
    {
        title: "Ballari Jeans",
        description: "Hub of denim readymade garment manufacturing in South India.",
        date: new Date(),
        location: "Ballari (Bellary), Karnataka",
        category: "Textile",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 850,
        image: "https://5.imimg.com/data5/CG/ZJ/MA/ANDROID-16448125/product-jpeg-500x500.jpg" 
    },
    {
        title: "Belagavi Kunda",
        description: "A popular and traditional milk-based sweet delicacy unique to the Belagavi region.",
        date: new Date(),
        location: "Belagavi (Belgaum), Karnataka",
        category: "Food",
        totalAmount: 1000,
        availableAmount: 800,
        productPrice: 350,
        image: "https://tiimg.tistatic.com/fp/1/005/499/delicious-taste-belagavi-kunda-sweet--737.jpg"
    },
    
    {
        title: "Bangalore Silk Apparels",
        description: "Premium silk clothing and fashion garments produced in the thriving textile hubs of the city.",
        date: new Date(),
        location: "Bengaluru (Bangalore) Urban, Karnataka",
        category: "Textile",
        totalAmount: 1500,
        availableAmount: 1100,
        productPrice: 3500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchxvCda9QXSCtTbMKLLfTNGDijUJa9vbBpg&s"
    },
    
    {
        title: "Chamarajanagar Turmeric",
        description: "High-quality, naturally grown turmeric prized for its bright color and strong flavor.",
        date: new Date(),
        location: "Chamarajanagar, Karnataka",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 150,
        image: "https://content.jdmagicbox.com/comp/chamarajanagar/q5/9999p8226.8226.220822144702.r5q5/catalogue/sri-murgan-traders-balachavadi-chamarajanagar-umqfsjohvm.jpg"
    },
    {
        title: "Nandi Valley Grapes",
        description: "Juicy and sweet grapes cultivated in the lush foothills of the Nandi Hills.",
        date: new Date(),
        location: "Chikballapur, Karnataka",
        category: "Agriculture",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 120,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/2/RP/LH/TY/11416459/nandi-valley-grapes.jpeg"
    },
    
    {
        title: "Molakalmuru Sarees",
        description: "Traditional pure silk sarees featuring distinct borders and grand rich pallus.",
        date: new Date(),
        location: "Chitradurga, Karnataka",
        category: "Handloom",
        totalAmount: 400,
        availableAmount: 250,
        productPrice: 4500,
        image: "https://caleidoscope.in/wp-content/uploads/2021/07/Molakalmuru-Saree-Info.jpg"
    },
    {
        title: "Mangaluru Cashew",
        description: "Crunchy and flavorful premium grade cashew nuts roasted locally.",
        date: new Date(),
        location: "Dakshina Kannada, Karnataka",
        category: "Agriculture",
        totalAmount: 3500,
        availableAmount: 2800,
        productPrice: 900,
        image: "https://tiimg.tistatic.com/fp/1/003/828/cashew-nuts-995.jpg"
    },
    {
        title: "Davangere Benne Dosa Millets",
        description: "Special millet and rice flour blend traditionally used to prepare Davangere's iconic butter dosa.",
        date: new Date(),
        location: "Davangere, Karnataka",
        category: "Food",
        totalAmount: 1200,
        availableAmount: 950,
        productPrice: 180,
        image: "https://images.squarespace-cdn.com/content/v1/603bc7becf34a07d765fc033/0373b87a-0f4f-4394-b29d-e6d5eac776ad/photo-output.jpg"
    },
    {
        title: "Dharwad Pedha",
        description: "Iconic milk-based sweet with a distinct brownish color and caramelized taste.",
        date: new Date(),
        location: "Dharwad, Karnataka",
        category: "Food",
        totalAmount: 1000,
        availableAmount: 800,
        productPrice: 400,
        image: "https://indiasweethouse.in/cdn/shop/files/DharwadPeda.png?v=1718868299" 
    },
    {
        title: "Coconuts",
        description: "Highly nutritious and sweet-water coconuts from the agriculturally rich Hassan district.",
        date: new Date(),
        location: "Hassan, Karnataka",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7500,
        productPrice: 50,
        image: "https://www.dole.com/sites/default/files/styles/1024w768h-80/public/media/2025-01/coconut.png?itok=G0g0yyVi-4ctOzgnp"
    },
    {
        title: "Byadagi Chilli",
        description: "Deep red chili known for its color and mild flavor, used widely in masalas.",
        date: new Date(),
        location: "Haveri, Karnataka",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 6000,
        productPrice: 350,
        image: "https://nuttyyogi.com/cdn/shop/products/Chillies_Bydagi1_DSC5082.jpg?v=1606373595" 
    },
    {
        title: "Kalaburagi Red Gram (Toor Dal)",
        description: "High-protein, quick-cooking pigeon pea distinct to the Kalaburagi region.",
        date: new Date(),
        location: "Kalaburagi (Gulbarga), Karnataka",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 12000,
        productPrice: 160,
        image: "https://5.imimg.com/data5/SELLER/Default/2025/9/549368633/CA/LX/ES/163180809/red-gram.png" 
    },
    {
        title: "Coorg (Kodagu) Coffee",
        description: "Premium Robusta and Arabica coffee beans grown under the shade of native trees.",
        date: new Date(),
        location: "Kodagu, Karnataka",
        category: "Agriculture",
        totalAmount: 2000,
        availableAmount: 1500,
        productPrice: 750,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAQLS8v74c29DLRZaeUdyKtWuQExJ0KOLYw&s" 
    },
    {
        title: "Srinivaspur Mango",
        description: "Sweet, diverse varieties of mangoes often referred to as the Mango City delights.",
        date: new Date(),
        location: "Kolar, Karnataka",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 6000,
        productPrice: 100,
        image: "https://content3.jdmagicbox.com/comp/kolar/r7/9999p8152.8152.170922125056.k6r7/catalogue/milansar-mango-centre-srinivaspur-kolar-fruit-vendors-r8t2b0kwb5.jpg"
    },
    {
        title: "Kinhal Toys",
        description: "Traditional wooden craft depicting local deities and vibrant figures.",
        date: new Date(),
        location: "Koppal, Karnataka",
        category: "Handicraft",
        totalAmount: 200,
        availableAmount: 150,
        productPrice: 1800,
        image: "https://static.india.gov.in/npiprod/odop/uploads/kinhal_toys_1ba4fb636a.jpg" 
    },
    {
        title: "Mandya Organic Jaggery",
        description: "Chemical-free, rich jaggery blocks produced from high-quality sugarcane in the Sugar City.",
        date: new Date(),
        location: "Mandya, Karnataka",
        category: "Food",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 70,
        image: "https://organicmandya.com/cdn/shop/files/JaggerySquare_2_8bf0ec5f-71e8-4e6f-acdb-ed29a6e0bd7a.jpg?v=1757080784"
    },
    {
        title: "Mysore Silk Sarees",
        description: "Pure silk with pure gold zari, famous for its minimalist elegance.",
        date: new Date(),
        location: "Mysuru (Mysore), Karnataka",
        category: "Handloom",
        totalAmount: 150,
        availableAmount: 100,
        productPrice: 9500,
        image: "https://premvastra.com/cdn/shop/files/photo_2024-07-12_14-41-24_2_69bc3d70-0c0f-4b8e-b9c5-97fe174b6989.jpg?v=1753343004" 
    },
    {
        title: "Raichur Sona Masuri Rice",
        description: "Lightweight, aromatic, and premium quality rice heavily cultivated in the Tungabhadra basin.",
        date: new Date(),
        location: "Raichur, Karnataka",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 15000,
        productPrice: 120,
        image: "https://dyimg77.exportersindia.com/product_images/bc-small/2026/3/14424665/sona-masuri-rice-8630016-pv1.jpg"
    },
    {
        title: "Channapatna Wooden Toys",
        description: "Eco-friendly, colorful wooden toys colored with vegetable dyes.",
        date: new Date(),
        location: "Ramanagara, Karnataka",
        category: "Handicraft",
        totalAmount: 600,
        availableAmount: 450,
        productPrice: 600,
        image: "https://storeassets.im-cdn.com/media-manager/channapatnatoysin/XiVLFh8iQiVe5JvXktKq_channapatna%20dolls%20roly%20poly%2003%20(1)_621x375_webp.jpg" 
    },
    {
        title: "Tiptur Copra",
        description: "Exceptional quality dried coconut halves with a high oil content.",
        date: new Date(),
        location: "Tumakuru (Tumkur), Karnataka",
        category: "Agriculture",
        totalAmount: 6000,
        availableAmount: 4500,
        productPrice: 200,
        image: "https://tiimg.tistatic.com/fp/1/006/627/dried-coconut-ball-copra-860.jpg"
    },
    {
        title: "Udupi Mattu Gulla Brinjal",
        description: "Unique round green variety of brinjal grown organically.",
        date: new Date(),
        location: "Udupi, Karnataka",
        category: "Agriculture",
        totalAmount: 1500,
        availableAmount: 1000,
        productPrice: 60,
        image: "https://sahasa.in/wp-content/uploads/2021/06/udupi-mattu-gulla-brinjal-e1624250841961.jpg?w=600" 
    },
    {
        title: "Sirsi Supari (Arecanut)",
        description: "Geographical Indication tagged round and flattened arecanuts unique to the Sirsi region.",
        date: new Date(),
        location: "Uttara Kannada (Karwar), Karnataka",
        category: "Agriculture",
        totalAmount: 4000,
        availableAmount: 3000,
        productPrice: 400,
        image: "https://m.media-amazon.com/images/I/71t39rNpS7L.jpg"
    },
    {
        title: "Bijapur Grapes",
        description: "Thompson seedless and Sonaka grapes famous for their taste and export quality.",
        date: new Date(),
        location: "Vijayapura (Bijapur), Karnataka",
        category: "Agriculture",
        totalAmount: 7000,
        availableAmount: 5500,
        productPrice: 150,
        image: "https://tiimg.tistatic.com/fp/1/004/549/fresh-green-grapes-566.jpg"
    },
    {
        title: "Red Gram",
        description: "Nutritious pigeon peas grown locally, acting as a staple crop of the district.",
        date: new Date(),
        location: "Yadgir, Karnataka",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 6500,
        productPrice: 130,
        image: "https://5.imimg.com/data5/NL/VS/QC/SELLER-98015288/red-gram-dal.jpg"
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
        console.log('\\n✅ MongoDB connection open...');

        // Clear existing data for these states to avoid duplicates
        // await Event.deleteMany({
        //     $or: [
        //         { location: /Telangana/i },
        //         { location: /Andhra Pradesh/i },
        //         { location: /Tamil Nadu/i },
        //         { location: /Karnataka/i }
        //     ]
        // });
        // console.log('🗑️  Cleared existing data for Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka.');

        const createdEvents = await Event.insertMany(events);
        console.log(`🎉 Created ${createdEvents.length} distinct district products from South India.`);

        console.log('\\n🚀 Database seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

seedDatabase();
