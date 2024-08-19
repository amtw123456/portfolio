const data = {
    name: '',
    image: '',
    username: '',
    keywords:
        'Rd, , Avneesh Agarwal, web dev, blogger, content creator',
    profession: '',
    intro:
        '',
    about:
        '',
    website: '',
    projects: [
        {
            name: 'Clustera',
            image: '',
            about:
                "A web application made with React and Django that serves as a tool for document or textual analysis, utilizing topic techniques for classification, clustering and generation of topics. This is a Special Problem which is one of the finalrequirements to finish the Computer Science program of UPLB, which is equivalent to a thesis or Capstone Project.",
            tech: ['Reactjs', 'D3', 'Tailwind', 'Django', 'AWS'],
            links: {
                Live: 'https://thirdweb.com/',
                Github: 'https://github.com/thirdweb-dev',
            },
            role: 'Developer Relations Engineer',
        },
        {
            name: 'Social Media Application',
            image: '/projects/yoke.png',
            about:
                'A Social Media application mirroring Facebook which can create, update, delete, and read posts. Created using React.js for the frontend and Node.js and Express for the backend, implementing full CRUD operations.',
            tech: ['Reactjs', 'Nodejs', 'Express',],
            links: {
                Live: '',
            },
            role: 'Fullstack web3 developer',
        },
        {
            name: 'Candypay',
            image: '/projects/candypay.png',
            about: 'Seamless, mobile-native NFT & Payments experiences on solana! 🍭',
            tech: ['Next.js', 'solana', 'Typescript'],
            links: {
                GitHub: 'https://github.com/candypay',
                Live: 'https://candypay.fun',
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
        {
            name: 'Twitter',
            icon: 'twitter.svg',
            link: 'https://twitter.com/avneesh0612',
        },
        {
            name: 'Farcaster',
            icon: 'farcaster.svg',
            link: 'https://warpcast.com/aneesh0612',
        },
        {
            name: 'Mail me',
            icon: 'mail.svg',
            link: 'mailto:hi@avneesh.tech',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin.svg',
            link: 'https://www.linkedin.com/in/avneesh0612',
        },
    ],
};

export default data;