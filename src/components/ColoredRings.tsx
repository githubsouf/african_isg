import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { COLORS } from '../utils/colors';

export function ColoredRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ringsRef.current) {
      const time = clock.getElapsedTime();
      ringsRef.current.children.forEach((ring, i) => {
        // Rotate each ring at different speeds and directions
        ring.rotation.x = Math.sin(time * 0.2 + i) * 0.3;
        ring.rotation.y = time * (0.1 + i * 0.05) * (i % 2 ? 1 : -1);
        
        // Animate opacity
        const material = (ring as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.opacity = (Math.sin(time + i) * 0.2 + 0.6);
      });
    }
  });

  const ringConfigs = [
    { color: COLORS.primaryGreen, radius: 1.8, thickness: 0.02, rotation: [0, 0, 0] },
    { color: COLORS.accentYellow, radius: 2.0, thickness: 0.02, rotation: [0.4, 0.2, 0] },
    { color: COLORS.accentRed, radius: 2.2, thickness: 0.02, rotation: [-0.2, -0.4, 0] },
    { color: COLORS.primaryGreen, radius: 2.4, thickness: 0.01, rotation: [0.1, -0.3, 0] },
    { color: COLORS.accentYellow, radius: 2.6, thickness: 0.01, rotation: [-0.3, 0.1, 0] },
    { color: COLORS.accentRed, radius: 2.8, thickness: 0.01, rotation: [0.2, 0.2, 0] },
  ];

  return (
    <group ref={ringsRef}>
      {ringConfigs.map((config, i) => (
        <mesh key={i} rotation={config.rotation as [number, number, number]}>
          <torusGeometry args={[config.radius, config.thickness, 30, 100]} />
          <meshBasicMaterial
            color={config.color}
            transparent
            opacity={0.6}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}