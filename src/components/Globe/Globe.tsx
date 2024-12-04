import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { animated, useSpring } from '@react-spring/web';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useGlobeTexture } from './useGlobeTexture';

const AnimatedMesh = animated('mesh');

export const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { texture, bumpMap, specMap } = useGlobeTexture();
  
  const [springs] = useSpring(() => ({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 300,
  }));

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <AnimatedMesh
      ref={meshRef}
      scale={springs.scale}
    >
      <Sphere args={[1.25, 64, 64]}>
        <meshPhysicalMaterial
          map={texture}
          bumpMap={bumpMap}
          bumpScale={0.05}
          roughnessMap={specMap}
          roughness={0.4}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          envMapIntensity={2}
        />
      </Sphere>
    </AnimatedMesh>
  );
};