import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { COLORS } from '../utils/colors';

export function AfricaHighlight() {
  const highlightRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (highlightRef.current) {
      const time = clock.getElapsedTime();
      const material = (highlightRef.current.children[0] as THREE.Mesh)
        .material as THREE.MeshBasicMaterial;
      material.opacity = (Math.sin(time * 0.5) * 0.2) + 0.8;
    }
  });

  // Create Africa shape
  const africaShape = new THREE.Shape();
  africaShape.moveTo(0, 0.5);
  africaShape.bezierCurveTo(0.4, 0.5, 0.5, 0.2, 0.5, 0);
  africaShape.bezierCurveTo(0.5, -0.3, 0.3, -0.5, 0, -0.5);
  africaShape.bezierCurveTo(-0.3, -0.5, -0.5, -0.3, -0.5, 0);
  africaShape.bezierCurveTo(-0.5, 0.2, -0.4, 0.5, 0, 0.5);

  return (
    <group ref={highlightRef}>
      <mesh position={[0, 0, 1.01]}>
        <shapeGeometry args={[africaShape]} />
        <meshBasicMaterial
          color={COLORS.accentYellow}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}