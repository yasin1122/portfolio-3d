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
      'A fully functional budgeting web app with a modern user interface, mobile first design and a responsive layout.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: budget,
    source_code_link: 'https://github.com/yasin1122/budget-app',
  },
  {
    name: 'Sushi Restaurant',
    description:
      'A modern front end page for a typical sushi restaurant with a responsive design on both mobile and PC.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: sushi,
    source_code_link: 'https://github.com/yasin1122/sushi-site',
  },
  {
    name: 'Speech Text Reader',
    description:
      'This app vocalizes images and text on the screen to help people with speech impairment communicate with others.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: speech,
    source_code_link: 'https://github.com/yasin1122/speech-text-reader',
  },
  {
    name: 'Twitter Clone',
    description:
      'A basic Twitter clone that demonstrates the use of Login functionality along with a backend integration using MongoDB Atlas.',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: twitter,
    source_code_link: 'https://github.com/yasin1122/twitter-clone',
  },
  // {
  //   name: 'Dark Mode Clock',
  //   description:
  //     'Modern clock that displays the current time to demonstrate light and dark mode used in most modern sites.',
  //   tags: [
  //     {
  //       name: 'HTML',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'CSS',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'JavaScript',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: dark,
  //   source_code_link: 'https://github.com/yasin1122/dark-mode-clock',
  // },
  {
    name: 'Exchange Rate Calculator',
    description:
      'Quickly calculate the exchange rate between any two currencies with this mobile friendly web app.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: exchange,
    source_code_link: 'https://github.com/yasin1122/exchange-rate',
  },
]

export { services, technologies, experiences, projects }
