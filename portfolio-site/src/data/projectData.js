const data = {
    name: '',
    image: '',
    username: '',
    keywords:
        'Rd, ',
    profession: '',
    intro:
        '',
    about:
        '',
    website: '',
    projects: [
        {
            name: 'Clustera',
            images:
                [
                    require('../assets/project_images/Clustera-images/UploadPage.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage1.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage2.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage3.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage4.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage5.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage6.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage7.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage8.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage9.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage10.JPG'),
                    require('../assets/project_images/Clustera-images/LDApage11.JPG'),

                ],
            about:
                "A web application made with React and Django that serves as a tool for document or textual analysis, utilizing topic techniques for classification, clustering and generation of topics. This is a Special Problem which is one of the finalrequirements to finish the Computer Science program of UPLB, which is equivalent to a thesis or Capstone Project.",
            tech: ['React', 'D3.js', 'Tailwind', 'Django', 'AWS'],
            links: {
                Live: '',
                Github: 'https://github.com/thirdweb-dev',
            },
            role: 'Developer Relations Engineer',
        },
        {
            name: 'Social Media Application',
            images: [require('../assets/project_images/Test.JPG'), require('../assets/project_images/Test.JPG'), require('../assets/project_images/Test.JPG'), require('../assets/project_images/Test.JPG')],
            about:
                'A Social Media application mirroring Facebook which can create, update, delete, and read posts. Created using React.js for the frontend and Node.js and Express for the backend, implementing full CRUD operations.',
            tech: ['React', 'Node.js', 'Express.js',],
            links: {
                Live: '',
            },
            role: 'Fullstack web3 developer',
        },
        {
            name: 'LOL Code Interpreter',
            images: [require('../assets/project_images/LOLCode-Interpreter-images/interpreter1.png')],
            about: 'An Interpreter made with Python for the programming language LOL. It has a Graphical User Interface, Lexical Analyzer and Syntax Analyze',
            tech: ['Python'],
            links: {
                GitHub: 'https://github.com/candypay',
                Live: '',
            },
            role: 'Fullstack web3 developer',
        },
        {
            name: 'Financial Tracker',
            images: [require('../assets/project_images/Test.JPG')],
            about: 'The financial tracker is a web application designed to help users manage their finances, built with Next.js and Tailwind for the frontend, and Laravel for the backend. Next.js powers the user interface with its fast, SEO-friendly framework, while Tailwind provides a responsive and visually appealing design through its utility-first CSS approach. On the backend, Laravel handles the server-side logic, including data management, authentication, and API creation. The application likely features a dashboard for financial overviews, transaction logging and categorization, and customizable settings. By integrating these technologies, the financial tracker offers a powerful, scalable, and user-friendly solution for effective financial management.',
            tech: ['Next.js', 'Tailwind', 'Laravel', 'Mongodb'],

            links: {
                GitHub: 'https://github.com/candypay',
                Live: '',
            },
            role: 'Fullstack web3 developer',
        },
    ],
    links: [
        {
            name: 'GitHub',
            icon: 'github.svg',
            link: 'https://github.com/avneesh0612',
        },

    ],
};

export default data;