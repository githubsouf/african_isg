import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from "@react-three/drei";

const Loader = () => (
  <Html center>
    <div className="flex items-center justify-center">
      <div className="w-20 h-20 border-2 border-primary rounded-full animate-spin border-t-transparent" />
    </div>
  </Html>
);

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 8]} />
        <meshStandardMaterial
          color="#fac802"
          metalness={0.5}
          roughness={0.5}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.5}
          map={decal}
          flatShading
        />
         <Decal
          position={[0, 0, -1]} // Back side
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.5}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const LogoBall = () => {
  return (
    <div className="w-20 h-20">
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={4}
          />
          <Ball imgUrl="/aisg-logo.png" />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default LogoBall;