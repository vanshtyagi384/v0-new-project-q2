"use client"
import * as THREE from "three"
import { Text } from "troika-three-text"
import ThreeScene from "./three-scene"

// Sample data - in a real app, this would come from your API
const hourlyData = Array.from({ length: 24 }, (_, hour) => {
  // Generate random activity levels with a pattern (more activity during work hours)
  let activityLevel = 0
  if (hour >= 9 && hour <= 17) {
    activityLevel = 0.5 + Math.random() * 0.5 // Higher activity during work hours
  } else if ((hour >= 7 && hour < 9) || (hour > 17 && hour <= 19)) {
    activityLevel = 0.3 + Math.random() * 0.3 // Medium activity during transition hours
  } else {
    activityLevel = Math.random() * 0.2 // Low activity during off hours
  }

  return {
    hour,
    activityLevel,
    // Different activity types have different distributions throughout the day
    activities: {
      meetings: hour >= 9 && hour <= 16 ? Math.random() * 0.8 : 0,
      deepWork: (hour >= 7 && hour <= 11) || (hour >= 14 && hour <= 17) ? Math.random() * 0.9 : Math.random() * 0.2,
      breaks: hour % 3 === 0 ? 0.7 + Math.random() * 0.3 : Math.random() * 0.2,
    },
  }
})

export default function ThreeHourlyActivity() {
  const setupScene = (scene: THREE.Scene) => {
    // Create 3D hourly activity visualization
    const width = 0.3
    const spacing = 0.05
    const maxHeight = 2

    // Add hour labels
    for (let hour = 0; hour < 24; hour += 2) {
      const text = new Text()
      text.text = `${hour}:00`
      text.fontSize = 0.12
      text.position.set(hour * (width + spacing) - 11 * (width + spacing), -0.2, 0.5)
      text.color = 0x333333
      text.anchorX = "center"
      text.anchorY = "top"
      text.sync()

      scene.add(text)
    }

    // Activity type colors
    const colors = {
      meetings: new THREE.Color("#ff6384"),
      deepWork: new THREE.Color("#36a2eb"),
      breaks: new THREE.Color("#4bc0c0"),
    }

    // Create stacked bars for each hour
    hourlyData.forEach((data, index) => {
      let currentHeight = 0

      // Create a bar segment for each activity type
      Object.entries(data.activities).forEach(([activity, level]) => {
        if (level > 0) {
          const height = level * maxHeight
          const geometry = new THREE.BoxGeometry(width, height, width)
          const material = new THREE.MeshPhongMaterial({
            color: colors[activity as keyof typeof colors],
            transparent: true,
            opacity: 0.8,
          })

          const bar = new THREE.Mesh(geometry, material)
          bar.position.x = index * (width + spacing) - 11.5 * (width + spacing)
          bar.position.y = currentHeight + height / 2
          bar.userData = {
            hour: data.hour,
            activity,
            level,
          }

          scene.add(bar)

          currentHeight += height
        }
      })
    })

    // Add legend
    const legendItems = [
      { label: "Meetings", color: "#ff6384" },
      { label: "Deep Work", color: "#36a2eb" },
      { label: "Breaks", color: "#4bc0c0" },
    ]

    legendItems.forEach((item, index) => {
      // Legend cube
      const cubeGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15)
      const cubeMaterial = new THREE.MeshPhongMaterial({ color: new THREE.Color(item.color) })
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.position.set(-3, 2.2 - index * 0.3, 1)
      scene.add(cube)

      // Legend text
      const text = new Text()
      text.text = item.label
      text.fontSize = 0.12
      text.position.set(-2.8, 2.2 - index * 0.3, 1)
      text.color = 0x333333
      text.anchorX = "left"
      text.anchorY = "middle"
      text.sync()
      scene.add(text)
    })
  }

  return <ThreeScene className="h-[400px] w-full rounded-md">{setupScene}</ThreeScene>
}
