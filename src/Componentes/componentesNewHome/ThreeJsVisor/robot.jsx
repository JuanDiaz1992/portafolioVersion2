import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Robot() {
  // 1. Cargamos el modelo GLB (Drei maneja el Loader por debajo de forma óptima)
  const { scene, animations, nodes } = useGLTF("/Robot-final.glb");
  // 2. Extraemos las animaciones del modelo
  const { actions } = useAnimations(animations, scene);

  // Referencias a los huesos para moverlos con el mouse
  const cabezaRef = useRef();
  const cuelloRef = useRef();
  const torsoRef = useRef();

  // Asignamos el orden de rotación a los huesos una vez que el modelo esté listo
  useEffect(() => {
    // R3F te da los nodos directamente por su nombre en Blender
    console.log("Nodos del modelo:", nodes);
    if (nodes.Bone010) {
      cabezaRef.current = nodes.Bone010;
      cabezaRef.current.rotation.order = "YXZ";
    }
    if (nodes.Bone001) {
      cuelloRef.current = nodes.Bone001;
      cuelloRef.current.rotation.order = "YXZ";
    }
    if (nodes.Bone) {
      torsoRef.current = nodes.Bone;
      torsoRef.current.rotation.order = "YXZ";
    }

    if (nodes.Cube012 && nodes.Cube012.material) {
      // Forzamos el color cyan
      nodes.Cube012.material.emissive = new THREE.Color("#00f3ff");
      // Subimos la intensidad directo en la propiedad de Three.js (¡Esto no rompe!)
      nodes.Cube012.material.emissiveIntensity = 8.0;
    }

    // Reproducir todas las animaciones del robot automáticamente
    Object.values(actions).forEach((action) => action.play());
  }, [nodes, actions]);

  // 3. El ciclo de animación (Reemplaza a tu antigua función animate)
  useFrame((state) => {
    // state.pointer contiene las coordenadas del mouse normalizadas (-1 a 1) ¡Automáticamente!
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    const rotationLimitX = 0.9;
    const rotationLimitY = 1.5;
    const lerpFactor = 0.05;

    if (cabezaRef.current) {
      // Calculamos los objetivos
      const targetY = mouseX * rotationLimitY;
      const targetX = -mouseY * rotationLimitX;

      // Limitamos y aplicamos interpolación suave (Lerp)
      const clampedY = Math.max(
        -rotationLimitY,
        Math.min(rotationLimitY, targetY),
      );
      const clampedX = Math.max(
        -rotationLimitX,
        Math.min(rotationLimitX, targetX),
      );

      // Creamos los cuaterniones para el suavizado seguro
      const targetQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(clampedX, clampedY, 0, "YXZ"),
      );
      cabezaRef.current.quaternion.slerp(targetQuat, lerpFactor);

      if (cuelloRef.current) {
        const neckQuat = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(clampedX * 0.4, clampedY * 0.4, 0, "YXZ"),
        );
        cuelloRef.current.quaternion.slerp(neckQuat, lerpFactor);
      }

      if (torsoRef.current) {
        const torsoQuat = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(clampedX * 0.25, clampedY * 0.1, 0, "YXZ"),
        );
        torsoRef.current.quaternion.slerp(torsoQuat, lerpFactor);
      }
    }
  });

  return <primitive object={scene} position={[0, 0, 0]} />;
}

// Pre-cargamos el modelo para que no de tirones visuales
useGLTF.preload("/Robot-final.glb");