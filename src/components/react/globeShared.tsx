import { Stars } from '@react-three/drei';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

/** Distant star shell + sun disc aligned with the main directional light */
export function SpaceBackdrop({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <Stars
        radius={95}
        depth={52}
        count={12000}
        factor={3.6}
        saturation={0.1}
        fade
        speed={reducedMotion ? 0 : 0.07}
      />
      <group position={[40, 12, 32]}>
        <mesh renderOrder={-8}>
          <sphereGeometry args={[1, 28, 28]} />
          <meshBasicMaterial color="#fff8ed" toneMapped={false} />
        </mesh>
        <mesh scale={3.8} renderOrder={-9}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshBasicMaterial
            color="#ffd8a8"
            transparent
            opacity={0.28}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
        <mesh scale={7.5} renderOrder={-10}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color="#ff9a4d"
            transparent
            opacity={0.07}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
      </group>
    </>
  );
}

export function configureGlobeTexture(tex: THREE.Texture, gl: THREE.WebGLRenderer) {
  const maxA = gl.capabilities.getMaxAnisotropy();
  tex.anisotropy = maxA;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
}

export function useReducedMotionFlag() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return reduced;
}

export const GLOBE_GL_DEFAULTS = {
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance' as const,
  premultipliedAlpha: false,
};

export function setupGlobeRenderer(gl: THREE.WebGLRenderer, scene: THREE.Scene, clearAlpha = 0) {
  scene.background = null;
  gl.setClearColor(0x000000, clearAlpha);
  gl.outputColorSpace = THREE.SRGBColorSpace;
  gl.toneMapping = THREE.ACESFilmicToneMapping;
  gl.toneMappingExposure = 1.1;
}
