import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

export default function RobotViewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let mixer;
    let cabezaHueso = null;
    let cuelleHueso = null;
    let torsoHueso = null;
    let animationFrameId;
    const clock = new THREE.Clock();

    const mouse = new THREE.Vector2();
    const targetQuat = new THREE.Quaternion();
    const trackingSensitivity = 1.0;
    const rotationLimitX = 0.9;
    const rotationLimitY = 1.5;
    const lerpFactor = 0.05;
    const targetEuler = new THREE.Euler(0, 0, 0, "YXZ");

    // 1. ESCENA Y RENDERIZADOR
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#4a3f2b");

    // Forzamos que lea el tamaño exacto actual del contenedor div
    let width = containerRef.current.clientWidth || 300;
    let height = containerRef.current.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.2, 1000);
    camera.position.set(0.15, 1.1, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;

    containerRef.current.appendChild(renderer.domElement);

    // Ajustamos estilos CSS nativos por JS al canvas para obligarlo a no desbordarse abajo
    renderer.domElement.style.display = "block";
    renderer.domElement.style.marginTop = "auto";

    // 2. MAPA DE ENTORNO HDR
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    new RGBELoader().setDataType(THREE.UnsignedByteType).load(
      "/ferndale_studio_04_1k.hdr",
      (hdrTexture) => {
        const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
        scene.environment = envMap;
        hdrTexture.dispose();
        pmremGenerator.dispose();
        cargarRobot();
      },
      undefined,
      (error) => {
        console.error("Error cargando HDR:", error);
        cargarRobot();
      },
    );

    // 3. CONTROLES
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 1, 0);
    controls.minDistance = 2.8;
    controls.maxDistance = 8;
    controls.maxPolarAngle = Math.PI / 2.2;
    controls.update();

    // 4. ILUMINACIÓN CORREGIDA
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x22293a, 0.75);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    keyLight.position.set(2, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8bc2ff, 0.8);
    fillLight.position.set(-4, 1.5, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.5);
    rimLight.position.set(-3, 6, -5);
    scene.add(rimLight);

    const accentLight = new THREE.PointLight(0xa3d0ff, 0.16, 10, 2);
    accentLight.position.set(0, 2.8, 0);
    scene.add(accentLight);

    const frontFlash = new THREE.DirectionalLight(0xffffff, 0.5);
    frontFlash.position.set(0, 1, 4);
    scene.add(frontFlash);

    // Una cuadrícula estilizada en el suelo
    const gridHelper = new THREE.GridHelper(10, 10, "#5cb8e4", "#2f4d71");
    gridHelper.position.y = -1.5;
    scene.add(gridHelper);

    const cubesGroup = new THREE.Group();
    const cubeGeo = new THREE.BoxGeometry(0.15, 0.15, 0.15);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: "#8bc2ff",
      roughness: 0.2,
      metalness: 0.8,
    });

    // Definimos el radio de la zona segura alrededor del robot (en metros/unidades 3D)
    // 0.8 asegura que ningún cubo toque sus hombros ni su torso.
    const safeRadius = 0.8;

    for (let i = 0; i < 20; i++) {
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);

      let posX, posY, posZ;
      let isInsideRobot = true;

      // Un bucle "while" que se repite SOLO si el cubo cae encima del robot
      while (isInsideRobot) {
        posX = THREE.MathUtils.randFloatSpread(5);
        posY = THREE.MathUtils.randFloatSpread(4) + 1; // Centrado en la altura del robot
        posZ = THREE.MathUtils.randFloatSpread(4) - 2; // Empujados un poco hacia atrás

        // Calculamos la distancia horizontal (en el plano X-Z) desde el centro del robot (0, 0)
        const distanceXZ = Math.sqrt(posX * posX + posZ * posZ);

        // Si la distancia es mayor que nuestro radio seguro, o si el cubo está muy arriba/abajo del robot, la posición es válida
        if (distanceXZ > safeRadius || posY > 2.5 || posY < -0.2) {
          isInsideRobot = false; // Salimos del bucle
        }
      }

      mesh.position.set(posX, posY, posZ);

      mesh.rotation.set(
        Math.random() * 2,
        Math.random() * 2,
        Math.random() * 2,
      );

      mesh.userData = {
        rotSpeedX: THREE.MathUtils.randFloat(0.005, 0.02),
        rotSpeedY: THREE.MathUtils.randFloat(0.005, 0.02),
      };

      cubesGroup.add(mesh);
    }
    scene.add(cubesGroup);

    // 5. CARGAR ROBOT
    function cargarRobot() {
      const loader = new GLTFLoader();
      loader.load("/Robot-final.glb", (gltf) => {
        const robot = gltf.scene;
        robot.position.set(0, 0, 0);
        scene.add(robot);

        robot.traverse((child) => {
          if (child.isBone) {
            if (child.name === "Bone010") {
              cabezaHueso = child;
              cabezaHueso.rotation.order = "YXZ";
            }
            if (child.name === "Bone001") {
              cuelleHueso = child;
              cuelleHueso.rotation.order = "YXZ";
            }
            if (child.name === "Bone") {
              torsoHueso = child;
              torsoHueso.rotation.order = "YXZ";
            }
          }
        });

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(robot);
          gltf.animations.forEach((clip) => {
            const hasRobotAnimations = clip.tracks.some(
              (track) =>
                track.name.includes("Bone") ||
                track.name.includes("Armature") ||
                track.name.includes("morphTarget"),
            );

            if (hasRobotAnimations) {
              const action = mixer.clipAction(clip);
              action.play();
            }
          });
        }

        // TRUCO 1: Forzamos el resize una vez el robot pesando en memoria se monta en la escena
        handleResize();
      });
    }

    // 6. TRACKING MOUSE CORREGIDO
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerCenterX = rect.left + rect.width / 2;
      const containerCenterY = rect.top + rect.height / 2;

      mouse.x = (event.clientX - containerCenterX) / (window.innerWidth / 2);
      mouse.y = -(event.clientY - containerCenterY) / (window.innerHeight / 2);
    };

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // TRUCO 2: Un pequeño delay estratégico (100ms) para recalcular el tamaño del canvas
    // justo después de que terminen de ejecutarse las animaciones de Framer Motion de la sección.
    const forceResizeTimeout = setTimeout(() => {
      handleResize();
    }, 150);

    // 7. LOOP
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      if (cubesGroup) {
        cubesGroup.children.forEach((cube) => {
          cube.rotation.x += cube.userData.rotSpeedX;
          cube.rotation.y += cube.userData.rotSpeedY;
        });
      }

      if (cabezaHueso) {
        const targetY = mouse.x * rotationLimitY * trackingSensitivity;
        const targetX = -mouse.y * rotationLimitX * trackingSensitivity;

        targetEuler.y = Math.max(
          -rotationLimitY,
          Math.min(rotationLimitY, targetY),
        );
        targetEuler.x = Math.max(
          -rotationLimitX,
          Math.min(rotationLimitX, targetX),
        );
        targetEuler.z = 0;

        targetQuat.setFromEuler(targetEuler);
        cabezaHueso.quaternion.slerp(targetQuat, lerpFactor);

        if (cuelleHueso) {
          const cuelleEuler = new THREE.Euler(0, 0, 0, "YXZ");
          const neckFactor = 0.4;
          cuelleEuler.y = targetEuler.y * neckFactor;
          cuelleEuler.x = targetEuler.x * neckFactor;
          cuelleEuler.z = 0;

          const cuelleQuat = new THREE.Quaternion();
          cuelleQuat.setFromEuler(cuelleEuler);
          cuelleHueso.quaternion.slerp(cuelleQuat, lerpFactor);
        }

        if (torsoHueso) {
          const torsoEuler = new THREE.Euler(0, 0, 0, "YXZ");
          const torsoFactorX = 0.25;
          const torsoFactorY = 0.1;
          torsoEuler.x = targetEuler.x * torsoFactorX;
          torsoEuler.y = targetEuler.y * torsoFactorY;
          torsoEuler.z = 0;

          const torsoQuat = new THREE.Quaternion();
          torsoQuat.setFromEuler(torsoEuler);
          torsoHueso.quaternion.slerp(torsoQuat, lerpFactor);
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(forceResizeTimeout);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-3xl bg-[#ffda9e] overflow-hidden flex flex-col justify-end items-center"
    />
  );
}
