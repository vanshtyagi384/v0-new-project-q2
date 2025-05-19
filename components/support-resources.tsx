import { ExternalLink, MessageSquare, Phone, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupportResources() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Talk to a Therapist</CardTitle>
          <CardDescription>Connect with a licensed professional</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Schedule a session with a mental health professional who specializes in remote work challenges.
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button className="flex-1" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
          <Button className="flex-1" size="sm">
            <Video className="mr-2 h-4 w-4" />
            Video Call
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Crisis Support</CardTitle>
          <CardDescription>Immediate help when you need it</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            If you're experiencing a mental health crisis, help is available 24/7.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-red-600 hover:bg-red-700" size="sm">
            <Phone className="mr-2 h-4 w-4" />
            Get Help Now
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Wellness Resources</CardTitle>
          <CardDescription>Articles, videos, and exercises</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Explore our library of resources designed to help you manage stress and improve wellbeing.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline" size="sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Browse Resources
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Peer Support</CardTitle>
          <CardDescription>Connect with other remote workers</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Join our community of remote workers who understand the unique challenges you face.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Join Community
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
