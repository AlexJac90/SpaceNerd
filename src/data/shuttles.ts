export type Orbiter = {
  slug: string;
  name: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  imageCredit: string;
  imageCreditUrl: string;
  firstFlight: string;
  lastFlight: string;
  missions: number;
  summary: string;
  highlights: string[];
  status: 'lost' | 'retired' | 'museum';
  statusNote: string;
};

export const orbiters: Orbiter[] = [
  {
    slug: 'columbia',
    name: 'Columbia',
    tagline: 'First winged spacecraft to reach orbit',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._%28cropped%29.jpg/1280px-Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._%28cropped%29.jpg',
    imageAlt: 'Space Shuttle Columbia landing after mission STS-62 in 1994',
    imageCredit: 'Wikimedia Commons (NASA)',
    imageCreditUrl:
      'https://commons.wikimedia.org/wiki/File:Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._(cropped).jpg',
    firstFlight: 'April 12, 1981',
    lastFlight: 'January 16, 2003',
    missions: 28,
    summary:
      'OV-102 led the fleet as the orbiter that inaugurated the Space Shuttle era with STS-1. Over more than two decades it supported science missions—including Spacelab and the deployment of Chandra—and helped prove reusable human spaceflight at scale.',
    highlights: [
      'STS-1: first orbital flight of the Space Shuttle',
      'STS-9: first Spacelab mission',
      'Deployed the Chandra X-ray Observatory on STS-93',
    ],
    status: 'lost',
    statusNote:
      'Columbia was lost with its crew during re-entry on STS-107 (February 1, 2003). The accident led to major program changes and renewed emphasis on vehicle safety.',
  },
  {
    slug: 'challenger',
    name: 'Challenger',
    tagline: 'Workhorse of the expanding shuttle manifest',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/S83-35803_%28cropped%29.jpg/1280px-S83-35803_%28cropped%29.jpg',
    imageAlt: 'Space Shuttle Challenger on mission STS-7 in orbit',
    imageCredit: 'Wikimedia Commons (NASA)',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:S83-35803_(cropped).jpg',
    firstFlight: 'April 4, 1983',
    lastFlight: 'January 28, 1986',
    missions: 10,
    summary:
      'OV-099 flew the first spacewalk of the program, carried the first American woman and first African American astronauts to space, and supported satellite deployments and science flights during a busy early period of shuttle operations.',
    highlights: [
      'First shuttle spacewalk (STS-6)',
      'STS-41G: multi-disciplinary crew milestones',
      'STS-51L: Teacher in Space Project (mission lost)',
    ],
    status: 'lost',
    statusNote:
      'Challenger was lost shortly after launch on STS-51L (January 28, 1986). The tragedy paused the program and reshaped NASA’s approach to risk, design, and decision-making.',
  },
  {
    slug: 'discovery',
    name: 'Discovery',
    tagline: 'The orbiter that returned NASA to flight—twice',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/STS-133_Space_Shuttle_Discovery_after_undocking_3_%28cropped%29.jpg/1280px-STS-133_Space_Shuttle_Discovery_after_undocking_3_%28cropped%29.jpg',
    imageAlt: 'Space Shuttle Discovery after undocking during STS-133',
    imageCredit: 'Wikimedia Commons (NASA)',
    imageCreditUrl:
      'https://commons.wikimedia.org/wiki/File:STS-133_Space_Shuttle_Discovery_after_undocking_3_(cropped).jpg',
    firstFlight: 'August 30, 1984',
    lastFlight: 'March 9, 2011',
    missions: 39,
    summary:
      'OV-103 flew more missions than any other orbiter. It launched Hubble, visited Mir and the ISS, and carried both “return to flight” crews after Challenger and Columbia—earning a reputation as NASA’s dependable flagship.',
    highlights: [
      'Deployed the Hubble Space Telescope (STS-31)',
      'First shuttle mission to dock with the ISS (STS-96)',
      'Final landing of the Space Shuttle program (STS-133)',
    ],
    status: 'retired',
    statusNote: 'Retired on display at the Steven F. Udvar-Hazy Center, Virginia, USA.',
  },
  {
    slug: 'atlantis',
    name: 'Atlantis',
    tagline: 'Heavy lifter of station assembly',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/STS132_Atlantis_undocking2_%28cropped%29.jpg/1280px-STS132_Atlantis_undocking2_%28cropped%29.jpg',
    imageAlt: 'Space Shuttle Atlantis after undocking from the ISS during STS-132',
    imageCredit: 'Wikimedia Commons (NASA)',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:STS132_Atlantis_undocking2_(cropped).jpg',
    firstFlight: 'October 3, 1985',
    lastFlight: 'July 21, 2011',
    missions: 33,
    summary:
      'OV-104 became closely associated with International Space Station assembly and logistics, including launching the Destiny laboratory and helping close the shuttle era with the program’s last mission.',
    highlights: [
      'Delivered the Destiny laboratory to the ISS (STS-98)',
      'Final Space Shuttle mission: STS-135 (July 2011)',
    ],
    status: 'retired',
    statusNote: 'Retired on display at Kennedy Space Center Visitor Complex, Florida, USA.',
  },
  {
    slug: 'endeavour',
    name: 'Endeavour',
    tagline: 'Built from spares to strengthen the fleet',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/STS-123_Dextre%26Kibo_ELM-PS_in_orbit_%28cropped%29.jpg/1280px-STS-123_Dextre%26Kibo_ELM-PS_in_orbit_%28cropped%29.jpg',
    imageAlt: 'Space Shuttle Endeavour during STS-123 with station hardware in view',
    imageCredit: 'Wikimedia Commons (NASA)',
    imageCreditUrl:
      'https://commons.wikimedia.org/wiki/File:STS-123_Dextre%26Kibo_ELM-PS_in_orbit_(cropped).jpg',
    firstFlight: 'May 7, 1992',
    lastFlight: 'June 1, 2011',
    missions: 25,
    summary:
      'OV-105 replaced Challenger using structural spare components. It supported ISS construction, carried the first Alpha Magnetic Spectrometer to station, and completed ambitious servicing and assembly flights.',
    highlights: [
      'First Hubble servicing mission after deployment issues (STS-61)',
      'Delivered the Alpha Magnetic Spectrometer to the ISS (STS-134)',
    ],
    status: 'retired',
    statusNote: 'Retired on display at the California Science Center, Los Angeles, USA.',
  },
];

export function getOrbiter(slug: string): Orbiter | undefined {
  return orbiters.find((o) => o.slug === slug);
}
