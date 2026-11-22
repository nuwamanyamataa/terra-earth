import { getCollection } from 'astro:content';

// Draft (placeholder) projects show while developing, never on the live build.
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getServices() {
  const all = await getCollection('services');
  return all.sort((a, b) => a.data.order - b.data.order);
}

// Real field photos from the company profile, used where projects are not yet written up.
export const fieldPhotos = [
  { src: '/images/borehole-drilling-rig.webp', alt: 'Drilling rig and crew at a borehole site', caption: 'Borehole drilling', category: 'Water' },
  { src: '/images/environmental-survey.webp', alt: 'Environmental specialist recording field data beside a tripod', caption: 'Environmental field survey', category: 'Environmental' },
  { src: '/images/site-crew-aggregate.webp', alt: 'Site crew in hard hats and high-visibility vests handling aggregate', caption: 'Civil works site crew', category: 'Civil' },
  { src: '/images/field-testing-retaining-wall.webp', alt: 'Two engineers in high-visibility vests carrying out field tests beside a stone retaining wall', caption: 'Field testing', category: 'Civil' },
  { src: '/images/floating-solar-pump.webp', alt: 'Blue floating pump platform on pontoons on a lily-covered swamp', caption: 'Floating pump platform', category: 'Solar' },
];
