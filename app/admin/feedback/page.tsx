import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FeedbackStats from "@/components/feedback-stats"
import AdminFeedbackTable from "@/components/admin-feedback-table"

export default function AdminFeedbackPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">User Feedback</h2>
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
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="all-feedback">All Feedback</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">348</div>
                  <p className="text-xs text-muted-foreground">+24% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2/5</div>
                  <p className="text-xs text-muted-foreground">+0.3 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18%</div>
                  <p className="text-xs text-muted-foreground">+2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Feedback Trends</CardTitle>
                  <CardDescription>Feedback volume and ratings over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <FeedbackStats />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Feature Satisfaction</CardTitle>
                  <CardDescription>User ratings by feature</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Mood Tracking</div>
                        <div className="text-sm font-medium">4.7/5</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-green-600" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Resources Library</div>
                        <div className="text-sm font-medium">4.2/5</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-blue-600" style={{ width: "84%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Support Connection</div>
                        <div className="text-sm font-medium">4.5/5</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-purple-600" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Analytics</div>
                        <div className="text-sm font-medium">3.9/5</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-teal-600" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Mobile App</div>
                        <div className="text-sm font-medium">3.8/5</div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                        <div className="h-full rounded-full bg-orange-600" style={{ width: "76%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="all-feedback" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All User Feedback</CardTitle>
                <CardDescription>Browse and filter all feedback submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminFeedbackTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Reports</CardTitle>
                <CardDescription>Generate and download custom feedback reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Monthly Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive monthly report with feedback trends, ratings, and key insights.
                        </p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Button className="w-full">Generate Report</Button>
                      </div>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Feature Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Detailed analysis of feedback by feature with improvement recommendations.
                        </p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Button className="w-full">Generate Report</Button>
                      </div>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">User Satisfaction</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Report on overall user satisfaction metrics and sentiment analysis.
                        </p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Button className="w-full">Generate Report</Button>
                      </div>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Custom Report</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Create a custom report with specific metrics, date ranges, and user segments.
                        </p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Button className="w-full">Create Custom Report</Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
