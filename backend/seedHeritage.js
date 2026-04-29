const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const HeritageSite = require("./models/HeritageSite");

const maharashtraSites = [
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
  //   image:
  //     "https://pbs.twimg.com/media/GjUI-qsaMAA7MPP.jpg",
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
  //   image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/12/shutterstock_402120757-1.webp",
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
  //   image: "https://s7ap1.scene7.com/is/image/incredibleindia/sitakund-gaya-bihar-1-attr-hero?qlt=82&ts=1726740731339",
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

  // // Gujrat

  // {
  //   name: "Aatapi Wonderland",
  //   state: "Gujrat",
  //   district: "Vadodara",
  //   category: "Recreational",
  //   annualVisitors: 450000,
  //   views: 12000,
  //   description:
  //     "Aatapi Wonderland- AATAPI Wonderland, Gujarat’s Largest Theme Park is spread across 70 acres at Vadodara.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3b2f627fff19fda463cb386442eac2b3d/uploads/2021/11/2021110339.jpg",
  // },
  // {
  //   name: "Baps Swaminarayan Mandir",
  //   state: "Gujrat",
  //   district: "Chhotaudaipur",
  //   category: "Religious",
  //   annualVisitors: 500000,
  //   views: 15000,
  //   description:
  //     "BAPS Swaminarayan temple is located around 35 km from main town of Chhota Udepur district.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3e2a2dcc36a08a345332c751b2f2e476c/uploads/2018/09/2018093070.jpg",
  // },
  // {
  //   name: "Chamunda Mataji Temple–chotila",
  //   state: "Gujrat",
  //   district: "Surendra Nagar ",
  //   category: "Natural / Scenic beauty",
  //   annualVisitors: 300000,
  //   views: 8000,
  //   description:
  //     "Chotila is a small town having population of around 20,000 people and is a taluka head quarter of Surendranagar district, Gujarat.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3c15da1f2b5e5ed6e6837a3802f0d1593/uploads/2018/08/2018080811.jpeg",
  // },
  // {
  //   name: "Chatardi",
  //   state: "Gujrat",
  //   district: "Kachchh ",
  //   category: "Historic",
  //   annualVisitors: 1000000,
  //   views: 20000,
  //   description:
  //     "About a 20-minute walk southwest of Hamirsar lake, through open areas that no longer seem like you’re in the city, are the royal cenotaphs.",
  //   image: "https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018092476.jpg",
  // },
  // {
  //   name: "Junaraj",
  //   state: "Gujrat",
  //   district: "Narmada",
  //   category: "Scenic beauty",
  //   annualVisitors: 1500000,
  //   views: 25000,
  //   description:
  //     "Junaraj campsite is located in Satpuda mountain range, in the catchment area of Karjan Dam.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s396ea64f3a1aa2fd00c72faacf0cb8ac9/uploads/2018/08/2018081621.jpg",
  // },
  // {
  //   name: "Ambaji Temple",
  //   state: "Gujrat",
  //   district: "Banaskantha",
  //   category: "Historic",
  //   annualVisitors: 250000,
  //   views: 5000,
  //   description:
  //     "Ambaji, a famous pilgrimage place of Gujarat in India is situated on the border of States of Gujarat and Rajasthan near Abu Road, in the Danta Taluka of Banaskantha District.",
  //   image:
  //     "https://temple.yatradham.org/public/Product/temple/temple_eUAuDb9v_202408041802080.jpg",
  // },
  // {
  //   name: "Dwarkadhish Temple",
  //   state: "Gujrat",
  //   district: "Devbhumi Dwarka",
  //   category: "Historic",
  //   annualVisitors: 350000,
  //   views: 9000,
  //   description:
  //     "Lord Sri Krishna temple in Gomati coast is holy, which temple is known as DWARKADHISH Temple.",
  //   image:
  //     "https://www.daiwikhotels.com/wp-content/uploads/2024/07/Dwarkadish-temple-2.jpg",
  // },
  // {
  //   name: "Mahabat Maqbara",
  //   state: "Gujrat",
  //   district: "Junagadh",
  //   category: "Historic",
  //   annualVisitors: 400000,
  //   views: 11000,
  //   description:
  //     "Mahabat Maqbara Palace, also Mausoleum of Bahaduddinbhai Hasainbhai, is a mausoleum in Junagadh, India.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s3470e7a4f017a5476afb7eeb3f8b96f9b/uploads/2017/06/2018071177.jpg",
  // },
  // {
  //   name: "Panchasara Jain Temple",
  //   state: "Gujrat",
  //   district: "Patan",
  //   category: "Historic",
  //   annualVisitors: 150000,
  //   views: 3000,
  //   description:
  //     "Panchasara Jain Temple is situated at middle of Patan town. There are as many as 100 and more temples in Patan dedicated to various gods including a number of Jain temples.",
  //   image: "https://cdn.s3waas.gov.in/s3f340f1b1f65b6df5b5e3f94d95b11daf/uploads/2018/03/2018040636.jpg",
  // },
  // {
  //   name: "Shamlaji Temple",
  //   state: "Gujrat",
  //   district: "Arvalli",
  //   category: "Historic",
  //   annualVisitors: 200000,
  //   views: 4500,
  //   description:
  //     "Shamlaji temple is situated on the banks of the river Meshwo in the northeast of the Arvalli district.",
  //   image:
  //     "https://cdn.s3waas.gov.in/s36e0721b2c6977135b916ef286bcb49ec/uploads/2018/12/2018121764.jpg",
  // },

  // West Bengal

  {
    name: "Adina Eco Tourism Park",
    state: "West Bengal",
    district: "Malda",
    category: "Natural / Scenic beauty",
    annualVisitors: 450000,
    views: 12000,
    description:
      "Upcoming attraction at Adina, Gazole, an eco-park completely nature friendly and filled with greenery.",
    image:
      "https://cdn.s3waas.gov.in/s349ae49a23f67c759bf4fc791ba842aa2/uploads/2022/02/2022021130.jpeg",
  },
  {
    name: "Batasia Loop & Gorkha War Memorial",
    state: "West Bengal",
    district: "Darjiling ",
    category: "Historic,Natural ",
    annualVisitors: 500000,
    views: 15000,
    description:
      "On the way to Darjeeling from Siliguri by the famous Toy Train journey passes through the Batasia Loop (A Windy Place) and the War Memorial.",
    image:
      "https://cdn.s3waas.gov.in/s322fb0cee7e1f3bde58293de743871417/uploads/2020/08/2020080478-1.jpg",
  },
  {
    name: "Hajarduari Palace",
    state: "West Bengal",
    district: "Murshidabad",
    category: "Historic",
    annualVisitors: 300000,
    views: 8000,
    description:
      "Hazarduari Palace, earlier known as the Bara Kothi, is located in the campus of Kila Nizamat in Murshidabad.",
    image:
      "https://cdn.s3waas.gov.in/s3c9f0f895fb98ab9159f51fd0297e236d/uploads/2021/01/2021012785.jpg",
  },
  {
    name: "Howrah Bridge",
    state: "West Bengal",
    district: "Howrah",
    category: "Historic",
    annualVisitors: 1000000,
    views: 20000,
    description:
      "An iconic landmark in Kolkata, the Howrah Bridge is a huge steel bridge over the Hooghly River.",
    image: "https://cdn.s3waas.gov.in/s353e3a7161e428b65688f14b84d61c610/uploads/2021/10/2021100892.jpg",
  },
  {
    name: "Jaigaon",
    state: "West Bengal",
    district: "Alipurdua",
    category: "Scenic beauty",
    annualVisitors: 1500000,
    views: 25000,
    description:
      "About Jaigaon is a small town in Alipurduar District in the Indian state of West Bengal. near the Bhutan border",
    image:
      "https://cdn.s3waas.gov.in/s33636638817772e42b59d74cff571fbb3/uploads/2023/02/2023022026.jpg",
  },
  {
    name: "Jhargram Zoological Park",
    state: "West Bengal",
    district: "Jhargram",
    category: "Other",
    annualVisitors: 250000,
    views: 5000,
    description:
      "This small zoo and about 2 km from the town. This Zoological Park was opened by the state forest department.",
    image:
      "https://cdn.s3waas.gov.in/s3aeb3135b436aa55373822c010763dd54/uploads/2019/07/2019073151.jpg",
  },
  {
    name: "Rock Garden & Gangamaya Park",
    state: "West Bengal",
    district: "Darjiling",
    category: "Adventure",
    annualVisitors: 350000,
    views: 9000,
    description:
      "The Rock Garden (also known as Barbotey Rock Garden) at Chunnu Summer Falls and Ganga Maya Park are recently added tourist attractions in the hilly town of Darjeeling in the state of West Bengal, India.",
    image:
      "https://cdn.s3waas.gov.in/s322fb0cee7e1f3bde58293de743871417/uploads/2020/09/2020092191.jpg",
  },
  {
    name: "Ram Krishna Mission",
    state: "West Bengal",
    district: "Bardhaman",
    category: " Recreational",
    annualVisitors: 400000,
    views: 11000,
    description:
      "Asansol Ramakrishna Mission High School is an Bengali-medium school for boys in Asansol, West Bengal, India.",
    image:
      "https://cdn.s3waas.gov.in/s332bb90e8976aab5298d5da10fe66f21d/uploads/2021/06/2021061746.jpg",
  },
  {
    name: "Rajabhatkhawa",
    state: "West Bengal",
    district: "Alipurduar",
    category: "Scenic beauty",
    annualVisitors: 150000,
    views: 3000,
    description:
      "About Rajabhatkhawa is a small town situated just outside the Buxa Tiger Reserve in the Alipurduardistrict of West Bengal.",
    image: "https://cdn.s3waas.gov.in/s33636638817772e42b59d74cff571fbb3/uploads/2023/02/2023022015.jpg",
  },
  {
    name: "Adina Mosque",
    state: "West Bengal",
    district: "Malda",
    category: "Historic",
    annualVisitors: 200000,
    views: 4500,
    description:
      "It was the largest structure of its kind in the Indian subcontinent and was built during the Bengal Sultanate as a royal mosque by Sikandar Shah.",
    image:
      "https://cdn.s3waas.gov.in/s349ae49a23f67c759bf4fc791ba842aa2/uploads/2022/02/2022020819.jpg",
  },

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
  //   image: "https://cdn.s3waas.gov.in/s31068c6e4c8051cfd4e9ea8072e3189e2/uploads/2023/07/2023073124-1-1024x478.jpg",
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
  //   image: "https://cdn.s3waas.gov.in/s3d81f9c1be2e08964bf9f24b15f0e4900/uploads/2025/04/2025050112.jpg",
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

  {
    name: "Ashok Pillar",
    state: "Haryana",
    district: "Fatehabad",
    category: "Historic",
    annualVisitors: 450000,
    views: 12000,
    description:
      "Ashok Pillar lies at the centre of an Idgah at Fatehabad. The stone pillar is little less than 5 metres in height and 1.90 meteres in circumference from the base.",
    image:
      "https://cdn.s3waas.gov.in/s36cdd60ea0045eb7a6ec44c54d29ed402/uploads/2017/06/2018052144.jpg",
  },
  {
    name: "Bhuteshwar Temple",
    state: "Haryana",
    district: "Jind ",
    category: "Historic,Natural ",
    annualVisitors: 500000,
    views: 15000,
    description:
      "It has been renovated and a tourist complex has been built nearby. The other places of worship are the temples of Hari Kailash , tanks of Surya Kund, Jawala Maleshvara tirath.",
    image:
      "https://cdn.s3waas.gov.in/s3218a0aefd1d1a4be65601cc6ddc1520e/uploads/2018/02/2018031333.jpg",
  },
  {
    name: "Chhatta Rai Bal Mukand Dass (Birbal Ka Chhatta)",
    state: "Haryana",
    district: "Mahendragarh ",
    category: "Historic",
    annualVisitors: 300000,
    views: 8000,
    description:
      "This historic monument was built by Divya Rai Mukund Das of Narnaul during the reign of Shah Jahan.",
    image:
      "https://cdn.s3waas.gov.in/s338913e1d6a7b94cb0f55994f679f5956/uploads/2018/03/2018030199.jpg",
  },
  {
    name: "Chaneti Bhudhist Stupa",
    state: "Haryana",
    district: "Yamuna Nagar",
    category: "Historic",
    annualVisitors: 1000000,
    views: 20000,
    description:
      "There is a grand Tomb of 8 meters in height made of bricks, in the area of about 100 sq meters near the village. Made in round shape, this is an old Buddhist Stupa.",
    image: "https://cdn.s3waas.gov.in/s3428fca9bc1921c25c5121f9da7815cde/uploads/2018/06/2018060686.jpg",
  },
  {
    name: "Ferozepur Jhirka",
    state: "Haryana",
    district: "Nuh",
    category: "Scenic beauty",
    annualVisitors: 1500000,
    views: 25000,
    description:
      "The historical town Ferozepur Jhirka, a tehsil of the Nuh district, is situated on the main road of Gurgaon to Alwar, about 82 km south of Gurgaon and 150 km south of Delhi.",
    image:
      "https://cdn.s3waas.gov.in/s3941e1aaaba585b952b62c14a3a175a61/uploads/2018/04/2018040165.jpg",
  },
  {
    name: "Gandhi Museum",
    state: "Haryana ",
    district: "Palwal",
    category: "Other",
    annualVisitors: 250000,
    views: 5000,
    description:
      "Gandhi Seva Ashram( Museum) is situated in Palwal. The Gandhi Museum is close to Palwal Railway Station.",
    image:
      "https://cdn.s3waas.gov.in/s3b6d767d2f8ed5d21a44b0e5886680cb9/uploads/2018/05/2018052138.jpg",
  },
  {
    name: "Jogiwala Mandir",
    state: "Haryana ",
    district: "Bhiwani",
    category: "Adventure",
    annualVisitors: 350000,
    views: 9000,
    description:
      "Jogiwala Mandir is one of the prime locations of Bhiwani Tourism.",
    image:
      "https://cdn.s3waas.gov.in/s3069059b7ef840f0c74a814ec9237b6ec/uploads/2017/03/2018031359.jpg",
  },
  {
    name: "Kabuli Bagh Mosque, Panipat",
    state: "Haryana ",
    district: "Panipat",
    category: " Recreational",
    annualVisitors: 400000,
    views: 11000,
    description:
      "Samrat Hem Chandra Vikramaditya, popularly called Hemu became the Emperor of India, defeating Mughal Emperor Akbar in the Battle of Delhi-1556.",
    image:
      "https://cdn.s3waas.gov.in/s338b3eff8baf56627478ec76a704e9b52/uploads/2018/02/2018021585.jpg",
  },
  {
    name: "Kapil Muni Tirtha, Kalayat",
    state: "Haryana",
    district: "Kaithal",
    category: "Scenic beauty",
    annualVisitors: 150000,
    views: 3000,
    description:
      "This shrine named Kapilmuni is about 26 km from Kaithal. ",
    image: "https://cdn.s3waas.gov.in/s3a666587afda6e89aec274a3657558a27/uploads/2020/11/2020112616-1024x672.jpg",
  },
  {
    name: "Nada Sahib",
    state: "Haryana",
    district: "Panchkula",
    category: "Religious",
    annualVisitors: 200000,
    views: 4500,
    description:
      "The Gurudwara Nada Sahib is situated in Panchkula on the bank of Ghaggar river in Sivalik foothills.",
    image:
      "https://cdn.s3waas.gov.in/s39b8619251a19057cff70779273e95aa6/uploads/2017/06/2018021751.jpg",
  },

  //  Assam

  {
    name: "Saraighat War Memorial Park",
    state: "Assam",
    district: "Kamrup",
    category: "Natural",
    annualVisitors: 450000,
    views: 12000,
    description:
      "The Saraighat War Memorial Park at Kamrup, Guwahati, commemorates the historic 1671 Battle of Saraighat on the Brahmaputra banks",
    image:
      "https://kamrup.assam.gov.in/sites/default/files/2022-03/SWMP1.jpg",
  },
  {
    name: "Aswakranta Devalaya",
    state: "Assam",
    district: "Kamrup ",
    category: "Religious ",
    annualVisitors: 500000,
    views: 15000,
    description:
      "Aswakranta Devalaya, often spelled as Aswaklanta Temple, is a renowned Hindu temple dedicated to Lord Vishnu, located on the northern bank of the Brahmaputra River in North Guwahati, Assam.",
    image:
      "https://kamrup.assam.gov.in/sites/default/files/public_utility/Aswakranta%20%282%29.jpg",
  },
  {
    name: "Chandubi",
    state: "Assam",
    district: "Kamrup",
    category: "Lake",
    annualVisitors: 300000,
    views: 8000,
    description:
      "Chandubi Lake is a scenic natural waterbody located in Assam's Kamrup district, about 64 km from Guwahati.",
    image:
      "https://kamrup.assam.gov.in/sites/default/files/public_utility/1a.jpg",
  },
  {
    name: "Hayagriva-Madhab Temple",
    state: "Assam",
    district: "Kamrup",
    category: "Religious",
    annualVisitors: 1000000,
    views: 20000,
    description:
      "The Hayagriva Madhava Temple, located on Monikut Hill in Hajo, Assam, is a revered 16th-century stone temple dedicated to Lord Vishnu’s horse-headed avatar, Hayagriva.",
    image: "https://kamrup.assam.gov.in/sites/default/files/public_utility/Hayagriva1.jpg",
  },
  {
    name: "Kaziranga National Park ",
    state: "Assam",
    district: "Golaghat",
    category: "Wildlife",
    annualVisitors: 1500000,
    views: 25000,
    description:
      "Kaziranga National Park, located in Assam, India, is a premier UNESCO World Heritage Site famous for harboring over two-thirds of the world’s great one-horned rhinoceros population.",
    image:
      "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/03/kaziranga_national_park-2.webp",
  },
  {
    name: "Majuli Island",
    state: "Assam",
    district: "Majuli",
    category: "Satras & Culture",
    annualVisitors: 250000,
    views: 5000,
    description:
      "Majuli, located in the Brahmaputra River in Assam, is the world's largest river island and a prominent cultural, spiritual, and ecological hub.",
    image:
      "https://www.indiantempletour.com/wp-content/uploads/2023/04/Majuli-Island.webp",
  },
  {
    name: "Tea Gardensk",
    state: "Assam",
    district: "Dibrugarh",
    category: "Halmari Tea ",
    annualVisitors: 350000,
    views: 9000,
    description:
      "Assam, the world's largest tea-growing region, features over 1,000 tea gardens, offering unique tourism experiences like heritage bungalow stays, tea tasting.",
    image:
      "https://nexplore.org/images/tour/tea-tour-assam-b.webp",
  },
  {
    name: "Manas National Park",
    state: "Assam",
    district: "Barpeta",
    category: "Park",
    annualVisitors: 400000,
    views: 11000,
    description:
      "Manas National Park is a national park, Project Tiger reserve, and an elephant reserve in Assam, India.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b2/68/28/royal-manas-national.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Kamakhya Temple",
    state: "Assam",
    district: "Guwahati",
    category: "Temple",
    annualVisitors: 150000,
    views: 3000,
    description:
      "Kamakhya Mondir is a Hindu temple at Nilachal hills in Guwahati, Assam.",
    image: "https://i0.wp.com/thefloatingpebbles.com/wp-content/uploads/2025/02/IMG_3676-Edit-768x1024-1.jpg?resize=768%2C1024&ssl=1",
  },
  {
    name: "Sri Sri Auni Aatiya Satra",
    state: "Assam",
    district: "Kamrup",
    category: "Historic",
    annualVisitors: 200000,
    views: 4500,
    description:
      "Sri Sri Auniati Satra occupied the highest position amongst the various Satras of Assam in the eyes of the Ahom Kings.",
    image:
      "https://kamrup.assam.gov.in/sites/default/files/2022-03/AuniHati.jpg",
  },

  // Chhattisgarh

  {
    name: "Barsur - An Archaeological Treasure",
    state: "Chhattisgarh",
    district: "Dantewada",
    category: "  Temple  ",
    annualVisitors: 450000,
    views: 12000,
    description:
      "Once the Capital of Nagavansh Raja Banasur, Barsur is a fond destination for one who love history and ancient sculptures.",
    image:
      "https://cdn.s3waas.gov.in/s3556f391937dfd4398cbac35e050a2177/uploads/2018/06/2018061044.jpg",
  },
  {
    name: "Bhoramdev Temple,Kawardha",
    state: "Chhattisgarh",
    district: "Kawardha ",
    category: "Temple ",
    annualVisitors: 500000,
    views: 15000,
    description:
      "Bhoramdeo a thousand year old temple situated in Chouragaon is 18 km from Kawardha in Kabirdham district of Chhattisgarh and 125 Km from Raipur.",
    image:
      "https://cdn.s3waas.gov.in/s328dd2c7955ce926456240b2ff0100bde/uploads/2018/03/2018032284.jpg",
  },
  {
    name: "Gangrel Dam",
    state: "Chhattisgarh",
    district: "Dhamtari ",
    category: "Scenic beauty",
    annualVisitors: 300000,
    views: 8000,
    description:
      "Gangrel Dam: Another name of the Gangrel Dam is Ravishankar Dam. In the Dhamtari District, this location is quite a famous spot for the visitors.",
    image:
      "https://cdn.s3waas.gov.in/s3b5dc4e5d9b495d0196f61d45b26ef33e/uploads/2018/04/2018042841.jpg",
  },
  {
    name: "Gaurghat Waterfall",
    state: "Chhattisgarh",
    district: "Koriya",
    category: "River",
    annualVisitors: 1000000,
    views: 20000,
    description:
      "This waterfall is situated on the Hasdeo River, at a distance of 35 kilometers from the district headquarters of Korea.",
    image: "https://cdn.s3waas.gov.in/s37750ca3559e5b8e1f44210283368fc16/uploads/2018/06/2025022533-scaled.jpeg",
  },
  {
    name: "Giraudpuri Dham",
    state: "Chhattisgarh",
    district: "Baloda Bazar",
    category: "Scenic beauty",
    annualVisitors: 1500000,
    views: 25000,
    description:
      "Situated by the confluence of the Mahanadi and Jonk rivers, 40 KM from Balodabazar and 80 km from Bilaspur, the Giroudpuri Dham is one of Chhattisgarh’",
    image:
      "https://cdn.s3waas.gov.in/s304ecb1fa28506ccb6f72b12c0245ddbc/uploads/2018/01/2018052162.jpg",
  },
  {
    name: "Madku Islands",
    state: "Chhattisgarh",
    district: "Mungeli",
    category: "Natural Beauty",
    annualVisitors: 250000,
    views: 5000,
    description:
      "Mudku Island The natural beauty in the form of island is very ancient delightful place, as it is divided into two parts of the river Shivnath river.",
    image:
      "https://cdn.s3waas.gov.in/s3051e4e127b92f5d98d3c79b195f2b291/uploads/2018/05/2018050914.jpg",
  },
  {
    name: "Maitri Bagh",
    state: "Chhattisgarh",
    district: "Durg",
    category: "Park",
    annualVisitors: 350000,
    views: 9000,
    description:
      "A zoo cum children’s park, maintained by the Bhilai Steel Plant. The highlights of the Zoo are exotic animal and avian species, lake, toy trains and others.",
    image:
      "https://cdn.s3waas.gov.in/s3851ddf5058cf22df63d3344ad89919cf/uploads/2018/05/2018050471.jpg",
  },
  {
    name: "Peerless beauty Of Teemed",
    state: "Chhattisgarh",
    district: "Bijapur",
    category: " River",
    annualVisitors: 400000,
    views: 11000,
    description:
      "The Indravati river forms the border between Chhattisgarh and Maharashtra, near the village of Teemed adjacent to Bhopalpatnam.",
    image:
      "https://cdn.s3waas.gov.in/s3d395771085aab05244a4fb8fd91bf4ee/uploads/2021/01/2021011872.jpg",
  },
  {
    name: "Mahant Ghasi Memorial Museum",
    state: "Chhattisgarh",
    district: "Raipur",
    category: "Museum",
    annualVisitors: 150000,
    views: 3000,
    description:
      "The Mahant Ghasidas Memorial Museum in Raipur, Chhattisgarh, established in 1875 by Raja Mahant Ghasidas.",
    image: "https://www.touristplaces.net.in/images/pp/4/p96393.jpg",
  },
  {
    name: "Achanakmar Wildlife Sanctuary and Malhar",
    state: "Chhattisgarh",
    district: "Bilaspur",
    category: "Biodiverse Forest",
    annualVisitors: 200000,
    views: 4500,
    description:
      "Achanakmar Tiger Reserve (Chhattisgarh) offers dense Sal/bamboo forests and wildlife safaris (Nov-June), featuring tigers, leopards, and bison. ",
    image:
      "https://inditales.com/wp-content/uploads/2012/04/achanakmar-wildlife-sanctuary-tiger-reserve-chhattisgarh.jpg",
  },

  // Jammu and Kashmir

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
  //   image: "https://cdn.s3waas.gov.in/s3c75b6f114c23a4d7ea11331e7c00e73c/uploads/2018/05/2018051948.png",
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
  //   image: "https://cdn.s3waas.gov.in/s3918317b57931b6b7a7d29490fe5ec9f9/uploads/2025/09/17582620919409.jpg",
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
  //   image: "https://cdn.s3waas.gov.in/s341ae36ecb9b3eee609d05b90c14222fb/uploads/2018/09/2018091139.jpg",
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
  //   image: "https://d1zvcmhypeawxj.cloudfront.net/blogs/cover_web/hemis-national-park-webp-bac8cb2c62-1762423799217.webp",
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

  // add new
  {
    name: "Gorsam Chorten",
    state: "Arunachal Pradesh",
    district: "Tawang",
    category: "Monument",
    annualVisitors: 40000,
    views: 4000,
    description: "The largest Stupa of the area standing 93 feet tall, modeled after the Boudhanath stupa of Nepal.",
    image: "https://northeastexplorers.in/wp-content/uploads/2019/05/Gorsam-Stupa-1200x792.jpeg",
  },

  {
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    district: "Agra",
    category: "Monument",
    annualVisitors: 8000000,
    views: 200000,
    description: "An ivory-white marble mausoleum on the right bank of the river Yamuna, commissioned by Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
  },

];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Cluster0');
    console.log('\n✅ MongoDB connection open...');
    // Add the Maharashtra heritage sites data
    await HeritageSite.insertMany(maharashtraSites);

    console.log(
      "Successfully inserted Maharashtra Heritage Sites with working images into your database!",
    );
    process.exit();
  } catch (error) {
    console.error("Error seeding heritage sites data:", error);
    process.exit(1);
  }
};

seedDatabase();
