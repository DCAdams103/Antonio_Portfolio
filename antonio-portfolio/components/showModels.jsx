import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import CircleJS from './models/Circle'

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

function GeetarGLB() {
    const { scene } = useGLTF('geetar.glb');

    return <primitive object={scene} />
}

function CircleGLB() {
    const { scene, animations } = useGLTF('Circle.glb');
    const group = useRef();

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        group.current.rotation.z = -a;
      });

    useEffect(() => {
        
        
    })

    return <primitive ref={group} object={scene} />
}

function RimLight({brightness, color}){
    return (
        <rectAreaLight
            width={2}
            height={2}
            intensity={brightness}
            color={color}
            position={[1, 4, -2]}
            rotation={[0, 180, 0]}
            lookAt={[0,0,0]}
            castShadow
        />
    )
}

export function ToasterModel(props) {
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

export function GeetarModel(props) {
    return ( 
        <Canvas style={{height:'100%', width: '100%', borderRadius: '150px'}} camera={{position: [0, 0, 300], fov: 1, near: 10, far: 1000}}>
                
               
                <directionalLight intensity={.5} position={[0,0,-50]}/>
                <ambientLight intensity={0.05} />
                <spotLight intensity={1} position={[10, 15, 10]} angle={0.9} />
                <OrbitControls enableZoom={true} />
                <Suspense fallback={null}>
                    <GeetarGLB />
                </Suspense>
                
            </Canvas>
    )
}

export function CircleModel(props) {
    return ( 
        <Canvas style={{height:'100%', width: '100%'}} camera={{position: [0, 0, 2500], fov: 1, near: 100, far: 5000}}>
                
                <ambientLight intensity={.15} />
                <directionalLight intensity={.25} />
                <OrbitControls enableZoom={false} />
                <Suspense fallback={null}>
                    <CircleJS />
                </Suspense>
                
            </Canvas>
    )
}