"use client"

import { useState, useEffect } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { getTimeAnalytics } from "@/lib/calendar-analytics-service"

export default function TimeDistributionChart() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      // Get date range (last 30 days)
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(endDate.getDate() - 30)

      // Fetch analytics data
      const analytics = await getTimeAnalytics(startDate, endDate)

      // Transform data for the chart
      const chartData = analytics.dailyDistribution.map((day) => ({
        date: day.date,
        "Deep Work": day.deep_work / 60, // Convert to hours
        "Shallow Work": day.shallow_work / 60,
        Meetings: day.meetings / 60,
        Breaks: day.breaks / 60,
        Admin: day.admin / 60,
        Learning: day.learning / 60,
        Personal: day.personal / 60,
        Other: day.other / 60,
      }))

      setData(chartData)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center h-[300px]">Loading chart data...</div>
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Deep Work" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Shallow Work" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Meetings" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="Breaks" stackId="1" stroke="#ff8042" fill="#ff8042" />
          <Area type="monotone" dataKey="Admin" stackId="1" stroke="#0088fe" fill="#0088fe" />
          <Area type="monotone" dataKey="Learning" stackId="1" stroke="#00C49F" fill="#00C49F" />
          <Area type="monotone" dataKey="Personal" stackId="1" stroke="#FFBB28" fill="#FFBB28" />
          <Area type="monotone" dataKey="Other" stackId="1" stroke="#FF8042" fill="#FF8042" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
