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
//test
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.2}>
      <ambientLight intensity={0.35} /> {/* Slightly brighter ambient light */}
      <directionalLight position={[0, 0, 1]} intensity={0.8} /> {/* Stronger light */}
      <mesh castShadow receiveShadow scale={1.5}> {/* Slightly larger scale */}
        <icosahedronGeometry args={[1.5, 64]} /> {/* Geometry size */}
        <meshStandardMaterial
  color="#fac802"
  metalness={0.9} // Increased metallic effect
  roughness={0.1} // Smoother surface
  polygonOffset
  polygonOffsetFactor={-5}
  flatShading
/>

        <Decal
          position={[0, 0, 1.3]} // Slightly forward on Z-axis
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.5} // Adjusted decal scale
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, -1.3]} // Back side, slightly adjusted
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.5} // Adjusted decal scale
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const LogoBall = () => {
  return (
    <div className="w-full h-[500px]"> {/* Increased container size */}
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }} // Adjusted camera
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1} // Adjusted rotation speed
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
          <Ball imgUrl="/aisg-logo.png" />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default LogoBall;
