// Single source of truth for company details used across the site.
// Change a value here and it updates on every page.

export const company = {
  registeredName: 'Terra Earth Engineering (U) Limited',
  shortName: 'Terra Earth',
  logoName: 'Terra Earth Engineering Limited',
  tagline: ['Civil', 'Environmental', 'Water Resources'],
  description:
    'A Ugandan multidisciplinary engineering firm delivering civil works, environmental management and water resources solutions.',
  founded: 'December 2024',
  tin: '1055382110',
  address: {
    building: 'Apartment Building',
    street: 'Dr. Lukwiya Road',
    area: 'Naalya',
    full: 'Apartment Building, Dr. Lukwiya Road, Naalya, Kireka Ward, Namugongo Division, Kira Municipality, Wakiso, Uganda',
    short: 'Naalya, Kira Municipality, Wakiso',
    postal: 'P.O. Box 178031, Kampala, Uganda',
    // Approximate coordinates for Naalya (used in structured data). Confirm the exact office location.
    geo: { lat: 0.3606, lng: 32.6436 },
  },
  phones: [
    { display: '+256 781 141473', tel: '+256781141473' },
    { display: '+256 783 068298', tel: '+256783068298' },
  ],
  // TO CONFIRM: which number is on WhatsApp.
  whatsapp: { number: '256781141473', message: 'Hello Terra Earth, I would like to enquire about ' },
  email: 'terra.earth2025@gmail.com',
  website: 'https://www.terra-earth.co.ug',
  // TO CONFIRM: working hours.
  hours: [
    { days: 'Monday – Friday', time: '8:00 am – 5:30 pm' },
    { days: 'Saturday', time: '9:00 am – 1:00 pm' },
  ],
};

export const whatsappLink = (text = company.whatsapp.message) =>
  `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const directors = [
  {
    name: 'Eng. Nuwamanya Ahikiriza',
    role: 'Director',
    discipline: 'Environmental Engineer',
    initials: 'NA',
    bio: 'Leads environmental engineering and management at Terra Earth, including environmental and social impact assessments, compliance monitoring and site QHSE.',
  },
  {
    name: 'Eng. Munanura Deogratius',
    role: 'Director & Company Secretary',
    discipline: 'Water Resources & Renewable Energy Engineer',
    initials: 'MD',
    bio: 'Leads water resources and renewable energy work, including borehole supervision, water supply design, irrigation and solar-powered pumping systems.',
  },
];

export const values = [
  {
    title: 'Innovation',
    icon: 'innovation',
    text: 'We use technology, data analysis and sustainable engineering practice to find efficient, forward-thinking solutions.',
  },
  {
    title: 'Professionalism',
    icon: 'professional',
    text: 'Qualified engineers, environmental experts and project managers who apply industry best practice and keep learning.',
  },
  {
    title: 'Sustainability',
    icon: 'leaf',
    text: 'Infrastructure must meet present needs without compromising the ability of future generations to meet theirs.',
  },
  {
    title: 'Collaboration',
    icon: 'handshake',
    text: 'Strong partnerships built on mutual respect, open communication and shared objectives.',
  },
];

export const vision =
  'To be a leading engineering consultancy and contracting firm delivering resilient infrastructure and sustainable environmental solutions across the region.';

// Draft mission (not in the company profile) — confirm with the directors.
export const mission =
  'To deliver reliable, sustainable engineering solutions that improve access to water, protect the environment and build lasting infrastructure.';

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Civil Engineering Works', href: '/services/civil-engineering' },
      { label: 'Environmental Engineering & Management', href: '/services/environmental' },
      { label: 'Water Resources & Solar', href: '/services/water-resources' },
      { label: 'Project Management', href: '/services/project-management' },
      { label: 'QHSE', href: '/qhse' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'QHSE', href: '/qhse' },
  { label: 'Contact', href: '/contact' },
];

export const projectCategories = ['Civil', 'Environmental', 'Water', 'Solar', 'Project Management'] as const;

export const team = [
  'Civil Engineers',
  'Environmental Specialists',
  'Water Resources Engineers',
  'Hydrologists',
  'Quantity Surveyors',
  'Sociologists',
];
