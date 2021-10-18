import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, useGLTF, useFBX, Environment } from '@react-three/drei'
import Plants from './Plants'
import Fish from './Fishbot'
import Toaster from './Toaster'
import { OBJLoader } from 'three-stdlib'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

// Use npx gltfjsx model.gltf command in admin cmd

// Mainly used https://uxdesign.cc/make-your-react-websites-fun-by-adding-interactive-3d-objects-1e1d672887e7 for a guide.

function FishGLB() {
    const { scene } = useGLTF('fish.glb');
    
    return <primitive object={scene} />
}

function ToasterGLB() {
    const { scene } = useGLTF('toaster.glb');
    
    return <primitive object={scene} />
}

export function PlantsModel(props) {
    return (
        
            <Canvas style={{height:'100%', width: '100%'}} camera={{position: [0, 0, 700], fov: .5, near: 50, far: 1000}}>
                <OrbitControls enableZoom={false}/>
                
                <ambientLight intensity={.4}/>

                <pointLight  color="white" intensity={.4} position={[10, 200, 100]} />
                <pointLight  color="white" intensity={.4} position={[100, 10, 10]} />

                <Suspense fallback={null}>
                    <ToasterGLB />
                </Suspense>
            </Canvas>
    )
}

export function FishModel(props) {
    return (
        
            <Canvas style={{height:'100%', width: '100%'}} camera={{position: [0, 0, 400], fov: 1, near: 100, far: 1000}}>
                
                <ambientLight />
                
                <OrbitControls enableZoom={false} />
                <Suspense fallback={null}>
                    <FishGLB />
                </Suspense>
                
            </Canvas>
    )
}