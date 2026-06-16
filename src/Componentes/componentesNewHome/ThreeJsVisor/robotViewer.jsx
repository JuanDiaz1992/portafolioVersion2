import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Grid } from "@react-three/drei";
import Robot from "./Robot";
import FloatingCubes from "./FloatingCubes";
import * as THREE from 'three';

export default function RobotViewer() {
  return (
    <div className="w-full h-full rounded-3xl bg-[#131a26] overflow-hidden relative">
      {/* El Canvas inicializa la escena, la cámara y el motor de render automáticamente */}
      <Canvas
        camera={{ position: [0.15, 1.1, 4.2], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
        }}
      >
        {/* Luces */}
        <ambientLight intensity={0.4} />
        <hemisphereLight args={[0xffffff, 0x22293a, 0.75]} />
        <directionalLight intensity={2.2} position={[2, 4, 5]} />
        <directionalLight intensity={0.8} position={[-4, 1.5, 2]} />
        <directionalLight intensity={2.5} position={[-3, 6, -5]} />
        <directionalLight intensity={0.5} position={[0, 1, 4]} />
        <pointLight
          intensity={0.16}
          position={[0, 2.8, 0]}
          distance={10}
          decay={2}
        />

        {/* Componentes de la escena */}
        <Robot />
        <FloatingCubes count={20} />

        {/* Cuadrícula estilizada en el piso usando Drei (Súper optimizada) */}
        <Grid
          position={[0, -2.5, 0]}
          args={[10, 10]}
          cellSize={1}
          cellThickness={1}
          cellColor="#2f4d71"
          sectionSize={5}
          sectionColor="#5cb8e4"
          fadeDistance={30}
        />

        {/* Mapa de entorno HDR (Drei lo descarga y lo aplica a la escena por ti) */}
        {/* <Environment files="/ferndale_studio_07_1k.hdr" /> */}
        <Environment preset="city" />

        {/* Controles del Mouse */}
        <OrbitControls
          enableDamping
          target={[0, 1, 0]}
          minDistance={2.8}
          maxDistance={8}
          maxPolarAngle={Math.PI / 2.2}
        />

      </Canvas>
    </div>
  );
}
