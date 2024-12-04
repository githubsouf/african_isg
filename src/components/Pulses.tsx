import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Pulses() {
  const pulsesRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (pulsesRef.current) {
      pulsesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={pulsesRef}>
      {Array.from({ length: 8 }).map((_, i) => (
        <PulseRing key={i} delay={i * 0.4} />
      ))}
    </group>
  );
}

function PulseRing({ delay }: { delay: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = (clock.getElapsedTime() + delay) % 2;
      ringRef.current.scale.setScalar(1 + t * 1.5);
      ringRef.current.material.opacity = (1 - t/2) * 0.5;
    }
  });

  return (
    <mesh
      ref={ringRef}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <ringGeometry args={[0.95, 1, 64]} />
      <meshBasicMaterial
        color={0x44ff88}
        transparent
        opacity={0.5}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}