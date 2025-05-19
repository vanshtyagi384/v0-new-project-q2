"use client"

import type React from "react"

import { useState } from "react"
import { Star, Send, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeedbackForm() {
  const [rating, setRating] = useState<number | null>(null)
  const [usabilityRating, setUsabilityRating] = useState<number | null>(null)
  const [resourcesRating, setResourcesRating] = useState<number | null>(null)
  const [supportRating, setSupportRating] = useState<number | null>(null)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("general")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log({
      overallRating: rating,
      usabilityRating,
      resourcesRating,
      supportRating,
      feedback,
    })
    setSubmitted(true)
    // Reset form after submission
    setTimeout(() => {
      setRating(null)
      setUsabilityRating(null)
      setResourcesRating(null)
      setSupportRating(null)
      setFeedback("")
      setSubmitted(false)
      setActiveTab("general")
    }, 3000)
  }

  const renderStars = (currentRating: number | null, setRatingFunction: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRatingFunction(star)}
            className={`p-1 rounded-full transition-colors ${
              (currentRating || 0) >= star
                ? "text-yellow-400 hover:text-yellow-500"
                : "text-gray-300 hover:text-gray-400"
            }`}
            aria-label={`Rate ${star} stars`}
          >
            <Star className="h-6 w-6 fill-current" />
          </button>
        ))}
      </div>
    )
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 rounded-full bg-green-100 p-3 dark:bg-green-900">
              <ThumbsUp className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold">Thank You for Your Feedback!</h3>
            <p className="text-muted-foreground">
              Your input helps us improve our mental health support platform for remote workers.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Your Feedback</CardTitle>
        <CardDescription>Help us improve our mental health support platform for remote workers</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="overall-rating">Overall Experience</Label>
                <div className="flex items-center space-x-2">
                  {renderStars(rating, setRating)}
                  <span className="text-sm text-muted-foreground ml-2">{rating ? `${rating}/5` : "Select rating"}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Label>How did you hear about us?</Label>
                <RadioGroup defaultValue="internet">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="internet" id="internet" />
                    <Label htmlFor="internet">Internet Search</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="friend" id="friend" />
                    <Label htmlFor="friend">Friend or Colleague</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="employer" id="employer" />
                    <Label htmlFor="employer">Employer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="social" id="social" />
                    <Label htmlFor="social">Social Media</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="usability-rating">Usability & Interface</Label>
                <div className="flex items-center space-x-2">
                  {renderStars(usabilityRating, setUsabilityRating)}
                  <span className="text-sm text-muted-foreground ml-2">
                    {usabilityRating ? `${usabilityRating}/5` : "Select rating"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resources-rating">Resources Quality</Label>
                <div className="flex items-center space-x-2">
                  {renderStars(resourcesRating, setResourcesRating)}
                  <span className="text-sm text-muted-foreground ml-2">
                    {resourcesRating ? `${resourcesRating}/5` : "Select rating"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-rating">Support & Guidance</Label>
                <div className="flex items-center space-x-2">
                  {renderStars(supportRating, setSupportRating)}
                  <span className="text-sm text-muted-foreground ml-2">
                    {supportRating ? `${supportRating}/5` : "Select rating"}
                  </span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comments" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="feedback">Your Detailed Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Share your experience, suggestions, or concerns..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={!rating}>
            <Send className="mr-2 h-4 w-4" />
            Submit Feedback
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
