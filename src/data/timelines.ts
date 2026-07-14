export type TimelineEvent = {
  year: string;
  title: string;
  detail: string;
};

export const stsProgramTimeline: TimelineEvent[] = [
  {
    year: '1972',
    title: 'Program approval',
    detail:
      'NASA receives a green light to develop a reusable space transportation system—what became the Space Shuttle.',
  },
  {
    year: '1981',
    title: 'STS-1: Columbia',
    detail: 'First orbital flight of the Space Shuttle, proving the winged orbiter concept in space.',
  },
  {
    year: '1983',
    title: 'Challenger joins the fleet',
    detail: 'Second operational orbiter expands flight rate and mission diversity.',
  },
  {
    year: '1984',
    title: 'Discovery & Atlantis',
    detail: 'Additional orbiters strengthen logistics, science, and satellite deployment capacity.',
  },
  {
    year: '1986',
    title: 'Challenger and STS-51L',
    detail: 'Loss of Challenger and crew leads to redesign of the solid rocket boosters and sweeping cultural reforms.',
  },
  {
    year: '1990',
    title: 'Hubble deployment',
    detail: 'Discovery launches the Hubble Space Telescope—later serviced repeatedly by shuttle crews.',
  },
  {
    year: '1992',
    title: 'Endeavour enters service',
    detail: 'A new orbiter built from structural spares replaces Challenger’s role in the fleet.',
  },
  {
    year: '1998–2011',
    title: 'International Space Station assembly',
    detail: 'Shuttle missions deliver modules, trusses, and logistics that build the modern ISS.',
  },
  {
    year: '2003',
    title: 'Columbia and STS-107',
    detail: 'Loss of Columbia and crew during re-entry reshapes thermal protection oversight and mission rules.',
  },
  {
    year: '2011',
    title: 'Final flight',
    detail: 'Atlantis lands after STS-135, closing the Space Shuttle program after 135 missions.',
  },
];

export const moonExplorationTimeline: TimelineEvent[] = [
  {
    year: '1959',
    title: 'First lunar flybys',
    detail: 'Early robotic probes return humanity’s first glimpses of the Moon’s far side.',
  },
  {
    year: '1966',
    title: 'Soft landings',
    detail: 'Surveyor missions demonstrate controlled landings—critical data for Apollo landing systems.',
  },
  {
    year: '1968',
    title: 'Apollo 8',
    detail: 'First humans orbit the Moon; Earthrise photographs reshape public perspective on our planet.',
  },
  {
    year: '1969',
    title: 'Apollo 11',
    detail: 'Neil Armstrong and Buzz Aldrin land in the Sea of Tranquility; humanity walks on another world.',
  },
  {
    year: '1969–1972',
    title: 'Apollo surface exploration',
    detail: 'Six missions land (Apollos 11, 12, 14, 15, 16, 17), returning samples and deploying experiments.',
  },
  {
    year: '1970',
    title: 'Apollo 13',
    detail: 'An in-flight explosion forces a free-return trajectory; the crew returns safely—an engineering triumph.',
  },
  {
    year: '1972',
    title: 'Apollo 17',
    detail: 'Gene Cernan and Harrison Schmitt become the last Apollo moonwalkers of the 20th century.',
  },
  {
    year: 'Today',
    title: 'Robotic scouts & Artemis',
    detail: 'Orbiters and landers map ice and geology; Artemis aims to return crews with international partners.',
  },
];

export const apolloLandings = [
  { mission: 'Apollo 11', site: 'Sea of Tranquility', date: 'July 20, 1969', crew: 'Armstrong, Aldrin, Collins' },
  { mission: 'Apollo 12', site: 'Ocean of Storms', date: 'November 19, 1969', crew: 'Conrad, Bean, Gordon' },
  { mission: 'Apollo 14', site: 'Fra Mauro', date: 'February 5, 1971', crew: 'Shepard, Mitchell, Roosa' },
  { mission: 'Apollo 15', site: 'Hadley–Apennine', date: 'July 30, 1971', crew: 'Scott, Irwin, Worden' },
  { mission: 'Apollo 16', site: 'Descartes Highlands', date: 'April 21, 1972', crew: 'Young, Duke, Mattingly' },
  { mission: 'Apollo 17', site: 'Taurus–Littrow', date: 'December 11, 1972', crew: 'Cernan, Schmitt, Evans' },
];
