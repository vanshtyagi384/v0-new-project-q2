"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Calendar, Clock } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data for work session history
const weeklyData = [
  { day: "Mon", sessions: 4, duration: 120 },
  { day: "Tue", sessions: 5, duration: 150 },
  { day: "Wed", sessions: 3, duration: 90 },
  { day: "Thu", sessions: 6, duration: 180 },
  { day: "Fri", sessions: 4, duration: 120 },
  { day: "Sat", sessions: 2, duration: 60 },
  { day: "Sun", sessions: 1, duration: 30 },
]

const recentSessions = [
  {
    id: 1,
    date: "Today",
    time: "10:30 AM",
    duration: "25 min",
    type: "Deep Work",
    completed: true,
  },
  {
    id: 2,
    date: "Today",
    time: "1:15 PM",
    duration: "50 min",
    type: "Project Focus",
    completed: true,
  },
  {
    id: 3,
    date: "Today",
    time: "3:45 PM",
    duration: "25 min",
    type: "Email Processing",
    completed: true,
  },
  {
    id: 4,
    date: "Yesterday",
    time: "9:00 AM",
    duration: "50 min",
    type: "Deep Work",
    completed: true,
  },
  {
    id: 5,
    date: "Yesterday",
    time: "11:30 AM",
    duration: "25 min",
    type: "Meeting Prep",
    completed: true,
  },
]

export default function WorkSessionHistory() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Focus Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5 hrs</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Length</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30 min</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Sessions</CardTitle>
            <CardDescription>Number of work sessions completed</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                sessions: {
                  label: "Sessions",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="sessions"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                    stroke="var(--color-sessions)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sessions</CardTitle>
            <CardDescription>Your latest completed work sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSessions.map((session) => (
                <div key={session.id} className="flex items-start space-x-3 border-b pb-3 last:border-0 last:pb-0">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                    <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <p className="text-sm font-medium">{session.type}</p>
                      <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        {session.duration}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{session.date}</span>
                      <Clock className="ml-2 mr-1 h-3 w-3" />
                      <span>{session.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
