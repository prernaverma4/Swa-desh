const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');
const Event = require('./Models/Event.js');


const events = [

    // MADHYA PRADESH DATA----------------------------------------------------

    {
        title: "Agar Malwa Garlic (Lahsun)",
        description: "Agar Malwa is one of India's top garlic-producing districts, known for its pungent, high-allicin desi garlic cultivated in black cotton soil.",
        date: new Date(),
        location: "Agar Malwa, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 40000,
        availableAmount: 28000,
        productPrice: 80,
        image: "https://m.media-amazon.com/images/I/71KmgOL2q4L.jpg"
    },

    {
        title: "Alirajpur Tribal Pithora Painting",
        description: "Pithora is a sacred ritual painting of the Bhil tribal community of Alirajpur, filled with vibrant horses, gods and village life motifs.",
        date: new Date(),
        location: "Alirajpur, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1200,
        productPrice: 1500,
        image: "https://gaatha.org/wp-content/uploads/usage_1-16.jpg"
    },

    {
        title: "Anuppur Amarkantak Honey",
        description: "Pure wild forest honey collected from the sacred Amarkantak hill ranges of Anuppur, rich in medicinal properties and tribal heritage.",
        date: new Date(),
        location: "Anuppur, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 350,
        image: "https://content.jdmagicbox.com/v2/comp/bahraich/g9/9999p5252.5252.230613145436.m8g9/catalogue/honwax-processing-opc-pvt-ltd-bahraich-balrampur-road-bahraich-shilajit-extract-dealers-4rxbysjm9r.jpg"
    },

    {
        title: "Ashoknagar Chanderi Silk Saree",
        description: "Chanderi silk and cotton weave sarees with gold zari borders, a centuries-old GI-tagged handloom tradition of central Madhya Pradesh.",
        date: new Date(),
        location: "Ashoknagar, Madhya Pradesh",
        category: "Handloom",
        totalAmount: 6000,
        availableAmount: 4000,
        productPrice: 2500,
        image: "https://content.jdmagicbox.com/comp/ashoknagar/i7/9999p73331.73331.110224170626.x1i7/catalogue/motamal-handlooms-chanderi-ashoknagar-designer-saree-manufacturers-9zic1hxant.jpg"
    },

    {
        title: "Balaghat Bamboo Craft",
        description: "Intricate bamboo baskets, furniture and decorative items crafted by tribal artisans of Balaghat using locally grown bamboo from dense forests.",
        date: new Date(),
        location: "Balaghat, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 400,
        image: "https://gaatha.org/wp-content/uploads/usages4.jpg"
    },

    {
        title: "Barwani Tribal Lacquerware",
        description: "Colourful lac-coated wooden toys and household items crafted by the Bhil tribal craftsmen of Barwani using forest-sourced lac.",
        date: new Date(),
        location: "Barwani, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 300,
        image: "https://cdn.shopify.com/s/files/1/0686/9437/6495/files/varanasi-wooden-lacquerware-toys-gi-craft-india-make-an-image-about-this-topic.png?v=1771073318"
    },

    {
        title: "Betul Turmeric (Haldi)",
        description: "High-curcumin organic turmeric grown in the fertile upland soils of Betul — a major spice crop supplied across India.",
        date: new Date(),
        location: "Betul, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 120,
        image: "https://dukaan.b-cdn.net/700x700/webp/media/ec6bfa41-e5f0-40af-85e5-2f0d9a1caf5d.webp"
    },

    {
        title: "Bhind Sarkanda Grass Craft",
        description: "Eco-friendly baskets, mats and decorative articles woven from Sarkanda (reed grass) by artisans of Bhind — a traditional rural industry.",
        date: new Date(),
        location: "Bhind, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 200,
        image: "https://images1.novica.net/pictures/26/p433140_2d_800.jpg"
    },

    {
        title: "Bhopal Zari-Zardozi Embroidery",
        description: "Royal Bhopal Zardozi — intricate gold and silver thread embroidery on velvet and silk fabric, a Nawabi heritage craft of the city.",
        date: new Date(),
        location: "Bhopal, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3000,
        productPrice: 3000,
        image: "https://www.mptourism.com/web/image/catalog/Blog%2014%20%20Art%20and%20Craft-Zari%20Zardozi%20-%20Culture%20Section.jpg"
    },

    {
        title: "Burhanpur Silk Kinkhab Fabric",
        description: "GI-tagged Kinkhab — a brocade silk fabric interwoven with gold and silver zari thread, a living legacy of Burhanpur's Mughal-era weaving tradition.",
        date: new Date(),
        location: "Burhanpur, Madhya Pradesh",
        category: "Handloom",
        totalAmount: 4000,
        availableAmount: 2500,
        productPrice: 4500,
        image: "https://khinkhwab.com/cdn/shop/products/IG_09957_bf42d59b-be3e-45e3-a9b9-54ac921bcbcc.jpg?v=1624030838&width=416"
    },

    {
        title: "Chhatarpur Dhurrie & Durrie Weaving",
        description: "Flat-woven cotton dhurrie rugs with geometric patterns crafted by weavers in Chhatarpur — a sturdy traditional floor-covering craft of Bundelkhand.",
        date: new Date(),
        location: "Chhatarpur, Madhya Pradesh",
        category: "Handloom",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 700,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Durries.jpg"
    },

    {
        title: "Chhindwara Sausar Oranges",
        description: "Juicy Nagpur-variety oranges grown in the fertile plains of Sausar, Chhindwara — a key citrus-producing belt of Madhya Pradesh.",
        date: new Date(),
        location: "Chhindwara, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 50,
        image: "https://5.imimg.com/data5/GLADMIN/Default/2022/7/QG/FU/PJ/92368/oranges-250x250.jpg"
    },

    {
        title: "Damoh Bidi (Tendu Leaf)",
        description: "Hand-rolled country bidi using locally sourced Tendu leaves from Damoh's forests — a key cottage industry employing thousands of tribal workers.",
        date: new Date(),
        location: "Damoh, Madhya Pradesh",
        category: "Forest Produce",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 15,
        image: "https://www.dial4trade.com/uploaded_files/product_images/thumbs/tobacco-bidi-u-1354512130024001437.jpg"
    },

    {
        title: "Datia Bell Metal Idol",
        description: "Hand-cast bell metal (Dhokra) religious idols and ritual objects crafted by metal artisans of Datia, a devotional art closely linked to the famous Datia Devi temple.",
        date: new Date(),
        location: "Datia, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 1200,
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/bell-metal-ware-of-datia-and-tikamgarh-madhya%20pradesh-1-craft-hero?qlt=82&ts=1726641465436"
    },

    {
        title: "Dewas Industrial Pharmaceuticals",
        description: "Dewas is MP's pharmaceutical and electronics manufacturing hub, home to major drug companies producing bulk medicines and generic formulations.",
        date: new Date(),
        location: "Dewas, Madhya Pradesh",
        category: "Industrial",
        totalAmount: 100000,
        availableAmount: 75000,
        productPrice: 200,
        image: "https://www.sigmasoftgel.in/wp-content/uploads/2022/09/Top-10-Antibiotic-Manufacturers-in-India.png"
    },

    {
        title: "Dhar Mandu Saffron Parota",
        description: "Traditional Mandu-style saffron-infused wheat parota (flatbread) — a culinary heritage linked to the medieval Sultanate kitchens of Dhar-Mandu.",
        date: new Date(),
        location: "Dhar, Madhya Pradesh",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 40,
        image: "https://i.ytimg.com/vi/OXDoCJsVfyk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDIwZFeVgJRoy7fItOapzN7gW7PhQ"
    },

    {
        title: "Dindori Kodo-Kutki Millets",
        description: "Organic tribal millets — Kodo and Kutki — cultivated by Baiga tribes of Dindori in shifting hill cultivation, a GI-worthy nutritional superfood.",
        date: new Date(),
        location: "Dindori, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 90,
        image: "https://images.indianexpress.com/2018/10/kodo-kutki-grains.jpg"
    },

    {
        title: "Guna Mustard Oil",
        description: "Cold-pressed kachi ghani mustard oil produced from the large-scale mustard cultivation of Guna district — a staple edible oil of central India.",
        date: new Date(),
        location: "Guna, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 25000,
        availableAmount: 18000,
        productPrice: 150,
        image: "https://images.medicinenet.com/images/article/main_image/benefits-of-mustard-oil.jpg?output-quality=75"
    },

    {
        title: "Gwalior Gwalior Suitings",
        description: "Premium woollen and polyester suiting fabric manufactured in Gwalior — home to the historic Gwalior Suiting mills, famous since the British era.",
        date: new Date(),
        location: "Gwalior, Madhya Pradesh",
        category: "Textile",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 500,
        image: "https://m.media-amazon.com/images/I/71QC7zS663L.jpg"
    },

    {
        title: "Harda Sesame (Til) Seeds",
        description: "High-oil white sesame seeds grown in the Narmada valley of Harda — used in oil extraction, traditional sweets (tilgul) and export.",
        date: new Date(),
        location: "Harda, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 130,
        image: "https://drvaidji.com/cdn/shop/articles/hulled-sesame-seeds-for-japan-1661887812-6515524.jpg?v=1704971628"
    },

    {
        title: "Hoshangabad (Narmadapuram) Wheat",
        description: "High-yielding Sharbati wheat from the fertile Narmada valley — renowned for its golden hue, sweet taste and soft chapati quality.",
        date: new Date(),
        location: "Narmadapuram, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 60000,
        availableAmount: 40000,
        productPrice: 35,
        image: "https://www.commodityonline.com/leads/2024/04/1676267164_63e9ce9ce4beb_7.webp"
    },

    {
        title: "Indore Poha-Jalebi",
        description: "Indore's iconic street breakfast — thin flattened rice (poha) with crispy jalebis — a GI-worthy food culture representing the city's culinary identity.",
        date: new Date(),
        location: "Indore, Madhya Pradesh",
        category: "Food",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 60,
        image: "https://thumbs.dreamstime.com/z/indian-glutenfree-breakfast-poha-jalebi-snack-sweet-eaten-parts-madhya-pradesh-especially-indore-bhopal-137568659.jpg"
    },

    {
        title: "Jabalpur Marble Rock Sculpture",
        description: "Decorative white marble sculptures, idols and home décor carved from the famous Bhedaghat marble quarries of Jabalpur.",
        date: new Date(),
        location: "Jabalpur, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 2000,
        image: "https://pbs.twimg.com/media/D66SyI2V4AAY2vv.jpg"
    },

    {
        title: "Katni White Marble",
        description: "Premium white limestone and marble blocks quarried in Katni — widely exported for flooring, sculptures and construction across India.",
        date: new Date(),
        location: "Katni, Madhya Pradesh",
        category: "Mineral",
        totalAmount: 100000,
        availableAmount: 80000,
        productPrice: 300,
        image: "https://mawrbled.com/cdn/shop/files/WhiteKatniMarble.jpg?v=1698408509&width=2048"
    },

    {
        title: "Khandwa Cotton Fabric",
        description: "Short-staple cotton cultivated widely in Khandwa and spun into coarse yarn and grey fabric by local spinning mills of the Nimar region.",
        date: new Date(),
        location: "Khandwa, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 40000,
        availableAmount: 28000,
        productPrice: 60,
        image: "https://www.dhananjaycreation.com/uploaded-files/category/images/thumbs/Cotton-Fabric-thumbs-400X600.jpg"
    },

    {
        title: "Khargone Banana Chips",
        description: "Crispy fried and sun-dried banana chips made from the raw bananas grown abundantly in the fertile Nimar plains of Khargone.",
        date: new Date(),
        location: "Khargone, Madhya Pradesh",
        category: "Food",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 100,
        image: "https://5.imimg.com/data5/ANDROID/Default/2026/1/576847371/MD/RV/JW/263323463/product-jpeg-500x500.jpg"
    },

    {
        title: "Mandla Baiga Tribal Art",
        description: "Intricate Baiga tribal wall paintings and Gond art on paper by the indigenous Baiga community of Mandla — rich in nature and mythology motifs.",
        date: new Date(),
        location: "Mandla, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1400,
        productPrice: 800,
        image: "https://www.memeraki.com/cdn/shop/files/Woman-in-Baiga-art-by-Manoj-Tekam-2838_800x.png?v=1725964004"
    },

    {
        title: "Mandsaur Opium (Medicinal)",
        description: "Mandsaur is India's largest legal opium poppy cultivation belt, licensed by the government for pharmaceutical morphine production.",
        date: new Date(),
        location: "Mandsaur, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 8000,
        productPrice: 2000,
        image: "https://cropscultivation.com/wp-content/uploads/2025/08/poppy-seed-capsule-3432091_1280-1.jpg"
    },

    {
        title: "Morena Gajak (Til-Gurr Brittle)",
        description: "GI-tagged Morena Gajak — a crispy sesame-jaggery brittle sweet, hand-made in traditional wood-fired kadhai, famous across India in winter.",
        date: new Date(),
        location: "Morena, Madhya Pradesh",
        category: "Food",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqKA61JHlUs_rvaSsaKEq7N8nTxEjbYlD0Q&s"
    },

    {
        title: "Narsinghpur Wheat (MP Sharbati)",
        description: "Award-winning Sharbati variety wheat from Narsinghpur — distinguished by its golden, bold grain and naturally sweet taste, used in premium atta brands.",
        date: new Date(),
        location: "Narsinghpur, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 40,
        image: "https://5.imimg.com/data5/QW/SD/MY-17256771/wheat-m-p-500x500.jpg"
    },

    {
        title: "Neemuch Legal Opium & Pharmaceutical",
        description: "Neemuch hosts the government opium factory (GOFL), India's largest legal processor of opium alkaloids for pharmaceutical morphine and codeine.",
        date: new Date(),
        location: "Neemuch, Madhya Pradesh",
        category: "Industrial",
        totalAmount: 5000,
        availableAmount: 4000,
        productPrice: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8b7AMtAa7csB6DY51JO0AsUXESvMDnvTSWg&s"
    },

    {
        title: "Niwari Orchha Madhubani Textile",
        description: "Madhubani-inspired hand-painted fabric and block-print textiles made by artisans of Orchha (Niwari), blending Bundelkhandi folk art with cotton weaves.",
        date: new Date(),
        location: "Niwari, Madhya Pradesh",
        category: "Handloom",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 600,
        image: "https://www.madhubanipaints.com/cdn/shop/products/InShot_20221124_094219207_copy_768x1152_897b584e-d053-447f-bab9-052f20d2da77.jpg?v=1679148610"
    },

    {
        title: "Panna Diamond Mining",
        description: "Panna is India's only diamond-producing district, where alluvial diamonds are extracted from the Vindhyan rocks under government licensing.",
        date: new Date(),
        location: "Panna, Madhya Pradesh",
        category: "Mineral",
        totalAmount: 500,
        availableAmount: 300,
        productPrice: 50000,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/5b/97/caption.jpg?w=1200&h=-1&s=1"
    },

    {
        title: "Raisen Basmati Rice",
        description: "Aromatic long-grain Basmati rice cultivated in the irrigated plains of Raisen along the Narmada river — traded across India and exported.",
        date: new Date(),
        location: "Raisen, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 110,
        image: "https://tiimg.tistatic.com/fp/2/007/944/white-traditional-basmati-rice-packaging-size-1-kg-5-kg-746.jpg"
    },

    {
        title: "Rajgarh Soybean & Soy Oil",
        description: "Rajgarh is MP's largest soybean-producing district, supplying raw soy to India's major oil extraction and protein meal industries.",
        date: new Date(),
        location: "Rajgarh, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 55,
        image: "https://content.jdmagicbox.com/comp/def_content_category/soya-bean-oil-retailers/360-f-563924939-nfq5o21bbmjkvddqcyh3qne4fibhc4cj-soya-bean-oil-retailers-3-v46rm.jpg"
    },

    {
        title: "Ratlam Ratlami Sev",
        description: "Iconic spicy gram flour sev snack uniquely flavoured with cloves and black pepper — GI-tagged Ratlami Sev is a globally recognised Indian snack.",
        date: new Date(),
        location: "Ratlam, Madhya Pradesh",
        category: "Food",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 180,
        image: "https://bhagvatprasadam.com/cdn/shop/articles/132_ratlamisev_f0d7ee10-5719-434e-8b35-8da2a4b729cc.jpg?v=1758015830&width=1920"
    },

    {
        title: "Rewa White Tiger & Coal",
        description: "Rewa is world-famous as the home of the White Tiger (Govindgarh palace) and is also a major coal and limestone mining district of MP.",
        date: new Date(),
        location: "Rewa, Madhya Pradesh",
        category: "Mineral",
        totalAmount: 80000,
        availableAmount: 60000,
        productPrice: 80,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Bituminous_Coal.JPG"
    },

    {
        title: "Sagar Chanderi Block Print Fabric",
        description: "Hand block-printed cotton fabric using vegetable dyes — a traditional textile craft practiced by artisans of Sagar's weaving community.",
        date: new Date(),
        location: "Sagar, Madhya Pradesh",
        category: "Handloom",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 450,
        image: "https://content.jdmagicbox.com/quickquotes/images_main/elegant-floral-hand-block-printed-chanderi-fabric-803288633-b628m3xj.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
    },

    {
        title: "Satna Cement",
        description: "Satna is India's second-largest cement manufacturing cluster, home to major plants — its high-quality cement is used in pan-India construction.",
        date: new Date(),
        location: "Satna, Madhya Pradesh",
        category: "Industrial",
        totalAmount: 200000,
        availableAmount: 150000,
        productPrice: 400,
        image: "https://5.imimg.com/data5/WW/WW/GLADMIN-/mp-birla-cement-perfect-500x500.jpg"
    },

    {
        title: "Sehore Sharbati Wheat",
        description: "Premium Sharbati wheat from Sehore — the gold standard of Indian wheat, known for its softness, sweetness and large golden grain.",
        date: new Date(),
        location: "Sehore, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 60000,
        availableAmount: 42000,
        productPrice: 42,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqY61_vu42memM4CewNTMpoFKROWxCfMZfA&s"
    },

    {
        title: "Seoni Bamboo & Sal Forest Produce",
        description: "Sal timber, bamboo and minor forest produce collected by tribal communities of Seoni — a key source of eco-friendly raw materials for central India.",
        date: new Date(),
        location: "Seoni, Madhya Pradesh",
        category: "Forest Produce",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 120,
        image: "https://villagesquare.in/wp-content/uploads/2023/06/01-38.jpg"
    },

    {
        title: "Shahdol Tendu Leaf Collection",
        description: "Tendu (Diospyros melanoxylon) leaves collected by tribal workers of Shahdol for bidi rolling — a key forest revenue source of the Shahdol division.",
        date: new Date(),
        location: "Shahdol, Madhya Pradesh",
        category: "Forest Produce",
        totalAmount: 30000,
        availableAmount: 20000,
        productPrice: 25,
        image: "https://content.jdmagicbox.com/comp/def_content_category/tendu-leaf-exporters/0227e176f4-tendu-leaf-exporters-5-nbsnl.jpg"
    },

    {
        title: "Shajapur Soybean Oil",
        description: "Cold-pressed soybean oil extracted from the vast soy cultivation of Shajapur — a primary cooking oil and protein meal source for MP.",
        date: new Date(),
        location: "Shajapur, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 25000,
        availableAmount: 18000,
        productPrice: 140,
        image: "https://content.jdmagicbox.com/quickquotes/images_main/refined-soybean-oil-2217471026-vah2e9bh.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
    },

    {
        title: "Sheopur Dalia (Cracked Wheat)",
        description: "Nutrient-rich cracked wheat (dalia) milled from the wheat grown in the chambal valley of Sheopur — widely consumed as a healthy breakfast porridge.",
        date: new Date(),
        location: "Sheopur, Madhya Pradesh",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 60,
        image: "https://nuttyyogi.com/cdn/shop/products/Broken_Wheat1.jpg?v=1606373483"
    },

    {
        title: "Shivpuri Mukhwas & Rock Salt",
        description: "Traditional mukhwas (mouth freshener) using fennel, coriander seeds and betel leaf, sold widely at Shivpuri's market — also notable for rock salt trade.",
        date: new Date(),
        location: "Shivpuri, Madhya Pradesh",
        category: "Food",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 80,
        image: "https://m.media-amazon.com/images/I/51xNcrorsKL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Sidhi Mahua Liquor (Tribal Brew)",
        description: "Traditional Mahua flower-based country liquor — a cultural and economic staple of the tribal communities of Sidhi, prepared using forest Mahua flowers.",
        date: new Date(),
        location: "Sidhi, Madhya Pradesh",
        category: "Forest Produce",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYq1HVMsTAHbrVTe0591EL-Vas4QDaawFPQ&s"
    },

    {
        title: "Singrauli Coal Mining",
        description: "Singrauli is India's energy capital, home to massive coal mines (SECL & NCL) and thermal power plants supplying electricity to the national grid.",
        date: new Date(),
        location: "Singrauli, Madhya Pradesh",
        category: "Mineral",
        totalAmount: 500000,
        availableAmount: 400000,
        productPrice: 70,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Bituminous_Coal.JPG"
    },

    {
        title: "Tikamgarh Granite Stone",
        description: "Fine-grained black and grey granite quarried in Tikamgarh — widely used for flooring, countertops and monumental construction across India.",
        date: new Date(),
        location: "Tikamgarh, Madhya Pradesh",
        category: "Mineral",
        totalAmount: 80000,
        availableAmount: 60000,
        productPrice: 250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2qL9fTn-BcFAItP5U-cGPDnfGmh9DbHqoQ&s"
    },

    {
        title: "Ujjain Prasad Mahakal Ladoo",
        description: "Sacred besan ladoo offered as prasad at the Mahakaleshwar Jyotirlinga — a deeply spiritual food product emblematic of Ujjain's religious identity.",
        date: new Date(),
        location: "Ujjain, Madhya Pradesh",
        category: "Food",
        totalAmount: 20000,
        availableAmount: 15000,
        productPrice: 120,
        image: "https://imgs.etvbharat.com/etvbharat/prod-images/02-07-2023/1200-675-18896701-thumbnail-16x9-huijdf.jpg"
    },

    {
        title: "Umaria Bandhavgarh Tiger Reserve Honey",
        description: "Wild forest honey collected by tribal communities around Bandhavgarh Tiger Reserve — pure, organic and rich with the flavours of dense sal forests.",
        date: new Date(),
        location: "Umaria, Madhya Pradesh",
        category: "Forest Produce",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 400,
        image: "https://www.utmt.in/cdn/shop/products/Tiger_Reserve_Honey_1200x1200.jpg?v=1574932921"
    },

    {
        title: "Vidisha Sandalwood Carving",
        description: "Fine sandalwood carved idols, incense boxes and decorative articles crafted by artisans of Vidisha — inspired by the nearby Sanchi Buddhist heritage.",
        date: new Date(),
        location: "Vidisha, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 1800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOxmnmY-FpSWyfZ5nA1cnjP-0l-r1oly6TQ&s"
    },

    {
        title: "Jhabua Tribal Bhil Art & Pitchwai",
        description: "Vibrant Bhil tribal art — colourful dot paintings on paper and cloth depicting flora, fauna and village life — a living folk tradition of Jhabua's indigenous Bhil community.",
        date: new Date(),
        location: "Jhabua, Madhya Pradesh",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 700,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiNf-UXxHzALVykrIlvhzE5gmzcq5IqY9kg&s"
    },

    {
        title: "Mauganj Vindhyan Limestone",
        description: "High-grade limestone quarried in the Vindhyan ranges of Mauganj — a newly created district rich in sedimentary rock used for cement and construction.",
        date: new Date(),
        location: "Mauganj, Madhya Pradesh",
        category: "Mineral",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 120,
        image: "https://insgeo.com.ua/wp-content/uploads/2024/11/limestone-1024x738.jpg"
    },

    {
        title: "Pandhurna Soybean & Orange",
        description: "Pandhurna district produces soybean and Nagpur-variety oranges along the Madhya Pradesh–Maharashtra border — a fertile Vidarbha-fringe agri zone.",
        date: new Date(),
        location: "Pandhurna, Madhya Pradesh",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 55,
        image: "https://images.jdmagicbox.com/comp/def_content_category/soya-bean-seed-wholesalers/360-f-141302222-rzb3gwmiuhq4hb7mlokxdx8pebylyq1p-soya-bean-seed-wholesalers-1-vq3ki.jpg"
    },

    {
        title: "Maihar Maihar Devi Prasad Sweets",
        description: "Traditional pedas and besan barfi offered as temple prasad at Maihar's Sharda Devi Mandir — a sacred food product central to the pilgrimage economy of Maihar.",
        date: new Date(),
        location: "Maihar, Madhya Pradesh",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 150,
        image: "https://content.jdmagicbox.com/comp/maihar/s1/9999p7672.7672.170928102221.h8s1/catalogue/new-indore-sev-bhandar-maihar-maihar-sweet-shops-sg2nxbygpm-250.jpg"
    },

    // MIZORAM DATA----------------------------------------------------

    {
        title: "Aizawl Puan Handloom",
        description: "Traditional Mizo Puan — a handwoven wraparound cloth with intricate geometric patterns, worn as ceremonial attire and a cultural identity of Aizawl.",
        date: new Date(),
        location: "Aizawl, Mizoram",
        category: "Handloom",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 2500,
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/mizo-puanchei-Mizoram-1-craft-body?qlt=82&ts=1726641517469"
    },

    {
        title: "Champhai Grapes & Fruit Wine",
        description: "Fresh table grapes grown in the fertile valley of Champhai — also processed into locally produced fruit wine and juice, a unique Mizoram agri-product.",
        date: new Date(),
        location: "Champhai, Mizoram",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 80,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kyoho-grape.jpg/1280px-Kyoho-grape.jpg"
    },

    {
        title: "Hnahthial Bamboo Furniture",
        description: "Eco-friendly bamboo chairs, tables and storage crafted by artisans of Hnahthial, using abundant local bamboo from Mizoram's forests.",
        date: new Date(),
        location: "Hnahthial, Mizoram",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 1500,
        image: "https://images.pexels.com/photos/30947443/pexels-photo-30947443.jpeg"
    },

    {
        title: "Khawzawl Passion Fruit",
        description: "Organically grown passion fruit from the hilly terrain of Khawzawl — valued for its intense aroma, high vitamin C content and export potential.",
        date: new Date(),
        location: "Khawzawl, Mizoram",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 120,
        image: "https://m.media-amazon.com/images/I/41re5LpNYQL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Kolasib Ginger & Turmeric",
        description: "High-quality organic ginger and turmeric grown in the hill soils of Kolasib — key spice exports of Mizoram with strong medicinal properties.",
        date: new Date(),
        location: "Kolasib, Mizoram",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 8500,
        productPrice: 100,
        image: "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-110594416/110594416.jpg"
    },

    {
        title: "Lawngtlai Cane & Rattan Craft",
        description: "Handcrafted cane baskets, trays and furniture by the Chakma and Mara communities of Lawngtlai — a sustainable cottage industry of southern Mizoram.",
        date: new Date(),
        location: "Lawngtlai, Mizoram",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 600,
        image: "https://cdn.vastrashilpakosh.in//vol2/Cultural_AIP_Record/nift_del/cfp/nift_del-113-cfp/nift_del-113-cfp_main/Image/JPEG/nift_del-113-cfp-1p.jpeg"
    },

    {
        title: "Lunglei Bird's Eye Chilli (Raja Mirchi)",
        description: "Fiery Bird's Eye chilli grown in the steep slopes of Lunglei — among the hottest chillis in India, increasingly popular in Northeast cuisine and exports.",
        date: new Date(),
        location: "Lunglei, Mizoram",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 300,
        image: "https://i0.wp.com/theorganicmagazine.com/wp-content/uploads/2022/03/chilli-gc21a88e43_1920.jpg?resize=1110%2C833&ssl=1"
    },

    {
        title: "Mamit Teak & Timber",
        description: "Teak and other hardwood timber logged from Mamit's dense forests under sustainable forest management, used in furniture and construction.",
        date: new Date(),
        location: "Mamit, Mizoram",
        category: "Forest Produce",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 800,
        image: "https://maasantoshitimber.com/wp-content/uploads/2024/08/sagwan-wood-1-scaled.jpg"
    },

    {
        title: "Saiha Mara Tribal Weave",
        description: "Traditional handwoven Mara cloth with bright geometric bands — a unique tribal textile tradition exclusive to the Mara people of Saiha, southern Mizoram.",
        date: new Date(),
        location: "Saiha, Mizoram",
        category: "Handloom",
        totalAmount: 2000,
        availableAmount: 1400,
        productPrice: 2000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJSEco6Xncqxsjyq5HKpu-SxnRWP2Rrl76Q&s"
    },

    {
        title: "Saitual Anthurium Flowers",
        description: "Vibrant anthurium flowers grown in the cool subtropical climate of Saitual — a growing floriculture product of Mizoram with export demand.",
        date: new Date(),
        location: "Saitual, Mizoram",
        category: "Agriculture",
        totalAmount: 6000,
        availableAmount: 4000,
        productPrice: 150,
        image: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Purifies_indoor_air_93a48011-eb26-41f2-abea-b7c93eea55db.png?v=1680332279"
    },

    {
        title: "Serchhip Orange & Citrus",
        description: "Mandarin oranges (Santara) grown in the mountainous terrain of Serchhip — a key citrus horticultural crop of Mizoram with rich flavour.",
        date: new Date(),
        location: "Serchhip, Mizoram",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 60,
        image: "https://www.myindianproducts.com/images/gi_products/mizo_orange_lunglei__serchhip.jpg"
    },

    // NAGALAND DATA----------------------------------------------------

    {
        title: "Chumoukedima Naga Shawl",
        description: "Traditional handwoven Naga shawl (Angami/Chakhesang pattern) — a symbol of tribal identity and status, woven on backstrap looms with vibrant geometric motifs.",
        date: new Date(),
        location: "Chumoukedima, Nagaland",
        category: "Handloom",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 2000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PcljQZdfnu0riKE5mcXrbUmWIZXbrOpqeA&s"
    },

    {
        title: "Dimapur Handicraft Woodwork",
        description: "Naga warrior wooden carvings — head hunters' skulls, mithan horns and tribal totem carvings crafted by artisans in Dimapur's craft clusters.",
        date: new Date(),
        location: "Dimapur, Nagaland",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 1200,
        image: "https://assets.indiaonline.in/cg/Dimapur/City-Guide/bam.jpg"
    },

    {
        title: "Kiphire Ophite Stone Craft",
        description: "Decorative items crafted from locally sourced ophite (greenstone) in Kiphire — unique stone craft of Nagaland's easternmost district bordering Myanmar.",
        date: new Date(),
        location: "Kiphire, Nagaland",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1400,
        productPrice: 800,
        image: "https://m.media-amazon.com/images/I/8147qv3szeL._AC_UF1000,1000_QL80_.jpg"
    },

    {
        title: "Kohima Naga King Chilli (Bhut Jolokia)",
        description: "Kohima's iconic King Chilli (Bhut Jolokia) — once the world's hottest pepper, GI-tagged, grown organically in Nagaland's highlands and exported globally.",
        date: new Date(),
        location: "Kohima, Nagaland",
        category: "Agriculture",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 500,
        image: "https://4.imimg.com/data4/VG/TK/ANDROID-71168677/product-500x500.jpeg"
    },

    {
        title: "Longleng Woven Cane Basket",
        description: "Intricately woven cane and bamboo baskets by the Yimchungrü Naga community of Longleng — traditional containers used for farming and ceremonies.",
        date: new Date(),
        location: "Longleng, Nagaland",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 500,
        image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66e17ded0ea01000ab3474be/lum03297-480x480.jpg"
    },

    {
        title: "Mokokchung Ao Naga Shawl",
        description: "Handwoven Ao Naga shawl — distinctive black, red and white striped pattern, worn as a marker of lineage and achievement among the Ao tribe of Mokokchung.",
        date: new Date(),
        location: "Mokokchung, Nagaland",
        category: "Handloom",
        totalAmount: 3500,
        availableAmount: 2500,
        productPrice: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXuD7qo2fkpbwS_m0l5rX6s7DqZScHxxCeA&s"
    },

    {
        title: "Mon Konyak Tribal Jewelry",
        description: "Traditional Konyak Naga tribal jewelry — head-hunter necklaces of bone, bead and brass worn by the Konyak warriors of Mon, a prized cultural artifact.",
        date: new Date(),
        location: "Mon, Nagaland",
        category: "Handicraft",
        totalAmount: 2000,
        availableAmount: 1400,
        productPrice: 3000,
        image: "https://moncraftbazaar.com/wp-content/uploads/2023/10/Photo135.webp"
    },

    {
        title: "Niuland Organic Adi Maize",
        description: "Traditional heirloom maize varieties cultivated by tribal farmers of Niuland using jhum (shifting) cultivation — an organic heritage grain of Nagaland.",
        date: new Date(),
        location: "Niuland, Nagaland",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 70,
        image: "https://5.imimg.com/data5/SELLER/Default/2022/11/SA/AT/YP/42713652/organic-maize-grain.jpg"
    },

    {
        title: "Noklak Hornbill Craft",
        description: "Symbolic tribal items featuring the Great Hornbill motif — carved beads, headgear and ceremonial items crafted by Tangsa artisans of Noklak.",
        date: new Date(),
        location: "Noklak, Nagaland",
        category: "Handicraft",
        totalAmount: 1500,
        availableAmount: 1000,
        productPrice: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrcW8V0qHURzeC94don6aPQ3lh5UYoz6tCJg&s"
    },

    {
        title: "Peren Zeliang Handloom",
        description: "Handwoven Zeliang tribal cloth with traditional red and black geometric designs — a cultural textile of the Zeliang community of Peren, central Nagaland.",
        date: new Date(),
        location: "Peren, Nagaland",
        category: "Handloom",
        totalAmount: 2500,
        availableAmount: 1800,
        productPrice: 1800,
        image: "https://sueestore.com/cdn/shop/articles/IMG_20190726_143429.jpg?v=1717837007"
    },

    {
        title: "Phek Chakhesang Fermented Pork (Axone)",
        description: "Axone (akhuni) — traditional fermented soybean or pork condiment of the Chakhesang Naga tribe of Phek, a culturally iconic ingredient of Naga cuisine.",
        date: new Date(),
        location: "Phek, Nagaland",
        category: "Food",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaur6ot-PqSNiUx5p80_6zfnl3YHZo62Y9Q&s"
    },

    {
        title: "Shamator Yimchungrü Rice Beer (Zutho)",
        description: "Traditional Zutho — a mildly fermented rice beer brewed by Yimchungrü Naga women of Shamator for ceremonial and community occasions.",
        date: new Date(),
        location: "Shamator, Nagaland",
        category: "Food",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 150,
        image: "https://images.slurrp.com/prodarticles/ktygk420br.webp"
    },

    {
        title: "Tseminyu Rengma Naga Shawl",
        description: "Handwoven Rengma tribal shawl in white with red-bordered geometric patterns — a distinctive weave of the Rengma Naga community of Tseminyu.",
        date: new Date(),
        location: "Tseminyu, Nagaland",
        category: "Handloom",
        totalAmount: 2000,
        availableAmount: 1400,
        productPrice: 2200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PemEsUriYk4SvPFQlg7f_Mok0_z_gumLLw&s"
    },

    {
        title: "Tuensang Sangtam Tribal Weave",
        description: "Sangtam Naga traditional shawl with bold red, black and white patterns — a culturally significant handloom product of Tuensang woven for status and ritual.",
        date: new Date(),
        location: "Tuensang, Nagaland",
        category: "Handloom",
        totalAmount: 2500,
        availableAmount: 1800,
        productPrice: 2000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsW6ZLJArnT_VUDUPIvAwIvbSXNb7SScP2uA&s"
    },

    {
        title: "Wokha Lotha Naga Orange",
        description: "Wokha's mandarin orange (Sangtam Santra) — a celebrated citrus of Nagaland, cultivated on terraced hillsides and the pride of Lotha Naga farmers.",
        date: new Date(),
        location: "Wokha, Nagaland",
        category: "Agriculture",
        totalAmount: 12000,
        availableAmount: 8500,
        productPrice: 60,
        image: "https://i0.wp.com/eastmojo.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-28-at-4.14.24-PM.jpeg?resize=780%2C586&ssl=1"
    },

    {
        title: "Zunheboto Sumi Naga Shawl",
        description: "Handwoven Sumi Naga shawl with vibrant red, black and white striped patterns — a traditional Sumi textile gifted at weddings and ceremonies in Zunheboto.",
        date: new Date(),
        location: "Zunheboto, Nagaland",
        category: "Handloom",
        totalAmount: 3000,
        availableAmount: 2100,
        productPrice: 2200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD98FHlt8VIFBiN_rcajKay0SyzjOWDCIQMw&s"
    },

    {
        title: "Millet",
        description: "Heirloom black (purple) rice cultivated by Sumi Naga farmers on jhum fields of Zunheboto — prized for its anthocyanin-rich nutritional profile.",
        date: new Date(),
        location: "Meluri, Nagaland",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 160,
        image: "https://admin.bzindia.com/media/product_images/Sweet-Banana-Chips.jpg"
    },

    // ODISHA DATA----------------------------------------------------

    {
        title: "Angul Coal & Ferro Alloys",
        description: "Angul is home to NALCO and major ferro-alloy plants — a key industrial hub producing aluminum, coal and steel-grade ferro alloys for national industry.",
        date: new Date(),
        location: "Angul, Odisha",
        category: "Mineral",
        totalAmount: 300000,
        availableAmount: 250000,
        productPrice: 90,
        image: "https://content.jdmagicbox.com/quickquotes/images_main/premium-ferro-alloy-in-drum-packaging-802685448-8w6rf1d9.png?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
    },

    {
        title: "Balangir Sambalpuri Ikat Saree",
        description: "Traditional Sambalpuri ikat saree with double-ikat weaving — a GI-tagged handloom heirloom from western Odisha with vibrant tie-and-dye patterns.",
        date: new Date(),
        location: "Balangir, Odisha",
        category: "Handloom",
        totalAmount: 6000,
        availableAmount: 4200,
        productPrice: 2800,
        image: "https://static.fibre2fashion.com/articleresources/images/105/10498/1_files/image010.jpg?v=20250624T164459"
    },

    {
        title: "Balasore Hilsa Fish (Ilish)",
        description: "Prized Hilsa (Ilish) fish caught in the Subarnarekha and Budhabalanga rivers of Balasore — a delicacy celebrated for its rich, oily flesh.",
        date: new Date(),
        location: "Balasore, Odisha",
        category: "Food",
        totalAmount: 15000,
        availableAmount: 10000,
        productPrice: 600,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSL8mOhUp8WJTvAUGIdly9jfYeqGDEQ0Ksxg&s"
    },

    {
        title: "Bargarh Sambalpuri Handloom",
        description: "Bargarh is the heartland of Sambalpuri weaving — producing iconic double-ikat cotton and silk sarees with traditional flower and fish motifs.",
        date: new Date(),
        location: "Bargarh, Odisha",
        category: "Handloom",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 3000,
        image: "https://rashmisarees.com/cdn/shop/files/2025-01-23_20.53.40.jpg?v=1737696345&width=1920"
    },

    {
        title: "Bhadrak Tassar Silk Fabric",
        description: "Pure Tassar (Tasar) silk woven by tribal weavers of Bhadrak — a golden-hued wild silk fabric with natural texture, used for sarees and dress material.",
        date: new Date(),
        location: "Bhadrak, Odisha",
        category: "Handloom",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 3500,
        image: "https://5.imimg.com/data5/ANDROID/Default/2024/2/388402215/SX/WR/LY/73527426/product-jpeg.jpeg"
    },

    {
        title: "Boudh Stone Carving",
        description: "Intricate soapstone (khadistone) carvings of deities, temple panels and decorative artefacts crafted by artisans in Boudh district's craft villages.",
        date: new Date(),
        location: "Boudh, Odisha",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 1500,
        image: "https://www.orissapost.com/wp-content/uploads/2019/11/boudh-jagati-thra-gandharadhi-mandir-7.jpg"
    },

    {
        title: "Cuttack Silver Filigree (Tarakasi)",
        description: "GI-tagged Cuttack Tarakasi — delicate silver filigree jewellery and decorative items made by skilled artisans using fine silver threads twisted into lacy patterns.",
        date: new Date(),
        location: "Cuttack, Odisha",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuipF-8kGN2_6eO_GhQgiHkfBr_wilgmCSA&s"
    },

    {
        title: "Deogarh Dokra Metal Craft",
        description: "Dokra lost-wax cast brass figures of tribal gods, animals and decorative items — an ancient non-ferrous metal craft tradition of Deogarh's artisan communities.",
        date: new Date(),
        location: "Deogarh, Odisha",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 1200,
        image: "https://m.media-amazon.com/images/I/51pGIGdwRiL._AC_UF894,1000_QL80_.jpg"
    },

    {
        title: "Dhenkanal Tassar Silk Weaving",
        description: "Hand-woven tassar silk sarees and dress material produced by weavers' cooperatives in Dhenkanal — a key silk district of Odisha.",
        date: new Date(),
        location: "Dhenkanal, Odisha",
        category: "Handloom",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 3000,
        image: "https://media.licdn.com/dms/image/v2/D4D12AQHmQa7lSekw1g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694689658347?e=2147483647&v=beta&t=koL4rdpoT1-rJagO8uyGayKG-osoEBYTW6-roJ57nS0"
    },

    {
        title: "Gajapati Koraput Black Rice",
        description: "Heirloom black (purple) rice grown by tribal farmers of Gajapati — a nutritional superfood rich in anthocyanins, traditionally cultivated without chemical inputs.",
        date: new Date(),
        location: "Gajapati, Odisha",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 160,
        image: "https://tiimg.tistatic.com/fp/1/009/448/black-rice-369.jpg"
    },

    {
        title: "Ganjam Berhampur Silk Saree (Phoda Kumbha)",
        description: "GI-tagged Berhampur Silk Saree from Ganjam — famous for its rich body and broad golden zari border, a prized bridal saree of Odisha.",
        date: new Date(),
        location: "Ganjam, Odisha",
        category: "Handloom",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 5000,
        image: "https://www.azafashions.com/blog/wp-content/uploads/2025/12/img-baba7508e52c88e50d9c467f15aa6774.jpeg"
    },

    {
        title: "Jagatsinghpur Prawn & Seafood",
        description: "Tiger prawn and brackish water shrimp farmed in the coastal wetlands of Jagatsinghpur — a leading seafood export hub of Odisha.",
        date: new Date(),
        location: "Jagatsinghapur, Odisha",
        category: "Food",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 700,
        image: "https://c.files.bbci.co.uk/3BCE/production/_128501351_smp_5070.jpg"
    },

    {
        title: "Jajpur Chromite Ore",
        description: "Jajpur is India's chromite capital, housing major chromite mines that supply high-grade ore for ferrochrome and stainless steel production.",
        date: new Date(),
        location: "Jajpur, Odisha",
        category: "Mineral",
        totalAmount: 200000,
        availableAmount: 160000,
        productPrice: 120,
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2017-10/31/full/1509469196-2568.jpg"
    },

    {
        title: "Jharsuguda Power & Aluminum",
        description: "Jharsuguda is Odisha's power city, home to Vedanta's aluminium smelter and major thermal power plants supplying electricity across eastern India.",
        date: new Date(),
        location: "Jharsuguda, Odisha",
        category: "Industrial",
        totalAmount: 500000,
        availableAmount: 400000,
        productPrice: 200,
        image: "https://d1rbiogke1jwo5.cloudfront.net/wp-content/uploads/2021/05/Aluminium-Smelter-Jharsuguda2.jpg"
    },

    {
        title: "Kalahandi Kosal Cotton Dhoti",
        description: "Traditional Kosal cotton dhoti handwoven in Kalahandi's weaving villages — a durable, coarse-cotton daily wear with a coloured border.",
        date: new Date(),
        location: "Kalahandi, Odisha",
        category: "Handloom",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 400,
        image: "https://m.media-amazon.com/images/I/61zDw-PDOcL._AC_UY1100_.jpg"
    },

    {
        title: "Kandhamal Organic Turmeric",
        description: "GI-tagged Kandhamal Haladi (turmeric) — organically grown by tribal Kondh farmers on forest hill slopes, world-renowned for its high curcumin content.",
        date: new Date(),
        location: "Kandhamal, Odisha",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 200,
        image: "https://freshindiaorganics.com/cdn/shop/products/WhatsAppImage2023-02-25at4.54.46PM_1.jpg?v=1677487596"
    },

    {
        title: "Kendrapara Kenduli Hilsa (Ilish)",
        description: "Fresh Hilsa (Ilish) fish from the Mahanadi delta waters of Kendrapara — prized for its fat, flavour and cultural significance in Odia cuisine.",
        date: new Date(),
        location: "Kendrapara, Odisha",
        category: "Food",
        totalAmount: 12000,
        availableAmount: 8500,
        productPrice: 650,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREPS4NNPHjAFJk-0PcLT2EHDlKTFhR1G_Njg&s"
    },

    {
        title: "Keonjhar Iron Ore Mining",
        description: "Keonjhar is India's largest iron ore-producing district, supplying raw ore to steel plants in Odisha, Jharkhand and West Bengal.",
        date: new Date(),
        location: "Kendujhar (Keonjhar), Odisha",
        category: "Mineral",
        totalAmount: 500000,
        availableAmount: 400000,
        productPrice: 65,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHGqbKMHinVXsMeAOHdqNc3F6y2w38qevfw&s"
    },

    {
        title: "Khordha Puri Jagannath Temple Prasad",
        description: "Sacred Mahaprasad of Puri Jagannath Temple — cooked in 752 earthen pots over a wood fire, offered to Lord Jagannath and distributed as divine food.",
        date: new Date(),
        location: "Khordha, Odisha",
        category: "Food",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2raTNfmezquQLnFO4gnFOdTXsmYplITv2w&s"
    },

    {
        title: "Koraput Jeypore Tribal Jewelry",
        description: "Traditional silver and brass tribal jewelry of the Kondh, Bonda and Gadaba tribes of Koraput — rings, necklaces and anklets with distinctive tribal motifs.",
        date: new Date(),
        location: "Koraput, Odisha",
        category: "Handicraft",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55YdAEiraGN1ZQln88hdl04FXPP3IPXszfQ&s"
    },

    {
        title: "Malkangiri Chitrakoot Waterfall Eco Produce",
        description: "Organic forest honey, tamarind and sal seed collected by tribal communities near Chitrakoot waterfall in Malkangiri — a pristine eco-produce of south Odisha.",
        date: new Date(),
        location: "Malkangiri, Odisha",
        category: "Forest Produce",
        totalAmount: 6000,
        availableAmount: 4200,
        productPrice: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPjPcwib1Uh6sYWVNSS1mbGGZi7DESWhdhw&s"
    },

    {
        title: "Mayurbhanj Chhau Mask & Craft",
        description: "Chhau dance masks and tribal crafts from Mayurbhanj — GI-tagged Mayurbhanj Chhau dance traditions and handmade paper-mache masks used in Seraikella performances.",
        date: new Date(),
        location: "Mayurbhanj, Odisha",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 600,
        image: "https://shop.gaatha.com/image/catalog/Gaatha/07_12_2019/%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8C%E0%A4%9F%E0%A4%BE-Chhau-Mask-B.jpg"
    },

    {
        title: "Nabarangpur Tribal Bamboo Craft",
        description: "Eco-friendly bamboo mats, baskets and containers crafted by tribal artisans of Nabarangpur using bamboo from the Eastern Ghats forests.",
        date: new Date(),
        location: "Nabarangpur, Odisha",
        category: "Handicraft",
        totalAmount: 6000,
        availableAmount: 4200,
        productPrice: 350,
        image: "https://content.jdmagicbox.com/comp/def_content_category/bamboo-handicraft-manufacturers/360-f-499346509-yqppyap2j1frbkyx2x7hbqz3mhu89l01-bamboo-handicraft-manufacturers-3-irkys.jpg"
    },

    {
        title: "Nayagarh Pattachitra Painting",
        description: "Pattachitra — traditional cloth scroll paintings on a mixture of chalk and gum base depicting tales of Jagannath, Ramayana and Mahabharata by artisans of Nayagarh.",
        date: new Date(),
        location: "Nayagarh, Odisha",
        category: "Handicraft",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 1000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbjFZejq9OfyoOZURKNJz5EbTH_k0ZBiFeg&s"
    },

    {
        title: "Nuapada Kosa Silk",
        description: "Fine kosa silk yarn reeled from wild silkworm cocoons collected in the forests of Nuapada — a prized raw material for traditional Odisha silk weaving.",
        date: new Date(),
        location: "Nuapada, Odisha",
        category: "Handloom",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 2000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNw990-upaFrctLXoHbGe-6o6bJTdnLphxw&s"
    },

    {
        title: "Puri Pipli Applique Work",
        description: "Vibrant Pipli applique craft — colourful cut-cloth decoration stitched on black or dark background for temple canopies (chhata), wall hangings and bags.",
        date: new Date(),
        location: "Puri, Odisha",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 600,
        image: "https://static.toiimg.com/thumb/47585661.cms?resizemode=75&width=1200&height=900"
    },

    {
        title: "Rayagada Dongria Kondh Turmeric",
        description: "Organic turmeric cultivated by the Dongria Kondh tribal community of Rayagada on the Niyamgiri hill slopes — chemical-free, forest-flavoured spice.",
        date: new Date(),
        location: "Rayagada, Odisha",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 180,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0GYgf8IWwmaY6WkEPCqKF8NPZNtbMogwJA&s"
    },

    {
        title: "Sambalpur Sambalpuri Saree (Sonepur)",
        description: "Traditional Sambalpuri double-ikat handwoven saree from Sambalpur — a GI-tagged weave with bold fish, flower and shell motifs in vibrant colours.",
        date: new Date(),
        location: "Sambalpur, Odisha",
        category: "Handloom",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 3500,
        image: "https://rotarynewsonline.org/wp-content/uploads/2022/11/saree.jpg"
    },

    {
        title: "Sonepur Cattle Fair Leather Goods",
        description: "Handcrafted leather goods — saddles, sandals and bags — traded and manufactured around the famous Sonepur Cattle Fair (Balunkeswar Mela), Asia's largest animal fair.",
        date: new Date(),
        location: "Sonepur, Odisha",
        category: "Handicraft",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 500,
        image: "https://c8.alamy.com/comp/E8RPB9/yearly-animal-fair-in-sonepur-bihar-india-E8RPB9.jpg"
    },

    {
        title: "Sundargarh Iron & Steel Products",
        description: "Sundargarh is home to Rourkela Steel Plant (SAIL) — India's first integrated steel plant, producing structural steel, plates and tubes for national infrastructure.",
        date: new Date(),
        location: "Sundargarh, Odisha",
        category: "Industrial",
        totalAmount: 500000,
        availableAmount: 400000,
        productPrice: 75,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/11/464958282/MG/MO/DG/1083675/stainless-steel-product.jpg"
    },

    // UTTARAKHAND DATA----------------------------------------------------

    {
        title: "Almora Bal Mithai",
        description: "GI-tagged Almora Bal Mithai — a dark brown khoya fudge coated with white sugar balls, the iconic sweet of the Kumaon hills of Uttarakhand.",
        date: new Date(),
        location: "Almora, Uttarakhand",
        category: "Food",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 300,
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Bal_mithai.jpg"
    },

    {
        title: "Bageshwar Aipan Folk Art",
        description: "Traditional Kumaoni Aipan — a ritual floor and wall painting made with rice paste, featuring geometric and nature motifs by women artisans of Bageshwar.",
        date: new Date(),
        location: "Bageshwar, Uttarakhand",
        category: "Handicraft",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 500,
        image: "https://itokri.com/cdn/shop/articles/explore-folk-heritage-traditional-aipan-art-uttarakhand.webp?v=1762951715"
    },

    {
        title: "Chamoli Kedarnath Valley Rajma",
        description: "Organic red kidney beans (Rajma) grown at high altitude in Chamoli's Niti valley — a prized mountain legume with a rich, creamy texture and earthy flavour.",
        date: new Date(),
        location: "Chamoli, Uttarakhand",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 200,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/12/365446673/DK/JU/YQ/3164894/kidney-beans-250x250.png"
    },

    {
        title: "Champawat Chyura Butter (Ghee)",
        description: "Pure clarified butter (ghee) extracted from Chyura (Mahua of the hills) seeds — a tribal forest-based fat used in Kumaoni cooking and Ayurvedic preparations.",
        date: new Date(),
        location: "Champawat, Uttarakhand",
        category: "Forest Produce",
        totalAmount: 5000,
        availableAmount: 3500,
        productPrice: 600,
        image: "https://i0.wp.com/www.feltandagro.com/wp-content/uploads/2023/10/chiuri_ghee_butter.png?fit=590%2C424&ssl=1"
    },

    {
        title: "Dehradun Basmati Rice",
        description: "GI-tagged Dehradun Basmati — a slender, long-grain aromatic rice grown in the Doon valley's unique microclimate, considered among the world's finest Basmati varieties.",
        date: new Date(),
        location: "Dehradun, Uttarakhand",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 200,
        image: "https://foodsofnations.com/cdn/shop/files/a1-500x500.jpg?v=1754674834"
    },

    {
        title: "Haridwar Ayurvedic Herbal Products",
        description: "Patanjali and traditional Ayurvedic herbal medicines, oils and health products manufactured and traded in Haridwar — a global hub for Ayurveda and wellness.",
        date: new Date(),
        location: "Haridwar, Uttarakhand",
        category: "Agriculture",
        totalAmount: 50000,
        availableAmount: 35000,
        productPrice: 300,
        image: "https://medlineplus.gov/images/HerbalMedicine_share.jpg"
    },

    {
        title: "Nainital Apple & Fruit",
        description: "Fresh Himalayan apples and pears grown in the orchards of Nainital's hills — a key fruit production zone of Uttarakhand with export-quality produce.",
        date: new Date(),
        location: "Nainital, Uttarakhand",
        category: "Agriculture",
        totalAmount: 20000,
        availableAmount: 14000,
        productPrice: 100,
        image: "https://c8.alamy.com/comp/2ARA18W/apple-fruit-tree-sitla-estate-sheetla-nainital-kumaon-uttarakhand-india-asia-2ARA18W.jpg"
    },

    {
        title: "Pauri Garhwal Ring Antu (Bhang) Products",
        description: "Hemp (Bhang/Cannabis sativa) seeds, oil and fibre products from Pauri Garhwal — legally used in traditional medicine, food (oil, seeds) and rope-making.",
        date: new Date(),
        location: "Pauri Garhwal, Uttarakhand",
        category: "Agriculture",
        totalAmount: 8000,
        availableAmount: 5500,
        productPrice: 250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85CrJsK0nqIpNInCWIC3N_kzvCR4E_8JniA&s"
    },

    {
        title: "Pithoragarh Pashmina Shawl",
        description: "Hand-spun and hand-woven Pashmina shawls crafted in the high-altitude villages of Pithoragarh bordering Tibet — ultra-soft, lightweight and luxuriously warm.",
        date: new Date(),
        location: "Pithoragarh, Uttarakhand",
        category: "Handloom",
        totalAmount: 3000,
        availableAmount: 2000,
        productPrice: 5000,
        image: "https://images.jdmagicbox.com/quickquotes/images_main/raelyn-40x80-kalamkari-pashmina-shawl-382737274-2e2ju.jpg"
    },

    {
        title: "Rudraprayag Kedarnath Mandua (Finger Millet)",
        description: "Organic Mandua (Ragi/Finger Millet) cultivated in the high valleys of Rudraprayag — a nutritional staple of Garhwali diet made into rotis and porridge.",
        date: new Date(),
        location: "Rudraprayag, Uttarakhand",
        category: "Agriculture",
        totalAmount: 10000,
        availableAmount: 7000,
        productPrice: 90,
        image: "https://umaexim.co.in/product_images/Untitled%20design%20(2).webp"
    },

    {
        title: "Tehri Garhwal Ring Antu Wool Carpet",
        description: "Hand-knotted woollen carpets and namdas made by artisans of Tehri Garhwal using local sheep wool — a traditional mountain craft of the Garhwal Himalayas.",
        date: new Date(),
        location: "Tehri Garhwal, Uttarakhand",
        category: "Handloom",
        totalAmount: 4000,
        availableAmount: 2800,
        productPrice: 3000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQE-S2TyJTmfWIoJ8diVvTfd6OYN20_aSsA&s"
    },

    {
        title: "Udham Singh Nagar Wheat & Sugarcane",
        description: "Udham Singh Nagar's fertile Terai plains produce high-yield wheat and sugarcane — the district hosts major sugar mills and is the food basket of Uttarakhand.",
        date: new Date(),
        location: "Udham Singh Nagar, Uttarakhand",
        category: "Agriculture",
        totalAmount: 60000,
        availableAmount: 42000,
        productPrice: 35,
        image: "https://www.apnikheti.com/upload/advisosry/advisosry_thumb/idea99udham_singh_nagar_crops.jpg"
    },

    {
        title: "Uttarkashi Gangotri Herbs & Medicinal Plants",
        description: "High-altitude medicinal herbs — Brahmi, Kutki, Jatamansi and Atees — collected from the Himalayan slopes of Uttarkashi near Gangotri glacier by tribal collectors.",
        date: new Date(),
        location: "Uttarkashi, Uttarakhand",
        category: "Forest Produce",
        totalAmount: 6000,
        availableAmount: 4200,
        productPrice: 800,
        image: "https://tiimg.tistatic.com/fp/1/009/230/garden-plant-988.jpg"
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
