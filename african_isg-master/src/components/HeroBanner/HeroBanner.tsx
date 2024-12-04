import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/web';
import { OrbitControls, Environment } from '@react-three/drei';
import { Globe } from '../Globe/Globe';
import { Stars } from '../Stars/Stars';
import { HeroText } from './HeroText';
import { LoadingSpinner } from './LoadingSpinner';

export const HeroBanner = () => {
  const [springs] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 },
    delay: 300,
  }));

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-gray-800 to-white overflow-hidden">
      <animated.div 
        style={springs}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
      >
        <HeroText />
      </animated.div>
      
      <div className="absolute inset-0">
      <Canvas
  camera={{ position: [0, 0, 4], fov: 45 }}
  className="w-full h-full"
  gl={{ antialias: true }}
>
  {/* Explicitly set the background color */}
  <color attach="background" args={['#1a1a1a']} />
  <fog attach="fog" args={['#1a1a1a', 20, 40]} />
  <ambientLight intensity={1.5} />
  <pointLight position={[10, 10, 10]} intensity={2} />
  <pointLight position={[-10, -10, -10]} intensity={1} />
  <directionalLight position={[0, 10, 0]} intensity={2} />
  
  <Suspense fallback={<LoadingSpinner />}>
    <Environment preset="sunset" />
    <Stars />
    <Globe />
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      rotateSpeed={0.5}
      autoRotate={true}
      autoRotateSpeed={0.5}
    />
  </Suspense>
</Canvas>

      </div>
    </div>
  );
};