const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

/** Equirectangular maps for the planets carousel (local public paths). */
export const PLANET_GLOBE_TEXTURES: Record<string, string> = {
  mercury: asset('/textures/planets/mercury_2k.jpg'),
  venus: asset('/textures/planets/venus_2k.jpg'),
  earth: asset('/textures/earth_day_4096.jpg'),
  mars: asset('/textures/planets/mars.png'),
  jupiter: asset('/textures/planets/jupiter_2k.jpg'),
  saturn: asset('/textures/planets/saturn_2k.jpg'),
  uranus: asset('/textures/planets/uranus_2k.jpg'),
  neptune: asset('/textures/planets/neptune_2k.jpg'),
};

/** CSS bloom tint (RGB) behind each globe */
export const PLANET_BLOOM_RGB: Record<string, string> = {
  mercury: '200, 190, 175',
  venus: '220, 180, 120',
  earth: '100, 160, 220',
  mars: '210, 120, 80',
  jupiter: '200, 170, 130',
  saturn: '210, 190, 150',
  uranus: '130, 190, 210',
  neptune: '90, 130, 210',
};
