import { Calendar, Clock, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UpcomingAppointments() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Johnson" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Dr. Sarah Johnson</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <span>May 21, 2024</span>
              <Clock className="ml-2 mr-1 h-3 w-3" />
              <span>10:00 AM</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            Reschedule
          </Button>
          <Button size="sm">
            <Video className="mr-2 h-4 w-4" />
            Join
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Michael Chen" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Dr. Michael Chen</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <span>May 28, 2024</span>
              <Clock className="ml-2 mr-1 h-3 w-3" />
              <span>2:30 PM</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            Reschedule
          </Button>
          <Button size="sm" variant="outline">
            <Video className="mr-2 h-4 w-4" />
            Join
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Support Group" />
            <AvatarFallback>SG</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Remote Work Wellness Group</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <span>May 21, 2024</span>
              <Clock className="ml-2 mr-1 h-3 w-3" />
              <span>7:00 PM</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Video className="mr-2 h-4 w-4" />
            Join
          </Button>
        </div>
      </div>
    </div>
  )
}
