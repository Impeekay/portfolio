module.exports = {
  siteTitle: 'Pavan Kumar | Software Engineer',
  siteDescription:
    'Pavan Kumar is a software engineer based in Bengaluru, KA who specializes in building and designing exceptional applications, and everything needed for that.',
  siteKeywords:
    'Pavan Kumar, Pavan, Kumar, impeekay, itspavan, software engineer, front-end engineer, web developer, javascript, bengaluru',
  siteUrl: 'https://itspavan.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Pavan Kumar',
  location: 'Bengaluru, KA',
  email: 'hello@itspavan.dev',
  github: 'https://github.com/impeekay',
  twitterHandle: '@itspavan_',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/impeekay',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/itspavan',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/its_pavan__',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/itspavan_',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
