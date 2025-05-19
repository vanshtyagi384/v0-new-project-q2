"use client"

import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { getTimeAnalytics } from "@/lib/calendar-analytics-service"

export default function HourlyActivityChart() {
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
      const chartData = analytics.hourlyDistribution.map((hourData) => ({
        hour: `${hourData.hour}:00`,
        Meetings: hourData.meetings,
        "Focused Work": hourData.focused_work,
        Other: hourData.other,
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
          <XAxis dataKey="hour" />
          <YAxis label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Meetings" stackId="a" fill="#8884d8" />
          <Bar dataKey="Focused Work" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Other" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
