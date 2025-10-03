import { Tag } from '../../app/_models/tag';
import { project } from '../../app/_models/project';

export const PROJECTS: project[] = [
    {
        id: 0,
        name: "Ecommerce",
        pictures: ["../../assets/ecommerce1.png"],
        projectLink: "https://github.com/Nishant8826/ecom.git",
        liveLink: "https://ecom-theta-snowy.vercel.app/",
        summary: "Full-featured ecommerce app with cart, payments, and admin dashboard.",
        description: "This is a MERN stack ecommerce platform featuring product browsing, cart management, user authentication, Stripe payments, and an admin dashboard to manage products and orders. The UI is built with Chakra UI and state is managed using Redux.",
        tags: [Tag.NODEJS, Tag.REACT, Tag.REDUX, Tag.STRIPE, Tag.FIREBASE, Tag.MONGODB]
    },
    {
        id: 1,
        name: "Code Reviewer",
        pictures: ["../../assets/code-reviewer-1.png", "../../assets/code-reviewer-2.png"],
        projectLink: "https://github.com/Nishant8826/code-reviwer-client.git",
        liveLink: "https://code-reviwer-client.vercel.app/",
        summary: "AI-powered tool to automatically review and give feedback on code snippets.",
        description: "Code Reviewer is a web-based tool built with React and Node.js that uses AI to analyze JavaScript code and provide real-time feedback or suggestions. Users can write or paste code in a live editor and receive syntax-highlighted reviews on demand. It features a clean UI, Markdown rendering for formatted responses, OAuth2 authentication, and real-time updates with Socket.IO. Ideal for learners or developers looking to get quick insights into their code.",
        tags: [Tag.GeminiApi, Tag.REACT, Tag.REDUX, Tag.NODEJS]
    },
    {
        id: 2,
        name: "Watsapp Clone",
        pictures: ["../../assets/w1.png", "../../assets/w2.png", "../../assets/w3.png", "../../assets/w4.png", "../../assets/w5.png", "../../assets/w6.png"],
        projectLink: "https://github.com/Nishant8826/watsapp_clone.git",
        liveLink: "https://watsapp-clone-client.vercel.app",
        summary: "WhatsApp clone enables secure messaging, calling, and media sharing instantly.",
        description: "This project, named 'Watsapp Clone', focuses on user chat system. It utilizes technologies such as React, Node.js, OAuth2 for authentication, Socket.IO for real-time communication, and Material-UI for the user interface",
        tags: [Tag.REACT, Tag.NODEJS, Tag.MONGODB, Tag.OAuth2, Tag.SOCKETIO, Tag.MATERIALUI]
    },
    {
        id: 3,
        name: "Big Url Shortner",
        pictures: ["../../assets/big-ly.png"],
        projectLink: "https://github.com/Nishant8826/url_shortner.git",
        liveLink: "https://url-shortner-sej6.onrender.com/",
        summary: "A scalable URL shortener service with SSR.",
        description: "A full-featured, scalable URL shortening service built with Node.js, EJS, and MongoDB. It supports server-side rendering (SSR) for fast page loads, user authentication, URL analytics, and short link management.",
        tags: [Tag.NODEJS, Tag.SSR, Tag.EJS, Tag.MONGODB]
    },
    {
        id: 4,
        name: "Meal App",
        pictures: ["../../assets/Meal_apk.jpg"],
        projectLink: "https://github.com/Nishant8826/meal_react_native.git",
        liveLink: "https://drive.google.com/drive/folders/1NekO9PI-hxnCiMuNcqDiwB1Obkh38fWI?usp=sharing",
        summary: "React Native Meal App with animations, API, and modern styling.",
        description: "The Meal App is built using React Native and styled with NativeWind for utility-first design. It features smooth, engaging UI animations powered by Reanimated and fetches meal data from APIs using Axios. The app allows users to explore different meals, view details, and experience seamless navigation. Designed with mobile users in mind, it showcases clean architecture, responsive layouts, and a user-friendly interface ideal for showcasing React Native skills.",
        tags: [Tag.REACT_NATIVE, Tag.NATIVEWIND, Tag.REANIMATED, Tag.AXIOS,]
    },
    {
        id: 5,
        name: "Angular Quiz",
        pictures: ["../../assets/quiz-1.png", "../../assets/quiz-2.png", "../../assets/quiz-3.png", "../../assets/quiz-4.png"],
        projectLink: "https://github.com/Nishant8826/QuizByAngular.git",
        liveLink: "https://angular-quiz-seven.vercel.app/welcome",
        summary: "Small Quiz Application developed in Angular 15 and Bootstrap for UI.",
        description: "9 Basic Questions that are based on Angular Framework which can score you 10 points on each correct answer with a time limit of 60 seconds. To make it more interesting, 10 points are deducted for wrong answers. At the end, a scorecard shows attempted, correct, wrong, and total scores.",
        tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT]
    },
    {
        id: 6,
        name: "To Do",
        pictures: ["../../assets/to-do.png"],
        projectLink: "https://github.com/Nishant8826/Angular-todo.git",
        liveLink: "https://angular-todo-nine.vercel.app/",
        summary: "TO DO list project built in Angular 15 and Bootstrap.",
        description: "Tasks are stored in Local Storage so they persist after page reload. Tasks can only be removed manually by the user.",
        tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT]
    },
    {
        id: 7,
        name: "Daily Goals",
        pictures: ["../../assets/daily-goals.png"],
        projectLink: "https://github.com/Nishant8826/reactProjects/tree/DailyGoals",
        liveLink: "https://react-daily-goals.vercel.app/",
        summary: "Set and track your daily goals stored in local storage.",
        description: "Goals are stored in Local Storage to ensure persistence after reload. Tasks can only be removed by the user.",
        tags: [Tag.REACT, Tag.CSS]
    },
    {
        id: 8,
        name: "Techy Star",
        pictures: ["../../assets/techy-1.png", "../../assets/techy-2.png", "../../assets/techy-3.png", "../../assets/techy-4.png", "../../assets/techy-5.png"],
        projectLink: "https://github.com/Nishant8826/reactProjects/tree/techyStar",
        liveLink: "https://reactone-phi.vercel.app/",
        summary: "Static website for showcasing an organization's features.",
        description: "A multi-page React site for displaying Home/About/Contact/Services sections. Includes carousels and animations.",
        tags: [Tag.REACT, Tag.CSS]
    },
    {
        id: 9,
        name: "Vedio Hub",
        pictures: ["../../assets/vedio-hub-1.png", "../../assets/vedio-hub-2.png"],
        projectLink: "https://github.com/Nishant8826/reactProjects/tree/vedioHub",
        liveLink: "https://react-vedio-hub-anime.vercel.app/",
        summary: "Static video streaming interface inspired by YouTube.",
        description: "Simple video platform that plays videos in a categorized layout.",
        tags: [Tag.REACT, Tag.CHAKRAUI]
    },
];
