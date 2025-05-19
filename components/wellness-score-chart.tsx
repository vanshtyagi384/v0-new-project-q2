"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Week 1", score: 65 },
  { date: "Week 2", score: 68 },
  { date: "Week 3", score: 70 },
  { date: "Week 4", score: 73 },
  { date: "Week 5", score: 71 },
  { date: "Week 6", score: 75 },
  { date: "Week 7", score: 78 },
]

export default function WellnessScoreChart() {
  return (
    <ChartContainer
      config={{
        score: {
          label: "Wellness Score",
          color: "hsl(var(--chart-2))",
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
            domain={[50, 100]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="score" strokeWidth={3} activeDot={{ r: 8 }} stroke="var(--color-score)" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
