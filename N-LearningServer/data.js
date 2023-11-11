 const courseData = [
    {
        "id": 1, 
        "name": "Introduction to Programming",
        "instructor": "John Doe",
        "description": "Learn the basics of programming languages.",
        "enrollmentStatus": "Open",
        "thumbnail": "programming-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Mon, Wed, Fri 6:00 PM - 8:00 PM",
        "location": "Virtual",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Programming", "content": "Basic concepts and history" },
            { "week": 2, "topic": "Variables and Data Types", "content": "Understanding variables and different data types" }
        ],
        "students": [
            { "id": 101, "name": "Alice Smith", "email": "alice@email.com" },
            { "id": 102, "name": "Bob Johnson", "email": "bob@email.com" }
        ]
    },

    {
        "id": 2,
        "name": "Web Development Bootcamp",
        "instructor": "Jane Doe",
        "description": "Intensive course on modern web development.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "web-dev-thumbnail.jpg",
        "duration": "12 weeks",
        "schedule": "Tue, Thu 7:00 PM - 9:00 PM",
        "location": "Tech Institute",
        "prerequisites": ["Basic HTML", "CSS"],
        "syllabus": [
            { "week": 1, "topic": "HTML5 and CSS3", "content": "Advanced HTML and CSS concepts" },
            { "week": 2, "topic": "JavaScript Fundamentals", "content": "Introduction to JavaScript" }
        ],
        "students": [
            { "id": 201, "name": "Charlie Brown", "email": "charlie@email.com" },
            { "id": 202, "name": "Diana Williams", "email": "diana@email.com" }
        ]
    },
    {
        "id": 3,
        "name": "Data Science Fundamentals",
        "instructor": "Michael Johnson",
        "description": "Explore the world of data science and analytics.",
        "enrollmentStatus": "Closed",
        "thumbnail": "data-science-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 5:30 PM - 7:30 PM",
        "location": "Data Science Center",
        "prerequisites": ["Basic Statistics", "Python"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Data Science", "content": "Overview of data science and its applications" },
            { "week": 2, "topic": "Data Cleaning and Preprocessing", "content": "Techniques for cleaning and preparing data" }
        ],
        "students": [
            { "id": 301, "name": "Eva Martinez", "email": "eva@email.com" },
            { "id": 302, "name": "Frank Wilson", "email": "frank@email.com" }
        ]
    },
    {
        "id": 4,
        "name": "Graphic Design Workshop",
        "instructor": "Emily Adams",
        "description": "Unleash your creativity through graphic design.",
        "enrollmentStatus": "Open",
        "thumbnail": "graphic-design-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Sat 10:00 AM - 12:00 PM",
        "location": "Creative Studio",
        "prerequisites": ["Basic Design Skills"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Graphic Design", "content": "Fundamental principles and tools" },
            { "week": 2, "topic": "Color Theory", "content": "Understanding the psychology of colors" }
        ],
        "students": [
            { "id": 401, "name": "Grace Turner", "email": "grace@email.com" },
            { "id": 402, "name": "Henry White", "email": "henry@email.com" }
        ]
    },
    {
        "id": 5,
        "name": "Mobile App Development",
        "instructor": "Alex Garcia",
        "description": "Learn to create mobile apps for iOS and Android.",
        "enrollmentStatus": "Open",
        "thumbnail": "mobile-app-dev-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 6:30 PM - 8:30 PM",
        "location": "Tech Hub",
        "prerequisites": ["Basic Programming Skills", "Understanding of OOP"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Mobile App Development", "content": "Overview of mobile platforms and app development" },
            { "week": 2, "topic": "UI/UX Design for Mobile Apps", "content": "Principles of designing user-friendly interfaces" }
        ],
        "students": [
            { "id": 501, "name": "Isabel Ramirez", "email": "isabel@email.com" },
            { "id": 502, "name": "Jack Turner", "email": "jack@email.com" }
        ]
    },
    {
        "id": 6,
        "name": "Photography Masterclass",
        "instructor": "David Miller",
        "description": "Unlock the secrets of photography and master your camera.",
        "enrollmentStatus": "Closed",
        "thumbnail": "photography-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Sat, Sun 1:00 PM - 3:00 PM",
        "location": "Photography Studio",
        "prerequisites": ["Own a DSLR Camera"],
        "syllabus": [
            { "week": 1, "topic": "Understanding Your Camera", "content": "Camera settings, lenses, and basic techniques" },
            { "week": 2, "topic": "Composition Techniques", "content": "Rule of thirds, framing, and leading lines" }
        ],
        "students": [
            { "id": 601, "name": "Katherine Davis", "email": "katherine@email.com" },
            { "id": 602, "name": "Leo Rodriguez", "email": "leo@email.com" }
        ]
    },
    {
        "id": 7,
        "name": "Blockchain Fundamentals",
        "instructor": "Sophie Brown",
        "description": "Explore the basics of blockchain technology and cryptocurrencies.",
        "enrollmentStatus": "Open",
        "thumbnail": "blockchain-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Mon, Wed 7:00 PM - 9:00 PM",
        "location": "Blockchain Center",
        "prerequisites": ["Basic Understanding of Computer Science"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Blockchain", "content": "Key concepts and components" },
            { "week": 2, "topic": "Cryptocurrencies", "content": "Understanding and using cryptocurrencies" }
        ],
        "students": [
            { "id": 701, "name": "Michael Taylor", "email": "michael@email.com" },
            { "id": 702, "name": "Natalie Walker", "email": "natalie@email.com" }
        ]
    },
    {
        "id": 8,
        "name": "Creative Writing Workshop",
        "instructor": "Olivia Turner",
        "description": "Unleash your imagination and develop your writing skills.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "creative-writing-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Tue, Thu 5:00 PM - 7:00 PM",
        "location": "Literary Arts Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Creative Writing", "content": "Exploring different writing styles" },
            { "week": 2, "topic": "Character Development", "content": "Creating compelling characters" }
        ],
        "students": [
            { "id": 801, "name": "Oliver Adams", "email": "oliver@email.com" },
            { "id": 802, "name": "Penelope White", "email": "penelope@email.com" }
        ]
    },
    {
        "id": 9,
        "name": "Artificial Intelligence Essentials",
        "instructor": "Daniel Lee",
        "description": "Dive into the world of artificial intelligence and machine learning.",
        "enrollmentStatus": "Closed",
        "thumbnail": "ai-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Wed, Fri 6:30 PM - 8:30 PM",
        "location": "AI Lab",
        "prerequisites": ["Basic Programming Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to AI", "content": "Overview of AI and its applications" },
            { "week": 2, "topic": "Machine Learning Basics", "content": "Understanding the fundamentals of machine learning" }
        ],
        "students": [
            { "id": 901, "name": "Quinn Miller", "email": "quinn@email.com" },
            { "id": 902, "name": "Riley Carter", "email": "riley@email.com" }
        ]
    },
    {
        "id": 10,
        "name": "Digital Marketing Masterclass",
        "instructor": "Sophia Rodriguez",
        "description": "Learn advanced digital marketing strategies for online success.",
        "enrollmentStatus": "Open",
        "thumbnail": "digital-marketing-thumbnail.jpg",
        "duration": "12 weeks",
        "schedule": "Mon, Wed 8:00 PM - 10:00 PM",
        "location": "Marketing Hub",
        "prerequisites": ["Basic Marketing Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Digital Marketing Fundamentals", "content": "Introduction to online marketing channels" },
            { "week": 2, "topic": "Social Media Advertising", "content": "Effective strategies for social media advertising" }
        ],
        "students": [
            { "id": 1001, "name": "Samuel Harris", "email": "samuel@email.com" },
            { "id": 1002, "name": "Tiffany Turner", "email": "tiffany@email.com" }
        ]
    },
    {
        "id": 11,
        "name": "Virtual Reality Exploration",
        "instructor": "Ryan Anderson",
        "description": "Dive into the world of virtual reality and immersive experiences.",
        "enrollmentStatus": "Open",
        "thumbnail": "vr-exploration-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 6:00 PM - 8:00 PM",
        "location": "VR Lab",
        "prerequisites": ["Basic Programming Skills"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Virtual Reality", "content": "Overview of VR technologies and applications" },
            { "week": 2, "topic": "Building VR Environments", "content": "Creating immersive virtual worlds" }
        ],
        "students": [
            { "id": 1101, "name": "Victoria Martin", "email": "victoria@email.com" },
            { "id": 1102, "name": "Wesley Turner", "email": "wesley@email.com" }
        ]
    },
    {
        "id": 12,
        "name": "Music Production Basics",
        "instructor": "Emma Turner",
        "description": "Learn the essentials of music production and audio engineering.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "music-production-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Wed, Fri 7:30 PM - 9:30 PM",
        "location": "Music Studio",
        "prerequisites": ["Basic Music Theory"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Music Production", "content": "Overview of music production software" },
            { "week": 2, "topic": "Recording and Editing Techniques", "content": "Capturing and refining audio" }
        ],
        "students": [
            { "id": 1201, "name": "Xavier Lee", "email": "xavier@email.com" },
            { "id": 1202, "name": "Yasmine Hernandez", "email": "yasmine@email.com" }
        ]
    },
    {
        "id": 13,
        "name": "Cybersecurity Fundamentals",
        "instructor": "Nathan Miller",
        "description": "Explore the basics of cybersecurity and safeguarding digital assets.",
        "enrollmentStatus": "Closed",
        "thumbnail": "cybersecurity-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 7:30 PM - 9:30 PM",
        "location": "Cybersecurity Center",
        "prerequisites": ["Basic Networking Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Cybersecurity", "content": "Overview of cybersecurity threats and defenses" },
            { "week": 2, "topic": "Network Security", "content": "Securing computer networks" }
        ],
        "students": [
            { "id": 1301, "name": "Zara Davis", "email": "zara@email.com" },
            { "id": 1302, "name": "Oscar Smith", "email": "oscar@email.com" }
        ]
    },
    {
        "id": 14,
        "name": "Gardening for Beginners",
        "instructor": "Harper Green",
        "description": "Discover the joy of gardening and cultivate your green thumb.",
        "enrollmentStatus": "Open",
        "thumbnail": "gardening-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Sat, Sun 10:00 AM - 12:00 PM",
        "location": "Botanical Garden",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Getting Started with Gardening", "content": "Essential tools and basic gardening techniques" },
            { "week": 2, "topic": "Plant Selection and Care", "content": "Choosing the right plants and maintaining them" }
        ],
        "students": [
            { "id": 1401, "name": "Liam Turner", "email": "liam@email.com" },
            { "id": 1402, "name": "Ava Robinson", "email": "ava@email.com" }
        ]
    },
    {
        "id": 15,
        "name": "Language Exchange Program",
        "instructor": "Isabella Martinez",
        "description": "Immerse yourself in a diverse linguistic experience.",
        "enrollmentStatus": "Open",
        "thumbnail": "language-exchange-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 6:30 PM - 8:30 PM",
        "location": "Language Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Language Exchange", "content": "Understanding the benefits of multilingualism" },
            { "week": 2, "topic": "Conversation Skills", "content": "Effective techniques for language exchange" }
        ],
        "students": [
            { "id": 1501, "name": "Sophie Turner", "email": "sophie@email.com" },
            { "id": 1502, "name": "Elijah Hernandez", "email": "elijah@email.com" }
        ]
    },
    {
        "id": 16,
        "name": "Yoga and Mindfulness",
        "instructor": "Gabriel White",
        "description": "Balance your mind and body through yoga and mindfulness practices.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "yoga-mindfulness-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Mon, Wed 7:00 AM - 8:30 AM",
        "location": "Wellness Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Yoga", "content": "Basic poses and breathing techniques" },
            { "week": 2, "topic": "Mindfulness Meditation", "content": "Practices for cultivating mindfulness" }
        ],
        "students": [
            { "id": 1601, "name": "Luna Rodriguez", "email": "luna@email.com" },
            { "id": 1602, "name": "Mason Adams", "email": "mason@email.com" }
        ]
    },
    {
        "id": 17,
        "name": "Cooking Essentials",
        "instructor": "Oliver Taylor",
        "description": "Master the art of cooking with fundamental culinary skills.",
        "enrollmentStatus": "Closed",
        "thumbnail": "cooking-essentials-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Tue, Thu 6:00 PM - 8:00 PM",
        "location": "Culinary Arts Institute",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Knife Skills and Basic Techniques", "content": "Essential skills for every chef" },
            { "week": 2, "topic": "Introduction to Culinary Arts", "content": "Overview of the culinary world" }
        ],
        "students": [
            { "id": 1701, "name": "Nora Brown", "email": "nora@email.com" },
            { "id": 1702, "name": "Owen Martinez", "email": "owen@email.com" }
        ]
    },
    {
        "id": 18,
        "name": "Financial Literacy Workshop",
        "instructor": "Harper Turner",
        "description": "Empower yourself with essential financial knowledge and skills.",
        "enrollmentStatus": "Open",
        "thumbnail": "financial-literacy-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Sat, Sun 2:00 PM - 4:00 PM",
        "location": "Financial Education Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Budgeting and Saving", "content": "Building a strong financial foundation" },
            { "week": 2, "topic": "Investing Basics", "content": "Introduction to different investment options" }
        ],
        "students": [
            { "id": 1801, "name": "Parker Davis", "email": "parker@email.com" },
            { "id": 1802, "name": "Quinn Robinson", "email": "quinn@email.com" }
        ]
    },
    {
        "id": 19,
        "name": "Astrophotography Workshop",
        "instructor": "Astrid Johnson",
        "description": "Capture the beauty of the night sky with astrophotography techniques.",
        "enrollmentStatus": "Open",
        "thumbnail": "astrophotography-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Wed, Fri 9:00 PM - 11:00 PM",
        "location": "Observatory",
        "prerequisites": ["Basic Photography Skills"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Astrophotography", "content": "Basics of photographing celestial objects" },
            { "week": 2, "topic": "Post-Processing Techniques", "content": "Enhancing and editing astrophotographs" }
        ],
        "students": [
            { "id": 1901, "name": "Rose Turner", "email": "rose@email.com" },
            { "id": 1902, "name": "Simon Harris", "email": "simon@email.com" }
        ]
    },
    {
        "id": 20,
        "name": "Environmental Sustainability",
        "instructor": "Eco Warrior",
        "description": "Explore ways to contribute to a more sustainable future.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "sustainability-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Tue, Thu 5:30 PM - 7:30 PM",
        "location": "Green Living Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Sustainability", "content": "Understanding environmental issues" },
            { "week": 2, "topic": "Green Practices in Daily Life", "content": "Implementing sustainable habits" }
        ],
        "students": [
            { "id": 2001, "name": "Skyler Adams", "email": "skyler@email.com" },
            { "id": 2002, "name": "Harmony Robinson", "email": "harmony@email.com" }
        ]
    },
    {
        "id": 21,
        "name": "History of Art Movements",
        "instructor": "Professor Articus",
        "description": "Journey through the evolution of art and its various movements.",
        "enrollmentStatus": "Closed",
        "thumbnail": "art-history-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 6:00 PM - 8:00 PM",
        "location": "Art Museum",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Ancient Art to Renaissance", "content": "The birth and rebirth of art" },
            { "week": 2, "topic": "Baroque to Contemporary", "content": "Exploring diverse artistic movements" }
        ],
        "students": [
            { "id": 2101, "name": "Theo Miller", "email": "theo@email.com" },
            { "id": 2102, "name": "Ivy Turner", "email": "ivy@email.com" }
        ]
    },
    {
        "id": 22,
        "name": "Personal Development Seminar",
        "instructor": "Life Coach Lily",
        "description": "Invest in your personal growth and well-being.",
        "enrollmentStatus": "Open",
        "thumbnail": "personal-development-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Sat, Sun 11:00 AM - 1:00 PM",
        "location": "Wellness Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Setting and Achieving Goals", "content": "Strategies for personal success" },
            { "week": 2, "topic": "Mindfulness and Stress Management", "content": "Techniques for a balanced life" }
        ],
        "students": [
            { "id": 2201, "name": "Logan Davis", "email": "logan@email.com" },
            { "id": 2202, "name": "Aria Martinez", "email": "aria@email.com" }
        ]
    },
    {
        "id": 23,
        "name": "Virtual Reality Game Design",
        "instructor": "Game Master Max",
        "description": "Create immersive and engaging virtual reality games.",
        "enrollmentStatus": "Open",
        "thumbnail": "vr-game-design-thumbnail.jpg",
        "duration": "12 weeks",
        "schedule": "Tue, Thu 7:30 PM - 9:30 PM",
        "location": "Game Development Lab",
        "prerequisites": ["Basic Programming Skills"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to VR Game Design", "content": "Fundamentals of game development in virtual reality" },
            { "week": 2, "topic": "Building Interactive Environments", "content": "Creating dynamic VR worlds" }
        ],
        "students": [
            { "id": 2301, "name": "Mia Turner", "email": "mia@email.com" },
            { "id": 2302, "name": "Caleb Brown", "email": "caleb@email.com" }
        ]
    },
    {
        "id": 24,
        "name": "Film Production Masterclass",
        "instructor": "Director Davis",
        "description": "Learn the art and craft of filmmaking from industry experts.",
        "enrollmentStatus": "Open",
        "thumbnail": "film-production-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 6:30 PM - 8:30 PM",
        "location": "Film Studio",
        "prerequisites": ["Basic Camera Skills"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Film Production", "content": "Overview of the filmmaking process" },
            { "week": 2, "topic": "Scriptwriting and Storyboarding", "content": "Crafting compelling narratives for film" }
        ],
        "students": [
            { "id": 2401, "name": "Noah Turner", "email": "noah@email.com" },
            { "id": 2402, "name": "Ella Rodriguez", "email": "ella@email.com" }
        ]
    },
    {
        "id": 25,
        "name": "Public Speaking Mastery",
        "instructor": "Speech Guru Sarah",
        "description": "Hone your public speaking skills and become a confident communicator.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "public-speaking-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Tue, Thu 7:00 PM - 9:00 PM",
        "location": "Communication Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Overcoming Stage Fright", "content": "Techniques to build confidence on stage" },
            { "week": 2, "topic": "Effective Presentation Skills", "content": "Delivering impactful presentations" }
        ],
        "students": [
            { "id": 2501, "name": "Ethan Davis", "email": "ethan@email.com" },
            { "id": 2502, "name": "Hazel Martinez", "email": "hazel@email.com" }
        ]
    },
    {
        "id": 26,
        "name": "Advanced Physics Concepts",
        "instructor": "Professor Physics",
        "description": "Explore the fascinating world of advanced physics principles.",
        "enrollmentStatus": "Closed",
        "thumbnail": "physics-thumbnail.jpg",
        "duration": "12 weeks",
        "schedule": "Mon, Wed 5:00 PM - 7:00 PM",
        "location": "Physics Lab",
        "prerequisites": ["Basic Physics Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Quantum Mechanics", "content": "Understanding the principles of quantum physics" },
            { "week": 2, "topic": "Astrophysics and Cosmology", "content": "Exploring the universe through physics" }
        ],
        "students": [
            { "id": 2601, "name": "Ian Wilson", "email": "ian@email.com" },
            { "id": 2602, "name": "Grace Turner", "email": "grace@email.com" }
        ]
    },
    {
        "id": 27,
        "name": "Fashion Design Essentials",
        "instructor": "Fashionista Fiona",
        "description": "Embark on a journey into the world of fashion design and creativity.",
        "enrollmentStatus": "Open",
        "thumbnail": "fashion-design-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Wed, Fri 6:00 PM - 8:00 PM",
        "location": "Fashion Studio",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Fashion Design", "content": "History and basics of fashion" },
            { "week": 2, "topic": "Sketching and Pattern Making", "content": "Bringing designs to life on paper" }
        ],
        "students": [
            { "id": 2701, "name": "Jasmine Brown", "email": "jasmine@email.com" },
            { "id": 2702, "name": "Kai Robinson", "email": "kai@email.com" }
        ]
    },
    {
        "id": 28,
        "name": "Ethical Hacking and Cybersecurity",
        "instructor": "Cyber Ninja Alex",
        "description": "Master the skills of ethical hacking to strengthen cybersecurity.",
        "enrollmentStatus": "Open",
        "thumbnail": "ethical-hacking-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Tue, Thu 7:30 PM - 9:30 PM",
        "location": "Cybersecurity Lab",
        "prerequisites": ["Basic Networking Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Ethical Hacking", "content": "Understanding ethical hacking and its importance" },
            { "week": 2, "topic": "Penetration Testing", "content": "Hands-on techniques to identify and fix vulnerabilities" }
        ],
        "students": [
            { "id": 2801, "name": "Milo Turner", "email": "milo@email.com" },
            { "id": 2802, "name": "Nina Harris", "email": "nina@email.com" }
        ]
    }, {
        "id": 29,
        "name": "Culinary Adventure: World Cuisine",
        "instructor": "Chef Marco",
        "description": "Embark on a culinary journey exploring the flavors of world cuisine.",
        "enrollmentStatus": "Open",
        "thumbnail": "world-cuisine-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Thu, Sat 6:30 PM - 8:30 PM",
        "location": "Culinary Institute",
        "prerequisites": ["Basic Cooking Skills"],
        "syllabus": [
            { "week": 1, "topic": "Italian Delights", "content": "Mastering pasta and classic Italian dishes" },
            { "week": 2, "topic": "Asian Fusion", "content": "Blending flavors from various Asian cuisines" }
        ],
        "students": [
            { "id": 2901, "name": "Olivia White", "email": "olivia@email.com" },
            { "id": 2902, "name": "Nathan Turner", "email": "nathan@email.com" }
        ]
    },
    {
        "id": 30,
        "name": "Introduction to 3D Printing",
        "instructor": "Tech Innovator Sarah",
        "description": "Dive into the world of 3D printing and unleash your creativity.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "3d-printing-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Tue, Thu 6:00 PM - 8:00 PM",
        "location": "Innovation Lab",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Basics of 3D Printing", "content": "Understanding the technology and its applications" },
            { "week": 2, "topic": "Creating 3D Designs", "content": "Hands-on design and printing projects" }
        ],
        "students": [
            { "id": 3001, "name": "Lucas Davis", "email": "lucas@email.com" },
            { "id": 3002, "name": "Mia Turner", "email": "mia@email.com" }
        ]
    },
    {
        "id": 31,
        "name": "Interior Design Fundamentals",
        "instructor": "Design Maven Emily",
        "description": "Unleash your creativity in transforming spaces with interior design.",
        "enrollmentStatus": "Closed",
        "thumbnail": "interior-design-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 7:00 PM - 9:00 PM",
        "location": "Design Studio",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Elements of Design", "content": "Understanding color, form, and texture" },
            { "week": 2, "topic": "Room Layout and Planning", "content": "Creating functional and aesthetically pleasing spaces" }
        ],
        "students": [
            { "id": 3101, "name": "Lila Robinson", "email": "lila@email.com" },
            { "id": 3102, "name": "Oscar Miller", "email": "oscar@email.com" }
        ]
    },
    {
        "id": 32,
        "name": "Introduction to Robotics",
        "instructor": "Robo Guru Alex",
        "description": "Embark on a journey into the exciting world of robotics and automation.",
        "enrollmentStatus": "Open",
        "thumbnail": "robotics-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Wed, Fri 6:30 PM - 8:30 PM",
        "location": "Robotics Lab",
        "prerequisites": ["Basic Programming Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Basics of Robotics", "content": "Understanding robotic components and principles" },
            { "week": 2, "topic": "Building and Programming Robots", "content": "Hands-on projects in robotics" }
        ],
        "students": [
            { "id": 3201, "name": "Xander White", "email": "xander@email.com" },
            { "id": 3202, "name": "Yara Martinez", "email": "yara@email.com" }
        ]
    },
    {
        "id": 33,
        "name": "Economics and Personal Finance",
        "instructor": "Financial Guru Emma",
        "description": "Gain insights into economic principles and manage your personal finances.",
        "enrollmentStatus": "Open",
        "thumbnail": "economics-finance-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Tue, Thu 7:30 PM - 9:30 PM",
        "location": "Finance Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Economic Fundamentals", "content": "Understanding basic economic principles" },
            { "week": 2, "topic": "Budgeting and Financial Planning", "content": "Strategies for managing personal finances" }
        ],
        "students": [
            { "id": 3301, "name": "Zane Turner", "email": "zane@email.com" },
            { "id": 3302, "name": "Aria Davis", "email": "aria@email.com" }
        ]
    },
    {
        "id": 34,
        "name": "Photography for Beginners",
        "instructor": "Shutterbug Sarah",
        "description": "Learn the basics of photography and capture stunning moments.",
        "enrollmentStatus": "Open",
        "thumbnail": "photography-for-beginners-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 6:00 PM - 8:00 PM",
        "location": "Photography Studio",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Understanding Your Camera", "content": "Exploring camera settings and features" },
            { "week": 2, "topic": "Composition and Framing", "content": "Creating visually appealing photographs" }
        ],
        "students": [
            { "id": 3401, "name": "Eva Robinson", "email": "eva@email.com" },
            { "id": 3402, "name": "Liam Martinez", "email": "liam@email.com" }
        ]
    },
    {
        "id": 35,
        "name": "Music Theory Fundamentals",
        "instructor": "Maestro Michael",
        "description": "Dive into the world of music theory and enhance your musical knowledge.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "music-theory-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Mon, Wed 7:30 PM - 9:30 PM",
        "location": "Music Hall",
        "prerequisites": ["Basic Knowledge of an Instrument"],
        "syllabus": [
            { "week": 1, "topic": "Note Reading and Rhythm", "content": "Understanding musical notation and timing" },
            { "week": 2, "topic": "Harmony and Chord Progressions", "content": "Exploring the foundations of harmony" }
        ],
        "students": [
            { "id": 3501, "name": "Zara Turner", "email": "zara@email.com" },
            { "id": 3502, "name": "Owen White", "email": "owen@email.com" }
        ]
    },
    {
        "id": 36,
        "name": "Introduction to Astrophysics",
        "instructor": "Astro Explorer Alex",
        "description": "Explore the wonders of the universe through the lens of astrophysics.",
        "enrollmentStatus": "Closed",
        "thumbnail": "astrophysics-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Wed, Fri 7:00 PM - 9:00 PM",
        "location": "Observatory",
        "prerequisites": ["Basic Physics Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Stars and Galaxies", "content": "Understanding the celestial bodies in the night sky" },
            { "week": 2, "topic": "Cosmic Phenomena", "content": "Exploring black holes, supernovae, and more" }
        ],
        "students": [
            { "id": 3601, "name": "Mason Turner", "email": "mason@email.com" },
            { "id": 3602, "name": "Ava Harris", "email": "ava@email.com" }
        ]
    },
    {
        "id": 37,
        "name": "Graphic Design Essentials",
        "instructor": "Design Guru Emma",
        "description": "Master the essentials of graphic design and unleash your creativity.",
        "enrollmentStatus": "Open",
        "thumbnail": "graphic-design-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 6:30 PM - 8:30 PM",
        "location": "Design Studio",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Graphic Design", "content": "Fundamentals of design principles" },
            { "week": 2, "topic": "Digital Tools for Designers", "content": "Exploring graphic design software" }
        ],
        "students": [
            { "id": 3701, "name": "Oliver Robinson", "email": "oliver@email.com" },
            { "id": 3702, "name": "Nora Turner", "email": "nora@email.com" }
        ]
    },
    {
        "id": 38,
        "name": "Social Psychology",
        "instructor": "Psychologist Paige",
        "description": "Explore the dynamics of human behavior in social settings.",
        "enrollmentStatus": "Open",
        "thumbnail": "social-psychology-thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 7:30 PM - 9:30 PM",
        "location": "Psychology Lab",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Social Psychology", "content": "Understanding the basics of social influence" },
            { "week": 2, "topic": "Group Dynamics", "content": "Exploring behavior in group settings" }
        ],
        "students": [
            { "id": 3801, "name": "Quinn Davis", "email": "quinn@email.com" },
            { "id": 3802, "name": "Piper Miller", "email": "piper@email.com" }
        ]
    },
    {
        "id": 39,
        "name": "Digital Illustration Workshop",
        "instructor": "Illustrator Iris",
        "description": "Learn the art of digital illustration and bring your imagination to life.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "digital-illustration-thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Wed, Fri 5:00 PM - 7:00 PM",
        "location": "Art Studio",
        "prerequisites": ["Basic Drawing Skills"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Digital Illustration", "content": "Exploring digital tools for artists" },
            { "week": 2, "topic": "Creating Digital Artwork", "content": "Hands-on projects in digital illustration" }
        ],
        "students": [
            { "id": 3901, "name": "Kai Turner", "email": "kai@email.com" },
            { "id": 3902, "name": "Ivy Robinson", "email": "ivy@email.com" }
        ]
    },
    {
        "id": 40,
        "name": "Healthy Living and Nutrition",
        "instructor": "Nutritionist Natalie",
        "description": "Discover the keys to a healthy lifestyle through nutrition and wellness.",
        "enrollmentStatus": "Open",
        "thumbnail": "healthy-living-thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 6:30 PM - 8:30 PM",
        "location": "Wellness Center",
        "prerequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Nutrition Basics", "content": "Understanding the importance of a balanced diet" },
            { "week": 2, "topic": "Wellness and Healthy Habits", "content": "Incorporating wellness practices into daily life" }
        ],
        "students": [
            { "id": 4001, "name": "Logan White", "email": "logan@email.com" },
            { "id": 4002, "name": "Harper Turner", "email": "harper@email.com" }
        ]
    }
]

module.exports = {courseData}