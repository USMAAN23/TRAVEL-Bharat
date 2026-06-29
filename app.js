/* --- CENTRAL TOURISM KNOWLEDGE REPOSITORY (20 INTEGRATED REGIONAL ENTRIES) --- */
const sharedDestinationsDb = [
    {
        id: 1,
        name: "Statue of Unity",
        city: "Kevadia",
        state: "Gujarat",
        category: "Heritage",
        description: "The world's tallest statue stands at a monumental 182 meters, depicting visionary statesman Sardar Vallabhbhai Patel. Set against the scenic Narmada river ecosystem, this masterwork celebrates unity and structural brilliance.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1642841819300-20ed449c02a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhdHVlJTIwb2YlMjB1bml0eXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Statue+of+Unity+Gujarat",
        nearby: "Valley of Flowers, Sardar Sarovar Dam, Cactus Garden"
    },
    {
        id: 2,
        name: "Pangong Tso Lake",
        city: "Leh",
        state: "Ladakh",
        category: "Nature",
        description: "An endorheic lake spanning across international borders, situated at an altitude of 4,225 meters. Renowned for its hyper-clear deep-blue brackish waters that brilliantly change shades from teal to cobalt beneath Himalayan peaks.",
        bestTime: "June to September",
        image: "https://images.unsplash.com/photo-1606857090627-27ca46667290?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuZ29uZyUyMFRzbyUyMExha2V8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Pangong+Tso+Lake+Leh+Ladakh",
        nearby: "Thiksey Monastery, Hemis National Park, Chang La Pass"
    },
    {
        id: 3,
        name: "Konark Sun Temple",
        city: "Puri District",
        state: "Odisha",
        category: "Heritage",
        description: "A UNESCO World Heritage site, this 13th-century structural marvel is shaped like a colossal chariot carrying the Sun God Surya. Notable for its 24 meticulously carved stone wheels serving as ancient precise sundials.",
        bestTime: "September to March",
        image: "https://images.unsplash.com/photo-1601815264039-67c8ba1a7f98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29uYXJrJTIwc3VuJTIwdGVtcGxlfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Konark+Sun+Temple+Odisha",
        nearby: "Chandrabhaga Beach, Puri Jagannath Temple"
    },
    {
        id: 4,
        name: "Kedarnath Temple",
        city: "Rudraprayag",
        state: "Uttarakhand",
        category: "Religious",
        description: "One of the most sacred remote shrines of Lord Shiva, nestled beautifully in the snow-capped Garhwal Himalayan range near the Mandakini River. It forms an essential component of the holy Char Dham route.",
        bestTime: "May to June, September to October",
        image: "https://images.unsplash.com/photo-1649147313351-c86537fda0eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VkYXJuYXRofGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kedarnath+Temple+Uttarakhand",
        nearby: "Bhairav Temple, Vasuki Tal, Gaurikund"
    },
    {
        id: 5,
        name: "Palolem Beach & Shacks",
        city: "Canacona",
        state: "Goa",
        category: "Adventure",
        description: "A white sand crescent paradise in South Goa known for its tranquil waters, colorful coastal shacks, energetic sea excursions, and dolphin-spotting boat channels.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFsb2xlbSUyMEJlYWNoJTIwJTI2JTIwU2hhY2tzfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Palolem+Beach+Goa",
        nearby: "Agonda Beach, Butterfly Island, Cotigao Wildlife Sanctuary"
    },
    {
        id: 6,
        name: "Assam Tea Plantations",
        city: "Dibrugarh",
        state: "Assam",
        category: "Nature",
        description: "Lush green rolling landscapes producing full-bodied, malty rich Assam black tea blends. The estate trails showcase classic colonial heritage alongside vast biodiverse forest margins.",
        bestTime: "May to October",
        image: "https://media.istockphoto.com/id/1132448388/photo/beautiful-tea-garden-rows-scene-isolated-with-blue-sky-and-cloud-design-concept-for-the-tea.webp?a=1&b=1&s=612x612&w=0&k=20&c=ugZ-MTEVm1oqokwiafugin62X-3NtpM89Gpdl09RaoE=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Dibrugarh+Tea+Gardens+Assam",
        nearby: "Kaziranga National Park, Majuli River Island"
    },
    {
        id: 7,
        name: "Victoria Memorial Palace",
        city: "Kolkata",
        state: "West Bengal",
        category: "Heritage",
        description: "An elegant white Makrana marble monument dedicated to Queen Victoria, featuring magnificent classical museum galleries flanked by expansive emerald-green gardens.",
        bestTime: "October to March",
        image: "https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmljdG9yaWElMjBNZW1vcmlhbCUyMFBhbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Victoria+Memorial+Kolkata",
        nearby: "Howrah Bridge, Indian Museum, St. Paul's Cathedral"
    },
    {
        id: 8,
        name: "Pattadakal Temple Complex",
        city: "Bagalkot",
        state: "Karnataka",
        category: "Heritage",
        description: "A unique confluence of Northern (Nagara) and Southern (Dravidian) architectural designs built by the Chalukya Dynasty along the banks of the Malaprabha River.",
        bestTime: "October to March",
        image: "https://media.istockphoto.com/id/926971040/photo/ancient-temples-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=dWUFy8lDFMmyiqPJZJilZUfkbTIrosxeG4mbTpxA06Y=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Pattadakal+Karnataka",
        nearby: "Badami Caves, Aihole Historic Ruins"
    },
    {
        id: 9,
        name: "Gateway of India",
        city: "Mumbai",
        state: "Maharashtra",
        category: "Heritage",
        description: "An iconic Indo-Saracenic arch monument built in the early 20th century to commemorate royal visits, standing proudly over looking the Arabian Sea waterfront.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2F0ZXdheSUyMG9mJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Gateway+of+India+Mumbai",
        nearby: "Taj Mahal Palace Hotel, Elephanta Caves"
    },
    {
        id: 10,
        name: "Radhanagar Beach",
        city: "Havelock Island",
        state: "Andaman and Nicobar",
        category: "Nature",
        description: "Consistently ranked among Asia's best beaches, this pristine stretch boasts shimmering turquoise waters and powdery white sand bordered by a lush forest of native Mahua trees.",
        bestTime: "October to May",
        image: "https://plus.unsplash.com/premium_photo-1679541668015-8906c2cd6bc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFkaGFuYWdhciUyMEJlYWNofGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Radhanagar+Beach+Havelock+Island",
        nearby: "Elephant Beach, Neil Island, Kalapathar Beach"
    },
    {
        id: 11,
        name: "Amer Fort Palace",
        city: "Jaipur",
        state: "Rajasthan",
        category: "Heritage",
        description: "Perched high on a rugged hill, this magnificent 16th-century stronghold blends traditional Hindu and Rajput elements. Famous for its red sandstone layouts and the breathtaking Sheesh Mahal mirror room.",
        bestTime: "November to March",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Amer+Fort+Jaipur+Rajasthan",
        nearby: "Hawa Mahal, City Palace, Jaigarh Fort"
    },
    {
        id: 12,
        name: "Munnar Tea Hills",
        city: "Idukki",
        state: "Kerala",
        category: "Nature",
        description: "Situated 1,600 meters above sea level, this pristine hill station features endless layers of rolling tea estates, misty valleys, crisp mountain air, and rare native flora like the Neelakurinji flower.",
        bestTime: "September to May",
        image: "https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=DGX1jcJho3eN_D_Q55NmXuiRse0h374M1xLpJ7ol3Fk=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Munnar+Tea+Gardens+Kerala",
        nearby: "Eravikulam National Park, Mattupetty Dam, Anamudi Peak"
    },
    {
        id: 13,
        name: "Taj Mahal",
        city: "Agra",
        state: "Uttar Pradesh",
        category: "Heritage",
        description: "An immense white marble monument, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan. It stands globally as the ultimate architectural achievement of Indo-Islamic art.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra+Uttar+Pradesh",
        nearby: "Agra Fort, Fatehpur Sikri, Mehtab Bagh"
    },
    {
        id: 14,
        name: "Gulmarg Valley Trails",
        city: "Baramulla",
        state: "Jammu and Kashmir",
        category: "Adventure",
        description: "Known as the 'Meadow of Flowers', Gulmarg features spectacular snow peaks, pristine pine forests, and Asia's highest cable car gondola system. It serves as India's premier winter skiing destination.",
        bestTime: "March to June (Greens), December to February (Snow)",
        image: "https://images.unsplash.com/photo-1666545381458-c9688d2d10e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3VsbWFyZyUyMFZhbGxleSUyMFRyYWlsc3xlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Gulmarg+Gondola+Jammu+Kashmir",
        nearby: "Khilanmarg, Apharwat Peak, Alpather Lake"
    },
    {
        id: 15,
        name: "Qutub Minar Complex",
        city: "New Delhi",
        state: "Delhi",
        category: "Heritage",
        description: "A victory tower reaching a towering height of 73 meters, built in 1193. Constructed out of red sandstone and marble, it contains some of the finest medieval geometric carvings in Northern India.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1667849521212-e9843b89f322?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UVVUVUIlMjBNSU5BUnxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Qutub+Minar+Delhi",
        nearby: "Mehrauli Archaeological Park, Lotus Temple, Humayun Tomb"
    },
    {
        id: 16,
        name: "Meenakshi Amman Temple",
        city: "Madurai",
        state: "Tamil Nadu",
        category: "Religious",
        description: "A historic Hindu temple housing 14 magnificent gopurams (gateway towers), completely covered in thousands of vibrant, multi-colored stone figures of deities and mythical monsters.",
        bestTime: "October to March",
        image: "https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVlbmFrc2hpJTIwQW1tYW4lMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Meenakshi+Amman+Temple+Madurai",
        nearby: "Thirumalai Nayakkar Mahal, Alagar Kovil"
    },
    {
        id: 17,
        name: "Khajuraho Monuments",
        city: "Chhatarpur",
        state: "Madhya Pradesh",
        category: "Heritage",
        description: "A UNESCO World Heritage site featuring a collection of stunning medieval Hindu and Jain temples. Famous worldwide for their Nagara-style architectural symbolism and detailed panels.",
        bestTime: "October to February",
        image: "https://plus.unsplash.com/premium_photo-1697730370661-51bf72769ff6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2hhanVyYWhvJTIwTW9udW1lbnRzfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Khajuraho+Temples+Madhya+Pradesh",
        nearby: "Panna National Park, Raneh Falls"
    },
    {
        id: 18,
        name: "Manali Solang Valley",
        city: "Kullu District",
        state: "Himachal Pradesh",
        category: "Adventure",
        description: "A gorgeous side valley at the top of the Kullu Valley, highly celebrated for its year-round adventure sports pipeline including paragliding, zorbing, and glacier trekking trails.",
        bestTime: "October to June",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Solang+Valley+Manali+Himachal",
        nearby: "Atal Tunnel, Rohtang Pass, Hadimba Temple"
    },
    {
        id: 19,
        name: "Golden Temple",
        city: "Amritsar",
        state: "Punjab",
        category: "Religious",
        description: "The preeminent spiritual shrine of Sikhism. Built around a beautiful man-made pool, the breathtaking central gold-leaf structure operates the world's largest free community kitchen.",
        bestTime: "September to March",
        image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Golden+Temple+Amritsar",
        nearby: "Jallianwala Bagh, Wagah Border Canopy"
    },
    {
        id: 20,
        name: "Hampi Ruins Ecosystem",
        city: "Vijayanagara",
        state: "Karnataka",
        category: "Heritage",
        description: "The grand, boulder-strewn capital ruins of the historic 14th-century Vijayanagara Empire. Features miles of incredible stone monument frameworks and the legendary musical pillars.",
        bestTime: "October to February",
        image: "https://plus.unsplash.com/premium_photo-1667667846021-79ab01cc3138?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFtcGklMjBSdWlucyUyMEVjb3N5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Hampi+Ruins+Karnataka",
        nearby: "scenic rock-strewn streams and natural pools along the Tungabhadra River"
    },
    {
        id: 21,
        name: "Dholavira ",
        city: "Kutch",
        state: "Gujarat",
        category: "Heritage",
        description: "Gir National Park in Gujarat, India, is the sole natural habitat of the majestic Asiatic lion. Spanning 1,412 sq. km. of dry deciduous forest, this vibrant ecosystem supports hundreds of lions, leopards, crocodiles, and over 300 bird species",
        bestTime: "November to March",
        image: "https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lyJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Gir+National+Park+Gujarat",
        nearby: "Khadir bet island within the Great Rann of Kutch"
    },
    {
        id: 22,
        name: "Gir National Park",
        city: "Kutch",
        state: "Gujarat",
        category: "Nature",
        description: "A highly sophisticated 4,000-year-old Indus Valley Civilization city renowned for its advanced urban planning, stadium, and complex water conservation systems.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1708147643408-c9e7801607ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGhvbGF2aXJhfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Dholavira+Gujarat",
        nearby: "The nearest city and major transportation hub to Gir National Park is Junagadh"
    },
    {
        id: 23,
        name: "Rann of Kutch",
        city: "Kutch",
        state: "Gujarat",
        category: "Nature",
        description: "The Rann of Kutch is a large area of salt marshes located in the northwestern part of the Indian subcontinent, and spans the border between India and Pakistan. Most of the region is located in the Kutch district of the Indian state of Gujarat, with a minor portion extending into the Sindh province of Pakistan. It is further sub-divided geographically into the Great Rann and Little Rann.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1670406312373-6d4d1776e4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFubiUyMG9mJTIwa3V0Y2h8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Rann+of+Kutch+Gujarat",
        nearby: "The primary gateway and central hub for visiting the Rann of Kutch is Bhuj"
    },
    {
        id: 24,
        name: "Saputara",
        city: "Dang District    ",
        state: "Gujarat",
        category: "Nature",
        description: "Saputara is a hill station located in the Dang District of Gujarat, known for its lush greenery and scenic beauty.",
        bestTime: "October to February",
        image: "https://images.unsplash.com/photo-1583168493328-8249a78a6ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FwdXRhcmF8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Saputara+Gujarat",
        nearby: "The primary gateway and central hub for visiting Saputara is Anand"
    },
    {
        id: 25,
        name: "Blackbuck National Park",
        city: "Velavadar",
        state: "Gujarat",
        category: "Nature",
        description: "Blackbuck National Park is a protected area in Gujarat, India, known for its population of blackbucks and other wildlife.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1620541955311-295ea60e8aa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmxhY2tidWNrJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Blackbuck+National+Park+Gujarat",
        nearby: "The primary gateway and central hub for visiting Blackbuck National Park is Velavadar"
    },
    {
        id: 26,
        name: "Rani ki Vav",
        city: "Patan",
        state: "Gujarat",
        category: "Heritage",
        description: "Rani ki Vav is a stepwell located in Patan, Gujarat, known for its intricate architecture and historical significance.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1655395382916-7e424cd0cc3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuaSUyMGtpJTIwdmF2fGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Rani+ki+Vav+Gujarat",
        nearby: "The primary gateway and central hub for visiting Rani ki Vav is Patan"
    },
    {
        id: 27,
        name: "Lothal",
        city: "Patan",
        state: "Gujarat",
        category: "Heritage",
        description: "Lothal is an archaeological site located in Patan, Gujarat, known for its significance in the Indus Valley Civilization.",
        bestTime: "November to February",
        image: "https://plus.unsplash.com/premium_photo-1697730467431-323d86486a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG90aGFsJTIwZ3VqYXJhdHxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Lothal+Gujarat",
        nearby: "The primary gateway and central hub for visiting Lothal is Patan"
    },
    {
        id: 28,
        name: "Dwarka",
        city: "Dwarka District",
        state: "Gujarat",
        category: "Religious",
        description: "Dwarka is an ancient city located in Patan, Gujarat, known for its significance in Hindu mythology.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1673183191406-5987fda2fa24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHdhcmthfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Dwarka+Gujarat",
        nearby: "The primary gateway and central hub for visiting Dwarka is Patan"
    },     
    {
        id: 29,
        name: "Somnath Temple",
        city: "Prabhas Patan",
        state: "Gujarat",
        category: "Religious",
        description: "Somnath Temple is a Hindu temple located in the town of Somnath, Gujarat, known for its historical and religious significance.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1735192683815-d8918aad53dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29tbmF0aCUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Somnath+Temple+Gujarat",
        nearby: "The primary gateway and central hub for visiting Somnath Temple is Patan"
    },
    {
        id: 30,
        name: "Leh Palace",
        city: "Leh Town",
        state: "Ladakh",
        category: "Heritage",
        description: "Leh Palace is a historical palace located in the town of Leh, Ladakh, known for its architectural significance.",
        bestTime: "May to September",
        image: "https://media.istockphoto.com/id/530741376/photo/leh-palace-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=fqempNwym8MvOmQG6Weq6LdfNkm225PODphMGie3VIc=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Leh+Palace+Ladakh",
        nearby: "The primary gateway and central hub for visiting Leh Palace."
    },
    {
        id: 31,
        name: "Magnetic Hill",
        city: "Leh Town",
        state: "Ladakh",
        category: "Nature",
        description: "Magnetic Hill is a natural phenomenon located in the town of Leh, Ladakh, known for its unique gravitational effect.",
        bestTime: "May to September",
        image: "https://images.unsplash.com/photo-1558187424-f786111643b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFnbmV0aWMlMjBoaWxscyUyMGxhZGFraHxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Magnetic+Hill+Ladakh",
        nearby: "The primary gateway and central hub for visiting Magnetic Hill."
    },
    {
        id: 32,
        name: "Khardung La",
        city: "Leh",
        state: "Ladakh",
        category: "Adventure",
        description: "Khardung La is a high mountain pass located in the Leh district of Ladakh, known for its challenging terrain and breathtaking views.",
        bestTime: "May to September",
        image: "https://media.istockphoto.com/id/2150661408/photo/yellow-sign-marking-the-summit-of-a-major-mountain-pass-in-the-himalayas.webp?a=1&b=1&s=612x612&w=0&k=20&c=zbohF5uGi8dukumXBFEqnN7b9HP4Ba_8XaHuEWeC_dI=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Khardung+La+Ladakh",
        nearby: "The primary gateway and central hub for visiting Khardung La."
    },
    {
        id: 33,
        name: "Nubra Valley[Dumre]",
        city: "Leh",
        state: "Ladakh",
        category: "Nature",
        description: "Nubra Valley is a high-altitude valley located in the Leh district of Ladakh, known for its stunning landscapes and unique cultural heritage.",
        bestTime: "May to September",
        image: "https://images.unsplash.com/photo-1636803396010-a4d2fa5c4eef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bnVicmElMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Nubra+Valley+Ladakh",
        nearby: "The primary gateway and central hub for visiting Nubra Valley."
    },
   {
        id: 34,
        name: "Bhubaneshwar[Temple City]",
        city: "Bhubaneshwar",
        state: "Odisha",
        category: "Culture",
        description: "Bhubaneshwar is a city in the state of Odisha, known for its rich cultural heritage and ancient temples.",
        bestTime: "October to February",
        image: "https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymh1YmFuZXN3YXJ8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Bhubaneshwar+Temple+City",
        nearby: "The primary gateway and central hub for visiting Bhubaneshwar."
    },
    {
        id: 35,
        name: "Puri",
        city: "Puri",
        state: "Odisha",
        category: "Nature",
        description: "Puri is a coastal city in the state of Odisha, known for its rich char dham pilgrimage sites.",
        bestTime: "October to February",
        image: "https://images.unsplash.com/photo-1670792232308-e8f85fb72c51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVyaXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Puri+Heritage",
        nearby: "The primary gateway and central hub for visiting Puri."
    },
    {
        id: 36,
        name: "Chilika Lake",
        city: "Puri,Khorda,Ganjam",
        state: "Odisha",
        category: "Nature",
        description: "Chilika Lake is a brackish water lagoon, located in the state of Odisha, known for its rich biodiversity and migratory birds.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1718696070531-7c34bee582db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGlrYSUyMGxha2UlMjBvZGlzaGF8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Chilika+Lake",
        nearby: "The primary gateway and central hub for visiting Chilika Lake."
    },
    {
        id: 37,
        name: "Bhitarkanika National Park [Amazon of India]",
        city: "Puri",
        state: "Odisha",
        category: "Nature",
        description: "Bhitarkanika National Park is a protected area in the state of Odisha, known for its mangrove forests and diverse wildlife.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1737351161099-510250244d06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmhpdGFya2FuaWthfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Bhitarkanika+National+Park",
        nearby: "The primary gateway and central hub for visiting Bhitarkanika National Park."
    },
    {
        id: 38,
        name: "Daringbadi",
        city: "Puri",
        state: "Odisha",
        category: "Nature",
        description: "Daringbadi is a scenic location in the state of Odisha, also known 'Kashmir of Oddisha'.It offers a crisp, cool climate and a refreshing departure from India's typically hot weather.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1736269147871-7eb9f2773f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyaW5nYmFkaXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Daringbadi",
        nearby: "The primary gateway and central hub for visiting Daringbadi."
    },
    {
        id: 39,
        name: "Jim Corbett National Park",
        city: "Ramnagar",
        state: "Uttarakhand",
        category: "Nature",
        description: "Jim Corbett National Park is a protected area in the state of Uttarakhand, known for its rich biodiversity and diverse wildlife.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1669021820355-7186908380d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amltJTIwY29yYmV0dCUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Jim+Corbett+National+Park",
        nearby: "The primary gateway and central hub for visiting Jim Corbett National Park."
    },
    {
        id: 40,
        name: "Rishikesh",
        city: "Rishikesh",
        state: "Uttarakhand",
        category: "Religious",
        description: "Rishikesh is a town and a major tourist destination in the state of Uttarakhand, known for its spiritual significance and adventure activities    .",
        bestTime: "September to November",
        image: "https://plus.unsplash.com/premium_photo-1697729439457-85d4b9d3a2cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmlzaGlrZXNofGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Rishikesh",
        nearby: "The primary gateway and central hub for visiting Rishikesh."
    },
    {
        id: 41,
        name: "Haridwar",
        city: "Haridwar",
        state: "Uttarakhand",
        category: "Religious",
        description: "Haridwar is a town and a major tourist destination in the state of Uttarakhand, known for its spiritual significance and adventure activities    .",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Haridwar",
        nearby: "The primary gateway and central hub for visiting Haridwar."
    },
    {
        id: 42,
        name: "Mussoorie",
        city: "Dehradun District",
        state: "Uttarakhand",
        category: "Nature",
        description: "Mussoorie is a hill station in the state of Uttarakhand also know as 'The Queen of Hills', known for its scenic beauty and pleasant climate.",
        bestTime: "March to June",
        image: "https://images.unsplash.com/photo-1547106365-bb4b17f50a15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzc29vcmllfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Mussoorie",
        nearby: "The primary gateway and central hub for visiting Mussoorie."
    },
    {
        id: 43,
        name: "Nainital",
        city: "Kumaon Foot Hills",
        state: "Uttarakhand",
        category: "Nature",
        description: "Nainital is a hill station in the state of Uttarakhand, known for its scenic beauty and pleasant climate.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1683598545969-7f560be8ac2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5haW5pdGFsJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Nainital",
        nearby: "The primary gateway and central hub for visiting Nainital."
    },
    {
        id: 44,
        name: "Valley of Flowers",
        city: "Chamoli District",
        state: "Uttarakhand",
        category: "Nature",
        description: "Valley of Flowers is a scenic location in the state of Uttarakhand, known for its stunning floral displays and natural beauty.",
        bestTime: "June to August",
        image: "https://plus.unsplash.com/premium_photo-1710285626094-61410064e729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhbGxleSUyMG9mJTIwZmxvd2VycyUyMHV0dGFyYWtoYW5kfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Valley of Flowers",
        nearby: "The primary gateway and central hub for visiting Valley of Flowers is Govinndghat."
    },
    {
        id: 45,
        name: "Baga Beach",
        city: "North Goa",
        state: "Goa",
        category: "Nature",
        description: "Baga Beach is a popular beach destination in the state of Goa, known for its golden sands and clear waters.",
        bestTime: "October to March",
        image: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnYSUyMGJlYWNofGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Baga Beach",
        nearby: "The primary gateway and central hub for visiting Baga Beach."
    },
    {
        id: 46,
        name: "Calangute Beach",
        city: "North Goa",
        state: "Goa",
        category: "Nature",
        description: "Calangute Beach is a popular beach destination in the state of Goa also known as 'Queen of Beaches', known for its golden sands and clear waters.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1597820334272-af87b2d917c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsYW5ndXRlJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Calangute Beach",
        nearby: "The primary gateway and central hub for visiting Calangute Beach."
    },
    {
        id: 47,
        name: "Dudhsagar Falls",
        city: "Bhagwan Mahavir Wildlife Sanctuary",
        state: "Goa",
        category: "Nature",
        description: "Dudhsagar Falls is a stunning waterfall in the state of Goa also known as 'Sea of Milk', known for its breathtaking beauty and natural surroundings.",
        bestTime: "October to January",
        image: "https://plus.unsplash.com/premium_photo-1732030992689-b215161ede41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVkaHNhZ2FyJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Dudhsagar Falls",
        nearby: "The primary gateway and central hub for visiting Dudhsagar Falls."
    },
    {
        id: 49,
        name: "Kaziranga National Park",
        city: "Kohora",
        state: "Assam",
        category: "Nature",
        description: "Kaziranga National Park is a UNESCO World Heritage site in the state of Assam, known for its population of one-horned rhinoceroses and diverse wildlife.",
        bestTime: "November to April",
        image: "https://media.istockphoto.com/id/1459966133/photo/a-group-of-indian-elephants-migrating-through-kaziranga-national-park-in-assam-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z7E7m-iqWS2CFPAQWhlNB7xNzP0FiE3fsTIR3mDXnIY=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kaziranga National Park",
        nearby: "The primary gateway and central hub for visiting Kaziranga National Park."
    },
    {
        id: 50,
        name: "Majuli Island",
        city: "Jorhat",
        state: "Assam",
        category: "Nature",
        description: "Majuli Island is a scenic location in the state of Assam, known for its pristine beaches and lush greenery  .",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1759738103476-9abb3b59458e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hanVsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Majuli Island",
        nearby: "The primary gateway and central hub for visiting Majuli Island."
    },
    {
        id: 51,
        name: "Guwahati",
        city: "Guwahati",
        state: "Assam",
        category: "Nature",
        description: "Guwahati is a major city in the state of Assam, known for its cultural heritage and natural beauty.",
        bestTime: "October to April",
        image: "https://plus.unsplash.com/premium_photo-1664283661444-9f3a1bf45f05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3V3YWhhdGl8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Guwahati",
        nearby: "The primary gateway and central hub for visiting Guwahati."
    },
    {
        id: 52,
        name: "Manas National Park",
        city: "Barpeta Road",
        state: "Assam",
        category: "Nature",
        description: "Manas National Park is a UNESCO World Heritage site in the state of Assam, known for its rich biodiversity and wildlife.",
        bestTime: "November to April",
        image: "https://media.istockphoto.com/id/1190546868/photo/manas-national-park-unesco-natural-world-heritage-site-a-project-tiger-reserve-an-elephant.webp?a=1&b=1&s=612x612&w=0&k=20&c=LK3T-l-DpxM8PLzxRmlGG-ne3a3KiAwC-QQKM4J1gJw=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Manas National Park",
        nearby: "The primary gateway and central hub for visiting Manas National Park."
    },
    {
        id: 53,
        name: "Sivasagar",
        city: "Sivasagar",
        state: "Assam",
        category: "Heritage",
        description: "Sivasagar is a historic town in the state of Assam, known for its ancient temples and cultural heritage.",
        bestTime: "October to March",
        image: "https://media.istockphoto.com/id/1468473830/photo/mysore.webp?a=1&b=1&s=612x612&w=0&k=20&c=m5dF4bqkixjphLJyF6Rkk0e8jjOTpW22D6o53LYNyzE=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Sivasagar",
        nearby: "The primary gateway and central hub for visiting Sivasagar."
    },
    {
        id: 54,
        name: "Darjeeling",
        city: "Northern West Bengal",
        state: "West Bengal",
        category: "Nature",
        description: "Darjeeling is a scenic location in the state of West Bengal also know as 'The Himalayan Queen', known for its tea plantations and hill station charm.",
        bestTime: "October to November",
        image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Darjeeling",
        nearby: "The primary gateway and central hub for visiting Darjeeling."
    },
    {
        id: 55,
        name: "Kolkata [The City of Joy]",
        city: "Kolkata",
        state: "West Bengal",
        category: "Heritage",
        description: "Kolkata is a major city in the state of West Bengal, known for its rich cultural heritage and historical significance.",
        bestTime: "October to February",
        image: "https://images.unsplash.com/photo-1647102208648-5f3175091dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a29sa2F0YSUyMHRoZSUyMGNpdHklMjBvZiUyMGpveXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kolkata",
        nearby: "The primary gateway and central hub for visiting Kolkata."
    },
    {
        id: 56,
        name: "The Sundarbans National Park",
        city: "Godkhali",
        state: "West Bengal",
        category: "Nature",
        description: "The Sundarbans is a UNESCO World Heritage site in the state of West Bengal, known for its unique mangrove ecosystem and wildlife.",
        bestTime: "November to February",
        image: "https://plus.unsplash.com/premium_photo-1719922570565-b2c059fab2ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZGFyYmFuc3xlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=The Sundarbans National Park",
        nearby: "The primary gateway and central hub for visiting The Sundarbans National Park."
    },
    {
        id: 57,
        name: "Kalimpong",
        city: "northern West Bengal",
        state: "West Bengal",
        category: "Nature",
        description: "Kalimpong is a hill station in the state of West Bengal, known for its tea plantations and scenic beauty.",
        bestTime: "March to May AND September to November",
        image: "https://images.unsplash.com/photo-1604240385997-b0c619853d5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FsaW1wb25nfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kalimpong",
        nearby: "The primary gateway and central hub for visiting Kalimpong."
    },
    {
        id: 58,
        name: "Lonavala & Khandala",
        city: "Pune District",
        state: "Maharashtra",
        category: "Nature",
        description: "Lonavala and Khandala are hill stations in the state of Maharashtra, known for their scenic beauty and adventure activities.",
        bestTime: "June to September",
        image: "https://media.istockphoto.com/id/1133829134/photo/rural-view-over-lonavala.webp?a=1&b=1&s=612x612&w=0&k=20&c=8Btp3mtrA1w9QZA2OpUin1PlBzZj3BTJNeYDevvnejU=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Lonavala & Khandala",
        nearby: "The primary gateway and central hub for visiting Lonavala & Khandala."
    },
    {
        id: 59,
        name: "Ajanta & Ellora Caves",
        city: "Aurangabad",
        state: "Maharashtra",
        category: "Nature",
        description: "Ajanta and Ellora Caves are ancient rock-cut caves in the state of Maharashtra, known for their stunning architecture and historical significance.",
        bestTime: "October to March",
        image: "https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWphbnRhJTIwYW5kJTIwZWxsb3JhJTIwY2F2ZXN8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Ajanta & Ellora Caves",
        nearby: "The primary gateway and central hub for visiting Ajanta & Ellora Caves."
    },
    {
        id: 60,
        name: "Marine Drive",
        city: "Mumbai",
        state: "Maharashtra",
        category: "Nature",
        description: "Marine Drive is a scenic coastal road in Mumbai, known for its beautiful sea views and promenade.",
        bestTime: "Anytime but especially during the winter months",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW5lJTIwZHJpdmUlMjBtdW1iYWl8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Marine Drive",
        nearby: "The primary gateway and central hub for visiting Marine Drive."
    },
    {
        id: 61,
        name: "Juhu Beach",
        city: "Mumbai",
        state: "Maharashtra",
        category: "Nature",
        description: "Juhu Beach is a popular beach in Mumbai, known for its golden sand and vibrant atmosphere.",
        bestTime: "Anytime but especially during the winter months",
        image: "https://images.unsplash.com/photo-1726154879842-2556d878f868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGp1aHUlMjBiZWFjaCUyMG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Juhu Beach",
        nearby: "The primary gateway and central hub for visiting Juhu Beach."
    },
    {
        id: 62,
        name: "Chatrapati Shivaji Terminus",
        city: "Mumbai",
        state: "Maharashtra",
        category: "Heritage",
        description: "Chatrapati Shivaji Terminus is a historic railway station in Mumbai, known for its stunning architecture and cultural significance.",
        bestTime: "Anytime",
        image: "https://images.unsplash.com/photo-1687931139179-42dfd2101c44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhdHJhcGF0aSUyMHNoaXZhamklMjBtYWhhcmFqJTIwdGVybWludXMlMjBtdW1iYWl8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Chatrapati Shivaji Terminus",
        nearby: "The primary gateway and central hub for visiting Chatrapati Shivaji Terminus."
    },
    {
        id: 63,
        name: "Haji Ali Dargah",
        city: "Mumbai",
        state: "Maharashtra",
        category: "Religious",
        description: "Haji Ali Dargah is a historic mosque in Mumbai, known for its stunning architecture and cultural significance.",
        bestTime: "Anytime",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTkdQFG_3F4uN4fcTqnEpQGFet-_T2R2wekvdEac5mGkHDpo1XKi-xnCoNhVEW3Hn_-iEn1gMYWuYUzExqNUU1WRSs&s=19",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Haji Ali Dargah",
        nearby: "The primary gateway and central hub for visiting Haji Ali Dargah."
    },
    {
        id: 64,
        name: "Sanjay Gandhi National Park",
        city: "Mumbai",
        state: "Maharashtra",
        category: "Nature",
        description: "Sanjay Gandhi National Park is a large urban national park in Mumbai, known for its rich biodiversity and scenic beauty.",
        bestTime: "September to November",
        image: "https://media.istockphoto.com/id/1050241950/photo/rays-of-light-falling-on-the-road-through-the-trees-of-sanjay-gandhi-national-park-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=dUwOCgJ203miTEWUMjelMm_EhRtWni8cgg6lTonOkUY=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Sanjay Gandhi National Park",
        nearby: "The primary gateway and central hub for visiting Sanjay Gandhi National Park."
    },
    {
        id: 65,
        name: "Mysuru Palace",
        city: "South Karnataka",
        state: "Karnataka",
        category: "Heritage",
        description: "Mysuru Palace is a historic palace in Mysuru, known for its stunning architecture and cultural significance.",
        bestTime: "October to March",
        image: "https://plus.unsplash.com/premium_photo-1697730494992-7d5a0c46ea52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXlzdXJ1JTIwcGFsYWNhfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Mysuru Palace",
        nearby: "The primary gateway and central hub for visiting Mysuru Palace."
    },
    {
        id: 65,
        name: "kodagu (Coorg)",
        city: "Madikeri",
        state: "Karnataka",
        category: "Nature",
        description: "Kodagu (Coorg) is a scenic hill station in Karnataka, known for its lush greenery and coffee plantations.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1730621697273-233e874a7f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29kYWd1JTIwY29vcmd8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kodagu (Coorg)",
        nearby: "The primary gateway and central hub for visiting Kodagu (Coorg)."
    },
    {
        id: 66,
        name: "Gokarana",
        city: "Uttara Kannada",
        state: "Karnataka",
        category: "Nature",
        description: "Gokarana is a scenic spot in Mumbai, known for its natural beauty and tranquility.",
        bestTime: "October to March",
        image: "https://media.istockphoto.com/id/1332745949/photo/om-beach-gokarana.webp?a=1&b=1&s=612x612&w=0&k=20&c=pNLGaFxhpUC5Hqr3Hna3O6DI8lptC05hH2sZ3zJn7mc=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Gokarana",
        nearby: "The primary gateway and central hub for visiting Gokarana."
    },
    {
        id: 67,
        name: "Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        category: "Urban",
        description: "Bangalore is a major city in Karnataka, known for its technology industry and pleasant climate.",
        bestTime: "October to February",
        image: "https://media.istockphoto.com/id/1086632042/photo/vidhana-soudha.jpg?s=2048x2048&w=is&k=20&c=Ztb84LuYoUr3fBi70Jy5qWw3VjZUlh32hPE611leeq8=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Bangalore",
        nearby: "The primary gateway and central hub for visiting Bangalore."
    },
    {
        id: 68,
        name: "Jaipur [The Pink City]",
        city: "Jaipur",
        state: "Rajasthan",
        category: "Heritage",
        description: "Jaipur is a major city in Rajasthan, known for its rich history and stunning architecture.",
        bestTime: "October to February",
        image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Jaipur [The Pink City]",
        nearby: "The primary gateway and central hub for visiting Jaipur [The Pink City]."
    },
    {
        id: 69,
        name: "Udaipur [The City of Lakes]",
        city: "Udaipur",
        state: "Rajasthan",
        category: "Heritage",
        description: "Udaipur is a major city in Rajasthan, known for its beautiful lakes and rich cultural heritage.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Udaipur [The City of Lakes]",
        nearby: "The primary gateway and central hub for visiting Udaipur [The City of Lakes]."
    },
    {
        id: 70,
        name: "Jaisalmer [The Golden City]",
        city: "Jaisalmer",
        state: "Rajasthan",
        category: "Heritage",
        description: "Jaisalmer is a historic city in Rajasthan, known for its stunning sandstone architecture and desert landscapes.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1713349881676-594b95a5742b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFpc2FsbWVyfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Jaisalmer [The Golden City]",
        nearby: "The primary gateway and central hub for visiting Jaisalmer [The Golden City]."
    },      
    {
        id: 71,
        name: "Jodhpur [The Blue City]",
        city: "Jodhpur",
        state: "Rajasthan",
        category: "Heritage",
        description: "Jodhpur is a historic city in Rajasthan, known for its stunning blue-painted houses and rich cultural heritage.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Sk9ESFBVUnxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Jodhpur [The Blue City]",
        nearby: "The primary gateway and central hub for visiting Jodhpur [The Blue City]."
    },
    {
        id: 72,
        name: "Ajmer Dargah",
        city: "Ajmer",
        state: "Rajasthan",
        category: "Heritage",
        description: "Ajmer is a historic city in Rajasthan, known for its stunning blue-painted houses and rich cultural heritage.",
        bestTime: "Anytime",
        image: "https://plus.unsplash.com/premium_photo-1697730334419-fba83fe143b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVubmFyfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Ajmer Dargah",
        nearby: "The primary gateway and central hub for visiting Ajmer Dargah."
    },
    {
        id: 73,
        name: "Alleppey [The Backwaters Hub]",
        city: "South Kerala",
        state: "Kerala",
        category: "Nature",
        description: "Alleppey is a city in Kerala, known for its beautiful backwaters and houseboat cruises.",
        bestTime: "October to February",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxsZXBwZXl8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Alleppey [The Backwaters Hub]",
        nearby: "The primary gateway and central hub for visiting Alleppey [The Backwaters Hub]."
    },
    {
        id: 74,
        name: "Munnar [The Hill Station]",
        city: "Idduki District",
        state: "Kerala",
        category: "Nature",
        description: "Munnar is a hill station in Kerala, known for its tea plantations and scenic beauty.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Munnar [The Hill Station]",
        nearby: "The primary gateway and central hub for visiting Munnar [The Hill Station]."
    },
    {
        id: 75,
        name: "Fort Kochi",
        city: "Kochi",
        state: "Kerala",
        category: "Heritage",
        description: "Fort Kochi is a historic district in Kochi, known for its colonial architecture and rich cultural heritage.",
        bestTime: "October to February",
        image: "https://images.unsplash.com/photo-1679022578185-c5df8eaa01df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9ydCUyMGtvY2hpfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Fort Kochi",
        nearby: "The primary gateway and central hub for visiting Fort Kochi."
    },
    {
        id: 76,
        name: "Wayanad [The Nature's Lap]",
        city: "Kalpetta",
        state: "Kerala",
        category: "Nature",
        description: "Wayanad is a district in Kerala, known for its lush greenery and diverse wildlife.",
        bestTime: "October to March",
        image: "https://plus.unsplash.com/premium_photo-1711255562146-0acdc7d5c659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F5YW5hZHxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Wayanad [The Nature's Lap]",
        nearby: "The primary gateway and central hub for visiting Wayanad [The Nature's Lap]."
    },
    {
        id: 77,
        name: "Varkala",
        city: "Thiruvananthapuram",
        state: "Kerala",
        category: "Heritage",
        description: "Varkala is a historic town in Kerala, known for its beautiful beaches and rich cultural heritage.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1621338316421-c8e1ff8ce0ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZhcmthbGF8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Varkala",
        nearby: "The primary gateway and central hub for visiting Varkala."
    },
    {
        id: 78,
        name: "The Red Fort",
        city: "Delhi",
        state: "Delhi",
        category: "Heritage",
        description: "The Red Fort is a historic fort in Delhi, known for its architectural significance and historical importance.",
        bestTime: "Anytime",
        image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlJTIwcmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=The Red Fort",
        nearby: "The primary gateway and central hub for visiting The Red Fort."
    },
    {
        id: 79,
        name: "Jama Masjid",
        city: "Delhi",
        state: "Delhi",
        category: "Heritage",
        description: "Jama Masjid is a historic mosque in Delhi, known for its architectural significance and historical importance.",
        bestTime: "Anytime",
        image: "https://plus.unsplash.com/premium_photo-1697730332011-11f027c6aa60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFtYSUyMG1hc2ppZCUyMGRlbGhpfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Jama Masjid",
        nearby: "The primary gateway and central hub for visiting Jama Masjid."
    },
    {
        id: 80,
        name: "Humayun's Tomb",
        city: "Delhi",
        state: "Delhi",
        category: "Heritage",
        description: "Humayun's Tomb is a historic mausoleum in Delhi, known for its architectural significance and historical importance.",
        bestTime: "Anytime",
        image: "https://plus.unsplash.com/premium_photo-1697729555861-e406b4989ee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYXl1bidzJTIwdG9tYnxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Humayun's Tomb",
        nearby: "The primary gateway and central hub for visiting Humayun's Tomb."
    },
    {
        id: 81,
        name: "The Lotus Temple",
        city: "Delhi",
        state: "Delhi",
        category: "Religious",
        description: "The Lotus Temple is a modern architectural marvel in Delhi, known for its unique lotus-shaped design and spiritual significance.",
        bestTime: "Anytime",
        image: "https://images.unsplash.com/photo-1688257609244-3f2a893f19d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGplJTIwbG90dXMlMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=The Lotus Temple",
        nearby: "The primary gateway and central hub for visiting The Lotus Temple."
    },
    {
        id: 82,
        name: "Conaught Place [The Financial Hub]",
        city: "Delhi",
        state: "Delhi",
        category: "Urban",
        description: "Conaught Place is a bustling commercial district in Delhi, known for its shopping centers, restaurants, and vibrant atmosphere.",
        bestTime: "Anytime",
        image: "https://images.unsplash.com/photo-1722165923691-dc77d229a31a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ubmF1Z2h0JTIwcGxhY2V8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Conaught Place [The Financial Hub]",
        nearby: "The primary gateway and central hub for visiting Conaught Place [The Financial Hub]."
    },
        {
        id: 83,
        name: "Wagah Border",
        city: "near Amritsar",
        state: "Punjab",
        category: "Heritage",
        description: "Wagah Border is a famous international border crossing between India and Pakistan, known for its daily lowering of the flags ceremony.",
        bestTime: "morning and evening",
        image: "https://images.unsplash.com/photo-1651910031211-42aaa52b87cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FnYWglMjBib3JkZXJ8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Wagah Border",
        nearby: "The primary gateway and central hub for visiting Wagah Border."
    },
    {   
        id: 84,
        name: "Jallianwala Bagh",
        city: "Amritsar",
        state: "Punjab",
        category: "Heritage",
        description: "Jallianwala Bagh is a historical site in Amritsar, known for the tragic massacre that occurred there in 1919.",      
        bestTime: "October to March",    
        image: "https://media.istockphoto.com/id/546193626/photo/jallianwala-bagh-amritsar-punjab.jpg?s=2048x2048&w=is&k=20&c=HwVO0zLj67vlMVin9LJ4zxW_8f93KqNOV9t-VvgLMwo=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Jallianwala Bagh",
        nearby: "The primary gateway and central hub for visiting Jallianwala Bagh."
    },
    {
        id: 85,
        name: "The Capital Complex [Secretariat Building]",
        city: "Chandigarh",
        state: "Punjab",
        category: "Heritage",
        description: "The Capital Complex is a prominent government building in Chandigarh, known for its architectural grandeur and administrative significance.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1760872645513-63b6846ce3c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhlJTIwY2FwaXRhbCUyMGNvbXBsZXh8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=The Capital Complex [Secretariat Building]",
        nearby: "The primary gateway and central hub for visiting The Capital Complex [Secretariat Building]."
    },
    {
        id: 86,
        name: "Sheesh Mahal",
        city: "Chandigarh",
        state: "Punjab",
        category: "Heritage",
        description: "Sheesh Mahal is a historic palace in Chandigarh, known for its stunning architecture and rich cultural significance.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1668316429783-f1bccb64a351?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hlZXNoJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Sheesh Mahal",
        nearby: "The primary gateway and central hub for visiting Sheesh Mahal."
    },
        {
        id: 87,
        name: "Virasat-e-Khalsa",
        city: "Chandigarh",
        state: "Punjab",
        category: "Heritage",
        description: "Virasat-e-Khalsa is a cultural complex in Chandigarh, showcasing the history and heritage of the Khalsa community.",
        bestTime: "Specially in March during the Hola Mohalla festival",
        image: "https://images.unsplash.com/photo-1667141792281-b60b8cda517f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlyYXNhdCUyMGtoYWxzYXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Virasat-e-Khalsa",
        nearby: "The primary gateway and central hub for visiting Virasat-e-Khalsa."
    },
    {
        id: 88,
        name: "Sukhna Lake",
        city: "Chandigarh",
        state: "Punjab",
        category: "Nature",
        description: "Sukhna Lake is a popular recreational spot in Chandigarh, known for its scenic beauty and water activities.",
        bestTime: "Anytime",
        image: "https://media.istockphoto.com/id/480325640/photo/sukhna-lake-in-chandigarh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=eOY0WaOLZgQvD74zn2Mu7NidEf89zAwmYjSTuPdIBTQ=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Sukhna Lake",
        nearby: "The primary gateway and central hub for visiting Sukhna Lake."
    },
    {
        id: 89,
        name: "Srinagar",
        city: "kashmir",
        state: "Jammu and Kashmir",
        category: "Nature",
        description: "Srinagar is a popular recreational spot in Kashmir, known for its scenic beauty and water activities.",
        bestTime: "March to May",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3JpbmFnYXJ8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Srinagar",
        nearby: "The primary gateway and central hub for visiting Srinagar."
    },
    {
        id: 90,
        name: "Gulmarg",
        city: "Pir Panjal Range",
        state: "Jammu and Kashmir",
        category: "Nature",
        description: "Gulmarg is a popular recreational spot in Jammu & Kashmir, known for its scenic beauty and water activities.",
        bestTime: "March to May",
        image: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VsbWFyZyUyMGphbW11JTIwa2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Gulmarg",
        nearby: "The primary gateway and central hub for visiting Gulmarg."
    },
    {
        id: 91,
        name: "Pahalgam",
        city: "Pir Panjal Range",
        state: "Jammu and Kashmir",
        category: "Nature",
        description: "Pahalgam is a popular recreational spot in Jammu & Kashmir, known for its scenic beauty and water activities.",
        bestTime: "March to May",
        image: "https://images.unsplash.com/photo-1718824845738-c5a596a2d7b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFoYWxnYW0lMjBqYW1tdSUyMGthc2htaXJ8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Pahalgam",
        nearby: "The primary gateway and central hub for visiting Pahalgam."
    },
    {
        id: 92,
        name: "sonamarg",
        city: "Sindh River",
        state: "Jammu and Kashmir",
        category: "Nature",
        description: "Sonamrg translates directly to the 'Meadow of Gold' a name inspired by the snow-swathed peaks that glow golde under the sun.",
        bestTime: "March to May",
        image: "https://images.unsplash.com/photo-1546172091-2ffc0a366798?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmFtYXJnJTIwamFtbXUlMjBrYXNobWlyfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Sonamarg",
        nearby: "The primary gateway and central hub for visiting Sonamarg."
    },
    {
        id: 93,
        name: "Katra",
        city: "Kashmir Valley",
        state: "Jammu and Kashmir",
        category: "Nature",
        description: "Katra is a popular recreational spot in Kashmir Valley, known for its scenic beauty and water activities.",
        bestTime: "March to May",
        image: "https://media.istockphoto.com/id/480325640/photo/sukhna-lake-in-chandigarh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=eOY0WaOLZgQvD74zn2Mu7NidEf89zAwmYjSTuPdIBTQ=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Katra",
        nearby: "The primary gateway and central hub for visiting Katra."
    },
    {
        id: 94,
        name: "Shimla",
        city: "Shimla",
        state: "Himachal Pradesh",
        category: "Nature",
        description: "Shimla is a popular recreational spot in Himachal Pradesh, known for its scenic beauty and water activities.",
        bestTime: "March to June",
        image: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Shimla",
        nearby: "The primary gateway and central hub for visiting Shimla."
    },
    {
        id: 95,
        name: "Dharamshala",
        city: "Dhauladhar Range",
        state: "Himachal Pradesh",
        category: "Nature",
        description: "Dharamshala is a popular recreational spot in Himachal Pradesh, known for its scenic beauty and water activities.",
        bestTime: "March to June",
        image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGhhcm1zaGFsYSd8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Dharamshala",
        nearby: "The primary gateway and central hub for visiting Dharamshala."
    },
    {
        id: 96,
        name: "Kasol",
        city: "Kullu Valley",
        state: "Himachal Pradesh",
        category: "Nature",
        description: "Kasol is a popular recreational spot in Himachal Pradesh, known for its scenic beauty and water activities.",
        bestTime: "March to May",
        image: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fzb2x8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kasol",
        nearby: "The primary gateway and central hub for visiting Kasol."
    },
    {
        id: 97,
        name: "Spiti Valley",
        city: "Spiti",
        state: "Himachal Pradesh",
        category: "Nature",
        description: "Spiti Valley is a popular recreational spot in Himachal Pradesh, known for its scenic beauty and water activities.",
        bestTime: "March to May",
        image: "https://images.unsplash.com/photo-1580389915859-6b30058157d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BpdGklMjB2YWxsZXklMjBoaW1hY2hhbHxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Spiti+Valley",
        nearby: "The primary gateway and central hub for visiting Spiti Valley."
    },
    {
        id: 98,
        name: "Khajuraho Temples",
        city: "Khajuraho",
        state: "Madhya Pradesh",
        category: "Heritage",
        description: "Khajuraho Temples are a group of Hindu and Jain temples built by the Chandela dynasty in the 10th and 11th centuries.",
        bestTime: "October to March",
        image: "https://plus.unsplash.com/premium_photo-1661963629241-52c812d5c7f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2hhanVyYWhvJTIwdGVtcGxlfGVufDB8fDB8fHww",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Khajuraho+Temples",
        nearby: "The primary gateway and central hub for visiting Khajuraho Temples."
    },
    {
        id: 99,
        name: "Orchha Fort",
        city: "Orchha",
        state: "Madhya Pradesh",
        category: "Heritage",
        description: "Orchha Fort is a historic fort located in the town of Orchha in Madhya Pradesh.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1642152654554-1c6d6e86c967?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JjaGhhJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Orchha+Fort",
        nearby: "The primary gateway and central hub for visiting Orchha Fort."
    },
    {
        id: 100,
        name: "Kanha National Park",
        city: "Maika Pahar Range",
        state: "Madhya Pradesh",
        category: "Nature",
        description: "Kanha National Park is a national park located in the state of Madhya Pradesh, India.",
        bestTime: "March to May",
        image: "https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FuaGElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kanha+National+Park",
        nearby: "The primary gateway and central hub for visiting Kanha National Park."
    },
    {
        id: 101,
        name: "Bandhavgarh National Park",
        city: "Bandhavgarh",
        state: "Madhya Pradesh",
        category: "Nature",
        description: "Bandhavgarh National Park is a national park located in the state of Madhya Pradesh, India.",
        bestTime: "March to May",
        image: "https://media.istockphoto.com/id/1327110652/photo/woodland-of-dudhwa-national-park-uttarpradesh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=PjFw6Kdc6AtJdBOirc-Py52Th6UlEtJGLJkNVWrVtn8=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Bandhavgarh+National+Park",
        nearby: "The primary gateway and central hub for visiting Bandhavgarh National Park."
    },
    {
        id: 102,
        name: "Ujjain Mahakaleshwar Temple",
        city: "Ujjain",
        state: "Madhya Pradesh",
        category: "Religious",
        description: "Ujjain Mahakaleshwar Temple is a historic temple located in the city of Ujjain in Madhya Pradesh.",
        bestTime: "October to March",
        image: "https://media.istockphoto.com/id/2268245838/photo/mahakaleshwar-temple-shiva-temple-ujjain-madhya-pradesh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=JLeDA5C8B91mEBWCCQ8cX6XEAuI4mHZXxzujfR-epw8=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Ujjain+Mahakaleshwar+Temple",
        nearby: "The primary gateway and central hub for visiting Ujjain Mahakaleshwar Temple."
    },
    {
        id: 103,
        name: "Otty [Queen of Hills Station]",
        city: "Nilgiri Hills",
        state: "Tamil Nadu",
        category: "Nature",
        description: "Otty is a scenic location situated in the Nilgiri Hills of Tamil Nadu.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1673157130879-0be6e4d1acd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG90dHklMjB0YW1pbCUyMG5hZHV8ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Otty",
        nearby: "The primary gateway and central hub for visiting Otty."
    },
    {
        id: 103,
        name: "Mahabalipuram",
        city: "Tamil Nadu",
        state: "Tamil Nadu",
        category: "Heritage",
        description: "Mahabalipuram is a UNESCO World Heritage site located in Tamil Nadu, India.",
        bestTime: "November to February",
        image: "https://images.unsplash.com/photo-1717480103667-fc55675a9ae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFoYWJhbGlwdXJhbXxlbnwwfHwwfHx8MA%3D%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Mahabalipuram",
        nearby: "The primary gateway and central hub for visiting Mahabalipuram."
    },
    {
        id: 104,
        name: "Madhurai",
        city: "Madhurai",
        state: "Tamil Nadu",
        category: "Religious",
        description: "Madhurai is a historic city located in Tamil Nadu, India  .",
        bestTime: "October to March",
        image: "https://media.istockphoto.com/id/517746167/photo/meenakshi-temple.webp?a=1&b=1&s=612x612&w=0&k=20&c=uoY_ZE7Y7mkYIzVBJ34LChR37DHL8fYip9JxZ6KlbEU=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Madhurai",
        nearby: "The primary gateway and central hub for visiting Madhurai."
    },
    {
        id: 105,
        name: "Rameshwaram",
        city: "Rameshwaram",
        state: "Tamil Nadu",
        category: "Nature",
        description: "Rameshwaram is a historic temple located in the city of Rameshwaram in Tamil Nadu.",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZXNod2FyYW18ZW58MHx8MHx8fDA%3D",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Rameshwaram",
        nearby: "The primary gateway and central hub for visiting Rameshwaram."
    },
    {
        id: 106,
        name: "Sri Vijay Puram",
        city: "day-trip destination from Chennai",
        state: "Andaman and Nicobar Islands",
        category: "Nature",
        description: "Sri Vijay Puram is a historic temple located in the city of Sri Vijay Puram in Madhya Pradesh.",
        bestTime: "October to March",
        image: "https://media.istockphoto.com/id/1308938591/photo/unique-cultural-welcome-tower-of-tamil-people-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=K4gO0bFOKm0fjtJDqBJS41_3_r3R-sqeVarpKsYatC4=",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Sri+Vijay+Puram",
        nearby: "The primary gateway and central hub for visiting Sri Vijay Puram."
    },
];

/*Mobile based Navbar*/ 
let x = document.getElementById('menu');
let menuBtn = document.querySelector('.menuBtn');
let closeBtn = document.querySelector('.closeBtn');

function OpenMenu(){
    x.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}
function CloseMenu(){
    x.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}


/* --- APPLICATION CONFIGURATION DEPLOYER --- */
document.addEventListener("DOMContentLoaded", () => {
    const activeRoute = document.body.dataset.page;
    setupGlobalLightboxModal();

    if (activeRoute === "home") {
        renderFeaturedCollection();
    } else if (activeRoute === "explore") {
        initExploreControlEngine();
    } else if (activeRoute === "state") {
        initStateControlEngine();
    } else if (activeRoute === "admin") {
        initAdminSimulationEngine();
    }
});

/* --- INJECT EXPANDABLE MODAL CONTENT --- */
function setupGlobalLightboxModal() {
    const node = document.createElement("div");
    node.id = "globalLightbox";
    node.className = "lightbox-modal";
    node.innerHTML = `
        <div class="lightbox-box">
            <button class="lightbox-close" id="boxCloseBtn">X</button>
            <img id="boxImg" src="" alt="" class="lightbox-hero-img">
            <div class="lightbox-content">
                <span id="boxBadge" class="badge"></span>
                <h2 id="boxTitle" style="font-size: 2rem; margin: 0.5rem 0; color:var(--text-main);"></h2>
                <p id="boxGeo" class="card-subtext"></p>
                <p id="boxDesc" style="margin-top:1rem; line-height:1.6; color:#cbd5e1;"></p>
                <div class="metadata-pill-box">
                    <div>
                        <h4 style="font-size:0.85rem; color:var(--text-muted); letter-spacing:0.5px;">BEST TIME TO EXPLORE</h4>
                        <p id="boxSchedule" style="font-weight:700; color:var(--text-main);"></p>
                    </div>
                    <div>
                        <h4 style="font-size:0.85rem; color:var(--text-muted); letter-spacing:0.5px;">ENTRY TIMINGS & FEES</h4>
                        <p style="font-weight:700; color:var(--text-main);">Verified Access Rules Apply</p>
                    </div>
                </div>
                <h3 style="margin-top:1.5rem; font-size:1.1rem; color:var(--text-main);">Crucial Nearby Attractions</h3>
                <p id="boxVicinity" class="card-subtext" style="margin-bottom:2rem;"></p>
                <a id="boxMap" href="#" target="_blank" class="btn-primary">🗺️ Open Map Navigation View</a>
            </div>
        </div>
    `;
    document.body.appendChild(node);

    document.getElementById("boxCloseBtn").addEventListener("click", () => {
        node.classList.remove("active");
    });
    node.addEventListener("click", (e) => {
        if (e.target === node) node.classList.remove("active");
    });
}

window.triggerDetailedLightboxView = function(id) {
    const sessionStore = JSON.parse(localStorage.getItem("custom_destinations") || "[]");
    const comprehensiveDb = [...sharedDestinationsDb, ...sessionStore];
    const unit = comprehensiveDb.find(item => item.id === parseInt(id));

    if (!unit) return;

    document.getElementById("boxImg").src = unit.image;
    document.getElementById("boxBadge").textContent = unit.category;
    document.getElementById("boxTitle").textContent = unit.name;
    document.getElementById("boxGeo").textContent = `📍 Location: ${unit.city}, ${unit.state}`;
    document.getElementById("boxDesc").textContent = unit.description;
    document.getElementById("boxSchedule").textContent = unit.bestTime;
    document.getElementById("boxVicinity").textContent = unit.nearby || "Regional Trails";
    document.getElementById("boxMap").href = unit.mapLink;

    document.getElementById("globalLightbox").classList.add("active");
};

/* --- HOMEPAGE RENDERING SYSTEM --- */
function renderFeaturedCollection() {
    const targetedLayout = document.getElementById("featuredGrid");
    if (!targetedLayout) return;
    const subsets = sharedDestinationsDb.slice(10, 13); // Displays Amer Fort, Munnar, and Taj Mahal
    targetedLayout.innerHTML = generateGridMarkup(subsets);
}

/* --- FILTER PARSING CORE ENGINE (EXPLORE WINDOW) --- */
function initExploreControlEngine() {
    const inputField = document.getElementById("globalSearchInput");
    const ddlState = document.getElementById("stateSelectFilter");
    const ddlCat = document.getElementById("categorySelectFilter");
    const tabs = document.querySelectorAll(".tab-item");

    let activeFilterTab = "";

    function processFilter() {
        const query = inputField.value.toLowerCase().trim();
        const pickedState = ddlState ? ddlState.value : "";
        const pickedCategory = activeFilterTab || (ddlCat ? ddlCat.value : "");

        const dynamicCustomStore = JSON.parse(localStorage.getItem("custom_destinations") || "[]");
        const joinedDb = [...sharedDestinationsDb, ...dynamicCustomStore];

        const outputData = joinedDb.filter(place => {
            const matchesQuery = place.name.toLowerCase().includes(query) || place.city.toLowerCase().includes(query);
            const matchesState = pickedState === "" || place.state.toLowerCase() === pickedState.toLowerCase();
            const matchesCategory = pickedCategory === "" || place.category === pickedCategory;
            return matchesQuery && matchesState && matchesCategory;
        });

        document.getElementById("exploreGrid").innerHTML = generateGridMarkup(outputData);
    }

    if(inputField) {
        inputField.addEventListener("input", processFilter);
        if(ddlState) ddlState.addEventListener("change", processFilter);
        if(ddlCat) ddlCat.addEventListener("change", (e) => {
            activeFilterTab = e.target.value;
            tabs.forEach(t => t.classList.toggle("active", t.dataset.category === activeFilterTab));
            processFilter();
        });

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                activeFilterTab = tab.dataset.category;
                if(ddlCat) ddlCat.value = activeFilterTab;
                processFilter();
            });
        });

        processFilter();
    }
}

/* --- STATE SELECTION ENGINE DISPLAY --- */
function initStateControlEngine() {
    const contextContainer = document.getElementById("dynamicStateView");
    const lookupList = document.getElementById("stateDirectoryIndex");

    if (lookupList) {
        lookupList.addEventListener("click", (e) => {
            const strip = e.target.closest(".state-strip-card");
            if (!strip) return;

            const region = strip.dataset.state;
            document.getElementById("stateHeadline").textContent = `${region} Regional Destinations`;

            const sessionRecords = JSON.parse(localStorage.getItem("custom_destinations") || "[]");
            const universe = [...sharedDestinationsDb, ...sessionRecords];

            const slice = universe.filter(x => x.state.toLowerCase() === region.toLowerCase());
            contextContainer.innerHTML = generateGridMarkup(slice);
            
            document.getElementById("stateShowcaseWrapper").style.display = "block";
            document.getElementById("stateShowcaseWrapper").scrollIntoView({ behavior: 'smooth' });
        });
    }
}

/* --- ADMINISTRATIVE PANEL LOGIC CORE --- */
function initAdminSimulationEngine() {
    const submissionForm = document.getElementById("adminDestForm");

    if(submissionForm) {
        submissionForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameValue = document.getElementById("admName").value;
            const stateValue = document.getElementById("admState").value;
            const packageObj = {
                id: Date.now(),
                name: nameValue,
                city: document.getElementById("admCity").value,
                state: stateValue,
                category: document.getElementById("admCat").value,
                description: document.getElementById("admDesc").value,
                bestTime: document.getElementById("admTime").value,
                image: document.getElementById("admImg").value || "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
                nearby: document.getElementById("admNearby").value || "Local Tourist Points",
                mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nameValue)}+${encodeURIComponent(stateValue)}`
            };

            const existingStore = JSON.parse(localStorage.getItem("custom_destinations") || "[]");
            existingStore.push(packageObj);
            localStorage.setItem("custom_destinations", JSON.stringify(existingStore));

            alert(`"${nameValue}" added successfully to your live dark database layer!`);
            submissionForm.reset();
            renderAdminAuditTrail();
        });

        renderAdminAuditTrail();
    }
}

function renderAdminAuditTrail() {
    const dynamicAuditGrid = document.getElementById("adminVerificationGrid");
    if (!dynamicAuditGrid) return;
    
    const customizedEntries = JSON.parse(localStorage.getItem("custom_destinations") || "[]");
    
    if(customizedEntries.length === 0) {
        dynamicAuditGrid.innerHTML = `
            <div style="text-align:center; padding:3.5rem 1.5rem; color:var(--text-muted); background:var(--bg-card); border-radius:12px; border:1px solid var(--border-color); width:100%;">
                <h3 style="margin-bottom:0.5rem; color:var(--text-main);">No Dynamic Entries Detected</h3>
                <p style="font-size:0.95rem;">Fill out the form entries on the left to test live admin injection operations.</p>
            </div>`;
        return;
    }

    dynamicAuditGrid.innerHTML = customizedEntries.map(item => `
        <div class="info-card">
            <img class="card-banner" src="${item.image}" alt="${item.name}">
            <div class="card-body">
                <span class="badge">${item.category}</span>
                <h3 class="card-heading">${item.name}</h3>
                <div class="card-subtext">📍 ${item.city}, ${item.state}</div>
                <p class="card-paragraph">${item.description}</p>
                <div class="card-action-bar" style="gap:1rem; flex-wrap:wrap;">
                    <button class="action-trigger" style="font-size:0.95rem;" onclick="triggerDetailedLightboxView(${item.id})">
                        👀 Explore More
                    </button>
                    <button class="btn-primary" 
                            style="background-color:#e74c3c; color:white; box-shadow:none; padding:0.5rem 1rem; font-size:0.85rem; border-radius:6px;" 
                            onclick="deleteCustomDestination(${item.id})">
                        🗑️ Remove Place
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

window.deleteCustomDestination = function(id) {
    if(!confirm("Are you sure you want to permanently delete this location card?")) return;

    let existingStore = JSON.parse(localStorage.getItem("custom_destinations") || "[]");
    existingStore = existingStore.filter(item => item.id !== parseInt(id));
    localStorage.setItem("custom_destinations", JSON.stringify(existingStore));
    
    renderAdminAuditTrail();
};

/* --- GENERAL REUSABLE CARD GENERATOR MARKUP --- */
function generateGridMarkup(array) {
    if (array.length === 0) {
        return `<div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                    <h3>No locations match your filter conditions.</h3>
                    <p>Try resetting the category drop-downs or keyword entry words.</p>
                </div>`;
    }

    return array.map(item => `
        <div class="info-card">
            <img class="card-banner" src="${item.image}" alt="${item.name}">
            <div class="card-body">
                <span class="badge">${item.category}</span>
                <h3 class="card-heading">${item.name}</h3>
                <div class="card-subtext">📍 ${item.city}, ${item.state}</div>
                <p class="card-paragraph">${item.description}</p>
                <div class="card-action-bar">
                    <span style="font-size: 0.85rem; font-weight:600; color:var(--text-muted);">🗓️ ${item.bestTime}</span>
                    <button class="action-trigger" onclick="triggerDetailedLightboxView(${item.id})">Explore Now →</button>
                </div>
            </div>
        </div>
    `).join('');
}