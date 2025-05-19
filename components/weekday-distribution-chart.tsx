"use client"

import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { getTimeAnalytics } from "@/lib/calendar-analytics-service"

export default function WeekdayDistributionChart() {
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
      const chartData = analytics.weekdayDistribution.map((day) => ({
        day: day.day.substring(0, 3), // Abbreviate day names
        "Deep Work": day.deep_work / 60, // Convert to hours
        "Shallow Work": day.shallow_work / 60,
        Meetings: day.meetings / 60,
        Breaks: day.breaks / 60,
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
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Deep Work" fill="#8884d8" />
          <Bar dataKey="Shallow Work" fill="#82ca9d" />
          <Bar dataKey="Meetings" fill="#ffc658" />
          <Bar dataKey="Breaks" fill="#ff8042" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
