"use client"

import { useState } from "react"
import { Brain, Calendar, Clock, Lightbulb, Plus, ThumbsUp, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

// Mock data for AI recommendations
const mockRecommendations = {
  dailySchedule: [
    {
      id: "rec1",
      type: "focus",
      name: "Deep Focus Session",
      duration: 50,
      startTime: "09:00",
      reason: "Your productivity metrics show you're most focused in the morning",
      productivity: 95,
    },
    {
      id: "rec2",
      type: "email",
      name: "Email Processing",
      duration: 25,
      startTime: "11:00",
      reason: "Batch processing emails mid-morning prevents context switching",
      productivity: 85,
    },
    {
      id: "rec3",
      type: "creative",
      name: "Creative Work",
      duration: 45,
      startTime: "13:30",
      reason: "Your creative output increases after lunch break",
      productivity: 90,
    },
    {
      id: "rec4",
      type: "admin",
      name: "Administrative Tasks",
      duration: 30,
      startTime: "15:30",
      reason: "Lower cognitive demand tasks are better in the afternoon",
      productivity: 80,
    },
    {
      id: "rec5",
      type: "learning",
      name: "Learning Session",
      duration: 40,
      startTime: "16:30",
      reason: "Studying before end of day improves retention",
      productivity: 85,
    },
  ],
  weeklyInsights: [
    {
      day: "Monday",
      focusScore: 90,
      recommendation: "Ideal for planning and deep work sessions",
    },
    {
      day: "Tuesday",
      focusScore: 95,
      recommendation: "Your most productive day - schedule critical tasks",
    },
    {
      day: "Wednesday",
      focusScore: 85,
      recommendation: "Good for balanced work - mix focus and creative tasks",
    },
    {
      day: "Thursday",
      focusScore: 80,
      recommendation: "Productivity dips - schedule more breaks and shorter sessions",
    },
    {
      day: "Friday",
      focusScore: 75,
      recommendation: "Lower focus - best for administrative tasks and planning",
    },
  ],
  personalizedTips: [
    {
      id: "tip1",
      title: "Optimal Session Length",
      description: "Based on your focus patterns, 50-minute sessions with 10-minute breaks work best for you",
      impact: "high",
    },
    {
      id: "tip2",
      title: "Work Type Rotation",
      description: "Alternating between deep focus and creative work improves your overall productivity",
      impact: "high",
    },
    {
      id: "tip3",
      title: "Break Activities",
      description: "Short walks during breaks show the most positive impact on your subsequent work sessions",
      impact: "medium",
    },
    {
      id: "tip4",
      title: "Meeting Scheduling",
      description: "Schedule meetings between 2-4 PM to minimize disruption to your peak focus hours",
      impact: "high",
    },
    {
      id: "tip5",
      title: "Email Management",
      description: "Processing emails in 2 batches (morning and afternoon) reduces your stress metrics",
      impact: "medium",
    },
  ],
}

export default function AIWorkRecommendations() {
  const [activeTab, setActiveTab] = useState("today")
  const [appliedRecommendations, setAppliedRecommendations] = useState<string[]>([])

  const applyRecommendation = (recId: string) => {
    if (appliedRecommendations.includes(recId)) {
      setAppliedRecommendations(appliedRecommendations.filter((id) => id !== recId))
    } else {
      setAppliedRecommendations([...appliedRecommendations, recId])
    }
  }

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

  const getImpactColor = (impact: string) => {
    const colors: Record<string, string> = {
      high: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      low: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    }
    return colors[impact] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-purple-500" />
            <CardTitle>AI Work Session Recommendations</CardTitle>
          </div>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
            Powered by Gemini
          </Badge>
        </div>
        <CardDescription>
          Personalized suggestions for optimal work session scheduling based on your productivity patterns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">Today's Schedule</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Insights</TabsTrigger>
            <TabsTrigger value="tips">Personalized Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-4 pt-4">
            <div className="space-y-4">
              {mockRecommendations.dailySchedule.map((rec) => (
                <Card key={rec.id} className="overflow-hidden">
                  <div
                    className="flex border-l-4 border-l-blue-500"
                    style={{ borderLeftColor: `var(--${rec.type}-500)` }}
                  >
                    <div className="py-4 px-5 bg-muted/50 flex flex-col items-center justify-center min-w-[100px]">
                      <div className="text-lg font-bold">{rec.startTime}</div>
                      <div className="text-sm text-muted-foreground">{rec.duration} min</div>
                    </div>
                    <CardContent className="py-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-base">{rec.name}</h4>
                          <Badge className={`mt-1 ${getWorkTypeColor(rec.type)}`}>{rec.type}</Badge>
                          <p className="mt-2 text-sm text-muted-foreground">{rec.reason}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center mb-1">
                            <Zap className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{rec.productivity}% Productivity</span>
                          </div>
                          <Link
                            href={`/work-sessions/set-timers/new?prefill=${rec.type}&duration=${rec.duration}&name=${encodeURIComponent(rec.name)}`}
                          >
                            <Button
                              size="sm"
                              variant={appliedRecommendations.includes(rec.id) ? "default" : "outline"}
                              className={
                                appliedRecommendations.includes(rec.id) ? "bg-green-600 hover:bg-green-700" : ""
                              }
                              onClick={() => applyRecommendation(rec.id)}
                            >
                              {appliedRecommendations.includes(rec.id) ? (
                                <>
                                  <ThumbsUp className="mr-1 h-4 w-4" /> Applied
                                </>
                              ) : (
                                <>
                                  <Plus className="mr-1 h-4 w-4" /> Create Timer
                                </>
                              )}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Apply All to Calendar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-4 pt-4">
            <div className="space-y-6">
              {mockRecommendations.weeklyInsights.map((insight) => (
                <div key={insight.day} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{insight.day}</div>
                    <div className="text-sm">{insight.focusScore}% Focus Score</div>
                  </div>
                  <Progress value={insight.focusScore} className="h-2" />
                  <div className="flex items-start">
                    <Lightbulb className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{insight.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4 pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              {mockRecommendations.personalizedTips.map((tip) => (
                <Card key={tip.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">{tip.title}</CardTitle>
                      <Badge className={getImpactColor(tip.impact)}>
                        {tip.impact.charAt(0).toUpperCase() + tip.impact.slice(1)} Impact
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <Button variant="outline">
          <Clock className="mr-2 h-4 w-4" />
          View All Recommendations
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Brain className="mr-2 h-4 w-4" />
          Refresh Recommendations
        </Button>
      </CardFooter>
    </Card>
  )
}
