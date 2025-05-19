"use client"
import * as THREE from "three"
import { Text } from "troika-three-text"
import ThreeScene from "./three-scene"

// Sample data - in a real app, this would come from your API
const activityData = [
  { category: "Meetings", percentage: 28, color: "#ff6384" },
  { category: "Deep Work", percentage: 34, color: "#36a2eb" },
  { category: "Shallow Work", percentage: 18, color: "#ffce56" },
  { category: "Breaks", percentage: 12, color: "#4bc0c0" },
  { category: "Admin", percentage: 5, color: "#9966ff" },
  { category: "Learning", percentage: 3, color: "#ff9f40" },
]

export default function ThreeActivityBreakdown() {
  const setupScene = (scene: THREE.Scene) => {
    // Create 3D pie chart
    const radius = 1.5
    const depth = 0.3
    let startAngle = 0

    activityData.forEach((item) => {
      const angle = (item.percentage / 100) * Math.PI * 2

      // Create pie segment
      const shape = new THREE.Shape()
      shape.moveTo(0, 0)
      shape.arc(0, 0, radius, startAngle, startAngle + angle, false)
      shape.lineTo(0, 0)

      const extrudeSettings = {
        depth: depth,
        bevelEnabled: false,
      }

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(item.color),
        transparent: true,
        opacity: 0.9,
      })

      const segment = new THREE.Mesh(geometry, material)
      segment.rotation.x = -Math.PI / 2

      scene.add(segment)

      // Add label
      if (item.percentage >= 5) {
        // Only add labels for segments that are large enough
        const midAngle = startAngle + angle / 2
        const labelDistance = radius * 0.7

        const labelX = Math.cos(midAngle) * labelDistance
        const labelZ = Math.sin(midAngle) * labelDistance

        const text = new Text()
        text.text = `${item.category}\n${item.percentage}%`
        text.fontSize = 0.15
        text.position.set(labelX, depth / 2 + 0.01, labelZ)
        text.color = 0xffffff
        text.anchorX = "center"
        text.anchorY = "middle"
        text.rotation.x = -Math.PI / 2
        text.rotation.z = -midAngle
        text.sync()

        scene.add(text)
      }

      startAngle += angle
    })

    // Tilt the pie chart for better 3D effect
    scene.rotation.x = Math.PI / 6
  }

  return <ThreeScene className="h-[400px] w-full rounded-md">{setupScene}</ThreeScene>
}
