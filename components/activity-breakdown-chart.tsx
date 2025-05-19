"use client"

import { useState, useEffect } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { getTimeAnalytics } from "@/lib/calendar-analytics-service"

// Colors for different activity categories
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#ffc658", "#8dd1e1"]

export default function ActivityBreakdownChart() {
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
      const chartData = analytics.categoryBreakdown.map((category) => ({
        name: category.category,
        value: Math.round(category.percentage),
        hours: Math.round((category.minutes / 60) * 10) / 10, // Round to 1 decimal place
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
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name, props) => [`${props.payload.hours} hours (${value}%)`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
