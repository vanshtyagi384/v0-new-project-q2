import { BarChart3, Calendar, Clock, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MoodTracker from "@/components/mood-tracker"
import RecentActivity from "@/components/recent-activity"
import UpcomingAppointments from "@/components/upcoming-appointments"
import WeeklyMoodChart from "@/components/weekly-mood-chart"
import SupportResources from "@/components/support-resources"
import AIRecommendationsWidget from "@/components/ai-recommendations-widget"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Mood</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-green-600"
                  >
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Good</div>
                  <p className="text-xs text-muted-foreground">+2 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Wellness Score</CardTitle>
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78/100</div>
                  <p className="text-xs text-muted-foreground">+5 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Streak</CardTitle>
                  <Calendar className="h-4 w-4 text-teal-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7 days</div>
                  <p className="text-xs text-muted-foreground">Keep it up!</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
                  <Clock className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">May 21</div>
                  <p className="text-xs text-muted-foreground">10:00 AM with Dr. Smith</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Weekly Mood Trends</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <WeeklyMoodChart />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your mental health activities from the past 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivity />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Today's Mood Check-in</CardTitle>
                  <CardDescription>How are you feeling today?</CardDescription>
                </CardHeader>
                <CardContent>
                  <MoodTracker />
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Log Mood</Button>
                </CardFooter>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Support Resources</CardTitle>
                  <CardDescription>Quick access to help when you need it</CardDescription>
                </CardHeader>
                <CardContent>
                  <SupportResources />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Work Session Timer</CardTitle>
                  <CardDescription>Track your focused work time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center py-4">
                    <div className="text-4xl font-bold">25:00</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/work-sessions" className="w-full">
                    <Button className="w-full">
                      <Clock className="mr-2 h-4 w-4" />
                      Start Work Session
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="col-span-4">
                <AIRecommendationsWidget />
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mental Health Analytics</CardTitle>
                <CardDescription>Detailed analysis of your mental wellbeing over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <p className="text-center text-muted-foreground pt-40">Analytics dashboard will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Wellness Resources</CardTitle>
                <CardDescription>Articles, videos, and exercises to support your mental health</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <p className="text-center text-muted-foreground pt-40">Resources will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Schedule and manage your therapy sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingAppointments />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Schedule New Appointment</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
