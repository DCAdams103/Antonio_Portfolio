/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Circle.glb')
  const { actions } = useAnimations(animations, group)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    group.current.rotation.z = -a;
  });

  useMemo(() => {
    
    materials.Material.metalness = .25;
    
  }, [materials])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3, 40.91, 3]}
        
      />
    </group>
  )
}

useGLTF.preload('/Circle.glb')
