import { Calendar, MessageSquare, Phone, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Support & Connection</h2>
          <Button className="bg-green-600 hover:bg-green-700">
            <Phone className="mr-2 h-4 w-4" />
            Emergency Support
          </Button>
        </div>
        <Tabs defaultValue="professionals" className="space-y-4">
          <TabsList>
            <TabsTrigger value="professionals">Mental Health Professionals</TabsTrigger>
            <TabsTrigger value="peer">Peer Support</TabsTrigger>
            <TabsTrigger value="groups">Support Groups</TabsTrigger>
            <TabsTrigger value="crisis">Crisis Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="professionals" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Dr. Sarah Johnson</CardTitle>
                      <CardDescription>Licensed Psychologist</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Anxiety</Badge>
                    <Badge variant="outline">Depression</Badge>
                    <Badge variant="outline">Work Stress</Badge>
                    <Badge variant="outline">Burnout</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specializes in helping remote workers manage stress, anxiety, and work-life balance challenges.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Next available: Today at 3:00 PM</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                  <Button className="flex-1">
                    <Video className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Michael Chen" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Dr. Michael Chen</CardTitle>
                      <CardDescription>Therapist, LMFT</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Work-Life Balance</Badge>
                    <Badge variant="outline">Relationships</Badge>
                    <Badge variant="outline">Isolation</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Helps remote workers navigate isolation and maintain healthy relationships while working from home.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Next available: Tomorrow at 10:00 AM</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                  <Button className="flex-1">
                    <Video className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Amara Patel" />
                      <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Dr. Amara Patel</CardTitle>
                      <CardDescription>Clinical Psychologist</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Burnout</Badge>
                    <Badge variant="outline">Stress Management</Badge>
                    <Badge variant="outline">Productivity</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Expert in preventing and treating burnout among remote professionals in high-stress industries.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Next available: Wednesday at 2:00 PM</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                  <Button className="flex-1">
                    <Video className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Button variant="outline" className="w-full">
              View All Professionals
            </Button>
          </TabsContent>
          <TabsContent value="peer" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Peer Support Network</CardTitle>
                <CardDescription>Connect with other remote workers who understand your challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our peer support network connects you with other remote workers who have faced similar challenges.
                  These are not mental health professionals, but fellow remote workers who can offer understanding,
                  empathy, and practical advice based on their own experiences.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">One-on-One Peer Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Get matched with a peer mentor who has overcome similar challenges in remote work.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Find a Peer Mentor
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Become a Peer Supporter</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Help others by sharing your experiences and strategies for maintaining mental wellbeing.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Apply to Volunteer
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="groups" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Remote Work Wellness</CardTitle>
                  <CardDescription>Weekly on Tuesdays, 7:00 PM EST</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    A supportive group focused on maintaining mental wellbeing while working remotely. Share challenges,
                    strategies, and build connections with other remote workers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Work-Life Balance</Badge>
                    <Badge variant="outline">Stress Management</Badge>
                    <Badge variant="outline">Community</Badge>
                  </div>
                  <p className="text-sm">Next session: May 21, 2024</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Group</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Digital Nomad Support Circle</CardTitle>
                  <CardDescription>Bi-weekly on Thursdays, 10:00 AM EST</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For remote workers who travel frequently. Discuss the unique challenges of maintaining mental health
                    while constantly on the move and working across time zones.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Travel Stress</Badge>
                    <Badge variant="outline">Time Management</Badge>
                    <Badge variant="outline">Cultural Adjustment</Badge>
                  </div>
                  <p className="text-sm">Next session: May 23, 2024</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Group</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Remote Work Burnout Recovery</CardTitle>
                  <CardDescription>Weekly on Wednesdays, 6:00 PM EST</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    A supportive environment for those experiencing or recovering from burnout related to remote work.
                    Learn strategies for recovery and prevention.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Burnout</Badge>
                    <Badge variant="outline">Recovery</Badge>
                    <Badge variant="outline">Self-Care</Badge>
                  </div>
                  <p className="text-sm">Next session: May 22, 2024</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Group</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Remote Parents Mental Health</CardTitle>
                  <CardDescription>Bi-weekly on Mondays, 8:00 PM EST</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For remote workers balancing parenting responsibilities. Share strategies for maintaining mental
                    health while juggling work and family demands from home.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Parenting</Badge>
                    <Badge variant="outline">Work-Life Balance</Badge>
                    <Badge variant="outline">Boundaries</Badge>
                  </div>
                  <p className="text-sm">Next session: May 27, 2024</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Group</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="crisis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Crisis Support Resources</CardTitle>
                <CardDescription>Immediate help for mental health emergencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
                      If you're in immediate danger
                    </h3>
                    <p className="text-red-700 dark:text-red-400 mb-4">
                      If you're thinking about harming yourself or others, call emergency services immediately:
                    </p>
                    <Button className="bg-red-600 hover:bg-red-700 w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Emergency Services (911)
                    </Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Crisis Text Line</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Text HOME to 741741 to connect with a Crisis Counselor. Free 24/7 support.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Text Crisis Line
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">National Suicide Prevention Lifeline</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Call 988 or 1-800-273-8255. Available 24/7 for emotional support.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Call Lifeline
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>In-App Emergency Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Our platform offers immediate connection to mental health professionals during crisis
                        situations.
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Text Support Now
                      </Button>
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Video className="mr-2 h-4 w-4" />
                        Video Support Now
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
