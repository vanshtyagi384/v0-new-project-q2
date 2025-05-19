"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle, Clock, Coffee, Users } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TimeInsights() {
  const [showAllInsights, setShowAllInsights] = useState(false)

  const insights = [
    {
      title: "Meeting Overload Detected",
      description:
        "You spent 34% of your time in meetings last week, which is 10% higher than your optimal level. Consider declining some non-essential meetings.",
      icon: Users,
      type: "warning",
    },
    {
      title: "Deep Work Deficit",
      description:
        "Your deep work time has decreased by 15% compared to your previous average. Try blocking focused work time on your calendar.",
      icon: Clock,
      type: "warning",
    },
    {
      title: "Break Time Improvement",
      description:
        "You've increased your break time by 8% this week. Keep it up! Regular breaks help maintain productivity and mental wellbeing.",
      icon: Coffee,
      type: "success",
    },
    {
      title: "Back-to-Back Meetings",
      description:
        "You had 6 instances of back-to-back meetings without breaks. This can lead to decreased focus and increased stress.",
      icon: AlertCircle,
      type: "warning",
    },
    {
      title: "Optimal Work Distribution",
      description:
        "Your work distribution on Tuesday and Thursday was optimal, with a good balance of meetings, deep work, and breaks.",
      icon: CheckCircle,
      type: "success",
    },
  ]

  const visibleInsights = showAllInsights ? insights : insights.slice(0, 3)

  return (
    <div className="space-y-4">
      {visibleInsights.map((insight, index) => (
        <Alert key={index} variant={insight.type === "warning" ? "destructive" : "default"}>
          <insight.icon className="h-4 w-4" />
          <AlertTitle>{insight.title}</AlertTitle>
          <AlertDescription>{insight.description}</AlertDescription>
        </Alert>
      ))}

      {!showAllInsights && insights.length > 3 && (
        <Button variant="outline" className="w-full" onClick={() => setShowAllInsights(true)}>
          Show All Insights
        </Button>
      )}

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-2">AI Recommendations</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                1
              </span>
              <span>Schedule 2-hour deep work blocks in the morning when your productivity is highest.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                2
              </span>
              <span>Add 10-minute buffer times between meetings to reduce stress and improve focus.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                3
              </span>
              <span>Consider implementing "No Meeting Wednesdays" to increase focused work time.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
