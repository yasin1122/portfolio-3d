import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  alibaba,
  freelancer,
  coc,
  amazon,
  budget,
  sushi,
  dark,
  speech,
  twitter,
  exchange,
  threejs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Full Stack Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Textbook Author',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Freelance Web Developer',
    company_name: 'Fiverr, Upwork',
    icon: freelancer,
    iconBg: '#E6DEDD',
    date: 'May 2017 - April 2020',
    points: [
      'Developed and maintained web applications using JavaScript, React and other related technologies.',
      'Collaborated with clients and other developers to create high-quality products.',
      'Implemented responsive design and ensuring cross-browser compatibility.',
      'Offered consultation to clients to plan the best approach to bring their vision to life.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Code Of Code',
    icon: coc,
    iconBg: '#383E56',
    date: 'April 2020 - Present',
    points: [
      'Designed an eLearning platform for software engineering students around the world.',
      'Implemented Google Adsense, Google Analytics, along with JetPack for website security and backups.',
      'Implemented accessibility features along with best SEO practices to create a responsive site.',
      'Used CDNs and minimized client side JavaScript to achieve a fast page speed score.',
    ],
  },
  {
    title: 'Textbook Author',
    company_name: 'Amazon Kindle',
    icon: amazon,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Feb 2023',
    points: [
      'Wrote and published 15 beginner friendly textbooks on Amazon on various programming topics.',
      'All of my textbooks have a 5 star rating on both Kindle and Amazon Book Store.',
    ],
  },
  {
    title: 'Web Developer, Accountant',
    company_name: 'Alibaba Express',
    icon: alibaba,
    iconBg: '#383E56',
    date: 'Dec 2009 - Present',
    points: [
      'Designed, published and updated the restaurant menu yearly.',
      'Managed social media accounts and handled seasonal hiring.',
      'Filed taxes and other legal paperwork.',
      'Managed work schedules, processed payroll and ordered supplies.',
    ],
  },
]

const projects = [
  {
    name: 'Budget App',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: budget,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Sushi Restaurant',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: sushi,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Speech Text Reader',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: speech,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Twitter Clone',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: twitter,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Dark Mode Clock',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: dark,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Exchange Rate Calculator',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: exchange,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, projects }
