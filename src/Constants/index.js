export const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Work', url: '#projects' },
  { name: 'Contact', url: '#contact' },
];

export const socialMedia = [
  { name: 'GitHub', url: 'https://github.com/isnotSenshi' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mathiasalss/' },
  { name: 'Email', url: 'mailto:lovera.mathias.ss@gmail.com' },
];

export const email = 'lovera.mathias.ss@gmail.com';

export const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'WePlan',
    company_url: 'https://weplan-latam.com',
    range: 'December 2021 – Present',
    duties: [
      'Developed and maintained full stack web applications for large-scale telecommunications clients using React, TypeScript, Node.js, NestJS, Java, and GraphQL.',
      'Designed and managed CI/CD pipelines with Jenkins across dev, QA, and production environments, automating build triggers and multi-stage deployments.',
      'Orchestrated containerized microservices with OpenShift, managing pods, services, routes, and configmaps.',
      'Owned production deployments during off-hours production deployments, including rollback procedures and system stability monitoring.',
      'Migrated legacy codebases to modern architectures and enforced code quality standards using SonarQube.',
    ],
  },
  {
    title: 'Marketing & Sales',
    company: 'Polytech S.A.',
    company_url: 'https://www.polytech.com.ar/',
    range: 'June 2021 – November 2021',
    duties: [
      'Provided technical and commercial assistance to clients for hardware component sales.',
      'Evaluated market metrics and managed digital marketing campaigns.',
      'Handled procurement and inventory management processes.',
      'Automated internal processes for the internal sales tool", reducing manual workload and improving team efficiency.',
      'Improved customer-facing interfaces and redesigned service workflows" to enhance the client experience.',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Exisoft S.A.',
    company_url: 'https://exisoft.com.ar/',
    range: 'May 2019 – December 2020',
    duties: [
      'Developed and maintained ESB services for large-scale data archival systems for banking clients using IBM Integration Bus 10.',
      'Implemented SOAP and REST messaging protocols for enterprise service integration.',
      'Designed SQL databases and developed stored procedures for data management and reporting.',
      'Built backend services with Java and produced technical documentation.',
    ],
  },
];

export const featuredProjects = [

  {
    title: 'BP Translator 🍔',
    github: 'https://github.com/isnotSenshi/bp-translator-v1',
    download: 'https://github.com/isnotSenshi/bp-translator-v1/releases/latest/download/bp-translator-Setup.exe',
    tech: ['React + Electron', 'JS', 'Python', 'Manga-OCR'],
    description:
      `A desktop app for translating Japanese manga panels in real time.
       Capture any area of your screen, extract the text using OCR, 
       and get instant translations powered by OpenAI, Groq, or a fully local model — no internet required.`,
  },
];

export const otherProjects = [
  {
    title: 'GitGudGoGambling',
    github: 'https://github.com/isnotSenshi/GitGudGoGambling',
    external: null,
    tech: ['Electron', 'React + TS'],
    description: 'Desktop simulator for Hi-Lo card counting on Infinite Blackjack. Real time count, calculates true count, bets using a Kelly Criterion-based system.',
  },
];
