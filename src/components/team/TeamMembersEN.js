const teamMembers = [
  {
    id: 1,
    image: "/team1.webp",
    image2: "/team1-2.webp",
    name: "Kevin",
    fullName: "Kevin Ortega Okhuysen",
    role: "Full-Stack Developer",
    skills: "React, Node, Express",
    experience: "5 years of experience",
    transition: "imagen1",
    education: "Bachelor's in Intelligent Systems Technologies",
    contact: "664 642 9633",
    proyecto: "E-commetrica, Full-Stack Developer.",
    proyecto2: "Cenyca University, Platform developer for students, teachers, and school control.",
    proyecto3: null,
    edu: "Bachelor's in Intelligent Systems Technologies.",
    edu2: null,
    testimonio: "Kevin is an exceptional Developer. His ability to structure projects efficiently with innovative tools made a huge difference in our project.",
    testimonio2: "Working with Kevin was an incredible experience. His web expertise allowed us to develop a fully functional app even before the deadline. He was always available to answer questions and contributed innovative ideas that improved our final product.",
    description: "Kevin is a Full-Stack Developer specialized in web development and mobile applications, with over 4 years of experience in technology and digital development.",
    extendedDescription: `Kevin Ortega was born in Puebla, but has lived in Tijuana for over 20 years. In addition to his specialization in web development and mobile apps, Kevin has a passion for technology and digital development. Throughout his career, he has worked in multiple sectors such as education, health, and e-commerce.`,
    detailedSkills: `<strong>Programming languages: </strong> HTML, CSS, JavaScript, TypeScript, React, Vue, Angular, Java, Kotlin, TailwindCSS, MySQL, Firebase, Node.js, Express, Python, Bootstrap, Git.<br><strong>Digital Marketing: </strong> Project management and site optimization with SEO strategies.<br><strong>Software:</strong> Figma, Trello, Slack, Todoist, MATLAB.<br><strong>SEO:</strong/> Google Search Console, Google Analytics, Pixel, Google Tag Manager.`,
    workEthic: `Working with Kevin means having someone passionate about finding creative solutions, unafraid of challenges. His adaptable mindset and critical thinking provide unique perspectives for each project, taking the entire Ecommetrica team to new heights of innovation and development.`,
    additionalDetails: {
      funFacts: [
        "Always up to date with the latest tech releases.",
        "A huge anime fan.",
        "A foodie constantly exploring new flavors."
      ]
    }
  },
  {
    id: 2,
    image: "/team2.webp",
    image2: "/team2-2.webp",
    name: "Karen",
    fullName: "Karen Valdez",
    role: "Editor & Copywriter",
    skills: "Editor, Copywriter, Content Creator",
    transition: "imagen2",
    experience: "5 years of experience",
    education: "Bachelor's in Communication and Advertising",
    contact: "664 642 9633",
    proyecto: "E-commetrica, Copywriter and video editor.",
    proyecto2: "HERFAVE, Community manager and sales.",
    proyecto3: "Distribuidora Landys, Web sales.",
    proyecto4: "Imprex Digital, General assistant.",
    proyecto5: "Websense MX, Copywriter.",
    edu: "Bachelor's in Communication and Advertising.",
    edu2: null,
    testimonio: "Her ability to transform ideas into words that connect with the audience is impressive. Working with her was crucial in bringing our content to life and ensuring our brand made an impact.",
    testimonio2: "Karen is a professional with a great eye for detail. She always knows how to capture the essence of what we are communicating and presents it in a unique and effective way.",
    description: "She holds a degree in Communication and Advertising with 5 years of experience in creative writing, advertising design, eCommerce, and multimedia editing.",
    extendedDescription: `Karen is proudly from Tijuana and the border region, with a creative vision that transforms ideas into powerful messages. Her critical eye and talent for re-signifying and building messages allow her to capture the attention of various audiences, whether B2C, B2B, or more.`,
    detailedSkills: `<strong>Digital Marketing: </strong> Project management, SEO, content strategies, and planning.<br><strong>Software:</strong> Premiere, Audition, CorelDRAW, Todoist, Shopify.<br><strong>Video:</strong> Pre and post-production.<br><strong>Copywriting:</strong> Creation of persuasive and effective messages.`,
    workEthic: `Working with Karen means transforming spaces and redefining communication for growth. Her creative approach generates a constant flow of ideas and strategies to leave a mark on the mind and heart of the consumer.`,
    additionalDetails: {
      funFacts: [
        "A lover of pop culture.",
        "A passionate researcher.",
        "Curious about messages that go beyond the surface."
      ]
    }
  },
  {
    id: 3,
    image: "/team3.webp",
    image2: "/team3-2.webp",
    name: "Yaz",
    fullName: "Yazmin Guardado",
    role: "UX / UI Designer",
    skills: "UX / UI, Branding, Advertising",
    transition: "imagen3",
    experience: "14 years of experience",
    education: "Bachelor's in Digital Graphic Design and Marketing",
    contact: "664 642 9633",
    proyecto: "E-commetrica, UX/UI Designer and branding.",
    proyecto2: "Academia Lean Sigma, Senior designer and community manager.",
    proyecto3: "Alternativa 19 del Sur, Senior designer and marketing.",
    proyecto4: "HighBits, Junior designer.",
    edu: "Bachelor's in Traditional Design and Design Psychology.",
    edu2: "Bachelor's in Digital Graphic Design and Marketing.",
    testimonio: "Working with Yazmin was a pleasure. She has an incredible ability to understand what the user needs and translate it into designs that are not only visually appealing but also easy to use. Her work has made our platform much more intuitive and enjoyable for users.",
    testimonio2: "Yazmin has a gift for design. Her attention to detail and ability to transform ideas into clean and functional interfaces truly makes a difference. She always considers the user experience, making the final product flawless.",
    description: "She is a UX/UI graphic designer with over 14 years of experience, excelling in marketing and software design.",
    extendedDescription: `Yazmín Guardado, originally from Tuxtla Gutiérrez, came to Tijuana with extraordinary talent and charisma. She is a UX/UI designer with over 14 years of experience, excelling in marketing and graphic design. Her creativity and management skills have made her a key player in every project she touches.`,
    detailedSkills: `<strong>Digital Marketing: </strong> Project management and website optimization with UX/UI.<br><strong>Software:</strong> Figma, Adobe, Todoist, Shopify.<br><strong>Photography:</strong> Professional (product and corporate).<br><strong>Graphic Design:</strong> and Illustration.<br><strong>UX Writing:</strong> Strong creative writing skills to improve user experience.`,
    workEthic: `Working with Yaz means the sky is not the limit, but the beginning to design beyond it. Yaz is passionate about improving concepts, elevating ideas, and creating fun, adaptable, and inclusive designs. She is the perfect combination of functionality and aesthetics.`,
    additionalDetails: {
      funFacts: [
        "A professional multitasker.",
        "Addicted to music.",
        "Always learning a new design skill."
      ]
    }
  },
  {
    "id": 4,
    "image": "/team4.webp",
    "image2": "/team4-2.webp",
    "name": "Juan",
    "fullName": "Manuel González",
    "role": "Founder & E-commerce Consultant",
    "skills": "E-commerce, Data Analysis, Programming, SEO",
    "transition": "imagen4",
    "experience": "Over 10 years of experience in e-commerce and digital consulting",
    "education": "MSc in Applied Economics",
    "contact": "664 642 9633",
    "proyecto": "E-commetrica, Founder and E-commerce Consultant.",
    "proyecto2": "Shopify store development and advanced automation solutions.",
    "proyecto3": "Developer of analytical dashboards in R and React programming.",
    "proyecto4": "Consultancy for digital platform optimization and SEO.",
    "edu": "MSc in Applied Economics",
    "edu2": "BSc in Computer Science",
    "testimonio": "Manuel González is a strategic consultant with a deep understanding of digital platforms and e-commerce.",
    "testimonio2": "With his analytical skills and focus on innovation, Manuel has transformed e-commerce for various companies, always aiming for sustainable and optimized growth.",
    "description": "Manuel González is an e-commerce expert with an innovative approach and technical expertise that allows him to develop advanced solutions for digital commerce.",
    "extendedDescription": "Manuel González, from Tijuana, Baja California, is a leader and consultant in e-commerce with over 10 years of experience. He has worked in various sectors, helping companies implement advanced solutions and achieve exponential growth through automation strategies, SEO, and data analysis.",
    "detailedSkills": "<strong>Areas of expertise:</strong> E-commerce, Web Development, Data Analysis, SEO.<br><strong>Software:</strong> Shopify, React, R, Python, AgileCRM.<br><strong>Skills:</strong> E-commerce solutions development, data analysis, SEO optimization.",
    "workEthic": "Working with Manuel González means partnering with a strategic leader who is always ahead of the curve, developing innovative solutions and making a lasting impact on businesses.",
    "additionalDetails": {
      "funFacts": [
        "Lover of travel.",
        "Avid reader.",
        "Undisputed domino champion."
      ]
    }
  },
  {
    "id": 5,
    "image": "/team5.webp",
    "image2": "/team5-2.webp",
    "name": "Carlos",
    "fullName": "Juan Carlos Guerrero",
    "role": "Strategic Consultant & Director",
    "skills": "Sales, Politics, Agriculture, Technology",
    "transition": "imagen5",
    "experience": "18 years of experience in sales and technology, 20 years in politics and agriculture",
    "education": "Law Degree",
    "contact": "664 642 9633",
    "proyecto": "E-commetrica, E-commerce Consultant and Web Developer.",
    "proyecto2": "Border Grower, E-commerce Director and R & Liquid Programmer.",
    "proyecto3": "Digital Lab Agency, E-commerce Developer.",
    "proyecto4": "Guarantee Solar, Digital Marketing Specialist.",
    "edu": "Law Degree",
    "edu2": "Studies in Politics and Agriculture",
    "testimonio": "Juan Carlos Guerrero is a multifaceted expert with a unique ability to integrate sales, politics, and agriculture into his strategic approach.",
    "testimonio2": "His versatility and experience allow him to provide an integrated approach, helping companies reach their full potential across multiple areas.",
    "description": "Juan Carlos Guerrero is a strategic consultant and leader with over 18 years of experience, excelling in sales, politics, and agriculture.",
    "extendedDescription": "Originally from San Diego, California, Juan Carlos has been a leader in sales and technology, an experienced political operator, and a passionate advocate for agriculture. His unique approach has allowed him to impact various industries, leveraging his cross-border experience to drive the growth of his projects.",
    "detailedSkills": "<strong>Areas of expertise:</strong> Sales, Politics, Agriculture, Technology.<br><strong>Skills:</strong> Sales strategy, Political communication, Market analysis, Technology development.",
    "workEthic": "Working with Juan Carlos means partnering with an expert capable of integrating various sectors, providing vision and a strategic approach to maximize results.",
    "additionalDetails": {
      "funFacts": [
        "Lover of oriental cuisine.",
        "Fearless surfer.",
        "Distinguished storyteller."
      ]
    }
  },  
  {
    id: 6,
    image: "/team6.webp",
    image2: "/team6-2.webp",
    name: "Jesus",
    fullName: "Jesus González",
    role: "Junior Developer",
    skills: "Web Development, Programming",
    transition: "imagen6",
    experience: "1 year of experience",
    education: "Information Technology and Communication",
    contact: "664 642 9633",
    proyecto: "E-commetrica, Junior Developer and development support.",
    proyecto2: "Web development in small and medium-sized projects.",
    proyecto3: null,
    edu: "Studies in Software Engineering.",
    edu2: null,
    testimonio: "Jesus is a passionate programmer who has shown great ability to learn quickly and take on challenges in web development.",
    testimonio2: "Despite his limited experience, Jesus has contributed valuable solutions to our team. His passion for technology and programming shows in his work.",
    description: "Jesus is a Junior Developer at E-commetrica with experience in web development and software.",
    extendedDescription: `Despite his short career, Jesus has shown a strong commitment and ability to solve complex problems in his projects. He is a key member of the growing, young team.`,
    detailedSkills: `<strong>Programming languages:</strong> HTML, CSS, JavaScript, React, Node.js.<br><strong>Software:</strong> VS Code, Git, GitHub.`,
    workEthic: `Jesus is an enthusiastic person, committed to his professional growth, and always eager to learn new technologies to improve his skills.`,
    additionalDetails: {
      funFacts: [
        "A technology and video game enthusiast.",
        "Enjoys learning about artificial intelligence.",
        "Always looking to improve his programming."
      ]
    }
  },
  {
    id: 7,
    image: "/team7.webp",
    image2: "/team7-2.webp",
    name: "Maria",
    fullName: "María José Zuili Almanza",
    role: "Editor",
    skills: "Editing, Design, Content Creation",
    transition: "imagen7",
    experience: "5 years of experience",
    education: "Studies in Architecture and Design",
    contact: "664 642 9633",
    proyecto: "E-commetrica, Content editor and creative.",
    proyecto2: "Content creation for the architecture and marketing sector.",
    proyecto3: null,
    edu: "Studies in Architecture and Design.",
    edu2: null,
    testimonio: "María José is a creative editor with a unique approach that brings ideas to life with an artistic touch.",
    testimonio2: "Her ability to conceptualize and execute visually appealing projects has elevated our content.",
    description: "María José Zuili is an editor with an artistic and creative approach who has worked on various design and marketing projects.",
    extendedDescription: `María José Zuili Almanza resides in Querétaro and is a future architect and artist with an innovative approach. Currently, she is part of the team as an Editor, bringing her talent and creativity to every project.`,
    detailedSkills: `<strong>Content creation: </strong> Design, conceptualization of architectural plans, and image enhancement.<br><strong>Software:</strong> Adobe Premiere, Lightroom, Illustrator, AutoCAD.<br><strong>Editing and rendering:</strong> Photoshop, Lightroom.<br><strong>Video editing:</strong> Post-production and precise assembly.`,
    workEthic: `Working with María José means adding an artistic and sensitive sense to marketing. Her ability to reinvent content and create new perspectives in each image and video impacts the entire team.`,
    additionalDetails: {
      funFacts: [
        "Her love for architecture drives her to seek balance in everything.",
        "A fan of design and aesthetics.",
        "Always learning a new design technique."
      ]
    }
  }
];

export default teamMembers;
