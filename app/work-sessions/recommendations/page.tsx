import { ArrowLeft, Brain, Calendar, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AIWorkRecommendations from "@/components/ai-work-recommendations"
import ProductivityInsightsChart from "@/components/productivity-insights-chart"

export default function WorkSessionRecommendationsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link href="/work-sessions">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">AI Work Recommendations</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Sync with Calendar
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Schedule
            </Button>
          </div>
        </div>

        <Tabs defaultValue="recommendations" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="insights">Productivity Insights</TabsTrigger>
            <TabsTrigger value="settings">AI Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-4">
            <AIWorkRecommendations />
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Productivity Insights</CardTitle>
                <CardDescription>Analysis of your work patterns and productivity metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <ProductivityInsightsChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Recommendation Settings</CardTitle>
                <CardDescription>
                  Configure how Gemini analyzes your work patterns and generates recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Data Sources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <input type="checkbox" id="source-sessions" className="mr-2" defaultChecked />
                            <label htmlFor="source-sessions">Work Session History</label>
                          </li>
                          <li className="flex items-center">
                            <input type="checkbox" id="source-mood" className="mr-2" defaultChecked />
                            <label htmlFor="source-mood">Mood Tracking Data</label>
                          </li>
                          <li className="flex items-center">
                            <input type="checkbox" id="source-calendar" className="mr-2" defaultChecked />
                            <label htmlFor="source-calendar">Calendar Events</label>
                          </li>
                          <li className="flex items-center">
                            <input type="checkbox" id="source-productivity" className="mr-2" defaultChecked />
                            <label htmlFor="source-productivity">Productivity Metrics</label>
                          </li>
                          <li className="flex items-center">
                            <input type="checkbox" id="source-wellness" className="mr-2" defaultChecked />
                            <label htmlFor="source-wellness">Wellness Scores</label>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Optimization Goals</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <input type="radio" name="goal" id="goal-balanced" className="mr-2" defaultChecked />
                            <label htmlFor="goal-balanced">Balanced (Productivity & Wellbeing)</label>
                          </li>
                          <li className="flex items-center">
                            <input type="radio" name="goal" id="goal-productivity" className="mr-2" />
                            <label htmlFor="goal-productivity">Maximum Productivity</label>
                          </li>
                          <li className="flex items-center">
                            <input type="radio" name="goal" id="goal-wellbeing" className="mr-2" />
                            <label htmlFor="goal-wellbeing">Prioritize Mental Wellbeing</label>
                          </li>
                          <li className="flex items-center">
                            <input type="radio" name="goal" id="goal-learning" className="mr-2" />
                            <label htmlFor="goal-learning">Focus on Learning & Growth</label>
                          </li>
                          <li className="flex items-center">
                            <input type="radio" name="goal" id="goal-custom" className="mr-2" />
                            <label htmlFor="goal-custom">Custom</label>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Update Frequency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-4 gap-2">
                        <Button variant="outline" className="border-purple-500">
                          Daily
                        </Button>
                        <Button variant="outline">Weekly</Button>
                        <Button variant="outline">Monthly</Button>
                        <Button variant="outline">Manual Only</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Brain className="mr-2 h-4 w-4" />
                      Update AI Settings
                    </Button>
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
