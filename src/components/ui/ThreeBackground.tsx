import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

// Performance optimization component
function PerformanceOptimizer() {
  const { gl, scene } = useThree();
  
  useMemo(() => {
    // Optimize renderer
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    gl.shadowMap.enabled = false;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
    gl.outputColorSpace = THREE.SRGBColorSpace;
    
    // Optimize scene
    scene.fog = new THREE.Fog(0x000000, 10, 50);
  }, [gl, scene]);
  
  return null;
}

// Floating cube component
function FloatingCube({ position, color, quality = 'high' }: { position: [number, number, number], color: string, quality?: 'low' | 'high' }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.4;
    mesh.current.rotation.y = time * 0.6;
    mesh.current.rotation.z = time * 0.2;
    mesh.current.position.y = position[1] + Math.sin(time * 2 + position[0]) * 0.4;
    mesh.current.position.x = position[0] + Math.cos(time * 1.5 + position[1]) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

// Floating sphere component
function FloatingSphere({ position, color, quality = 'high' }: { position: [number, number, number], color: string, quality?: 'low' | 'high' }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.3;
    mesh.current.rotation.y = time * 0.4;
    mesh.current.rotation.z = time * 0.5;
    mesh.current.position.x = position[0] + Math.cos(time * 1.8 + position[1]) * 0.5;
    mesh.current.position.z = position[2] + Math.sin(time * 1.2 + position[0]) * 0.4;
    mesh.current.scale.setScalar(1 + Math.sin(time * 3 + position[1]) * 0.2);
  });

  const segments = quality === 'low' ? 8 : 16;

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.6, segments, segments]} />
      <meshStandardMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}

// Particle system
function Particles({ quality = 'high' }: { quality?: 'low' | 'high' }) {
  const points = useRef<THREE.Points>(null!);
  
  const particleCount = quality === 'low' ? 50 : 100;
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [particleCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.1;
    points.current.rotation.x = time * 0.05;
    points.current.rotation.z = time * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlesPosition}
          count={particlesPosition.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  );
}

// Main scene
function Scene({ quality = 'high' }: { quality?: 'low' | 'high' }) {
  return (
    <>
      <PerformanceOptimizer />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.3} />
      
      <Particles quality={quality} />
      
      {/* Floating cubes */}
      <FloatingCube position={[-4, 2, -2]} color="#8b5cf6" quality={quality} />
      <FloatingCube position={[4, -1, -3]} color="#3b82f6" quality={quality} />
      <FloatingCube position={[-2, -3, -1]} color="#06d6a0" quality={quality} />
      <FloatingCube position={[6, 1, -4]} color="#f59e0b" quality={quality} />
      <FloatingCube position={[-6, -1, -3]} color="#ef4444" quality={quality} />
      <FloatingCube position={[2, 4, -2]} color="#8b5cf6" quality={quality} />
      
      {/* Floating spheres */}
      <FloatingSphere position={[3, 3, -4]} color="#f59e0b" quality={quality} />
      <FloatingSphere position={[-5, -2, -2]} color="#ef4444" quality={quality} />
      <FloatingSphere position={[1, -4, -5]} color="#8b5cf6" quality={quality} />
      <FloatingSphere position={[-3, 4, -3]} color="#3b82f6" quality={quality} />
      <FloatingSphere position={[5, -3, -4]} color="#06d6a0" quality={quality} />
      <FloatingSphere position={[7, 2, -5]} color="#f59e0b" quality={quality} />
      <FloatingSphere position={[-7, 1, -2]} color="#ef4444" quality={quality} />
    </>
  );
}

export const ThreeBackground = ({ quality = 'high' }: { quality?: 'low' | 'high' }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={quality === 'low' ? 1 : [1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene quality={quality} />
        </Suspense>
      </Canvas>
    </div>
  );
};