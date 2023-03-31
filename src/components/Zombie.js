import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'

export function Zombie(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/zombie/scene.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_71" rotation={[Math.PI / 2, 0, -3]} scale={0.07}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="body_low_mesh002_66" />
                  <group name="eye_L_low_Sphere002_67" />
                  <group name="eye_R_low_Sphere002_68" />
                  <group name="teeth_botom_low_mesh003_69" />
                  <group name="teeth_upper_low_mesh_70" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.deadman} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.deadman} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.deadman} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.deadman} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.deadman} skeleton={nodes.Object_15.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/zombie/scene.gltf')