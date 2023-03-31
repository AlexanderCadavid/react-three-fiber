import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Desk(props) {
  const { nodes, materials } = useGLTF('/desk/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.41}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['04_-_CoronaMtl']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.019']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['book.007']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['book.008']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['book.009']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['book.012']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['cable.2']} />
        <lineSegments geometry={nodes.Object_27.geometry} material={materials.floor_wood} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.floor_wood} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.mausepad} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.monitor_bar} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.mouse} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.pc_glass} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.trash} />
        <mesh geometry={nodes.Object_48.geometry} material={materials['trash.001']} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.walls} />
        <mesh geometry={nodes.Object_50.geometry} material={materials['walls.002']} />
        <mesh geometry={nodes.Object_53.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Object_54.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Object_55.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.Material_1233} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.Material_1233} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.Material_1233} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.Material_1233} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.book} />
        <mesh geometry={nodes.Object_62.geometry} material={materials['book.001']} />
        <mesh geometry={nodes.Object_63.geometry} material={materials['book.002']} />
        <mesh geometry={nodes.Object_64.geometry} material={materials['book.003']} />
        <mesh geometry={nodes.Object_65.geometry} material={materials['book.004']} />
        <mesh geometry={nodes.Object_66.geometry} material={materials['book.005']} />
        <mesh geometry={nodes.Object_67.geometry} material={materials['book.006']} />
        <mesh geometry={nodes.Object_68.geometry} material={materials['book.010']} />
        <mesh geometry={nodes.Object_69.geometry} material={materials['book.011']} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.book_inside} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_72.geometry} material={materials.box_2} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.box_3} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.bulp} />
        <mesh geometry={nodes.Object_75.geometry} material={materials.cable} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.cable} />
        <mesh geometry={nodes.Object_77.geometry} material={materials['case']} />
        <mesh geometry={nodes.Object_78.geometry} material={materials['case']} />
        <mesh geometry={nodes.Object_79.geometry} material={materials['case_.001']} />
        <mesh geometry={nodes.Object_82.geometry} material={materials.coffee_table} />
        <mesh geometry={nodes.Object_83.geometry} material={materials.desk_wood} />
        <mesh geometry={nodes.Object_84.geometry} material={materials.door} />
        <mesh geometry={nodes.Object_85.geometry} material={materials['door.001']} />
        <mesh geometry={nodes.Object_86.geometry} material={materials.fan_led} />
        <mesh geometry={nodes.Object_89.geometry} material={materials.headphone} />
        <mesh geometry={nodes.Object_90.geometry} material={materials.headphone} />
        <mesh geometry={nodes.Object_91.geometry} material={materials.headphone} />
        <mesh geometry={nodes.Object_92.geometry} material={materials.headphone_snger} />
        <mesh geometry={nodes.Object_93.geometry} material={materials.lamba} />
        <mesh geometry={nodes.Object_94.geometry} material={materials.lamba} />
        <mesh geometry={nodes.Object_95.geometry} material={materials['lamba.001']} />
        <mesh geometry={nodes.Object_96.geometry} material={materials['lamba.001']} />
        <mesh geometry={nodes.Object_97.geometry} material={materials['lamba.001']} />
        <mesh geometry={nodes.Object_98.geometry} material={materials['lamba.2']} />
        <mesh geometry={nodes.Object_99.geometry} material={materials.lambaa} />
        <mesh geometry={nodes.Object_100.geometry} material={materials.material_63} />
        <mesh geometry={nodes.Object_101.geometry} material={materials.monitor_1} />
        <mesh geometry={nodes.Object_102.geometry} material={materials.monitor_1} />
        <mesh geometry={nodes.Object_110.geometry} material={materials.sofa} />
        <mesh geometry={nodes.Object_111.geometry} material={materials.speaker_2} />
        <mesh geometry={nodes.Object_113.geometry} material={materials['walls.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
