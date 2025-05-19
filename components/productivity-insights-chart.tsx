"use client"

import {
  Line,
  LineChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for productivity insights
const weeklyProductivityData = [
  { day: "Monday", productivity: 85, focus: 90, energy: 75, sessions: 5 },
  { day: "Tuesday", productivity: 92, focus: 95, energy: 85, sessions: 6 },
  { day: "Wednesday", productivity: 78, focus: 80, energy: 70, sessions: 4 },
  { day: "Thursday", productivity: 80, focus: 75, energy: 85, sessions: 5 },
  { day: "Friday", productivity: 75, focus: 70, energy: 80, sessions: 4 },
  { day: "Saturday", productivity: 65, focus: 60, energy: 90, sessions: 2 },
  { day: "Sunday", productivity: 60, focus: 55, energy: 95, sessions: 1 },
]

const workTypeProductivityData = [
  { type: "Focus", productivity: 92, duration: 180, sessions: 4 },
  { type: "Creative", productivity: 85, duration: 120, sessions: 3 },
  { type: "Email", productivity: 70, duration: 60, sessions: 2 },
  { type: "Admin", productivity: 65, duration: 90, sessions: 3 },
  { type: "Learning", productivity: 80, duration: 120, sessions: 2 },
  { type: "Planning", productivity: 88, duration: 60, sessions: 1 },
]

const timeOfDayData = [
  { time: "8-10 AM", productivity: 95, focus: 90, energy: 85 },
  { time: "10-12 PM", productivity: 90, focus: 95, energy: 80 },
  { time: "12-2 PM", productivity: 75, focus: 70, energy: 65 },
  { time: "2-4 PM", productivity: 80, focus: 75, energy: 70 },
  { time: "4-6 PM", productivity: 85, focus: 80, energy: 75 },
  { time: "6-8 PM", productivity: 70, focus: 65, energy: 60 },
]

export default function ProductivityInsightsChart() {
  return (
    <Tabs defaultValue="weekly" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="weekly">Weekly Patterns</TabsTrigger>
        <TabsTrigger value="worktype">Work Type Analysis</TabsTrigger>
        <TabsTrigger value="timeofday">Time of Day</TabsTrigger>
      </TabsList>

      <TabsContent value="weekly" className="pt-4">
        <ChartContainer
          config={{
            productivity: {
              label: "Productivity",
              color: "hsl(var(--chart-1))",
            },
            focus: {
              label: "Focus",
              color: "hsl(var(--chart-2))",
            },
            energy: {
              label: "Energy",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyProductivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 100]} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="productivity"
                stroke="var(--color-productivity)"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="focus" stroke="var(--color-focus)" strokeWidth={2} />
              <Line type="monotone" dataKey="energy" stroke="var(--color-energy)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            <strong>AI Insight:</strong> Your productivity and focus peak on Tuesdays, making it ideal for deep work and
            challenging tasks. Energy levels are highest on weekends, suggesting potential for creative work during
            those times.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="worktype" className="pt-4">
        <ChartContainer
          config={{
            productivity: {
              label: "Productivity",
              color: "hsl(var(--chart-1))",
            },
            duration: {
              label: "Duration (min)",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={workTypeProductivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis yAxisId="left" orientation="left" stroke="var(--color-productivity)" />
              <YAxis yAxisId="right" orientation="right" stroke="var(--color-duration)" />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar yAxisId="left" dataKey="productivity" fill="var(--color-productivity)" />
              <Bar yAxisId="right" dataKey="duration" fill="var(--color-duration)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            <strong>AI Insight:</strong> You show highest productivity during Focus and Planning sessions. Consider
            allocating more time to these work types. Administrative tasks show lower productivity - try scheduling
            these during lower energy periods.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="timeofday" className="pt-4">
        <ChartContainer
          config={{
            productivity: {
              label: "Productivity",
              color: "hsl(var(--chart-1))",
            },
            focus: {
              label: "Focus",
              color: "hsl(var(--chart-2))",
            },
            energy: {
              label: "Energy",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timeOfDayData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[0, 100]} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="productivity"
                stroke="var(--color-productivity)"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="focus" stroke="var(--color-focus)" strokeWidth={2} />
              <Line type="monotone" dataKey="energy" stroke="var(--color-energy)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            <strong>AI Insight:</strong> Morning hours (8-12) show your highest productivity and focus. Schedule your
            most important and challenging work during this period. After lunch (12-2 PM), all metrics drop - this is an
            ideal time for breaks or lighter tasks.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
