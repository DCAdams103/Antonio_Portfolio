import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import CircleJS from './models/Circle'

// Use npx gltfjsx model.gltf command in admin cmd to convert glb to a js file, like i did with Circle.js
// Mainly used https://uxdesign.cc/make-your-react-websites-fun-by-adding-interactive-3d-objects-1e1d672887e7 for a guide.

// Loads in the fish.glb file
function FishGLB() {
    const { scene } = useGLTF('fish.glb');
    return <primitive object={scene} />
}

// Loads in the toaster.glb file
function ToasterGLB() {
    const { scene } = useGLTF('toaster.glb');
    return <primitive object={scene} />
}

// Loads in the geetar.glb file
function GeetarGLB() {
    const { scene } = useGLTF('geetar.glb');

    return <primitive object={scene} />
}

export function ToasterModel(props) {
    return (
        
            <Canvas style={{height:'70vh', width: '100%'}} camera={{position: [0, 0, 700], fov: .5, near: 50, far: 1000}}>
                
                {/* Allows the user to move the camera themselves. */}
                <OrbitControls enableZoom={false}/>
                
                {/* Lighting */}
                <ambientLight intensity={.4}/>
                <pointLight  color="white" intensity={.4} position={[10, 200, 100]} />
                <pointLight  color="white" intensity={.4} position={[100, 10, 10]} />

                <Suspense fallback={null}>
                    {/* Renders the ToasterGLB component */}
                    <ToasterGLB />
                </Suspense>
            
            </Canvas>
    )
}

export function FishModel(props) {
    return (
        
            <Canvas style={{height:'100%', width: '100%'}} camera={{position: [0, 0, 400], fov: 1, near: 100, far: 1000}}>
                
                {/* Lighting */}
                <ambientLight />

                {/* Allows the user to move the camera themselves. */}
                <OrbitControls enableZoom={false} />

                <Suspense fallback={null}>
                    {/* Renders the FishGLB component */}
                    <FishGLB />
                </Suspense>
                
            </Canvas>
    )
}

export function GeetarModel(props) {
    return ( 
        <Canvas style={{height:'100%', width: '100%', borderRadius: '150px'}} camera={{position: [0, 0, 300], fov: 1, near: 10, far: 1000}}>
                
                {/* Lighting */}
                <directionalLight intensity={.5} position={[0,0,-50]}/>
                <ambientLight intensity={0.05} />
                <spotLight intensity={1} position={[10, 15, 10]} angle={0.9} />

                {/* Allows the user to move the camera themselves. */}
                <OrbitControls enableZoom={true} />

                <Suspense fallback={null}>
                    {/* Renders the GeetarGLB component */}
                    <GeetarGLB />
                </Suspense>
                
            </Canvas>
    )
}

export function CircleModel(props) {
    return ( 
        <Canvas style={{height:'100%', width: '100%'}} camera={{position: [0, 0, 2500], fov: 1, near: 100, far: 5000}}>
                
                {/* Lighting */}
                <ambientLight intensity={.15} />
                <directionalLight intensity={.25} />

                {/* Allows the user to move the camera themselves. */}
                <OrbitControls enableZoom={false} />

                <Suspense fallback={null}>
                    {/* Renders in the Circle from Circle.js in the components folder */}
                    <CircleJS />
                </Suspense>
                
            </Canvas>
    )
}