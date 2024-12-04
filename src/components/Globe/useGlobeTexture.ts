import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export const useGlobeTexture = () => {
  const texture = useLoader(TextureLoader, './test4.png');
  const bumpMap = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg');
  const specMap = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg');

  return { texture, bumpMap, specMap };
};