import { CalendarRange, Download, Filter } from "lucide-react"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import ThreeTimeDistribution from "@/components/three-time-distribution"
import ThreeActivityBreakdown from "@/components/three-activity-breakdown"
import ThreeHourlyActivity from "@/components/three-hourly-activity"
import ThreeWeekdayDistribution from "@/components/three-weekday-distribution"
import TimeInsights from "@/components/time-insights"
import CalendarAnalyticsLoading from "./loading"

export default function CalendarAnalyticsPage() {
  // Default date range: last 30 days
  const today = new Date()
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(today.getDate() - 30)

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">3D Calendar Analytics</h2>
          <div className="flex items-center space-x-2">
            <DateRangePicker initialDateFrom={thirtyDaysAgo} initialDateTo={today} />
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Suspense fallback={<CalendarAnalyticsLoading />}>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">3D Overview</TabsTrigger>
              <TabsTrigger value="daily">Daily Breakdown</TabsTrigger>
              <TabsTrigger value="hourly">Hourly Patterns</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Tracked Time</CardTitle>
                    <CalendarRange className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">124.5 hrs</div>
                    <p className="text-xs text-muted-foreground">Last 30 days</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Meeting Time</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">28%</div>
                    <p className="text-xs text-muted-foreground">34.8 hours total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Focused Work</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">52%</div>
                    <p className="text-xs text-muted-foreground">64.7 hours total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Break Time</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12%</div>
                    <p className="text-xs text-muted-foreground">14.9 hours total</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>3D Time Distribution</CardTitle>
                    <CardDescription>How your time is distributed across different activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ThreeTimeDistribution />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>3D Activity Breakdown</CardTitle>
                    <CardDescription>Percentage of time spent on each activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ThreeActivityBreakdown />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>3D Weekday Distribution</CardTitle>
                    <CardDescription>Activity patterns by day of week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ThreeWeekdayDistribution />
                  </CardContent>
                </Card>
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>3D Hourly Activity</CardTitle>
                    <CardDescription>When you're most active throughout the day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ThreeHourlyActivity />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="daily" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>3D Daily Time Breakdown</CardTitle>
                  <CardDescription>Detailed view of how you spend each day</CardDescription>
                </CardHeader>
                <CardContent className="h-[600px]">
                  <p className="text-center text-muted-foreground pt-40">
                    3D daily time breakdown visualization will appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hourly" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>3D Hourly Activity Patterns</CardTitle>
                  <CardDescription>Detailed analysis of your productivity throughout the day</CardDescription>
                </CardHeader>
                <CardContent className="h-[600px]">
                  <p className="text-center text-muted-foreground pt-40">
                    3D hourly activity patterns visualization will appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Time Usage Insights</CardTitle>
                  <CardDescription>AI-powered analysis of your time management patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <TimeInsights />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Suspense>
      </div>
    </div>
  )
}
