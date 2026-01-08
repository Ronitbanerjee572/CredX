import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { RGBELoader } from 'three-stdlib';

// 3D Model Component
function Model({ scale = 10 }) {
    const group = useRef();
    const { scene, error } = useGLTF('/models/card.glb', undefined, undefined, (loader) => {
        loader.manager.onError = (url) => {
            console.error('Error loading model:', url);
        };
    });

    if (error) {
        console.error('Error loading 3D model:', error);
        return null;
    }

    if (!scene) return null;

    // Scale and position the model
    useEffect(() => {
        if (scene) {
            scene.scale.set(scale, scale, scale);
            scene.rotation.set(0, 0, 0);
            scene.position.set(0, 0, 0);

            // Traverse the model and set shadow properties
            scene.traverse((node) => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = false;
                    // Enable env map for reflections
                    if (node.material) {
                        node.material.metalness = 1.0;
                        node.material.roughness = 0.3;
                        node.material.envMapIntensity = 1.0;

                        node.material.needsUpdate = true;
                    }
                }
            });
        }
    }, [scene, scale]);

    // useFrame((state) => {
    //     if (group.current) {
    //         group.current.rotation.y = Math.PI * 0.5 + Math.sin(state.clock.getElapsedTime() * rotationSpeed) * Math.PI;
    //     }
    // });

    return <primitive ref={group} object={scene} dispose={null} />;
}

// 3D Card Component (runs inside Canvas)
function CreditCardScene() {
    const frontLight = useRef();
    const scene = useThree(state => state.scene);

    // Add HDRI lighting
    useEffect(() => {
        const rgbeLoader = new RGBELoader();

        rgbeLoader.load(
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/sunflowers_puresky_1k.hdr',
            (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;

                // Apply HDRI to scene environment and background
                scene.environment = texture;
                //scene.background = texture;
                scene.environmentIntensity = 1.0;
                //scene.backgroundIntensity = 0.0;

                // Force scene update
                scene.traverse((obj) => {
                    if (obj.isMesh && obj.material) {
                        obj.material.needsUpdate = true;
                    }
                });
            },
            undefined,
            (error) => {
                console.error('Error loading HDRI:', error);
            }
        );

        return () => {
            if (scene.environment) scene.environment.dispose();
            if (scene.background) scene.background.dispose();
        };
    }, [scene]);

    return (
        <>
            {/* Main directional light for better shadows */}
            <directionalLight
                ref={frontLight}
                position={[10, 10, 5]}
                intensity={0.5}
                color="#ffffff"
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            <Suspense fallback={null}>
                <Model scale={10} />
                {/* Ground plane for better reflections */}
                {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="#f0f0f0" />
                </mesh> */}
            </Suspense>

            <OrbitControls
                enableZoom={true}
                enablePan={true}
                autoRotate={false}
                autoRotateSpeed={1}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
            />
        </>
    );
}

// 3D Credit Card Scene Component
const CreditCard3D = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Canvas
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
                camera={{ position: [0, 0, 2], fov: 50, near: 0.1, far: 1000 }}
                shadows
                gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
            >
                <CreditCardScene />
            </Canvas>
        </div>
    );
};

export default CreditCard3D;
