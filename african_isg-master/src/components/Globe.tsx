import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture, Html } from "@react-three/drei";

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
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={1.5}> {/* Match GlobeMesh scale */}
        <icosahedronGeometry args={[1.5, 64]} /> {/* Match GlobeMesh geometry */}
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
          scale={1.3} // Adjust decal to fit the larger geometry
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, -1]} // Back side
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.3} // Adjust decal scale
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const LogoBall = () => {
  return (
    <div className="w-full h-[300px]"> {/* Adjust container size */}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }} // Match GlobeMesh camera settings
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5} // Match GlobeMesh rotation speed
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
