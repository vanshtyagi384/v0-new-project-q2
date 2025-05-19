"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useTheme } from "next-themes"

interface ThreeSceneProps {
  children?: (scene: THREE.Scene, renderer: THREE.WebGLRenderer) => void
  className?: string
}

export default function ThreeScene({ children, className = "" }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sceneReady, setSceneReady] = useState(false)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const { resolvedTheme } = useTheme()
  const isDarkTheme = resolvedTheme === "dark"

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Set background color based on theme
    scene.background = new THREE.Color(isDarkTheme ? "#1a1a1a" : "#f5f5f5")

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    setSceneReady(true)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [isDarkTheme])

  // Update scene when children change
  useEffect(() => {
    if (sceneReady && sceneRef.current && rendererRef.current && children) {
      // Clear existing objects (except lights)
      sceneRef.current.children.forEach((child) => {
        if (!(child instanceof THREE.Light)) {
          sceneRef.current?.remove(child)
        }
      })

      // Add new objects
      children(sceneRef.current, rendererRef.current)
    }
  }, [children, sceneReady])

  return <div ref={containerRef} className={`w-full h-full ${className}`} />
}
