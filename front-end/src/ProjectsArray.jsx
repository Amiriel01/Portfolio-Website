import LibraryImage from './images/libraryimage.png';
import ReadersTheater from './images/readerstheater.png';

const projectsArray = [
    {
        index: 0,
        name: 'Another Page Public Library Website',
        description: "This website has a responsive design that looks great on computers, tablets, and phones. It integrates the RESTful API backedn I build and the Google Books API for a great user experience. As an avid reader and library patron in my own town, I thought this would be a fun and interesting site to build. To demo all the features you will need the library login credintials. The login is in the footer of the site.",
        credentials: 'Library Login Credentials (Username: Admin / Password: Admin)',
        tech: [
            {
                index: 0,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                alt: 'React',
                title: 'React',
            },
            {
                index: 1,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                alt: 'TypeScript',
                title: 'TypeScript',
            },
            {
                index: 2,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                alt: 'MongoDB',
                title: 'MongoDB',
            },
            {
                index: 3,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                alt: 'Express',
                title: 'Express',
            },
            {
                index: 4,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                alt: 'Node.js',
                title: 'Node.js',
            },
        ],
        src: LibraryImage,
        alt: 'Another Page Public Library Homepage Image',
        live_link: 'https://anotherpagelibrary.netlify.app/',
        repo_link: 'https://github.com/Amiriel01/Public-Library-Website',
    },
    {
        index: 1,
        name: "Reader's Theater Social Media Website",
        description: "This social media site caters to the readers of the world. Users can search other reader profiles with a helpful search, like posts, post their thoughts, comment on other readers' posts, follow readers, and update their profile. For demo purposes, deleting, updating, and creating new users has been turned off. You can view the code for the disabled features in the Github link. Please login using the Guest credentials to demo the site.",
        credentials: 'Guest Login Credentials (Username: Guest / Password: testpass1)',
        tech: [
            {
                index: 0,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                alt: 'React',
                title: 'React',
            },
            {
                index: 1,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                alt: 'TypeScript',
                title: 'TypeScript',
            },
            {
                index: 2,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                alt: 'MongoDB',
                title: 'MongoDB',
            },
            {
                index: 3,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                alt: 'Express',
                title: 'Express',
            },
            {
                index: 4,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                alt: 'Node.js',
                title: 'Node.js',
            },
        ],
        src: ReadersTheater,
        alt: "Reader's Theater Social Media Website",
        live_link: 'https://readers-theater.netlify.app/',
        repo_link: 'https://github.com/Amiriel01/Readers-Theater',
    },
];

// Export an object containing the array
export default projectsArray;
