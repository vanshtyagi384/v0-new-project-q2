"use client"

import { useState, useEffect } from "react"
import { CalendarIcon, Clock, Plus } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type CalendarEvent, getUpcomingEvents } from "@/lib/calendar-service"
import Link from "next/link"

export default function CalendarWidget() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        // Only get today's events
        const allEvents = await getUpcomingEvents(1)
        // Sort by start time
        const sortedEvents = allEvents.sort((a, b) => a.start.getTime() - b.start.getTime())
        // Take only the next 3 events
        setEvents(sortedEvents.slice(0, 3))
      } catch (error) {
        console.error("Failed to load calendar events:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadEvents()
  }, [])

  const isEventSoon = (event: CalendarEvent) => {
    const now = new Date()
    const diffMs = event.start.getTime() - now.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    return diffMins >= 0 && diffMins <= 30
  }

  const getEventTimeLabel = (event: CalendarEvent) => {
    const now = new Date()
    const diffMs = event.start.getTime() - now.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))

    if (diffMins < 0) {
      return `Started ${Math.abs(diffMins)} min ago`
    }
    if (diffMins === 0) {
      return "Starting now"
    }
    if (diffMins < 60) {
      return `In ${diffMins} min`
    }
    return format(event.start, "h:mm a")
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <CalendarIcon className="h-4 w-4 mr-2" />
          Today's Schedule
        </CardTitle>
        <CardDescription>Your upcoming calendar events</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        {isLoading ? (
          <div className="h-[120px] flex items-center justify-center">
            <Clock className="h-5 w-5 animate-pulse text-muted-foreground" />
          </div>
        ) : events.length === 0 ? (
          <div className="h-[120px] flex flex-col items-center justify-center text-center">
            <CalendarIcon className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">No more events scheduled for today</p>
          </div>
        ) : (
          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.id} className="flex items-start">
                <div
                  className={`w-2 h-full self-stretch rounded-full mr-3 ${
                    isEventSoon(event) ? "bg-orange-400" : event.isWorkSession ? "bg-green-400" : "bg-blue-400"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm truncate">{event.title}</h4>
                    <span
                      className={`text-xs ${isEventSoon(event) ? "text-orange-600 font-medium" : "text-muted-foreground"}`}
                    >
                      {getEventTimeLabel(event)}
                    </span>
                  </div>
                  <div className="flex items-center mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {format(event.start, "h:mm")} - {format(event.end, "h:mm a")}
                    {event.isWorkSession && <span className="ml-2 text-green-600 text-xs">Work Session</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Link href="/settings/calendar-integration" className="w-full">
          <Button variant="outline" className="w-full text-sm">
            <Plus className="h-3 w-3 mr-1" />
            Manage Calendar
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
