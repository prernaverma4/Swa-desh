const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const heritageSites = [
  // {
  //   name: "Ancient Nalanda University’s Ruins",
  //   state: "Bihar",
  //   district: "Nalanda",
  //   category: "Historical",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "The Establishment Of Mahavira Was Formed By The Emperor Kumar Gupta In The Fifth Century A.D. From The 5th To 12th Century The Knowledge Of This Place Was In The State Of Climax.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3f85454e8279be180185cac7d243c5eb3/uploads/2019/09/2019111382.jpg",
  // },
  // {
  //   name: "Takhat Sri Harimandir Ji Patna Sahib",
  //   state: "Bihar",
  //   district: "Patna",
  //   category: "Religious",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "Takhat Sri Harimandir ji Patna Sahib TAKHAT SRI HARIMANDIR JI PATNA SAHIB is considered the second holiest Takhat.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3fb7b9ffa5462084c5f4e7e85a093e6d7/uploads/2024/08/2024082425.jpeg",
  // },
  // {
  //   name: "Kakolat Water Fall",
  //   state: "Bihar",
  //   district: "Nawada",
  //   category: "Natural / Scenic beauty",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "Kakolat Waterfall, often referred to as the Kashmir of Bihar, is a majestic natural cascade located in the Nawada district of Bihar, India.",
  //   image: "https://pbs.twimg.com/media/GjUI-qsaMAA7MPP.jpg",
  // },
  // {
  //   name: "Mahabodhi",
  //   state: "Bihar",
  //   district: "Gaya",
  //   category: " Buddhist pilgrimage",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "Bodh Gayā is a religious site and place of pilgrimage associated with the Mahabodhi Temple complex, situated in the Gaya district in the Indian state of Bihar.",
  //   image:
  //     "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/12/shutterstock_402120757-1.webp",
  // },
  // {
  //   name: "Karamchat Dam",
  //   state: "Bihar",
  //   district: "Rohtas",
  //   category: "Natural / Scenic beauty",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "One of the most preferred tourist sites in Rohtas district, located near Chenari, is around 35 kms from Sasaram.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3cbcb58ac2e496207586df2854b17995f/uploads/2022/01/2022011417-1-scaled.jpg",
  // },
  // {
  //   name: "Ashoka Pillar",
  //   state: "Bihar",
  //   district: "Vaishali",
  //   category: "Stupa",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "Emperor Ashoka built The Lion Pillar at Kolhua. It is made of a highly polished single piece of red sandstone, surmounted by a bell shaped capital, 18.3 m high.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3285e19f20beded7d215102b49d5c09a0/uploads/2017/06/2018032893.jpg",
  // },
  // {
  //   name: "Gandhi Memorial Chandrahiah",
  //   state: "Bihar",
  //   district: "East Champaran",
  //   category: "Historic",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "Chandrahiya is a village in Bihar’s East Champaran district. Chandrahiya holds a special position in the Champaran movement.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3bac9162b47c56fc8a4d2a519803d51b3/uploads/2018/03/2018033063.jpg",
  // },
  // {
  //   name: "Naulakha Temple",
  //   state: "Bihar",
  //   district: "Begusarai",
  //   category: "Historic",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Naulakha Temple is located in Bishanpur of Begusarai district. It was built by saint Mahavir Das in 1953.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3f4be00279ee2e0a53eafdaa94a151e2c/uploads/2018/04/2018041749.jpg",
  // },
  // {
  //   name: "Sita Kund",
  //   state: "Bihar",
  //   district: "Munger",
  //   category: "Historic",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "The one Place, which puts Munger on the one of the most visited place, is known as Sita-Kund.",
  //   image:
  //     "https://s7ap1.scene7.com/is/image/incredibleindia/sitakund-gaya-bihar-1-attr-hero?qlt=82&ts=1726740731339",
  // },
  // {
  //   name: "Umga Temple",
  //   state: "Bihar",
  //   district: "Aurangabad",
  //   category: "Historic",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "Umga is one of the famous tourist attractions in Aurangabad. Located 24-km to the east of the city, the pilgrim center houses a Vaishnava temple.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3250cf8b51c773f3f8dc8b4be867a9a02/uploads/2018/05/2018050949.jpg",
  // },

  // Gujrat

  {
    name: "Aatapi Wonderland",
    state: "Gujarat",
    district: "Vadodara",
    category: "Recreational",
    annualVisitors: 450000,
    views: 12000,
    description:
      "Aatapi Wonderland- AATAPI Wonderland, Gujarat’s Largest Theme Park is spread across 70 acres at Vadodara.",
    image:
      "https://cdn.s3waas.gov.in/s3b2f627fff19fda463cb386442eac2b3d/uploads/2021/11/2021110339.jpg",
  },
  {
    name: "Baps Swaminarayan Mandir",
    state: "Gujarat",
    district: "Chhotaudaipur",
    category: "Religious",
    annualVisitors: 500000,
    views: 15000,
    description:
      "BAPS Swaminarayan temple is located around 35 km from main town of Chhota Udepur district.",
    image:
      "https://cdn.s3waas.gov.in/s3e2a2dcc36a08a345332c751b2f2e476c/uploads/2018/09/2018093070.jpg",
  },
  {
    name: "Chamunda Mataji Temple–chotila",
    state: "Gujarat",
    district: "Surendra Nagar ",
    category: "Natural / Scenic beauty",
    annualVisitors: 300000,
    views: 8000,
    description:
      "Chotila is a small town having population of around 20,000 people and is a taluka head quarter of Surendranagar district, Gujarat.",
    image:
      "https://cdn.s3waas.gov.in/s3c15da1f2b5e5ed6e6837a3802f0d1593/uploads/2018/08/2018080811.jpeg",
  },
  {
    name: "Chatardi",
    state: "Gujarat",
    district: "Kachchh ",
    category: "Historic",
    annualVisitors: 1000000,
    views: 20000,
    description:
      "About a 20-minute walk southwest of Hamirsar lake, through open areas that no longer seem like you’re in the city, are the royal cenotaphs.",
    image:
      "https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018092476.jpg",
  },
  {
    name: "Junaraj",
    state: "Gujarat",
    district: "Narmada",
    category: "Scenic beauty",
    annualVisitors: 1500000,
    views: 25000,
    description:
      "Junaraj campsite is located in Satpuda mountain range, in the catchment area of Karjan Dam.",
    image:
      "https://cdn.s3waas.gov.in/s396ea64f3a1aa2fd00c72faacf0cb8ac9/uploads/2018/08/2018081621.jpg",
  },
  {
    name: "Ambaji Temple",
    state: "Gujarat",
    district: "Banaskantha",
    category: "Historic",
    annualVisitors: 250000,
    views: 5000,
    description:
      "Ambaji, a famous pilgrimage place of Gujarat in India is situated on the border of States of Gujarat and Rajasthan near Abu Road, in the Danta Taluka of Banaskantha District.",
    image:
      "https://temple.yatradham.org/public/Product/temple/temple_eUAuDb9v_202408041802080.jpg",
  },
  {
    name: "Dwarkadhish Temple",
    state: "Gujarat",
    district: "Devbhumi Dwarka",
    category: "Historic",
    annualVisitors: 350000,
    views: 9000,
    description:
      "Lord Sri Krishna temple in Gomati coast is holy, which temple is known as DWARKADHISH Temple.",
    image:
      "https://www.daiwikhotels.com/wp-content/uploads/2024/07/Dwarkadish-temple-2.jpg",
  },
  {
    name: "Mahabat Maqbara",
    state: "Gujarat",
    district: "Junagadh",
    category: "Historic",
    annualVisitors: 400000,
    views: 11000,
    description:
      "Mahabat Maqbara Palace, also Mausoleum of Bahaduddinbhai Hasainbhai, is a mausoleum in Junagadh, India.",
    image:
      "https://cdn.s3waas.gov.in/s3470e7a4f017a5476afb7eeb3f8b96f9b/uploads/2017/06/2018071177.jpg",
  },
  {
    name: "Panchasara Jain Temple",
    state: "Gujarat",
    district: "Patan",
    category: "Historic",
    annualVisitors: 150000,
    views: 3000,
    description:
      "Panchasara Jain Temple is situated at middle of Patan town. There are as many as 100 and more temples in Patan dedicated to various gods including a number of Jain temples.",
    image:
      "https://cdn.s3waas.gov.in/s3f340f1b1f65b6df5b5e3f94d95b11daf/uploads/2018/03/2018040636.jpg",
  },
  {
    name: "Shamlaji Temple",
    state: "Gujarat",
    district: "Arvalli",
    category: "Historic",
    annualVisitors: 200000,
    views: 4500,
    description:
      "Shamlaji temple is situated on the banks of the river Meshwo in the northeast of the Arvalli district.",
    image:
      "https://cdn.s3waas.gov.in/s36e0721b2c6977135b916ef286bcb49ec/uploads/2018/12/2018121764.jpg",
  },

  // West Bengal

  // {
  //   name: "Adina Eco Tourism Park",
  //   state: "West Bengal",
  //   district: "Malda",
  //   category: "Natural / Scenic beauty",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "Upcoming attraction at Adina, Gazole, an eco-park completely nature friendly and filled with greenery.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s349ae49a23f67c759bf4fc791ba842aa2/uploads/2022/02/2022021130.jpeg",
  // },
  // {
  //   name: "Batasia Loop & Gorkha War Memorial",
  //   state: "West Bengal",
  //   district: "Darjiling ",
  //   category: "Historic,Natural ",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "On the way to Darjeeling from Siliguri by the famous Toy Train journey passes through the Batasia Loop (A Windy Place) and the War Memorial.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s322fb0cee7e1f3bde58293de743871417/uploads/2020/08/2020080478-1.jpg",
  // },
  // {
  //   name: "Hajarduari Palace",
  //   state: "West Bengal",
  //   district: "Murshidabad",
  //   category: "Historic",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "Hazarduari Palace, earlier known as the Bara Kothi, is located in the campus of Kila Nizamat in Murshidabad.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3c9f0f895fb98ab9159f51fd0297e236d/uploads/2021/01/2021012785.jpg",
  // },
  // {
  //   name: "Howrah Bridge",
  //   state: "West Bengal",
  //   district: "Howrah",
  //   category: "Historic",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "An iconic landmark in Kolkata, the Howrah Bridge is a huge steel bridge over the Hooghly River.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s353e3a7161e428b65688f14b84d61c610/uploads/2021/10/2021100892.jpg",
  // },
  // {
  //   name: "Jaigaon",
  //   state: "West Bengal",
  //   district: "Alipurdua",
  //   category: "Scenic beauty",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "About Jaigaon is a small town in Alipurduar District in the Indian state of West Bengal. near the Bhutan border",
  //   image:
  //     "https://cdn.s3waas.gov.in/s33636638817772e42b59d74cff571fbb3/uploads/2023/02/2023022026.jpg",
  // },
  // {
  //   name: "Jhargram Zoological Park",
  //   state: "West Bengal",
  //   district: "Jhargram",
  //   category: "Other",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "This small zoo and about 2 km from the town. This Zoological Park was opened by the state forest department.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3aeb3135b436aa55373822c010763dd54/uploads/2019/07/2019073151.jpg",
  // },
  // {
  //   name: "Rock Garden & Gangamaya Park",
  //   state: "West Bengal",
  //   district: "Darjiling",
  //   category: "Adventure",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "The Rock Garden (also known as Barbotey Rock Garden) at Chunnu Summer Falls and Ganga Maya Park are recently added tourist attractions in the hilly town of Darjeeling in the state of West Bengal, India.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s322fb0cee7e1f3bde58293de743871417/uploads/2020/09/2020092191.jpg",
  // },
  // {
  //   name: "Ram Krishna Mission",
  //   state: "West Bengal",
  //   district: "Bardhaman",
  //   category: " Recreational",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Asansol Ramakrishna Mission High School is an Bengali-medium school for boys in Asansol, West Bengal, India.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s332bb90e8976aab5298d5da10fe66f21d/uploads/2021/06/2021061746.jpg",
  // },
  // {
  //   name: "Rajabhatkhawa",
  //   state: "West Bengal",
  //   district: "Alipurduar",
  //   category: "Scenic beauty",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "About Rajabhatkhawa is a small town situated just outside the Buxa Tiger Reserve in the Alipurduardistrict of West Bengal.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s33636638817772e42b59d74cff571fbb3/uploads/2023/02/2023022015.jpg",
  // },
  // {
  //   name: "Adina Mosque",
  //   state: "West Bengal",
  //   district: "Malda",
  //   category: "Historic",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "It was the largest structure of its kind in the Indian subcontinent and was built during the Bengal Sultanate as a royal mosque by Sikandar Shah.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s349ae49a23f67c759bf4fc791ba842aa2/uploads/2022/02/2022020819.jpg",
  // },

  // Madhya Pradesh

  // {
  //   name: "The Fort",
  //   state: "Madhya Pradesh",
  //   district: "Gwalior",
  //   category: "Historical",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "Standing on a steep mass of sandstone, Gwalior Fort dominates the city and is its most significant monument.",
  //   image:
  //     "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerPV64RylqHspxa4InpcVJTwXWuy00e3mCROmKl3mOmaGsDf5xDlqIPqt-XUQrNMk5qbKjfgii-dZ4sdIhkP3A1qDJoY-MIuuk49jGnLso1-Mq3vVEH7qI9Aism85vM82BlYekL7I3v6M2X=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Baldev Ji Temple",
  //   state: "Madhya Pradesh",
  //   district: "Panna",
  //   category: "Religious",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "The Baldevji Temple has been inspired by a Roman architecture and has a gothic feel to it.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3d645920e395fedad7bbbed0eca3fe2e0/uploads/2019/07/2019071888.jpg",
  // },
  // {
  //   name: "Bhimkund",
  //   state: "Madhya Pradesh",
  //   district: "Chhatarpur",
  //   category: "Natural / Scenic beauty",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "Bhimkund (also known as Neelkund) is a natural water tank and a holy place in Madhya Pradesh, India. ",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3f1b6f2857fb6d44dd73c7041e0aa0f19/uploads/2022/01/2022010460.jpg",
  // },
  // {
  //   name: "Bhopawar Jain Tirth",
  //   state: "Madhya Pradesh",
  //   district: "Dhar ",
  //   category: "Religious",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "The Sardarpur tehsil headquarter of Dhar district is Bhopawar Jain Tirth.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s31068c6e4c8051cfd4e9ea8072e3189e2/uploads/2023/07/2023073124-1-1024x478.jpg",
  // },
  // {
  //   name: "Fort of Ater",
  //   state: "Madhya Pradesh",
  //   district: "Bhind ",
  //   category: "Historic",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "It was built by Bhadauria King Badan Singh, Maha Singh and Bakhat Singh in the era 1664-1668 after them the area is known as BADHWAR.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3fde9264cf376fffe2ee4ddf4a988880d/uploads/2018/05/2019061266.jpg",
  // },
  // {
  //   name: "Gurudwara Badi Sangat-Priceless Heritage",
  //   state: "Madhya Pradesh",
  //   district: "Burhanpur",
  //   category: "Historic",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "The holy banks of sacred Tapti bear witness not only to the times of royal kingdoms but have also been appeased by the gracious presence of legendary saints and gurus.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3d81f9c1be2e08964bf9f24b15f0e4900/uploads/2019/07/2019070975-1.jpg",
  // },
  // {
  //   name: "Hatta Ki Bawdi: A Historical Wonder",
  //   state: "Madhya Pradesh",
  //   district: "Balaghat",
  //   category: "Historic",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "Hatta Ki Bawdi: A Historical Wonder Located in Hatta village, Balaghat district, Madhya Pradesh, Hatta Ki Bawdi is a historic stepwell built by Gond King Hate Singh Valke.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s35d44ee6f2c3f71b73125876103c8f6c4/uploads/2025/02/2025021899.jpeg",
  // },
  // {
  //   name: "Hinglajgarh Fort",
  //   state: "Madhya Pradesh",
  //   district: "Mandsaur",
  //   category: "Historic",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Hinglajgarh Fort is located in Bhanpura Block of Mandsaur district, Madhya Pradesh, in the village of Nawali.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3ac627ab1ccbdb62ec96e702f07f6425b/uploads/2025/05/2025050822-e1746703042821.png",
  // },
  // {
  //   name: "Jama Masjid-Symbol Of Unity And An Architectural Marvel",
  //   state: "Madhya Pradesh",
  //   district: "Burhanpur",
  //   category: "Historic",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "Located in the heart of the city and constructed in black Sangekhara stone, the Jama Masjid is not only a hallmark of architectural marvel but also exemplifies cultural unity of that era.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3d81f9c1be2e08964bf9f24b15f0e4900/uploads/2025/04/2025050112.jpg",
  // },
  // {
  //   name: "Kadwaya(Isagarh)",
  //   state: "Madhya Pradesh",
  //   district: "Ashok Nagar",
  //   category: "Historic",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "Village Kadwaya Situated in the Ashoknagar district of Madhya Pradesh, the village of Kadwaya holds a distinct identity as a significant historical, religious, and tourist destination. ",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3a5e00132373a7031000fd987a3c9f87b/uploads/2026/03/17749575121552-1024x768.jpg",
  // },

  // Haryana

  // {
  //   name: "Ashok Pillar",
  //   state: "Haryana",
  //   district: "Fatehabad",
  //   category: "Historic",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "Ashok Pillar lies at the centre of an Idgah at Fatehabad. The stone pillar is little less than 5 metres in height and 1.90 meteres in circumference from the base.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s36cdd60ea0045eb7a6ec44c54d29ed402/uploads/2017/06/2018052144.jpg",
  // },
  // {
  //   name: "Bhuteshwar Temple",
  //   state: "Haryana",
  //   district: "Jind ",
  //   category: "Historic,Natural ",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "It has been renovated and a tourist complex has been built nearby. The other places of worship are the temples of Hari Kailash , tanks of Surya Kund, Jawala Maleshvara tirath.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3218a0aefd1d1a4be65601cc6ddc1520e/uploads/2018/02/2018031333.jpg",
  // },
  // {
  //   name: "Chhatta Rai Bal Mukand Dass (Birbal Ka Chhatta)",
  //   state: "Haryana",
  //   district: "Mahendragarh ",
  //   category: "Historic",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "This historic monument was built by Divya Rai Mukund Das of Narnaul during the reign of Shah Jahan.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s338913e1d6a7b94cb0f55994f679f5956/uploads/2018/03/2018030199.jpg",
  // },
  // {
  //   name: "Chaneti Bhudhist Stupa",
  //   state: "Haryana",
  //   district: "Yamuna Nagar",
  //   category: "Historic",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "There is a grand Tomb of 8 meters in height made of bricks, in the area of about 100 sq meters near the village. Made in round shape, this is an old Buddhist Stupa.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3428fca9bc1921c25c5121f9da7815cde/uploads/2018/06/2018060686.jpg",
  // },
  // {
  //   name: "Ferozepur Jhirka",
  //   state: "Haryana",
  //   district: "Nuh",
  //   category: "Scenic beauty",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "The historical town Ferozepur Jhirka, a tehsil of the Nuh district, is situated on the main road of Gurgaon to Alwar, about 82 km south of Gurgaon and 150 km south of Delhi.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3941e1aaaba585b952b62c14a3a175a61/uploads/2018/04/2018040165.jpg",
  // },
  // {
  //   name: "Gandhi Museum",
  //   state: "Haryana",
  //   district: "Palwal",
  //   category: "Other",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "Gandhi Seva Ashram( Museum) is situated in Palwal. The Gandhi Museum is close to Palwal Railway Station.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3b6d767d2f8ed5d21a44b0e5886680cb9/uploads/2018/05/2018052138.jpg",
  // },
  // {
  //   name: "Jogiwala Mandir",
  //   state: "Haryana",
  //   district: "Bhiwani",
  //   category: "Adventure",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "Jogiwala Mandir is one of the prime locations of Bhiwani Tourism.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3069059b7ef840f0c74a814ec9237b6ec/uploads/2017/03/2018031359.jpg",
  // },
  // {
  //   name: "Kabuli Bagh Mosque, Panipat",
  //   state: "Haryana",
  //   district: "Panipat",
  //   category: " Recreational",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Samrat Hem Chandra Vikramaditya, popularly called Hemu became the Emperor of India, defeating Mughal Emperor Akbar in the Battle of Delhi-1556.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s338b3eff8baf56627478ec76a704e9b52/uploads/2018/02/2018021585.jpg",
  // },
  // {
  //   name: "Kapil Muni Tirtha, Kalayat",
  //   state: "Haryana",
  //   district: "Kaithal",
  //   category: "Scenic beauty",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description: "This shrine named Kapilmuni is about 26 km from Kaithal. ",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3a666587afda6e89aec274a3657558a27/uploads/2020/11/2020112616-1024x672.jpg",
  // },
  // {
  //   name: "Nada Sahib",
  //   state: "Haryana",
  //   district: "Panchkula",
  //   category: "Religious",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "The Gurudwara Nada Sahib is situated in Panchkula on the bank of Ghaggar river in Sivalik foothills.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s39b8619251a19057cff70779273e95aa6/uploads/2017/06/2018021751.jpg",
  // },

  //  Assam

  // {
  //   name: "Saraighat War Memorial Park",
  //   state: "Assam",
  //   district: "Kamrup",
  //   category: "Natural",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "The Saraighat War Memorial Park at Kamrup, Guwahati, commemorates the historic 1671 Battle of Saraighat on the Brahmaputra banks",
  //   image: "https://kamrup.assam.gov.in/sites/default/files/2022-03/SWMP1.jpg",
  // },
  // {
  //   name: "Aswakranta Devalaya",
  //   state: "Assam",
  //   district: "Kamrup ",
  //   category: "Religious ",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "Aswakranta Devalaya, often spelled as Aswaklanta Temple, is a renowned Hindu temple dedicated to Lord Vishnu, located on the northern bank of the Brahmaputra River in North Guwahati, Assam.",
  //   image:
  //     "https://kamrup.assam.gov.in/sites/default/files/public_utility/Aswakranta%20%282%29.jpg",
  // },
  // {
  //   name: "Chandubi",
  //   state: "Assam",
  //   district: "Kamrup",
  //   category: "Lake",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "Chandubi Lake is a scenic natural waterbody located in Assam's Kamrup district, about 64 km from Guwahati.",
  //   image:
  //     "https://kamrup.assam.gov.in/sites/default/files/public_utility/1a.jpg",
  // },
  // {
  //   name: "Hayagriva-Madhab Temple",
  //   state: "Assam",
  //   district: "Kamrup",
  //   category: "Religious",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "The Hayagriva Madhava Temple, located on Monikut Hill in Hajo, Assam, is a revered 16th-century stone temple dedicated to Lord Vishnu’s horse-headed avatar, Hayagriva.",
  //   image:
  //     "https://kamrup.assam.gov.in/sites/default/files/public_utility/Hayagriva1.jpg",
  // },
  // {
  //   name: "Kaziranga National Park ",
  //   state: "Assam",
  //   district: "Golaghat",
  //   category: "Wildlife",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "Kaziranga National Park, located in Assam, India, is a premier UNESCO World Heritage Site famous for harboring over two-thirds of the world’s great one-horned rhinoceros population.",
  //   image:
  //     "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/03/kaziranga_national_park-2.webp",
  // },
  // {
  //   name: "Majuli Island",
  //   state: "Assam",
  //   district: "Majuli",
  //   category: "Satras & Culture",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "Majuli, located in the Brahmaputra River in Assam, is the world's largest river island and a prominent cultural, spiritual, and ecological hub.",
  //   image:
  //     "https://www.indiantempletour.com/wp-content/uploads/2023/04/Majuli-Island.webp",
  // },
  // {
  //   name: "Tea Gardensk",
  //   state: "Assam",
  //   district: "Dibrugarh",
  //   category: "Halmari Tea ",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "Assam, the world's largest tea-growing region, features over 1,000 tea gardens, offering unique tourism experiences like heritage bungalow stays, tea tasting.",
  //   image: "https://nexplore.org/images/tour/tea-tour-assam-b.webp",
  // },
  // {
  //   name: "Manas National Park",
  //   state: "Assam",
  //   district: "Barpeta",
  //   category: "Park",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Manas National Park is a national park, Project Tiger reserve, and an elephant reserve in Assam, India.",
  //   image:
  //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b2/68/28/royal-manas-national.jpg?w=1200&h=-1&s=1",
  // },
  // {
  //   name: "Kamakhya Temple",
  //   state: "Assam",
  //   district: "Guwahati",
  //   category: "Temple",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "Kamakhya Mondir is a Hindu temple at Nilachal hills in Guwahati, Assam.",
  //   image:
  //     "https://i0.wp.com/thefloatingpebbles.com/wp-content/uploads/2025/02/IMG_3676-Edit-768x1024-1.jpg?resize=768%2C1024&ssl=1",
  // },
  // {
  //   name: "Sri Sri Auni Aatiya Satra",
  //   state: "Assam",
  //   district: "Kamrup",
  //   category: "Historic",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "Sri Sri Auniati Satra occupied the highest position amongst the various Satras of Assam in the eyes of the Ahom Kings.",
  //   image:
  //     "https://kamrup.assam.gov.in/sites/default/files/2022-03/AuniHati.jpg",
  // },

  // // Chhattisgarh

  // {
  //   name: "Barsur - An Archaeological Treasure",
  //   state: "Chhattisgarh",
  //   district: "Dantewada",
  //   category: "  Temple  ",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "Once the Capital of Nagavansh Raja Banasur, Barsur is a fond destination for one who love history and ancient sculptures.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3556f391937dfd4398cbac35e050a2177/uploads/2018/06/2018061044.jpg",
  // },
  // {
  //   name: "Bhoramdev Temple,Kawardha",
  //   state: "Chhattisgarh",
  //   district: "Kawardha ",
  //   category: "Temple ",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "Bhoramdeo a thousand year old temple situated in Chouragaon is 18 km from Kawardha in Kabirdham district of Chhattisgarh and 125 Km from Raipur.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s328dd2c7955ce926456240b2ff0100bde/uploads/2018/03/2018032284.jpg",
  // },
  // {
  //   name: "Gangrel Dam",
  //   state: "Chhattisgarh",
  //   district: "Dhamtari ",
  //   category: "Scenic beauty",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "Gangrel Dam: Another name of the Gangrel Dam is Ravishankar Dam. In the Dhamtari District, this location is quite a famous spot for the visitors.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3b5dc4e5d9b495d0196f61d45b26ef33e/uploads/2018/04/2018042841.jpg",
  // },
  // {
  //   name: "Gaurghat Waterfall",
  //   state: "Chhattisgarh",
  //   district: "Koriya",
  //   category: "River",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "This waterfall is situated on the Hasdeo River, at a distance of 35 kilometers from the district headquarters of Korea.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s37750ca3559e5b8e1f44210283368fc16/uploads/2018/06/2025022533-scaled.jpeg",
  // },
  // {
  //   name: "Giraudpuri Dham",
  //   state: "Chhattisgarh",
  //   district: "Baloda Bazar",
  //   category: "Scenic beauty",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "Situated by the confluence of the Mahanadi and Jonk rivers, 40 KM from Balodabazar and 80 km from Bilaspur, the Giroudpuri Dham is one of Chhattisgarh’",
  //   image:
  //     "https://cdn.s3waas.gov.in/s304ecb1fa28506ccb6f72b12c0245ddbc/uploads/2018/01/2018052162.jpg",
  // },
  // {
  //   name: "Madku Islands",
  //   state: "Chhattisgarh",
  //   district: "Mungeli",
  //   category: "Natural Beauty",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "Mudku Island The natural beauty in the form of island is very ancient delightful place, as it is divided into two parts of the river Shivnath river.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3051e4e127b92f5d98d3c79b195f2b291/uploads/2018/05/2018050914.jpg",
  // },
  // {
  //   name: "Maitri Bagh",
  //   state: "Chhattisgarh",
  //   district: "Durg",
  //   category: "Park",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "A zoo cum children’s park, maintained by the Bhilai Steel Plant. The highlights of the Zoo are exotic animal and avian species, lake, toy trains and others.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3851ddf5058cf22df63d3344ad89919cf/uploads/2018/05/2018050471.jpg",
  // },
  // {
  //   name: "Peerless beauty Of Teemed",
  //   state: "Chhattisgarh",
  //   district: "Bijapur",
  //   category: " River",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "The Indravati river forms the border between Chhattisgarh and Maharashtra, near the village of Teemed adjacent to Bhopalpatnam.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3d395771085aab05244a4fb8fd91bf4ee/uploads/2021/01/2021011872.jpg",
  // },
  // {
  //   name: "Mahant Ghasi Memorial Museum",
  //   state: "Chhattisgarh",
  //   district: "Raipur",
  //   category: "Museum",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "The Mahant Ghasidas Memorial Museum in Raipur, Chhattisgarh, established in 1875 by Raja Mahant Ghasidas.",
  //   image: "https://www.touristplaces.net.in/images/pp/4/p96393.jpg",
  // },
  // {
  //   name: "Achanakmar Wildlife Sanctuary and Malhar",
  //   state: "Chhattisgarh",
  //   district: "Bilaspur",
  //   category: "Biodiverse Forest",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "Achanakmar Tiger Reserve (Chhattisgarh) offers dense Sal/bamboo forests and wildlife safaris (Nov-June), featuring tigers, leopards, and bison. ",
  //   image:
  //     "https://inditales.com/wp-content/uploads/2012/04/achanakmar-wildlife-sanctuary-tiger-reserve-chhattisgarh.jpg",
  // },

  // // Jammu and Kashmir

  // {
  //   name: "Wullar Vantage Park",
  //   state: "Jammu and Kashmir",
  //   district: "Bandipore",
  //   category: "Adventure,Natural",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "Wullar Vantage Park is a scenic eco-tourism destination located near Wular Lake, one of the largest freshwater lakes in Asia, in the Bandipora district of Jammu and Kashmir, India.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2018/12/17579166249691.jpg",
  // },
  // {
  //   name: "Ziarat Hazrat Zain-Ud-Din Wali",
  //   state: "Jammu and Kashmir",
  //   district: "Ananthnag",
  //   category: "Historic,Religious",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "Located about 20 km away from Pahalgam, this shrine is situated on top of a hillock which is 100 feet high.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s330ef30b64204a3088a26bc2e6ecf7602/uploads/2025/01/2025012276.jpg",
  // },
  // {
  //   name: "Yusmarg",
  //   state: "Jammu and Kashmir",
  //   district: "Budgam",
  //   category: "Religious",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "Nestled in the heart of the breathtaking Budgam district of Jammu and Kashmir, Yusmarg, often referred to as the “Meadows of Jesus,",
  //   image:
  //     "https://cdn.s3waas.gov.in/s31141938ba2c2b13f5505d7c424ebae5f/uploads/2018/09/2018091439.jpg",
  // },
  // {
  //   name: "Tarsar And Marsar Lake",
  //   state: "Jammu and Kashmir",
  //   district: "Pulwama",
  //   category: "Historic",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "The Tarsar and Marsar lakes are the two most significant lakes of Pulwama District. The Tarsar and Marsar lakes are situated 3km and 5km away, respectively, from the village of Nagberan.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3c75b6f114c23a4d7ea11331e7c00e73c/uploads/2018/05/2018051948.png",
  // },
  // {
  //   name: "Akhnoor Fort",
  //   state: "Jammu and Kashmir",
  //   district: "Jammu",
  //   category: "Historic",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "The Akhnoor fort which lies towards east of the town, on the bank of the Chenab river holds great significance and is extremely important for reconstruction of the past history.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3979d472a84804b9f647bc185a877a8b5/uploads/2018/08/2018081472.jpeg",
  // },
  // {
  //   name: "Badamwari",
  //   state: "Jammu and Kashmir",
  //   district: "Srinagar",
  //   category: "Historic",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "The early bloom of flowers on Almond trees in the sprawling historic Badamwari garden in Shahr-e-Khaas has become a source of attraction for nature lovers and tourists, alike.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3f4b9ec30ad9f68f89b29639786cb62ef/uploads/2018/11/2018112482.jpg",
  // },
  // {
  //   name: "Doodadhari Temple",
  //   state: "Jammu and Kashmir",
  //   district: "Rajauri",
  //   category: "Historic",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "Dudhadhari Temple, also known by the name of Dudhadhari Barfani Ashram, is situated in Rajouri .",
  //   image:
  //     "https://cdn.s3waas.gov.in/s31aa48fc4880bb0c9b8a3bf979d3b917e/uploads/2017/06/2018082834.jpg",
  // },
  // {
  //   name: "Gadsar Lake",
  //   state: "Jammu and Kashmir",
  //   district: "Ganderbal",
  //   category: "Lake",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Sonmarg with its primitive and idyllic feel offers respite from city life. You can go soul searching to Gadsar Lake.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3192fc044e74dffea144f9ac5dc9f3395/uploads/2017/06/2018113038.jpg",
  // },
  // {
  //   name: "Gurez Valley",
  //   state: "Jammu and Kashmir",
  //   district: "Bandipore",
  //   category: "Adventure",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "Gurez Valley, also known as Gurais, is a remote valley in the Himalayas of Jammu and Kashmir, India. It’s located in the Bandipore District.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2025/09/17582620919409.jpg",
  // },
  // {
  //   name: "Krimachi",
  //   state: "Jammu and Kashmir",
  //   district: "Udhampur",
  //   category: "Religious",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "Group of Temples Krimachi Krimachi is a small village in Udhampur district of Jammu & Kashmir UT.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s33cec07e9ba5f5bb252d13f5f431e4bbb/uploads/2021/04/2021040135-scaled.jpg",
  // },

  // // Ladakh

  // {
  //   name: "Nubra Valley",
  //   state: "Ladakh",
  //   district: "Leh",
  //   category: "Scenic beauty",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "Situated about 120km north from Leh town, NubraValley is known as the orchard of Ladakh and was originally called ‘Ldumra’ which means the valley of flowers.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3291597a100aadd814d197af4f4bab3a7/uploads/2017/06/2018081488.jpg",
  // },
  // {
  //   name: "Shargole",
  //   state: "Ladakh",
  //   district: "Kargil",
  //   category: "Cave",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "The monastery or gonpa perched atop a rocky hill that dominates the valley and in the past it served as an outpost to guard the carvan route between Kashmir and Ladakh.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s341ae36ecb9b3eee609d05b90c14222fb/uploads/2018/09/2018091097.jpg",
  // },
  // {
  //   name: "Tsomoriri Lake",
  //   state: "Ladakh",
  //   district: "Leh",
  //   category: "Natural / Scenic beauty",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "It is one of the surreal places to explore in Ladakh, located in Changthang plateau at about 4000metres above sea level and is about 19 km.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3291597a100aadd814d197af4f4bab3a7/uploads/2018/10/2018100930.jpg",
  // },
  // {
  //   name: "Zanskar",
  //   state: "Ladakh",
  //   district: "Kargil",
  //   category: " Lakes",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "Two small, turquoise, high altitude lakes with camping sites, and views of the surrounding permafrost mountains are the highlights of the Penzi La pass.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s341ae36ecb9b3eee609d05b90c14222fb/uploads/2018/09/2018091139.jpg",
  // },
  // {
  //   name: "Lamayuru – The Moonscape for tourist",
  //   state: "Ladakh",
  //   district: "Leh ",
  //   category: "Religious",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "It is known as the Moonland of Ladakh and situated at a distance of 115 km(s) from Leh.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3291597a100aadd814d197af4f4bab3a7/uploads/2017/06/2018100921.jpg",
  // },
  // {
  //   name: "Suru Valley",
  //   state: "Ladakh",
  //   district: "Kargil",
  //   category: "Wilderness",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "Sankoo:- At a distance of 40kms from Kargil town Suru Valley is a beautiful destination with green land scape.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s341ae36ecb9b3eee609d05b90c14222fb/uploads/2018/09/2018091178.jpg",
  // },
  // {
  //   name: "Shanti Stupa",
  //   state: "Ladakh",
  //   district: "Leh",
  //   category: "Religious",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "The stupa is perched atop a small hill in Leh, the capital town of Ladakh. Shanti Stupa offers a stunning panoramic view of the city and the surrounding villages.",
  //   image:
  //     "https://s7ap1.scene7.com/is/image/incredibleindia/shanti-stupa-leh-ladakh-1-attr-hero?qlt=82&ts=1726667857753",
  // },
  // {
  //   name: "Hanle",
  //   state: "Ladakh",
  //   district: "Leh ",
  //   category: "Scenic beauty",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Hanle is a remote village in Ladakh, 260 km(approx.) away from Leh, situated at an altitude of about 4,500 meters.",
  //   image:
  //     "https://traveltradejournal.com/wp-content/uploads/2024/01/Hanle-Ladakh-1.jpg",
  // },
  // {
  //   name: "Hemis National Park",
  //   state: "Ladakh",
  //   district: "Leh",
  //   category: "Natural Park",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "To cherish the exotic and rare wildlife species, endangered flora and pristine wilderness, one must not miss exploring Hemis National Park.",
  //   image:
  //     "https://d1zvcmhypeawxj.cloudfront.net/blogs/cover_web/hemis-national-park-webp-bac8cb2c62-1762423799217.webp",
  // },
  // {
  //   name: "Drass",
  //   state: "Ladakh",
  //   district: "Kargil",
  //   category: "Tourist  Compex",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "Drass has become an important halting place for travellers going to Leh and Kargil.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s341ae36ecb9b3eee609d05b90c14222fb/uploads/2018/09/2018101343.jpg",
  // },

  // //Raushan 2

  // {
  //   name: "Neermahal (Twijilikma Nuyung)",
  //   state: "Tripura",
  //   district: "Sepahijala",
  //   category: "Royal Palace",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "Neermahal (Twijilikma Nuyung) is located in the Sepahijala District of Tripura, India.",
  //   image:
  //     "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq-jqMSB0EKrDj90uztsNwqGG-5kxbGgfHOLTPNZl2T5dRAZMdDLnVSrLHUS4Gwnm7xZOPOU5gLPZ1UpPBJxeRqZ4hWO1wk7yVFOmNmn_B07A4HjLJi9KDe2J6Oc7Glf92WJ6A=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Fourteen Gods' and Goddesses' Temple",
  //   state: "Tripura",
  //   district: "West Tripura",
  //   category: "Temple",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "Fourteen Goddess Temple is located about 14 Km. away from Agartala at a place called Old Agartala.",
  //   image:
  //     "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepupGPfJByBJ7-YLbZjiNifekX9XjSSxlXXJ3vj6ZLmZeWFAiIUHh1omE3Dhq3PtYHm9nXTMFAXZkR_W2sdx41UsjZNF9ORkunNCdC71RZB0u71WMiU4drRip4S5rNYxqe8iQoQUg=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Unakoti Rock Carvings",
  //   state: "Tripura",
  //   district: "Unakoti",
  //   category: "Rock-Cut Sculptures ",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "The Unakoti Rock Carvings are located in the Unakoti District of Tripura, India, specifically near Kailashahar in the northern part of the state.",
  //   image:
  //     "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2bEbCFlnkzPAZiqtLAgC05AtDjR5ZPTIXGmtkce6XxBHo7EKNOZ7pJ3BmGD8w2WnQXc9YPGIIoHPIQggVIsCQgT6Udujhg-6bCXPKE5vkGEHEkKelSr146w0_Xf2_LzEcbokB4=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Rudrasagar Lake",
  //   state: "Tripura",
  //   district: "Sepahijala",
  //   category: " Lakes",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "Rudrasagar Lake is located in the Sepahijala district of Tripura, India. Situated specifically in the Melaghar block of the Sonamura sub-division.",
  //   image:
  //     "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2Y8aAnAvR5-ML_rvHspgxInmJQVcOSCQMPwIO1p2Lq888BpYA9H0G0tCm9k8bpbtXpm-PshIAanYedCk_RPcJH_Aq9gda0b-RO2WPqkqgcpZZD0oKWbuG94Ns31enPfGrW2tU7OxA=w533-h300-n-k-no",
  // },
  // {
  //   name: "Heritage Park",
  //   state: "Tripura",
  //   district: "West Tripura ",
  //   category: "Park ",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "The Heritage Park is located in West Tripura district, specifically in the capital city of Agartala near Shyamali Bazar.",
  //   image:
  //     "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerWDcy9NMv0gvOm_i0lEYRXV4md0wtRZSyjiRVtkSwmr9vGluehRz9NgeOKtvDm-4iB_hl4KGrcia2aX3xuKxrp-m2P35xt_J7RvOUzg3TdSyF2sGehyJI2WwuPKLPFu8Iel3Qo=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Pilak Historical Stupa",
  //   state: "Tripura",
  //   district: " South Tripura",
  //   category: "Buddhist ",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "Pilak is an archaeological site in the Santirbazar sub-division of South Tripura district of the Indian state of Tripura.",
  //   image:
  //     "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2burxmblv3lbfKEG-qYzgd0LYq9UXUjQtaRQM-3IjIUTOBXHdvYRdbUYVrCmxMOsK76RNWCwgrfqSQw60779WcWWoxRRNQv4DXqc1cmNr9Dl_unUE7zjyuXf6dmMYUlzGNLlC4=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Tepania Eco Park",
  //   state: "Tripura",
  //   district: "Gomati",
  //   category: "Park",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "Tepania Eco Park is a 155-hectare scenic nature park in Tripura, India, established in 1995 within the Radhakishorepur Reserve Forest.",
  //   image:
  //     "https://lh3.googleusercontent.com/gps-cs-s/AHVAweodc_6Dw27HhCQR7NT54MC6tVIKtW-9dcJQ_WjheuQGz0Y_e0KuBT5NVcelL5rx3BZIcG1usQmgGefSxokleIUUR8ftKm_1v07a9Nrd8eNrE_vXLSu2cdxaDolbddKcoXRTmwl8=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Dharmanagar",
  //   state: "Tripura",
  //   district: "North Tripura ",
  //   category: "Scenic beauty",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Dharmanagar is located in the North Tripura district of the state of Tripura in India.",
  //   image:
  //     "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqRufcSk53kfWSIQTCBXi-2IWC4QcRjg4foWD5zG7E_FppF8d3ejodDkF6ytmukgJ5BmERqEKhfs1B5UL9qEfhQ8f2q77ezRM065LnApO67ZoP-SdjhPHYmLHlK-xRz409cec-F5w=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Dumboor",
  //   state: "Tripura",
  //   district: "Dhalai ",
  //   category: "Famous Islands",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "Dumboor Lake is primarily located in the Dhalai District of Tripura, specifically within the Gandacherra Sub-Division.",
  //   image:
  //     "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoBUo1kQI0xbhoYHS9GMlVNJJHHcvI5lC9sMdMjZ_B8VSCpPN-XLfj8frvLYQSzQB9DqAAz8Nd3gTvz2kKHrU_hlNkLVwfvTZK2cIL9gsHpOjGhg_-4-RNls_rrf9sgv135ksGGzA=s1360-w1360-h1020-rw",
  // },
  // {
  //   name: "Tripura State Museum",
  //   state: "Tripura",
  //   district: "West Tripura",
  //   category: "Museum",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "The Tripura State Museum is located in the West Tripura district, situated within the Ujjayanta Palace in the state capital, Agartala.",
  //   image:
  //     "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerTWp-U7Qat4Q8xd4oEVk1PSydlpB6KUIEuFN10LOM6eJxIbXxLZi4dDiW8HBvY17xNAc5G9_L6Elshsu3u93VV4rob0-LPyDr9WPx6TVLPqypPsxFVAqeoHMjS0yN9ZjV-aFIK1g=s1360-w1360-h1020-rw",
  // },

  // Sikkim

  {
    name: "Daramdin",
    state: "Sikkim",
    district: "Soreng",
    category: "Scenic beauty",
    annualVisitors: 450000,
    views: 12000,
    description:
      "Daramdin is a market village in the Soreng district situated at an approximately 120 Km from the capital town Gangtok.",
    image:
      "https://cdn.s3waas.gov.in/s3f457c545a9ded88f18ecee47145a72c0/uploads/2022/08/2022080526-1.jpg",
  },
  {
    name: "Buddha Park (Tathagata Tsal)",
    state: "Sikkim",
    district: "Namchi ",
    category: "Religious",
    annualVisitors: 500000,
    views: 15000,
    description:
      "At the base of Maenam Hill is Ravangla, a small township and transit to various tourist destinations in South Sikkim and West Sikkim.",
    image:
      "https://cdn.s3waas.gov.in/s38757150decbd89b0f5442ca3db4d0e0e/uploads/2017/06/2018081452.jpg",
  },
  {
    name: "Dentam",
    state: "Sikkim",
    district: "Gyalshing",
    category: "Forest",
    annualVisitors: 300000,
    views: 8000,
    description:
      "Dentam is a scenic village located 10 km from Varsey in West Sikkim District. It lies at an elevation of around 1,500m.",
    image:
      "https://cdn.s3waas.gov.in/s3c9e1074f5b3f9fc8ea15d152add07294/uploads/2018/05/2018051467.jpg",
  },
  {
    name: "Chuli Dara, Soreng",
    state: "Sikkim",
    district: "Soreng",
    category: " Scenic beauty",
    annualVisitors: 1000000,
    views: 20000,
    description:
      "Hill top view point located at Soreng is a perfect location for hiking and most importantly to capture the mesmerising view of sunrise.",
    image:
      "https://cdn.s3waas.gov.in/s3f457c545a9ded88f18ecee47145a72c0/uploads/2025/05/2025051771.jpg",
  },
  {
    name: "Changu Lake",
    state: "Sikkim",
    district: "Gangtok ",
    category: "Lake",
    annualVisitors: 1500000,
    views: 25000,
    description:
      "the ethereally beautiful Tsomgo lake is a must on every visitors itinerary.",
    image:
      "https://cdn.s3waas.gov.in/s399bcfcd754a98ce89cb86f73acc04645/uploads/2018/12/2018122918.jpg",
  },
  {
    name: "Karma Rabdenling Goenpa, Ralong",
    state: "Sikkim",
    district: "Namchi",
    category: "Religious",
    annualVisitors: 250000,
    views: 5000,
    description:
      "The hallowed Karma Rabdenling Goenpa of Ralong near Rabong is the oldest Karma Kagyu goenpa of Sikkim. ",
    image:
      "https://cdn.s3waas.gov.in/s38757150decbd89b0f5442ca3db4d0e0e/uploads/2021/08/2021080638.jpeg",
  },
  {
    name: "Gurudongmar Lake",
    state: "Sikkim",
    district: "North Sikkim",
    category: "Lake",
    annualVisitors: 350000,
    views: 9000,
    description:
      "Gurudongmar Lake is one of the highest lakes in the world and in India, located at an altitude of 17,800 ft (5,430 m), in the Indian state of Sikkim.",
    image:
      "https://cdn.s3waas.gov.in/s39cc138f8dc04cbf16240daa92d8d50e2/uploads/2018/04/2018042627.jpg",
  },
  {
    name: "Seven Sister Falls",
    state: "Sikkim",
    district: "North Sikkim  ",
    category: "Waterfall ",
    annualVisitors: 400000,
    views: 11000,
    description:
      "The Seven Sister Falls is located 32 km from Gangtok along the National Highway leading to North Sikkim.",
    image:
      "https://cdn.s3waas.gov.in/s39cc138f8dc04cbf16240daa92d8d50e2/uploads/2019/01/2019010367.jpg",
  },
  {
    name: "Vrindavan Dham",
    state: "Sikkim",
    district: "Soreng",
    category: "Religious ",
    annualVisitors: 150000,
    views: 3000,
    description:
      "TVrindavan is in of the most important hindu pilgrimage site. So, the Govt. of Sikkim has taken an initiative to construct the Vrindavan dham is Dodak.",
    image:
      "https://cdn.s3waas.gov.in/s3f457c545a9ded88f18ecee47145a72c0/uploads/2025/05/2025051754-1024x768.jpg",
  },
  {
    name: "Utteray",
    state: "Sikkim",
    district: "Gyalshing ",
    category: "Singsor Bridge",
    annualVisitors: 200000,
    views: 4500,
    description:
      "Situated in the west district of Sikkim, you can reach Uttarey from Pelling, Gezing or Dentum. ",
    image:
      "https://cdn.s3waas.gov.in/s3c9e1074f5b3f9fc8ea15d152add07294/uploads/2017/06/2018051433.jpg",
  },

  // Nagaland

  {
    name: "Ecs longpang",
    state: "Nagaland",
    district: "Tuensang",
    category: "Scenic beauty",
    annualVisitors: 450000,
    views: 12000,
    description:
      "ECS (Eleutheros Christian Society) is a social organisation located in the most remotest region of North East India. ",
    image:
      "https://cdn.s3waas.gov.in/s3fe131d7f5a6b38b23cc967316c13dae2/uploads/2018/04/2018041862.jpg",
  },
  {
    name: "Doyang Hydro Project",
    state: "Nagaland",
    district: "Wokha",
    category: "River",
    annualVisitors: 500000,
    views: 15000,
    description:
      "Doyang river is one of the most important river in the district. It is the biggest and longest rivers which run near the state’s southern boundary.",
    image:
      "https://cdn.s3waas.gov.in/s37f5d04d189dfb634e6a85bb9d9adf21e/uploads/2018/09/2018091391.jpg",
  },
  {
    name: "Mt Kisa",
    state: "Nagaland",
    district: "Peren ",
    category: "Natural / Scenic beauty",
    annualVisitors: 300000,
    views: 8000,
    description:
      "In the Southernmost end of the Peren district and close to the border with the state is Mt. Kisa which is located in the Nzauna village.",
    image:
      "https://cdn.s3waas.gov.in/s32dea61eed4bceec564a00115c4d21334/uploads/2018/10/2018102514.jpg",
  },
  {
    name: "Satoi Range",
    state: "Nagaland",
    district: "Zunheboto",
    category: "Forest",
    annualVisitors: 1000000,
    views: 20000,
    description:
      "Satoi Range is one of the only remaining virgin forests in Zunheboto district. This range is surrounded by lush green trees and vegetation.",
    image:
      "https://cdn.s3waas.gov.in/s350c3d7614917b24303ee6a220679dab3/uploads/2018/06/2018060255.jpg",
  },
  {
    name: "Shangphan Wildlife Sanctuary",
    state: "Nagaland",
    district: "Mon ",
    category: "Wild Life",
    annualVisitors: 1500000,
    views: 25000,
    description:
      "The Mon District presents picturesque scenes with lusty rich green forest, which provides a natural habitat to different species of flora and fauna.",
    image:
      "https://cdn.s3waas.gov.in/s368264bdb65b97eeae6788aa3348e553c/uploads/2017/06/2018042768.jpg",
  },
  {
    name: "Suru Valley",
    state: "Nagaland",
    district: "Kargil",
    category: "Wilderness",
    annualVisitors: 250000,
    views: 5000,
    description:
      "Sankoo:- At a distance of 40kms from Kargil town Suru Valley is a beautiful destination with green land scape.",
    image:
      "https://cdn.s3waas.gov.in/s341ae36ecb9b3eee609d05b90c14222fb/uploads/2018/09/2018091178.jpg",
  },
  {
    name: "Dikhu River",
    state: "Nagaland",
    district: "Longleng ",
    category: "River",
    annualVisitors: 350000,
    views: 9000,
    description:
      "The Dikhu River is one of the most prominent rivers of Nagaland. The river Dikhu flows across the Mokokchung and the Longleng districts.",
    image:
      "https://cdn.s3waas.gov.in/s3e97ee2054defb209c35fe4dc94599061/uploads/2018/11/2018112956.jpg",
  },
  {
    name: "Fakim Wild Life Sanctuary",
    state: "Nagaland",
    district: "Kiphire",
    category: "Wildlife",
    annualVisitors: 400000,
    views: 11000,
    description:
      "Situated close to the India Myanmar border in the Pungro circle headquarter in Nagaland.",
    image:
      "https://cdn.s3waas.gov.in/s30ff8033cf9437c213ee13937b1c4c455/uploads/2018/01/2018043061.jpeg",
  },
  {
    name: "Zungki River",
    state: "Nagaland",
    district: "Shamator",
    category: "River",
    annualVisitors: 150000,
    views: 3000,
    description:
      "Zungki River is the biggest tributary of (flows into) Tizu river.",
    image:
      "https://cdn.s3waas.gov.in/s30a09c8844ba8f0936c20bd791130d6b6/uploads/2023/01/2023012113-scaled.jpg",
  },
  {
    name: "Kachari Ruins",
    state: "Nagaland",
    district: "Dimapur ",
    category: "Domed Pillars",
    annualVisitors: 200000,
    views: 4500,
    description:
      "Kachari Ruins or The Dimasa Kachari Ruins is located in the town of Dimapur in Nagaland.",
    image:
      "https://cdn.s3waas.gov.in/s3d96409bf894217686ba124d7356686c9/uploads/2018/09/2018092475.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/Cluster0",
    );
    console.log("\n✅ MongoDB connection open...");
    // Add the Maharashtra heritage sites data
    await HeritageSite.insertMany(heritageSites);

    console.log(
      "Successfully inserted All Heritage Sites with working images into your database!",
    );
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
