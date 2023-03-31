import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cat(props) {
  const { nodes, materials } = useGLTF('/cat/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 1, 0, 0]} scale={0.01}>
        <group position={[-15, -80, 15]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.Texture_0} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.Texture_0} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.Texture_0} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Untextured} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cat/scene.gltf')