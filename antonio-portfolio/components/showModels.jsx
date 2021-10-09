import React, { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Plants.js'

// function Model() {
//     const { scene } = useGLTF('plants.gltf')
//     return <primitive object={scene} />
// }

export function ShowTest(props) {
    return (
        
            <Canvas style={{height:'100vh', width: '100vw'}} camera={{position: [50, 50, 80], fov: 1.5 }}>
                <OrbitControls />
                <ambientLight />
                
                
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
    )
}

export function ShowTest2(props) {
    return (
        
            <Canvas style={{height:'100%', width: '100%', paddingTop:'15%'}} camera={{position: [50, 50, 80], fov: 1.5 }}>
                <OrbitControls />
                <ambientLight />
                
                
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
    )
}