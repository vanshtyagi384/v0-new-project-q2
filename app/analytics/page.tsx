import { BarChart3, Calendar, Download, LineChart } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MoodTrendsChart from "@/components/mood-trends-chart"
import StressFactorsChart from "@/components/stress-factors-chart"
import WellnessScoreChart from "@/components/wellness-score-chart"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Mental Health Analytics</h2>
          <div className="flex items-center space-x-2">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mood">Mood Trends</TabsTrigger>
            <TabsTrigger value="stress">Stress Factors</TabsTrigger>
            <TabsTrigger value="wellness">Wellness Score</TabsTrigger>
            <TabsTrigger value="calendar" asChild>
              <Link href="/analytics/calendar">Calendar Analytics</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Mood</CardTitle>
                  <LineChart className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.2/10</div>
                  <p className="text-xs text-muted-foreground">+0.8 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78/100</div>
                  <p className="text-xs text-muted-foreground">+5 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Stress Level</CardTitle>
                  <LineChart className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.3/10</div>
                  <p className="text-xs text-muted-foreground">-1.2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Check-in Streak</CardTitle>
                  <Calendar className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24 days</div>
                  <p className="text-xs text-muted-foreground">Longest: 30 days</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Mood Trends</CardTitle>
                  <CardDescription>Your mood patterns over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <MoodTrendsChart />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Stress Factors</CardTitle>
                  <CardDescription>Most common sources of stress</CardDescription>
                </CardHeader>
                <CardContent>
                  <StressFactorsChart />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Wellness Score Components</CardTitle>
                  <CardDescription>Breakdown of your overall wellness score</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Sleep Quality</div>
                        <div className="text-sm font-medium">72/100</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-green-600" style={{ width: "72%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Work Satisfaction</div>
                        <div className="text-sm font-medium">68/100</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-blue-600" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Social Connection</div>
                        <div className="text-sm font-medium">65/100</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-purple-600" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Physical Activity</div>
                        <div className="text-sm font-medium">85/100</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-teal-600" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Stress Management</div>
                        <div className="text-sm font-medium">75/100</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-orange-600" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Wellness Score History</CardTitle>
                  <CardDescription>Your wellness score trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <WellnessScoreChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="mood" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Mood Analysis</CardTitle>
                <CardDescription>Comprehensive view of your mood patterns and influencing factors</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <p className="text-center text-muted-foreground pt-40">Detailed mood analysis will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="stress" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Stress Factor Analysis</CardTitle>
                <CardDescription>Detailed breakdown of your stress triggers and coping mechanisms</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <p className="text-center text-muted-foreground pt-40">Stress factor analysis will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="wellness" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Wellness Score Details</CardTitle>
                <CardDescription>
                  Comprehensive analysis of all factors contributing to your wellness score
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <p className="text-center text-muted-foreground pt-40">Wellness score details will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
