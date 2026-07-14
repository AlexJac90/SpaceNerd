export type Planet = {
  slug: string;
  name: string;
  type: string;
  orbitAU: string;
  diameterKm: string;
  dayLength: string;
  yearLength: string;
  moons: string;
  blurb: string;
  fact: string;
};

export const planets: Planet[] = [
  {
    slug: 'mercury',
    name: 'Mercury',
    type: 'Terrestrial planet',
    orbitAU: '0.39 AU',
    diameterKm: '4,879 km',
    dayLength: '~59 Earth days (sidereal)',
    yearLength: '~88 Earth days',
    moons: '0',
    blurb:
      'The smallest planet and the one closest to the Sun, Mercury is a cratered world with extreme temperature swings between its sunlit and night sides.',
    fact: 'Despite being innermost, ice can persist in permanently shadowed polar craters.',
  },
  {
    slug: 'venus',
    name: 'Venus',
    type: 'Terrestrial planet',
    orbitAU: '0.72 AU',
    diameterKm: '12,104 km',
    dayLength: '~243 Earth days (retrograde)',
    yearLength: '~225 Earth days',
    moons: '0',
    blurb:
      'Venus is Earth-sized but wrapped in thick clouds and a crushing carbon dioxide atmosphere—surface conditions are hotter than an oven.',
    fact: 'Venus rotates backwards compared to most planets in the solar system.',
  },
  {
    slug: 'earth',
    name: 'Earth',
    type: 'Terrestrial planet',
    orbitAU: '1.00 AU',
    diameterKm: '12,742 km',
    dayLength: '24 hours',
    yearLength: '365.25 days',
    moons: '1 (the Moon)',
    blurb:
      'Our home: liquid water oceans, a protective magnetic field, and an atmosphere rich in nitrogen and oxygen make Earth uniquely welcoming—for now—to life as we know it.',
    fact: 'Earth’s atmosphere scatters sunlight, giving daytime skies their blue hue.',
  },
  {
    slug: 'mars',
    name: 'Mars',
    type: 'Terrestrial planet',
    orbitAU: '1.52 AU',
    diameterKm: '6,779 km',
    dayLength: '~24.6 hours',
    yearLength: '~687 Earth days',
    moons: '2 (Phobos, Deimos)',
    blurb:
      'The Red Planet preserves ancient river valleys and polar ice caps. Robotic explorers study its geology and search for signs of past habitability.',
    fact: 'Olympus Mons is the largest volcano in the solar system by footprint.',
  },
  {
    slug: 'jupiter',
    name: 'Jupiter',
    type: 'Gas giant',
    orbitAU: '5.20 AU',
    diameterKm: '139,820 km',
    dayLength: '~10 hours',
    yearLength: '~12 Earth years',
    moons: '90+ known (four large Galilean moons)',
    blurb:
      'Jupiter dominates the solar system’s mass after the Sun. Its banded clouds hide deep storms—including the long-lived Great Red Spot.',
    fact: 'Jupiter acts like a gravitational sentinel, influencing the orbits of countless small bodies.',
  },
  {
    slug: 'saturn',
    name: 'Saturn',
    type: 'Gas giant',
    orbitAU: '9.54 AU',
    diameterKm: '116,460 km',
    dayLength: '~10.7 hours',
    yearLength: '~29 Earth years',
    moons: '140+ known',
    blurb:
      'Famous for its icy ring system, Saturn is a world of low density—less dense than water if you could find a bathtub big enough.',
    fact: 'Titan, Saturn’s largest moon, has a thick atmosphere and lakes of liquid methane and ethane.',
  },
  {
    slug: 'uranus',
    name: 'Uranus',
    type: 'Ice giant',
    orbitAU: '19.2 AU',
    diameterKm: '50,724 km',
    dayLength: '~17.2 hours',
    yearLength: '~84 Earth years',
    moons: '27 known',
    blurb:
      'Uranus is tipped on its side, likely due to an ancient giant impact. Methane in its atmosphere gives it a calm cyan appearance.',
    fact: 'Its magnetic field is tilted and offset from the planet’s center.',
  },
  {
    slug: 'neptune',
    name: 'Neptune',
    type: 'Ice giant',
    orbitAU: '30.1 AU',
    diameterKm: '49,244 km',
    dayLength: '~16 hours',
    yearLength: '~165 Earth years',
    moons: '16 known',
    blurb:
      'Neptune’s deep blue comes from methane absorption. Winds there are among the fastest measured in the solar system.',
    fact: 'Triton orbits Neptune backwards—likely a captured Kuiper Belt object.',
  },
];

export function getPlanet(slug: string): Planet | undefined {
  return planets.find((p) => p.slug === slug);
}
