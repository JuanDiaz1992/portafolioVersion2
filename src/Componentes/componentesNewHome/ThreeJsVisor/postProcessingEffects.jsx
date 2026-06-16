import { useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, RenderPass, BloomEffect, EffectPass } from 'postprocessing';
import * as THREE from 'three';

export default function PostProcessingEffects() {
  const { gl, scene, camera, size } = useThree();

  // 1. Creamos el compositor de efectos una sola vez
  const composer = useMemo(() => {
    const comp = new EffectComposer(gl, {
      frameBufferType: THREE.HalfFloatType
    });

    // Pase 1: Dibujar la escena base
    const renderPass = new RenderPass(scene, camera);
    comp.addPass(renderPass);

    // Pase 2: Configurar el Bloom (Filtro de resplandor)
    const bloom = new BloomEffect({
      intensity: 0.5,           // Fuerza del brillo neón
      luminanceThreshold: 4.15, // Ajustado para que capte la emisión sin quemar todo
      luminanceSmoothing: 5.9,
      mipmapBlur: true          // Difuminado suave premium
    });

    comp.addPass(new EffectPass(camera, bloom));
    return comp;
  }, [gl, scene, camera]);

  // 2. Mantenemos el tamaño sincronizado con la ventana
  useEffect(() => {
    composer.setSize(size.width, size.height);
  }, [composer, size]);

  // 3. 🚀 EL AJUSTE MAESTRO: Forzamos a desactivar el renderizado automático de R3F
  // y renderizamos el compositor manualmente.
  useFrame((state, delta) => {
    // Esto le avisa a Fiber que nosotros tomamos el control del render de la pantalla
    state.gl.autoClear = true; 
    composer.render(delta);
  }, 1); // La prioridad 1 es vital para que se ejecute después del cálculo de los huesos

  return null;
}