"use client"

import { useState } from "react"
import { Clock, Edit, Play, Repeat, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, this would come from your database
const mockTimers = [
  {
    id: "1",
    name: "Morning Deep Work",
    duration: 50,
    workType: "focus",
    voiceEnabled: true,
    recurring: true,
    recurringDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    recurringTime: "09:00",
  },
  {
    id: "2",
    name: "Email Processing",
    duration: 25,
    workType: "email",
    voiceEnabled: true,
    recurring: true,
    recurringDays: ["Mon", "Wed", "Fri"],
    recurringTime: "14:00",
  },
  {
    id: "3",
    name: "Creative Brainstorming",
    duration: 30,
    workType: "creative",
    voiceEnabled: true,
    recurring: false,
  },
  {
    id: "4",
    name: "Learning Session",
    duration: 45,
    workType: "learning",
    voiceEnabled: false,
    recurring: true,
    recurringDays: ["Tue", "Thu"],
    recurringTime: "16:00",
  },
]

export default function SavedTimersList() {
  const [timers, setTimers] = useState(mockTimers)

  const getWorkTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      focus: "Deep Focus",
      creative: "Creative Work",
      admin: "Administrative",
      learning: "Learning",
      planning: "Planning",
      email: "Email/Communication",
      custom: "Custom",
    }
    return types[type] || type
  }

  return (
    <div className="space-y-4">
      {timers.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Clock className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No Saved Timers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create custom work session timers with Gemini voiceover support
            </p>
            <Link href="/work-sessions/set-timers/new">
              <Button className="bg-green-600 hover:bg-green-700">Create Your First Timer</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {timers.map((timer) => (
            <Card key={timer.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>{timer.name}</CardTitle>
                  <Badge variant="outline">{timer.duration} min</Badge>
                </div>
                <CardDescription>{getWorkTypeLabel(timer.workType)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {timer.voiceEnabled ? (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      <Volume2 className="h-3 w-3 mr-1" />
                      Voice Enabled
                    </Badge>
                  ) : (
                    <Badge variant="outline">
                      <VolumeX className="h-3 w-3 mr-1" />
                      Voice Disabled
                    </Badge>
                  )}
                  {timer.recurring && (
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      <Repeat className="h-3 w-3 mr-1" />
                      Recurring
                    </Badge>
                  )}
                </div>
                {timer.recurring && (
                  <div className="text-sm text-muted-foreground">
                    <div className="flex flex-wrap gap-1 mb-1">
                      {timer.recurringDays.map((day) => (
                        <span key={day} className="px-1.5 py-0.5 bg-muted rounded-sm text-xs font-medium">
                          {day}
                        </span>
                      ))}
                    </div>
                    <div>Starts at {timer.recurringTime}</div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/work-sessions/set-timers/${timer.id}`}>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </Link>
                <Link href={`/work-sessions?timer=${timer.id}`}>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
