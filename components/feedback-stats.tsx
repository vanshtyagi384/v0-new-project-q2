"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ThumbsUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data - in a real app, this would come from your backend
const ratingData = [
  { category: "Overall", rating: 4.2 },
  { category: "Usability", rating: 4.5 },
  { category: "Resources", rating: 4.0 },
  { category: "Support", rating: 4.3 },
  { category: "Mobile App", rating: 3.8 },
]

const feedbackOverTime = [
  { month: "Jan", count: 45 },
  { month: "Feb", count: 52 },
  { month: "Mar", count: 49 },
  { month: "Apr", count: 62 },
  { month: "May", count: 87 },
  { month: "Jun", count: 103 },
]

const recentFeedback = [
  {
    id: 1,
    comment:
      "The mood tracking feature has been incredibly helpful for me to identify patterns in my mental wellbeing.",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: 2,
    comment:
      "I appreciate the resources section, but would love to see more content specific to managing remote work anxiety.",
    rating: 4,
    date: "3 days ago",
  },
  {
    id: 3,
    comment: "The interface is intuitive and calming. Makes me want to use the app daily.",
    rating: 5,
    date: "1 week ago",
  },
]

export default function FeedbackStats() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Feedback Overview</CardTitle>
          <CardDescription>Summary of user feedback and ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold">4.2</div>
              <div className="text-xs text-muted-foreground">Average Rating</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold">348</div>
              <div className="text-xs text-muted-foreground">Total Feedback</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl font-bold">87%</div>
              <div className="text-xs text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rating Breakdown</CardTitle>
          <CardDescription>Average ratings by category</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rating: {
                label: "Rating",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratingData} layout="vertical">
                <XAxis type="number" domain={[0, 5]} />
                <YAxis dataKey="category" type="category" width={100} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="rating" fill="var(--color-rating)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback Volume</CardTitle>
          <CardDescription>Number of feedback submissions over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              count: {
                label: "Submissions",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={feedbackOverTime}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
          <CardDescription>Latest user comments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentFeedback.map((item) => (
              <div key={item.id} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm font-medium">{item.rating}/5</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.comment}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
