"use client"

import { useState } from "react"
import * as THREE from "three"
import { Text } from "troika-three-text"
import ThreeScene from "./three-scene"

// Sample data - in a real app, this would come from your API
const timeData = [
  { category: "Meetings", hours: 34.8, color: "#ff6384" },
  { category: "Deep Work", hours: 42.3, color: "#36a2eb" },
  { category: "Shallow Work", hours: 22.4, color: "#ffce56" },
  { category: "Breaks", hours: 14.9, color: "#4bc0c0" },
  { category: "Admin", hours: 6.2, color: "#9966ff" },
  { category: "Learning", hours: 3.9, color: "#ff9f40" },
]

export default function ThreeTimeDistribution() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  const setupScene = (scene: THREE.Scene, renderer: THREE.WebGLRenderer) => {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const bars: THREE.Mesh[] = []

    // Total hours for percentage calculation
    const totalHours = timeData.reduce((sum, item) => sum + item.hours, 0)

    // Create 3D bars
    timeData.forEach((item, index) => {
      const height = item.hours / 5 // Scale down for better visualization
      const geometry = new THREE.BoxGeometry(0.8, height, 0.8)
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(item.color),
        transparent: true,
        opacity: 0.8,
      })

      const bar = new THREE.Mesh(geometry, material)
      bar.position.x = index * 1.2 - ((timeData.length - 1) * 1.2) / 2
      bar.position.y = height / 2
      bar.userData = {
        index,
        category: item.category,
        hours: item.hours,
        percentage: ((item.hours / totalHours) * 100).toFixed(1),
      }

      scene.add(bar)
      bars.push(bar)

      // Add category label
      const text = new Text()
      text.text = item.category
      text.fontSize = 0.15
      text.position.set(bar.position.x, -0.3, 0.5)
      text.color = 0x333333
      text.anchorX = "center"
      text.anchorY = "top"
      text.rotation.x = -Math.PI / 6
      text.sync()

      scene.add(text)
    })

    // Add hover effect
    const onMouseMove = (event: MouseEvent) => {
      // Calculate mouse position in normalized device coordinates
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      // Update the picking ray with the camera and mouse position
      raycaster.setFromCamera(
        mouse,
        scene.children.find((child) => child instanceof THREE.PerspectiveCamera) as THREE.PerspectiveCamera,
      )

      // Calculate objects intersecting the picking ray
      const intersects = raycaster.intersectObjects(bars)

      if (intersects.length > 0) {
        const intersectedBar = intersects[0].object as THREE.Mesh
        const index = intersectedBar.userData.index

        if (hoveredBar !== index) {
          // Reset all bars
          bars.forEach((bar) => {
            ;(bar.material as THREE.MeshPhongMaterial).opacity = 0.8
            bar.scale.y = 1
          })(
            // Highlight hovered bar
            intersectedBar.material as THREE.MeshPhongMaterial,
          ).opacity = 1
          intersectedBar.scale.y = 1.05

          setHoveredBar(index)

          // Show tooltip (in a real app, you'd implement a proper tooltip)
          const data = intersectedBar.userData
          console.log(`${data.category}: ${data.hours} hours (${data.percentage}%)`)
        }
      } else if (hoveredBar !== null) {
        // Reset all bars when not hovering any
        bars.forEach((bar) => {
          ;(bar.material as THREE.MeshPhongMaterial).opacity = 0.8
          bar.scale.y = 1
        })
        setHoveredBar(null)
      }
    }

    renderer.domElement.addEventListener("mousemove", onMouseMove)

    return () => {
      renderer.domElement.removeEventListener("mousemove", onMouseMove)
    }
  }

  return <ThreeScene className="h-[400px] w-full rounded-md">{setupScene}</ThreeScene>
}
