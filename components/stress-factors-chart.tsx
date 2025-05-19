"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { factor: "Work Deadlines", level: 8 },
  { factor: "Isolation", level: 6 },
  { factor: "Tech Issues", level: 5 },
  { factor: "Communication", level: 4 },
  { factor: "Work-Life Balance", level: 7 },
]

export default function StressFactorsChart() {
  return (
    <ChartContainer
      config={{
        level: {
          label: "Stress Level",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" domain={[0, 10]} />
          <YAxis dataKey="factor" type="category" width={100} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="level" fill="var(--color-level)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
