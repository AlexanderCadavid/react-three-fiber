import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Bricks = () => {
  const basecolor = useLoader(TextureLoader, "./bricks/basecolor.jpg");
  const normalMap = useLoader(TextureLoader, "./bricks/normal.jpg");
  const aoMap = useLoader(TextureLoader, "./bricks/ao.jpg");
  const roughnessMap = useLoader(TextureLoader, "./bricks/roughness.jpg");
  const disMap = useLoader(TextureLoader, "./bricks/displacement.png");
  // stone.minFilter = THREE.NearestFilter
  // stone.migFilter = THREE.NearestFilter

  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry args={[1, 1, 1, 200, 200, 200]} />
      <meshStandardMaterial
        map={basecolor}
        normalMap={normalMap}
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        displacementMap={disMap}
        displacementScale={0.000001}
      />
    </mesh>
  );
};

export default Bricks;
