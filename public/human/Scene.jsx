/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: in3D (https://sketchfab.com/in3D_io)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/human-3d-model-scanned-with-iphone-x-73e467dfc8a04914bb314a9410077858
Title: Human 3D model scanned with iPhone X
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
          <group name="cadf4778fece4bd39fdaeb234539e9f9fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Light" position={[407.62, 590.39, -100.55]} rotation={[1.89, 0.88, -2.05]} scale={100}>
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group name="Camera" position={[735.89, 495.83, 692.58]} rotation={[Math.PI, 0.76, 2.68]} scale={100}>
                  <group name="Object_8" />
                </group>
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_10">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_38" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.material} skeleton={nodes.Object_39.skeleton} />
                  </group>
                </group>
                <group name="model" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
