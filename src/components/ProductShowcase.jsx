import './ProductShowcase.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function HeadsetModel() {
  const { scene } = useGLTF('/headset-model.glb'); // Correct path if in public folder
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function ProductShowcase() {
  return (
    <section className="h-[60vh] flex items-center justify-center bg-gray-900">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <HeadsetModel />
      </Canvas>
    </section>
  );
}
