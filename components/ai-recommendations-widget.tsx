"use client"

import { Brain, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for AI recommendations
const topRecommendations = [
  {
    id: "rec1",
    type: "focus",
    name: "Deep Focus Session",
    duration: 50,
    startTime: "09:00",
    reason: "Your productivity metrics show you're most focused in the morning",
  },
  {
    id: "rec2",
    type: "email",
    name: "Email Processing",
    duration: 25,
    startTime: "11:00",
    reason: "Batch processing emails mid-morning prevents context switching",
  },
  {
    id: "rec3",
    type: "creative",
    name: "Creative Work",
    duration: 45,
    startTime: "13:30",
    reason: "Your creative output increases after lunch break",
  },
]

export default function AIRecommendationsWidget() {
  const getWorkTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      focus: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      email: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      creative: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      admin: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      learning: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
      planning: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    }
    return colors[type] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-4 w-4 text-purple-500" />
            <CardTitle className="text-lg">AI Work Recommendations</CardTitle>
          </div>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
            Gemini
          </Badge>
        </div>
        <CardDescription>Suggested work sessions for today</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          {topRecommendations.map((rec) => (
            <div key={rec.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
              <div className="flex items-center">
                <div className="mr-3 text-center">
                  <div className="text-sm font-medium">{rec.startTime}</div>
                  <div className="text-xs text-muted-foreground">{rec.duration}m</div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="font-medium text-sm">{rec.name}</div>
                    <Badge className={`ml-2 ${getWorkTypeColor(rec.type)}`} variant="secondary">
                      {rec.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{rec.reason}</p>
                </div>
              </div>
              <Link href={`/work-sessions?timer=${rec.id}`}>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Clock className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/work-sessions/recommendations" className="w-full">
          <Button variant="outline" size="sm" className="w-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Recommendations
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
