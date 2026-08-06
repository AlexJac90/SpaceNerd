export type HomeCard = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export const homeLayoutDescription =
  'Explore space shuttles, the solar system, and lunar exploration — clear, modern, and calm.';

export const homeCards: HomeCard[] = [
  {
    href: '/shuttles',
    title: 'Space Shuttles',
    description:
      'The NASA orbiter fleet: Columbia through Endeavour, missions, and the arc of the STS program.',
    meta: 'Human spaceflight',
  },
  {
    href: '/control-room',
    title: 'Control Room',
    description: 'Mission Control context: flight director loops, consoles, callouts, and how a team runs a mission.',
    meta: 'Operations',
  },
  {
    href: '/planets',
    title: 'The Planets',
    description: "A tour of the Sun's major worlds—from scorched Mercury to windy Neptune.",
    meta: 'Solar system',
  },
  {
    href: '/moon',
    title: 'Moon Landings',
    description: "Apollo's timeline, the six landings, and what came before and after.",
    meta: 'Lunar history',
  },
  {
    href: '/shuttles/timeline',
    title: 'Shuttle timeline',
    description: 'Key milestones from program approval to the final landing in 2011.',
    meta: 'STS program',
  },
  {
    href: '/about',
    title: 'About & sources',
    description: 'How this site is meant to be used—and where to verify facts.',
    meta: 'Meta',
  },
  {
    href: '/jobs',
    title: 'Job Opportunities',
    description: 'Explore common paths into space work: engineering, operations, science, software, and mission support.',
    meta: 'Careers',
  },
  {
    href: '/iss',
    title: 'International Space Station',
    description: 'How the ISS works day-to-day: research, crew rotations, cargo flights, and international operations.',
    meta: 'Low Earth orbit',
  },
];
