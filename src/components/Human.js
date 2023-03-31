import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'

export function Human(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/human/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
          <group name="cadf4778fece4bd39fdaeb234539e9f9fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Light" position={[407.62, 590.39, -100.55]} rotation={[1.89, 0.88, -2.05]} scale={50}>
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group name="Camera" position={[735.89, 495.83, 692.58]} rotation={[Math.PI, 0.76, 2.68]} scale={50}>
                  <group name="Object_8" />
                </group>
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={50}>
                  <group name="Object_10">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_38" rotation={[-Math.PI / 2, 0, 0]} scale={50} />
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

useGLTF.preload('/human/scene.gltf')