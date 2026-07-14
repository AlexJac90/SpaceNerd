import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PLANET_BLOOM_RGB, PLANET_GLOBE_TEXTURES } from '../../data/planetGlobes';
import { withBase } from '../../utils/withBase';
import {
  GLOBE_GL_DEFAULTS,
  SpaceBackdrop,
  configureGlobeTexture,
  setupGlobeRenderer,
  useReducedMotionFlag,
} from './globeShared';

const CLEAR_ALPHA = 0;
const FADE_SPEED = 2.15;

function smoothstep01(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

function setGroupFadeMultiplier(root: THREE.Object3D | null, mult: number) {
  if (!root) return;
  root.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const m of mats) {
      if (!m || typeof m !== 'object' || !('opacity' in m)) continue;
      const mat = m as THREE.MeshStandardMaterial & { userData: { __fadeBase?: number } };
      if (mat.userData.__fadeBase === undefined) {
        mat.userData.__fadeBase = mat.opacity;
      }
      mat.transparent = true;
      mat.opacity = (mat.userData.__fadeBase as number) * mult;
      mat.needsUpdate = true;
    }
  });
}

export type PlanetCarouselItem = {
  slug: string;
  name: string;
};

type Props = {
  items: PlanetCarouselItem[];
};

function EarthPlanetBody({ reducedMotion }: { reducedMotion: boolean }) {
  const gl = useThree((s) => s.gl);
  const [dayMap, cloudsMap] = useTexture([
    withBase('/textures/earth_day_4096.jpg'),
    withBase('/textures/earth_clouds_1024.png'),
  ]);
  dayMap.colorSpace = THREE.SRGBColorSpace;
  cloudsMap.colorSpace = THREE.SRGBColorSpace;

  useLayoutEffect(() => {
    configureGlobeTexture(dayMap, gl);
    configureGlobeTexture(cloudsMap, gl);
  }, [gl, dayMap, cloudsMap]);

  const groupRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y += delta * 0.14;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.038;
  });

  return (
    <group ref={groupRef}>
      <mesh scale={1.085} renderOrder={-1}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#5cadff"
          transparent
          opacity={0.22}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh scale={1.045} renderOrder={-1}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#8ec8ff"
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh renderOrder={0}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhysicalMaterial
          map={dayMap}
          roughness={0.42}
          metalness={0.1}
          clearcoat={0.55}
          clearcoatRoughness={0.12}
        />
      </mesh>
      <mesh ref={cloudsRef} scale={1.018} renderOrder={1}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={1}
          depthWrite={false}
          roughness={0.92}
          metalness={0}
          side={THREE.FrontSide}
        />
      </mesh>
    </group>
  );
}

function SimplePlanetBody({
  slug,
  reducedMotion,
  showSaturnRings,
}: {
  slug: string;
  reducedMotion: boolean;
  showSaturnRings: boolean;
}) {
  const gl = useThree((s) => s.gl);
  const path = PLANET_GLOBE_TEXTURES[slug];
  const map = useTexture(path);
  map.colorSpace = THREE.SRGBColorSpace;

  useLayoutEffect(() => {
    configureGlobeTexture(map, gl);
  }, [gl, map]);

  const groupRef = useRef<THREE.Group>(null);
  const gasGiant = slug === 'jupiter' || slug === 'saturn' || slug === 'uranus' || slug === 'neptune';

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y += delta * (gasGiant ? 0.22 : 0.14);
  });

  return (
    <group ref={groupRef}>
      <mesh scale={1.06} renderOrder={-1}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color="#4a6a90"
          transparent
          opacity={gasGiant ? 0.12 : 0.18}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh renderOrder={0}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhysicalMaterial
          map={map}
          roughness={gasGiant ? 0.35 : 0.55}
          metalness={gasGiant ? 0.06 : 0.08}
          clearcoat={gasGiant ? 0.35 : 0.45}
          clearcoatRoughness={0.14}
        />
      </mesh>
      {showSaturnRings && (
        <mesh rotation={[Math.PI / 2.15, 0, 0]} renderOrder={2}>
          <ringGeometry args={[1.22, 1.72, 96]} />
          <meshBasicMaterial
            color="#d4c4a8"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
            depthWrite={false}
            blending={THREE.NormalBlending}
          />
        </mesh>
      )}
    </group>
  );
}

function PlanetVisual({
  slug,
  reducedMotion,
}: {
  slug: string;
  reducedMotion: boolean;
}) {
  if (slug === 'earth') {
    return <EarthPlanetBody reducedMotion={reducedMotion} />;
  }
  return (
    <SimplePlanetBody
      slug={slug}
      reducedMotion={reducedMotion}
      showSaturnRings={slug === 'saturn'}
    />
  );
}

function SharedLighting() {
  return (
    <>
      <ambientLight intensity={0.34} />
      <directionalLight position={[5, 1.5, 4.5]} intensity={2.05} color="#fff7ee" />
      <directionalLight position={[-4, -1, -3]} intensity={0.24} color="#6a8ec4" />
      <pointLight position={[0.15, 0.35, 2.85]} intensity={0.5} distance={12} decay={2} color="#d2eaff" />
    </>
  );
}

/** Stars + sun stay put; planets crossfade when `activeSlug` changes */
function PlanetGlobeWorld({
  activeSlug,
  reducedMotion,
}: {
  activeSlug: string;
  reducedMotion: boolean;
}) {
  if (reducedMotion) {
    return (
      <>
        <SpaceBackdrop reducedMotion />
        <SharedLighting />
        <Suspense fallback={null}>
          <group renderOrder={1}>
            <PlanetVisual slug={activeSlug} reducedMotion />
          </group>
        </Suspense>
      </>
    );
  }

  return (
    <>
      <SpaceBackdrop reducedMotion={false} />
      <SharedLighting />
      <PlanetCrossfade activeSlug={activeSlug} reducedMotion={false} />
    </>
  );
}

function PlanetCrossfade({
  activeSlug,
  reducedMotion,
}: {
  activeSlug: string;
  reducedMotion: boolean;
}) {
  const [leavingSlug, setLeavingSlug] = useState<string | null>(null);
  const activeRef = useRef(activeSlug);
  const fadeT = useRef(1);
  const clearLeavingNext = useRef(false);
  const outgoingRoot = useRef<THREE.Group>(null);
  const incomingRoot = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    if (activeSlug !== activeRef.current) {
      setLeavingSlug(activeRef.current);
      activeRef.current = activeSlug;
      fadeT.current = 0;
      clearLeavingNext.current = false;
    }
  }, [activeSlug]);

  useFrame((_, dt) => {
    if (fadeT.current < 1) {
      fadeT.current = Math.min(1, fadeT.current + dt * FADE_SPEED);
    }
    const s = smoothstep01(fadeT.current);
    setGroupFadeMultiplier(incomingRoot.current, s);
    setGroupFadeMultiplier(outgoingRoot.current, 1 - s);

    if (fadeT.current >= 1 && leavingSlug !== null && !clearLeavingNext.current) {
      clearLeavingNext.current = true;
      setLeavingSlug(null);
    }
  });

  return (
    <>
      {leavingSlug !== null && (
        <group ref={outgoingRoot} renderOrder={0}>
          <Suspense fallback={null}>
            <PlanetVisual slug={leavingSlug} reducedMotion={reducedMotion} />
          </Suspense>
        </group>
      )}
      <group ref={incomingRoot} renderOrder={1}>
        <Suspense fallback={null}>
          <PlanetVisual slug={activeSlug} reducedMotion={reducedMotion} />
        </Suspense>
      </group>
    </>
  );
}

export default function PlanetGlobeCarousel({ items }: Props) {
  const reducedMotion = useReducedMotionFlag();
  const [index, setIndex] = useState(0);
  const n = items.length;
  const current = items[((index % n) + n) % n];
  const slug = current?.slug ?? 'earth';

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta;
        return ((next % n) + n) % n;
      });
    },
    [n],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const bloom = PLANET_BLOOM_RGB[slug] ?? '120, 195, 255';

  if (n === 0) return null;

  return (
    <div className="planet-carousel-wrap relative w-full">
      <div
        className="pointer-events-none absolute inset-0 rounded-full opacity-50 blur-2xl transition-[background] duration-500 ease-out"
        style={{
          background: `radial-gradient(ellipse 52% 48% at 50% 45%, rgba(${bloom}, 0.38), rgba(${bloom}, 0.08) 48%, transparent 72%)`,
          transform: 'scale(1.12)',
        }}
        aria-hidden="true"
      />
      <button
        type="button"
        className="planet-carousel-arrow planet-carousel-arrow--prev"
        aria-label="Previous planet"
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="planet-carousel-arrow planet-carousel-arrow--next"
        aria-label="Next planet"
        onClick={() => go(1)}
      >
        ›
      </button>
      <div className="planet-carousel-canvas relative z-[1] h-[min(62vh,560px)] w-full md:h-[min(68vh,640px)]">
        <Canvas
          className="!bg-transparent"
          style={{ background: 'transparent' }}
          camera={{ position: [0, 0.12, 2.45], fov: 45 }}
          gl={GLOBE_GL_DEFAULTS}
          dpr={[1, 2]}
          onCreated={({ gl, scene }) => setupGlobeRenderer(gl, scene, CLEAR_ALPHA)}
        >
          <PlanetGlobeWorld activeSlug={slug} reducedMotion={reducedMotion} />
        </Canvas>
      </div>
      <div className="relative z-[2] mx-auto max-w-5xl px-4 pb-6 text-center transition-opacity duration-300">
        <p className="font-display text-2xl font-semibold text-white md:text-3xl">{current.name}</p>
        <p className="mt-1 text-sm text-slate-500">
          {index + 1} / {n}
        </p>
        <a
          href={withBase(`/planets/${current.slug}`)}
          className="mt-3 inline-block text-sm font-medium text-nebula hover:underline"
        >
          Read about {current.name} →
        </a>
      </div>
      <style>{`
        .planet-carousel-arrow {
          position: absolute;
          top: 50%;
          z-index: 3;
          transform: translateY(-50%);
          display: flex;
          height: 3rem;
          width: 3rem;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(8, 10, 18, 0.75);
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.75rem;
          line-height: 1;
          transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .planet-carousel-arrow:hover {
          border-color: rgba(110, 181, 255, 0.35);
          background: rgba(15, 20, 35, 0.9);
          color: #fff;
        }
        .planet-carousel-arrow--prev {
          left: max(0.5rem, env(safe-area-inset-left));
        }
        .planet-carousel-arrow--next {
          right: max(0.5rem, env(safe-area-inset-right));
        }
        @media (min-width: 768px) {
          .planet-carousel-arrow--prev {
            left: 1rem;
          }
          .planet-carousel-arrow--next {
            right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
