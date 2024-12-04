import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { COLORS } from '../utils/colors';

export function LightRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ringsRef.current) {
      const time = clock.getElapsedTime();
      ringsRef.current.children.forEach((ring, i) => {
        const material = (ring as THREE.Mesh).material as THREE.MeshBasicMaterial;
        const offset = i * 0.2;
        material.opacity = (Math.sin(time + offset) * 0.3 + 0.5) * 0.5;
        ring.scale.setScalar(1 + Math.sin(time * 0.5 + offset) * 0.03);
      });
    }
  });

  return (
    <group ref={ringsRef}>
      {Array.from({ length: 8 }).map((_, i) => {
        const y = -0.8 + (i * 0.2); // Distribute rings vertically
        const scale = Math.cos((y + 0.8) * Math.PI * 0.6); // Scale rings based on position
        const radius = Math.sqrt(1 - y * y); // Calculate radius based on sphere equation

        return (
          <mesh
            key={i}
            position={[0, y, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[scale, scale, 1]}
          >
            <ringGeometry args={[radius - 0.02, radius, 64]} />
            <meshBasicMaterial
              color={COLORS.primaryGreen}
              transparent
              opacity={0.5}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        );
      })}
    </group>
  );
}