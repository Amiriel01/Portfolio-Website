import LibraryImage from './images/libraryimage.png';
import ReadersTheater from './images/readerstheater.png';

const projectsArray = [
    {
        index: 0,
        name: 'Another Page Public Library Website',
        description: "I wanted to create a full stack public library website. This website has a responsive design that looks great on computers, tablets, and phones. My local library is a great resource to the community and I am an avid reader so this website was a joy to create",
        tech: [
            {
                index: 0,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                alt: 'React',
                title: 'React',
            },
            {
                index: 1,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                alt: 'MongoDB',
                title: 'MongoDB',
            },
            {
                index: 2,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                alt: 'Express',
                title: 'Express',
            },
            {
                index: 3,
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                alt: 'Node.js',
                title: 'Node.js',
            },
        ],
        src: LibraryImage,
        alt: 'Another Page Public Library Homepage Image',
        live_link: '',
        repo_link: 'https://github.com/Amiriel01/Public-Library-Website',
    },
    {
        index: 1,
        name: "Reader's Theater Social Media Website",
        description: "I wanted to create a social media site that catered to readers. I've not run across a social media site that served just the reading enthusiasts of the world and thought it would be a unique spin on a social media site.",
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
        live_link: '',
        repo_link: 'https://github.com/Amiriel01/Readers-Theater',
    },
];

// Export an object containing the array
export default projectsArray;