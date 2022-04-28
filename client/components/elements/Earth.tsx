import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const Earth = () => {
  const [colorMap, normalMap, cloudMap] = useLoader(TextureLoader, [
    "/images/8k_earth_daymap.jpeg",
    "/images/8k_earth_nightmap.jpeg",
    "/images/8k_earth_clouds.jpeg",
  ]);
  return (
    <>
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
        <meshStandardMaterial map={normalMap} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Earth;
