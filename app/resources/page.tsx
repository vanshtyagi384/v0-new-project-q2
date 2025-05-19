import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Wellness Resources</h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search resources..." className="w-[200px] sm:w-[300px] pl-8" />
            </div>
          </div>
        </div>
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="exercises">Exercises</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Managing Work-From-Home Stress</CardTitle>
                  <CardDescription>Article • 5 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person working from home"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Learn effective strategies to manage stress while working remotely, including creating boundaries,
                    time-blocking techniques, and mindfulness practices for your home office.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>5-Minute Desk Meditation</CardTitle>
                  <CardDescription>Video • 5 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person meditating"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A guided meditation you can do at your desk between meetings. This practice helps reduce cortisol
                    levels, improve focus, and reset your mental state during a busy workday.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Building Digital Boundaries</CardTitle>
                  <CardDescription>Article • 8 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person setting boundaries"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Practical techniques for creating healthy boundaries between work and personal life when your home
                    is also your office, including digital sunset routines and workspace psychology.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Progressive Muscle Relaxation</CardTitle>
                  <CardDescription>Exercise • 10 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Relaxation exercise"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A guided exercise to help you release physical tension that builds up during long hours at your
                    desk. This technique systematically relaxes muscle groups to reduce anxiety and physical strain.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Exercise
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Remote Work and Mental Health</CardTitle>
                  <CardDescription>Podcast • 25 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Podcast cover"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Dr. Maya Richards and remote work expert Jordan Lee discuss the unique mental health challenges
                    faced by remote workers and evidence-based strategies to overcome isolation, burnout, and digital
                    fatigue.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Mindful Communication in Remote Teams</CardTitle>
                  <CardDescription>Article • 6 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="People communicating"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    How to practice mindful communication with colleagues when working remotely to reduce
                    misunderstandings, prevent conflict, and build stronger relationships despite physical distance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Ergonomics for Home Office Health</CardTitle>
                  <CardDescription>Video • 12 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Ergonomic workspace"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Physical therapist Dr. Samantha Wong demonstrates how to set up your home workspace to prevent pain
                    and injury, with practical adjustments you can make even with limited space or budget.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Digital Detox for Remote Workers</CardTitle>
                  <CardDescription>Exercise • 15 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person disconnecting"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A guided practice for intentionally disconnecting from digital devices to reset your nervous system
                    and reduce the cognitive load that comes with constant connectivity in remote work.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Exercise
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>The Science of Remote Work Fatigue</CardTitle>
                  <CardDescription>Podcast • 32 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Brain science illustration"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Neuroscientist Dr. Elena Patel explains the brain science behind Zoom fatigue, digital overwhelm,
                    and attention fragmentation, with practical neuroscience-based solutions for remote workers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="articles" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Managing Work-From-Home Stress</CardTitle>
                  <CardDescription>Article • 5 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person working from home"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Learn effective strategies to manage stress while working remotely, including creating boundaries,
                    time-blocking techniques, and mindfulness practices for your home office.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Building Digital Boundaries</CardTitle>
                  <CardDescription>Article • 8 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person setting boundaries"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Practical techniques for creating healthy boundaries between work and personal life when your home
                    is also your office, including digital sunset routines and workspace psychology.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Mindful Communication in Remote Teams</CardTitle>
                  <CardDescription>Article • 6 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="People communicating"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    How to practice mindful communication with colleagues when working remotely to reduce
                    misunderstandings, prevent conflict, and build stronger relationships despite physical distance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Combating Isolation as a Remote Worker</CardTitle>
                  <CardDescription>Article • 7 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person connecting virtually"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Practical strategies for maintaining social connections and combating loneliness when working
                    remotely, including virtual community building and structured social interactions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>The Psychology of Remote Productivity</CardTitle>
                  <CardDescription>Article • 9 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Productive workspace"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Understanding the psychological factors that impact productivity when working from home, and
                    evidence-based techniques to optimize your environment and routines.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recognizing and Preventing Burnout</CardTitle>
                  <CardDescription>Article • 10 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person experiencing burnout"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    How to identify the early warning signs of burnout in remote work settings, and proactive strategies
                    to prevent it before reaching crisis point.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="videos" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>5-Minute Desk Meditation</CardTitle>
                  <CardDescription>Video • 5 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person meditating"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A guided meditation you can do at your desk between meetings. This practice helps reduce cortisol
                    levels, improve focus, and reset your mental state during a busy workday.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Ergonomics for Home Office Health</CardTitle>
                  <CardDescription>Video • 12 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Ergonomic workspace"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Physical therapist Dr. Samantha Wong demonstrates how to set up your home workspace to prevent pain
                    and injury, with practical adjustments you can make even with limited space or budget.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Quick Desk Stretches for Remote Workers</CardTitle>
                  <CardDescription>Video • 8 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person stretching at desk"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Movement specialist Lisa Chen guides you through a series of effective stretches you can do at your
                    desk to relieve tension, improve circulation, and prevent repetitive strain injuries.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Creating a Productive Morning Routine</CardTitle>
                  <CardDescription>Video • 15 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Morning routine"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Productivity coach Marcus Johnson walks through how to design a morning routine that sets you up for
                    focus and wellbeing throughout your remote workday.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Virtual Team Building That Actually Works</CardTitle>
                  <CardDescription>Video • 18 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Virtual team meeting"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Remote team expert Sophia Williams demonstrates meaningful virtual team building activities that
                    foster genuine connection and psychological safety in distributed teams.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Managing Digital Eye Strain</CardTitle>
                  <CardDescription>Video • 10 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person with eye strain"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Optometrist Dr. James Park explains how to protect your vision during long hours of screen time,
                    with practical techniques to reduce eye strain and prevent digital vision syndrome.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="exercises" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Progressive Muscle Relaxation</CardTitle>
                  <CardDescription>Exercise • 10 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Relaxation exercise"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A guided exercise to help you release physical tension that builds up during long hours at your
                    desk. This technique systematically relaxes muscle groups to reduce anxiety and physical strain.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Exercise
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Digital Detox for Remote Workers</CardTitle>
                  <CardDescription>Exercise • 15 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person disconnecting"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A guided practice for intentionally disconnecting from digital devices to reset your nervous system
                    and reduce the cognitive load that comes with constant connectivity in remote work.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Exercise
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Mindful Breathing for Work Stress</CardTitle>
                  <CardDescription>Exercise • 7 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person breathing mindfully"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A guided breathing exercise designed to activate your parasympathetic nervous system and quickly
                    reduce stress during challenging work situations or between difficult meetings.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Exercise
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Gratitude Practice for Work Satisfaction</CardTitle>
                  <CardDescription>Exercise • 5 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person journaling"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A structured gratitude practice specifically designed for remote workers to increase job
                    satisfaction, reduce burnout risk, and improve overall wellbeing through positive psychology.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Exercise
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Values Clarification for Work-Life Balance</CardTitle>
                  <CardDescription>Exercise • 20 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person reflecting"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A guided reflection exercise to help you clarify your core values and align your remote work habits
                    with what matters most to you, creating more meaningful work-life integration.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Exercise
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Cognitive Restructuring for Work Anxiety</CardTitle>
                  <CardDescription>Exercise • 12 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person reframing thoughts"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    A CBT-based exercise to identify and reframe unhelpful thought patterns that contribute to work
                    anxiety in remote settings, such as imposter syndrome and catastrophizing.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Start Exercise
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="podcasts" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Remote Work and Mental Health</CardTitle>
                  <CardDescription>Podcast • 25 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Podcast cover"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Dr. Maya Richards and remote work expert Jordan Lee discuss the unique mental health challenges
                    faced by remote workers and evidence-based strategies to overcome isolation, burnout, and digital
                    fatigue.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>The Science of Remote Work Fatigue</CardTitle>
                  <CardDescription>Podcast • 32 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Brain science illustration"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Neuroscientist Dr. Elena Patel explains the brain science behind Zoom fatigue, digital overwhelm,
                    and attention fragmentation, with practical neuroscience-based solutions for remote workers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Digital Nomad Mental Wellness</CardTitle>
                  <CardDescription>Podcast • 28 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Digital nomad working"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Psychologist and former digital nomad Dr. Carlos Mendez discusses the unique mental health
                    challenges of location-independent work and strategies for maintaining stability amid constant
                    change.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Building Resilience in Remote Teams</CardTitle>
                  <CardDescription>Podcast • 35 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Remote team"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Organizational psychologist Dr. Tanya Williams interviews remote team leaders about creating
                    psychologically safe environments that foster resilience and mental wellbeing in distributed teams.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Sleep Science for Remote Workers</CardTitle>
                  <CardDescription>Podcast • 30 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Person sleeping"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Sleep researcher Dr. Michael Breus discusses how remote work affects sleep patterns and circadian
                    rhythms, with practical strategies for improving sleep quality when work and home share the same
                    space.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Mindfulness for Digital Overwhelm</CardTitle>
                  <CardDescription>Podcast • 27 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Mindfulness practice"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-muted-foreground">
                    Mindfulness teacher Sarah Kim and tech wellness expert David Nguyen discuss practical mindfulness
                    techniques specifically designed for managing the digital overwhelm experienced by remote workers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
