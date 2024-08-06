import { icons } from "./icons";


export const modalData = [
    {
        folderName: "about",
        title: "MyJourney",
        description: "Get to know stuff about me that you wouldn't have seen on my CV",
        iconPath: icons.me,

    },
    {
        folderName: "about",
        title: "Skills",
        description: "I am a sort of jack of all trades and trying to master some...",
        iconPath: icons.skills,

    },

    {
        folderName: "about",
        title: "Hobbies",
        description: "I like to do a lot of things when I am free..so this is a glimpse of that.",
        iconPath: icons.hobbies,

    },
    {
        folderName: "about",
        title: "Goals",
        description: "Our goals do change a lot but these are some of the ones that have been constant.",
        iconPath: icons.goals,

    },
    {
        folderName: "achievements",
        title: "Myntra WeForShe 2024",
        description: " We ranked among the top 1000 teams from almost 30,000 teams",
        process: "We created 3 features: a reccomendation engine and deployed it on React with the help of FastAPI ; a Virtual Lipstick Try-On using Mediapipe Library, and a Moodboards feature where users can create their own collections to compare different styles/looks or seperate clothes according to various themes like party or office-wear, etc.",
        whatILearnt: "My key takeway from this project was how a reccomendation engine works, built it and then integrate the  machine learning model and web development together.",
        iconPath: icons.myntra,
        techStack: ['TensorFlow', 'FastAPI', 'Mediapipe Library', 'React JS', 'Express JS', 'Node JS'],
        challengesFaced: ["All 3 of us were also doing a full time internship when this hackathon happened and one member was doing a remote intern so collaborating effectively and managing our time was the main challenge."],
        listOfLinks: ['https://github.com/RevatiGoyal22/Myntra', 'https://colab.research.google.com/drive/1iDzMgFodKh-8uEe-uI0d5JHPaGw5CtVw'],
        listOfImgs: [],
        pdf: "src/assets/achievements/MyntraHackathon.pdf"
    },
    {
        folderName: "achievements",
        title: "SIH 2023",
        description: " Selected among the top 1000 teams from over 50,000 to participate in the Grand Finale.",
        process: "During SIH Grand Finale, we created an inclusive education app for specially-abled children. We implemented sign language detection using MediaPipe and OpenCV, and added features like text-to-speech and Braille input with Flutter and Dart",
        whatILearnt: "I was tasked with the sign language detection part so I had to learn computer vision for it. Also, mostly in computer vision projects static images are used for training. However, sign language is full of gestures and movements so I had to use a chain of images to train each data point. Also Mediapipe Library was quite useful as it can detect the key points of hands and face (landmarks) although it is a bit of a heavy library.",
        iconPath: icons.sih,
        techStack: ['Open CV', 'TensorFlow', 'Mediapipe Library', 'React JS', 'Express JS', 'Node JS', 'Flutter',],
        challengesFaced: ["The key challenge was to work together using different tech-stacks and to integrate various technologies together"],
        listOfLinks: ['https://github.com/SatwikMohan/Yukta-1.0'],
        listOfImgs: [],
        pdf: ""
    },
    {
        //todo
        folderName: "achievements",
        title: "Tata Steel WoM 2023",
        description: "Selected among the top 30 teams from over 20,000 in Tata Steel's Women of Mettle Competetion",
        process: "I created a project on the topic of DIGITAL INTERVENTION FOR THE IMPROVEMENT OF CIVIL MAINTENANCE JOBS where I focused on the the Methods for Structural Health Monitoring (SHM) and Proactive Maintenance. I researched on existing situation of tech in civil engineering and found the adoption rate to be quite low, especially in India. Additionaly, I also created a image classifier model that can detect whether an image has cracks or not.",
        whatILearnt: "I learnt how various technologeies can be integrated inside Civil Engineering to enhance it. Along with the research, and by creating my own model, I was also better able to understand some of the intricacies and challenges faced when trying to integrate tech with civil.",
        iconPath: icons.tata,
        techStack: ['Open CV', 'TensorFlow', 'Streamlit', 'Google Collab'],
        challengesFaced: ["My main topic was quite broad so it took time to understand it properly so that I could find a focus area for my project. ", "Additionally, I was new to the machine learning field that time so I was only able to create a basic CNN model."],
        listOfLinks: ['https://github.com/aadya-here/crack_classifier'],
        listOfImgs: [],
        pdf: "src/assets/achievements/WoM_ppt.pdf"

    },

    {

        folderName: "achievements",
        title: "Industrial Genix",
        description: "Achieved 2nd Place in the Industrial Genix competetion of Concetto '22 (IIT(ISM)'s Annual Tech Fest) ",
        process: "We created a case study on 'Importance of construction methodology in underground metro construction for various soil conditions and how the right design adaption can help in construction. For this, we explored various tunnering methods",
        whatILearnt: "It was actually quite interesting as it pushed us to explore civil engineering beyond our textbooks and understand the practical applications of what we had been taught",
        iconPath: icons.concetto,
        techStack: [],
        challengesFaced: ["The entire fest was of only 3 days and this competetions process occupied 2 days only for everything- reseach, analysis and then pitch. The lack of time pushed all of us to be quite effiecient and handle the workload in a team."],
        listOfLinks: [],
        listOfImgs: [],
        pdf: "src/assets/achievements/industrial_genix.pdf"

    },
    // {

    //     folderName: "achievements",
    //     title: "SME Media Contest 2024",
    //     description: "Achieved 2nd Place in SME Media Contest 2024 in the Videography Track",
    //     process: "We created a short video highlighting the ",
    //     whatILearnt: "It was actually quite interesting as it pushed us to explore civil engineering beyond our textbooks and understand the practical applications of what we had been taught",
    //     iconPath: icons.sme,
    //     techStack: [],
    //     challengesFaced: ["The entire fest was of only 3 days and this competetions process occupied 2 days only for everything- reseach, analysis and then pitch. The lack of time pushed all of us to be quite effiecient and handle the workload in a team."],
    //     listOfLinks: [],
    //     listOfImgs: [],
    //     pdf: "src/assets/achievements/industrial_genix.pdf"

    // },

    {
        folderName: "case studies",
        title: "Netflix",
        description: "Investigated and evaluated Netflix's marketing strategies.",
        process: "I conducted extensive research to understand various marketing strategies employed by Netflix. This included guerrilla marketing, integrating marketing channels (IMC), and sensory marketing.",
        whatILearnt: "The process of evaluating marketing strategies and the effectiveness of innovative approaches.",
        iconPath: icons.netflix,
        techStack: [],
        challengesFaced: [],
        listOfLinks: [],
        listOfImgs: [],
        pdf: "src/assets/case_studies/netflix_ppt.pdf"
    },
    {
        folderName: "case studies",
        title: "Decathlon",
        description: "Identified a market gap for Decathlon in community sports and fitness centers.",
        process: "I researched Cult-Fit's business model to understand its success. I then analyzed how Decathlon could apply similar strategies to enhance engagement and boost product sales through other sports activities.",
        whatILearnt: "The process and considerations involved in establishing a new business vertical.",
        iconPath: icons.decathlon,
        techStack: [],
        challengesFaced: [],
        listOfLinks: [],
        listOfImgs: [],
        pdf: "src/assets/case_studies/Decathlon.pdf"

    },

    {
        folderName: "case studies",
        title: "Lenskart",
        description: "Explored how Lenskart entered and dominated the market.",
        process: "I studied Lenskart's business model, unique selling proposition (USP), and conducted a SWOT analysis to understand its market dominance.",
        whatILearnt: "How technology can organize unorganized sectors in India, enabling companies to capture significant market share.",
        iconPath: icons.lenskart,
        techStack: [],
        challengesFaced: [],
        listOfLinks: [],
        listOfImgs: [],
        pdf: "src/assets/case_studies/Lenskart.pdf"

    },

    {
        folderName: "case studies",
        title: "Berger Paints",
        description: "Analyzed how Berger Paints used truck art to reunite families.",
        process: "I explored Berger Paints' marketing mix, social media, and influencer strategies. Additionally, I applied Porter's Five Forces to Berger Paints and examined their Truck Art Child Finder campaign in Pakistan, which helped families find missing children.",
        whatILearnt: "How large companies can make a societal impact through their marketing campaigns.",
        iconPath: icons.berger,
        techStack: [],
        challengesFaced: [],
        listOfLinks: [],
        listOfImgs: [],
        pdf: "src/assets/case_studies/Berger_Paints.pdf"

    },

    {
        folderName: "case studies",
        title: "Ajanta Bottles",
        description: "Developed a case study to launch a new product line.",
        process: "We conducted market research and analysis to evaluate the potential demand and consumer preferences for a new line of glass water bottles by Ajanta Bottles Pvt Ltd, India's leading glass manufacturer. This included assessing financial viability, consumer trends, and sustainability considerations.",
        whatILearnt: "The process of conducting on-ground research by engaging with restaurant owners to understand consumer preferences and needs.",
        iconPath: icons.ajanta,
        techStack: [],
        challengesFaced: [],
        listOfLinks: [],
        listOfImgs: [],
        pdf: "src/assets/case_studies/Droplets.pdf"

    },
    {
        folderName: "case studies",
        title: "Reliance Jio",
        description: "Studied how Reliance Jio transformed the Indian telecom market.",
        process: "We explored the Indian telecom market and analyzed Jio's entry strategy of distributing free internet. We also studied the application of the AARRR (Acquisition, Activation, Retention, Referral, Revenue) and STP (Segmentation, Targeting, Positioning) models.",
        whatILearnt: "How aggressive pricing and increased accessibility can capture a significant market share, as demonstrated by Jio's strategy to capture over 30% of the market.",
        iconPath: icons.jio,
        techStack: [],
        challengesFaced: [],
        listOfLinks: [],
        listOfImgs: [],
        pdf: "src/assets/case_studies/jio_ppt.pdf"

    },


    {
        folderName: "data sci & analytics",
        title: "Reccomendation Engine",
        description: "This was created for Unstop's Talent Park competition using Collaborative Filtering Technique.",
        process: "Simulated user data to create the utility matrix and subsequently the reccomendation engine model to reccomend users similar events and competitions based on users history.",
        whatILearnt: "The process of creating a basic reccomendation system and the various parameters needed, especially creating the utility matrix and factorising it using Single Value Decomposition method.",
        iconPath: icons.dl,
        techStack: ["Python", "Google Collab"],
        challengesFaced: ["Data generation to create a simulation which is close to reality", "Implementing SVD"],
        listOfLinks: ["https://colab.research.google.com/drive/1nWnSTodDO3AEXnjrf_9eir2iRrI0-dCr"],
        listOfImgs: [],
        pdf: ""
    },
    {
        folderName: "data sci & analytics",
        title: "Cryptic Quant",
        description: "Predictive model for Bitcoin market trends",
        process: " We developed an algorithm and strategy to predict the price of BitCoin for algorithmic trading using LSTM  Neural Network and ARIMA, along with basic technical analysis during IITKGP’s Data Science Hackathon.",
        whatILearnt: "How to do a basic technical analysis of the market trends, how automated trading works as well as the key metrics used in trading - to measure its effectiveness.",
        iconPath: icons.bitcoin,
        techStack: ["Python", "Tensorflow", "Deep Learning(LSTM)", "Finance related libraries"],
        challengesFaced: ["Understanding the various methods of technical analysis as well as use cases and limilations", "Understanding how to implement machine learning in finance.", "Designing the algorithm and improving its accuracy."],
        listOfLinks: ["https://github.com/aadya-here/cryptic_quant"],
        listOfImgs: [],
        pdf: ""
    },

    {
        folderName: "data sci & analytics",
        title: "Predictive Maintainence",
        description: "Created a robust voting classifier to predict machine faliures.",
        process: "This model uses a voting classifier consisting of Logistic Regression, Decision Tree, and Naive Bayes,reaching an accuracy of 96percent , to detect and predict if a machine is about to fault and classify the type of failure as well.",
        whatILearnt: "How the individual errors of various models can be minimised by combining them, ensuring fewer errors.",
        iconPath: icons.maintenance,
        techStack: ["Python", "Scikit-Learn", "Streamlit"],
        challengesFaced: ["Preventing/reducing overfitting.", "Choosing which models to combine.", "Model accuracy"],
        listOfLinks: ["https://predictive-maintenance-model-123.streamlit.app/"],
        listOfImgs: [],
        pdf: ""
    },

    {
        folderName: "data sci & analytics",
        title: "Pizzeria Plaza",
        description: " Created a MySQL database from scratch, uploaded on Tableau for visual analysis,and designed dashboards.",
        process: "I created a mock company called Pizzeria Plaza with mock customers and customer data, which i simulated using python, the data was then used to create a database on MySQL. I then used SQL queries inside Tableau to filter out the important data to create visualisations to showcase customer insights.",
        whatILearnt: "The nuances of language processing and the impact of context in sentiment analysis",
        iconPath: icons.pizza,
        techStack: ["Python", "MySQL", "Tableau"],
        challengesFaced: ["Creating usable data", "Creating a functional schema so that the data is stored and accessed efficiently", "Effectively visualising all the various data into a dashboard"],
        listOfLinks: ["https://github.com/aadya-here/pizzeria_dashboard_data_gen"],
        listOfImgs: ['src/assets/data_sci/pizzeria_basic_schema.png', 'src/assets/data_sci/sales_dashboard.png', 'src/assets/data_sci/customer_dashboard.png'],
        pdf: ""
    },
    {
        folderName: "experience",
        title: "Tata Steel",
        description: "Summer Internship as a Technical Intern",
        process: "Implemented  Progressive Web App (PWA) to facilitate real-time tracking and monitoring of civil projects across multiple devices, resulting in a 5X increase in operational efficiency and reducing paperwork processing time from 10 days to just 20 minutes. \n I used React to design the front-end and PostgreSQL for the backend (which was managed and hosted on Supabase).",
        whatILearnt: "I learnt how project management works, the challenges it poses for managers to keep track of everything, especiaaly in big organisations. In terms of tech, I learnt how to design a database as well as full stack development",
        iconPath: icons.tata,
        techStack: ["React JS", "PostgresSQL", "Node JS", "Express JS", "Tailwind CSS", "Material UI"],
        challengesFaced: ["The key challenges were to understand the pain points of the both stakeholders, how Tata operates wrt civil related projects, and then solving it using tech.", "Initially I was creating a mobile app using React Native, but then converting it to an APK created issues so I pivoted to PWA."],
        listOfLinks: ["https://github.com/aadya-here/tata-steel-cpms-tsl", "https://tata-steel-cpms-tsl.vercel.app/", "https://github.com/aadya-here/tata-steel-cpms-vp", "https://tata-steel-cpms-vp.vercel.app/"],
        listOfImgs: [],
        pdf: ""
    },
    {
        folderName: "experience",
        title: "Anabi AI",
        description: "Part-time role as a Python Developer",
        process: "Optimized Python code to integrate OpenAI’s API, developing a chat bot that streamlined data entry and enhanced accuracy by 15%.Conducted extensive testing across 20 languages, including native Indian languages and English hybrids, to ensure robust multi - language support.",
        whatILearnt: "How OpenAI's APIs work and can be implemented for small automation tasks, and also the uses and drawbacks of using something like Langchain around it.",
        iconPath: icons.anabi,
        techStack: ["Python", "OpenAI API", "LangChain"],
        challengesFaced: ["Understanding model deployment", "Using LLM APIs along with the costs involved", "Modelling client requirements to a tangible product"],
        listOfLinks: [],
        listOfImgs: [],
        pdf: ""
    },
    {
        folderName: "experience",
        title: "People Of India",
        description: "Business Analyst Intern",
        process: "Was incharge of helping them set up the processes required for them to launch their own cool merchandise brand store targeted at Indian youth with the theme of patriotism by talking to and coordinating various stakeholders like tshirt manufacturers, logistics companies, packaging companies, etc",
        whatILearnt: "How to do this research in a more streamlined manner, even though it was something I had already done in Tee Rex. Also that I don't really like making a ton of calls.",
        iconPath: icons.poi,
        techStack: [],
        challengesFaced: ["Building trust amongst the stakeholders as everyone was working remotely.", "Understanding how small mistakes can become a major setback for big brands and therefore trying our best tp avoid it", "How branding and consumer behaviour work, especially with established brands."],
        listOfLinks: [],
        listOfImgs: [],
        pdf: ""
    },
    {
        folderName: "experience",
        title: "Tee Rex",
        description: "Co-Founded a Merchandising Startup",
        process: "Our college did not have a merch store and in also partly due to Dhanbad's location, the merch of college clubs and events was not upto the mark. We solved this by opening our own merchandising store and sold olmost 100 t-shirts as college merch, 200+ t-shirts as merchandise of various student clubs and sold 2000+ tshirts and hoodies as part of events including our annual cultural fest Srijan.",
        whatILearnt: "How to setup and operate a business from scratch: from the legal process, the operations, the supply chain, talking to different stakeholders, negotiation, sales and how everything integrates together.",
        iconPath: icons.tee_rex,
        techStack: [],
        challengesFaced: ["Felt Murphy's law play out in real-life, especially while processing the order for  Srijan as it was a very large and complex order thereby learning how to navigate challenges on the fly.", "We also learnt how to communicate better, and stand our ground during communication and sales."],
        listOfLinks: [],
        listOfImgs: [],
        pdf: ""
    },
    {
        folderName: "web dev",
        title: "Tic Tac Toe",
        description: "A simple tic-tac-toe game made using Vanilla HTML, CSS, JS",
        process: "I built the game from scratch to build my understanding of front-end web development and logic building as well as designing using regular CSS.",
        whatILearnt: "I understood the crux of front end + basic game development + UI design on web and in general coding as I this was one of my first projects",
        iconPath: icons.ttt,
        techStack: ["HTML", "CSS", "JavaScript"],
        challengesFaced: [],
        listOfLinks: ["https://github.com/aadya-here/Tic-Tac-Toe-Pro", "https://tic-tac-toe-pro-sigma.vercel.app/"],
        listOfImgs: [],
        pdf: ""
    },
    // {
    //     folderName: "web dev",
    //     title: "Trackerinator",
    //     description: "Portfolio website with interactive 3D elements",
    //     process: "Used Three.js for 3D graphics, integrated with a React frontend, and optimized for performance",
    //     whatILearnt: "The challenges of integrating 3D graphics in web applications and techniques for optimizing web performance",
    //     iconPath: icons.document,
    //     techStack: ["React", "Three.js"],
    //     challengesFaced: ["Performance optimization", "Browser compatibility", "3D rendering"],
    //     listOfLinks: ["https://github.com/username/projectD"],
    //     listOfImgs: ["img1.jpg", "img2.jpg"],
    //     pdf: "projectD.pdf"
    // }
];
