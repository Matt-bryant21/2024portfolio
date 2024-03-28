import * as THREE from "three";
import React, { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Animation = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x171717);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // Handle window resize
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", handleResize);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // helper to show points of reference
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(lightHelper, gridHelper);
    
    const controls = new OrbitControls(camera, renderer.domElement);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(200).fill().forEach(addStar);
    
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xb66ff });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    let animationFrameId;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      controls.update();

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <canvas id="bg"></canvas>
      Animation
    </div>
  );
};

export default Animation;
