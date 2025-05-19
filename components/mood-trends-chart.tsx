"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Mon", mood: 5 },
  { date: "Tue", mood: 4 },
  { date: "Wed", mood: 6 },
  { date: "Thu", mood: 7 },
  { date: "Fri", mood: 5 },
  { date: "Sat", mood: 8 },
  { date: "Sun", mood: 6 },
]

export default function MoodTrendsChart() {
  return (
    <ChartContainer
      config={{
        mood: {
          label: "Mood",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            domain={[0, 10]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="mood" strokeWidth={3} activeDot={{ r: 8 }} stroke="var(--color-mood)" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
