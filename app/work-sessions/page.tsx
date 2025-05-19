import { ArrowLeft, Brain, Clock } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WorkSessionTimer from "@/components/work-session-timer"
import WorkSessionHistory from "@/components/work-session-history"
import WorkSessionSettings from "@/components/work-session-settings"
import CalendarWidget from "@/components/calendar-widget"

export default function WorkSessionsPage({ searchParams }: { searchParams: { timer?: string } }) {
  const selectedTimerId = searchParams.timer

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Work Sessions</h2>
          </div>
          <div className="flex space-x-2">
            <Link href="/work-sessions/recommendations">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Brain className="mr-2 h-4 w-4" />
                AI Recommendations
              </Button>
            </Link>
            <Link href="/work-sessions/set-timers">
              <Button className="bg-green-600 hover:bg-green-700">
                <Clock className="mr-2 h-4 w-4" />
                Manage Timers
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="timer" className="space-y-4">
          <TabsList>
            <TabsTrigger value="timer">Timer</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="timer" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Suspense fallback={<div>Loading timer...</div>}>
                <WorkSessionTimer timerId={selectedTimerId} />
              </Suspense>
              <div className="space-y-4">
                <CalendarWidget />
                <Card>
                  <CardHeader>
                    <CardTitle>Work Session Benefits</CardTitle>
                    <CardDescription>How structured work sessions improve mental wellbeing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Reduced Mental Fatigue</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular breaks prevent cognitive overload and mental exhaustion, keeping your mind fresh and
                        focused.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Improved Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        Time-boxed work sessions help maintain concentration and reduce distractions during remote work.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Better Work-Life Balance</h4>
                      <p className="text-sm text-muted-foreground">
                        Structured work periods create clear boundaries between work time and personal time when working
                        from home.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <WorkSessionHistory />
          </TabsContent>

          <TabsContent value="settings">
            <WorkSessionSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
