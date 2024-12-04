import { Html } from '@react-three/drei';

export const LoadingSpinner = () => {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    </Html>
  );
};