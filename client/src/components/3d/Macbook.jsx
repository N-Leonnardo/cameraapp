/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 macbook.gltf
Author: jc1245 (https://sketchfab.com/jasperchui2007)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-macbook-pro-16-inch-2021-6a42b31bac064b00a91fbfebec07c852
Title: Apple MacBook Pro 16 inch 2021
*/

import React, { useEffect, useRef, useState } from "react";
import { Float, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export function Model(props) {
  const { nodes, materials } = useGLTF("/macbook.gltf");
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [pos, setPos] = useState([-2.5, -1.4, -2]);
  const [rot, setRot] = useState([0, 0.8, 0]);
  const [openScreen, setOpenScreen] = useState(false);
  const myGroup = useRef();
  let screenStart = 0;

  useEffect(() => {
    if (windowSize.current[0] < 900) {
      setPos([-1, 0, -6]);
      setRot([0, 0, 0]);
    }
  }, []);

  useFrame(() => {
    if (screenStart > -1.75) {
      screenStart -= 0.01;
      myGroup.current.rotation.x = screenStart;
    }
  });

  return (
    <PerspectiveCamera position={[0, 0, 0]}>
      <Float speed={0.5}>
        <group
          {...props}
          dispose={null}
          scale={2}
          position={pos}
          rotation={rot}
        >
          <group position={[0, 0.1, -1.01]} ref={myGroup}>
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              geometry={nodes.Object_20.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials["Material.008"]}
            />
            <mesh
              geometry={nodes.Object_23.geometry}
              material={materials["Material.017"]}
              position={[-0.03, 0.62, 1.02]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[32.94, 32.94, 33.49]}
            />
          </group>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials["Material.011"]}
            position={[-1.45, 0.09, -0.57]}
          />
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials["Material.010"]}
            position={[-1.49, 0.09, -0.76]}
            rotation={[Math.PI, 0, Math.PI / 2]}
            scale={[-0.01, 0.01, 0.01]}
          />
        </group>
      </Float>
    </PerspectiveCamera>
  );
}

useGLTF.preload("/macbook.gltf");
