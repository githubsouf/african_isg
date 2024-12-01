import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Load earth textures
  const earthMap = useLoader(THREE.TextureLoader, '/test4.png');
  const bumpMap = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg');

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    uniform sampler2D earthTexture;
    uniform sampler2D bumpTexture;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vec4 earthColor = texture2D(earthTexture, vUv);
      vec4 bumpColor = texture2D(bumpTexture, vUv);
      
      // Highlight Africa region (coordinates adjusted for Africa)
      float africaHighlight = 0.0;
      if (vUv.x > 0.35 && vUv.x < 0.65 && vUv.y > 0.35 && vUv.y < 0.65) {
        vec2 africaCenter = vec2(0.5, 0.5);
        float distanceFromAfrica = distance(vUv, africaCenter);
        africaHighlight = 1.0 - smoothstep(0.0, 0.15, distanceFromAfrica);
      }
      
      // Enhanced pulse effect
      float pulse = (sin(time * 2.0) * 0.5 + 0.5) * 0.4;
      
      // Combine colors with enhanced glow
      vec3 finalColor = mix(
        earthColor.rgb,
        vec3(0.6, 0.2, 1.0), // Purple highlight for Africa
        africaHighlight * pulse
      );
      
      // Add atmospheric glow
      float atmosphere = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
      finalColor += vec3(0.4, 0.2, 0.8) * atmosphere * 0.6;
      
      // Add subtle rim lighting
      float rimLight = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
      finalColor += vec3(0.5, 0.3, 0.8) * rimLight * 0.3;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  return (
    <group>
      {/* Main Globe */}
      <Sphere args={[1.5, 64, 64]} ref={meshRef}>
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            time: { value: 0 },
            earthTexture: { value: earthMap },
            bumpTexture: { value: bumpMap }
          }}
          transparent
          side={THREE.FrontSide}
        />
      </Sphere>
      
      {/* Atmosphere layer */}
      <Sphere args={[1.55, 32, 32]}>
        <meshPhongMaterial
          color="#4b0082"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[1.6, 32, 32]}>
        <meshPhongMaterial
          color="#9d4edd"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <GlobeMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}