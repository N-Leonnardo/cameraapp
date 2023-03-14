import React, { useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Macbook";
import { useState } from "react";
import { easing } from "maath";

export default function My3D() {
  const [lights, setLights] = useState(true);

  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [0.2 + state.mouse.x / 2, 0.05 + state.mouse.y / 4, 5],
        0.5,
        delta
      );
    });
  }

  return (
    <div>
      <Canvas
        style={{
          height: "100vh",
        }}
      >
        {lights && (
          <>
            <OrbitControls enableZoom={false} />
            <Environment preset="forest" blur={100} />
            <shadowMaterial transparent opacity={0.2} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-4, 5, 3]} intensity={1} />
          </>
        )}
        <Model />
        <Rig />
      </Canvas>
    </div>
  );
}
