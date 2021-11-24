const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/vaishakhp1902',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vaishakh Poduval',
  role: 'Full stack developer',
  description: 'An Avid reader, trekker and a Manchester United fan',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/vaishakh-p-6331a0186/',
    github: 'https://github.com/vaishakhp1902',
    salesforce: 'https://trailblazer.me/id/vaishakhp19',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'A food ordering app which is made on react-native which uses react navigation for managing and transitioning between screens,firebase for authentication and integrated with maps. It uses stripe for payment',
    stack: [
      'React-Native',
      'styled',
      'firebase',
      'Google Maps API, Stripe API',
    ],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'A fully fledges Chat Application made entirely using serverless acrhitecture in AWS',
    stack: [
      'JS',
      'Dynamo DB',
      'API Gateway',
      'AWS Cognito',
      'Lambda',
      'CloudFront',
    ],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'An image gallery build using React and Tailwind CSS which hits the PixelBay API to retrieve the searched images',
    stack: ['React', 'TailWind CSS', 'PixelBay API'],
    sourceCode: 'https://github.com/vaishakhp1902/pix_search',
    livePreview: 'https://pixgallery.netlify.app/',
  },
  {
    name: 'Project 4',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 5',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 6',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
  'AWS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vaishakhp1998@gmail.com',
}

export { header, about, projects, skills, contact }
