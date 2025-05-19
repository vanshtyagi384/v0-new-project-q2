"use client"
import * as THREE from "three"
import { Text } from "troika-three-text"
import ThreeScene from "./three-scene"

// Sample data - in a real app, this would come from your API
const weekdayData = [
  {
    day: "Monday",
    activities: { meetings: 3.2, deepWork: 2.8, shallowWork: 1.5, breaks: 0.8, admin: 0.4 },
  },
  {
    day: "Tuesday",
    activities: { meetings: 2.5, deepWork: 3.5, shallowWork: 1.8, breaks: 0.7, admin: 0.3 },
  },
  {
    day: "Wednesday",
    activities: { meetings: 4.0, deepWork: 2.2, shallowWork: 1.6, breaks: 0.9, admin: 0.5 },
  },
  {
    day: "Thursday",
    activities: { meetings: 3.8, deepWork: 2.5, shallowWork: 1.4, breaks: 0.8, admin: 0.3 },
  },
  {
    day: "Friday",
    activities: { meetings: 2.0, deepWork: 3.0, shallowWork: 2.2, breaks: 1.0, admin: 0.6 },
  },
]

export default function ThreeWeekdayDistribution() {
  const setupScene = (scene: THREE.Scene) => {
    // Activity type colors
    const colors = {
      meetings: new THREE.Color("#ff6384"),
      deepWork: new THREE.Color("#36a2eb"),
      shallowWork: new THREE.Color("#ffce56"),
      breaks: new THREE.Color("#4bc0c0"),
      admin: new THREE.Color("#9966ff"),
    }

    const barWidth = 0.6
    const barDepth = 0.6
    const barSpacing = 1.5
    const activitySpacing = 0.8

    // Create 3D bars for each day and activity
    weekdayData.forEach((dayData, dayIndex) => {
      // Add day label
      const dayText = new Text()
      dayText.text = dayData.day.substring(0, 3) // Abbreviate to 3 letters
      dayText.fontSize = 0.15
      dayText.position.set(dayIndex * barSpacing - 2 * barSpacing, -0.2, 0)
      dayText.color = 0x333333
      dayText.anchorX = "center"
      dayText.anchorY = "top"
      dayText.sync()
      scene.add(dayText)

      // Create bars for each activity type
      Object.entries(dayData.activities).forEach(([activity, hours], activityIndex) => {
        const height = hours / 2 // Scale down for better visualization
        const geometry = new THREE.BoxGeometry(barWidth, height, barDepth)
        const material = new THREE.MeshPhongMaterial({
          color: colors[activity as keyof typeof colors],
          transparent: true,
          opacity: 0.8,
        })

        const bar = new THREE.Mesh(geometry, material)
        bar.position.x = dayIndex * barSpacing - 2 * barSpacing
        bar.position.y = height / 2
        bar.position.z = activityIndex * activitySpacing - 2 * activitySpacing

        scene.add(bar)

        // Add activity label on first day only
        if (dayIndex === 0) {
          const activityText = new Text()
          activityText.text = activity.charAt(0).toUpperCase() + activity.slice(1)
          activityText.fontSize = 0.12
          activityText.position.set(-3.5, 0, bar.position.z)
          activityText.color = 0x333333
          activityText.anchorX = "left"
          activityText.anchorY = "middle"
          activityText.sync()
          scene.add(activityText)
        }
      })
    })

    // Adjust camera position for better view
    const camera = scene.children.find((child) => child instanceof THREE.PerspectiveCamera) as THREE.PerspectiveCamera
    if (camera) {
      camera.position.set(0, 3, 8)
      camera.lookAt(0, 1, 0)
    }
  }

  return <ThreeScene className="h-[400px] w-full rounded-md">{setupScene}</ThreeScene>
}
