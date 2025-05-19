import Link from "next/link"
import { ArrowRight, BookOpen, Heart, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Mental Wellbeing Matters
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Track, improve, and maintain your mental health with our comprehensive tools designed specifically
                    for remote workers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button size="lg" variant="outline">
                      Explore Resources
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                alt="Mental health illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                src="/placeholder.svg?height=550&width=800"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform provides comprehensive tools to help you monitor and improve your mental wellbeing while
                  working remotely.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-green-100 dark:border-green-800">
                <CardHeader className="pb-2">
                  <Heart className="h-10 w-10 text-green-600 dark:text-green-400" />
                  <CardTitle className="text-xl">Daily Mood Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Log your daily mood and emotions to identify patterns and triggers that affect your mental
                    wellbeing.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 dark:border-blue-800">
                <CardHeader className="pb-2">
                  <BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-xl">Wellness Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Access a library of articles, videos, and exercises designed to help you manage stress and improve
                    mental health.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-teal-100 dark:border-teal-800">
                <CardHeader className="pb-2">
                  <MessageSquare className="h-10 w-10 text-teal-600 dark:text-teal-400" />
                  <CardTitle className="text-xl">Professional Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with licensed therapists and counselors through secure messaging and video calls.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
