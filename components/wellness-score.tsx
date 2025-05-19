import { Progress } from "@/components/ui/progress"

export default function WellnessScore() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Overall Wellness</div>
          <div className="text-sm font-medium">78/100</div>
        </div>
        <Progress value={78} className="h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Sleep Quality</div>
          <div className="text-sm font-medium">72/100</div>
        </div>
        <Progress value={72} className="h-2 bg-gray-100 dark:bg-gray-800">
          <div className="h-full bg-blue-600 rounded-full" style={{ width: "72%" }}></div>
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Stress Management</div>
          <div className="text-sm font-medium">65/100</div>
        </div>
        <Progress value={65} className="h-2 bg-gray-100 dark:bg-gray-800">
          <div className="h-full bg-orange-600 rounded-full" style={{ width: "65%" }}></div>
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Work Satisfaction</div>
          <div className="text-sm font-medium">80/100</div>
        </div>
        <Progress value={80} className="h-2 bg-gray-100 dark:bg-gray-800">
          <div className="h-full bg-green-600 rounded-full" style={{ width: "80%" }}></div>
        </Progress>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Social Connection</div>
          <div className="text-sm font-medium">70/100</div>
        </div>
        <Progress value={70} className="h-2 bg-gray-100 dark:bg-gray-800">
          <div className="h-full bg-purple-600 rounded-full" style={{ width: "70%" }}></div>
        </Progress>
      </div>
    </div>
  )
}
