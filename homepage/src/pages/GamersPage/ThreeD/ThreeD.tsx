import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ThreeD() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    if (!window.WebGL2RenderingContext) {
        return <h1>Yikes you don't support webgl</h1>
    }

    useEffect(() => {
        // Create the Three.js scene
        const scene = new THREE.Scene()
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0xffffff)

        const loader = new GLTFLoader()
        loader.load(
            '/Totoro.glb',
            (gltf) => {
                // Access the root `Object3D` of the loaded model
                const model = gltf.scene
                // Set the initial vertical position of the model
                let positionY = 50

                // Define the speed and range of the hovering motion
                const speed = 0.5
                const range = 0.5

                // Set the scale of the model
                model.scale.set(0.1, 0.1, 0.1)
                scene.add(model)
                // Define an animation loop function
                function animate() {
                    requestAnimationFrame(animate)

                    // Update the vertical position of the model
                    positionY = range * Math.sin(speed * 10)
                    model.position.setY(positionY)

                    // Render the scene
                    renderer.render(scene, camera)
                }

                // Call the animation loop function
                animate()
            },
            (xhr) => {
                console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`)
            },
            (error) => {
                console.error(error)
            },
        )

        // Create a new camera and position it
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        )
        camera.position.z = 5

        // Create a new ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 2)
        scene.add(ambientLight)

        // Create a new directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
        directionalLight.position.set(0, 1, 0)
        scene.add(directionalLight)

        // Create an animation loop function
        function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }

        // Call the animation loop function
        animate()

        // Resize the canvas when the window size changes
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            // Clean up the Three.js scene
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
        }
    }, [])

    return <canvas ref={canvasRef} />
}
