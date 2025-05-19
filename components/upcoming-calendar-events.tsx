"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, MapPin, Plus, RefreshCw } from "lucide-react"
import { format, isToday, isTomorrow, isThisWeek, addDays } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type CalendarEvent, getUpcomingEvents, importEventsAsWorkSessions } from "@/lib/calendar-service"

export default function UpcomingCalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])
  const [isImporting, setIsImporting] = useState(false)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await getUpcomingEvents(7)
        setEvents(data)
      } catch (error) {
        console.error("Failed to load calendar events:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadEvents()
  }, [])

  const handleSelectEvent = (eventId: string) => {
    if (selectedEvents.includes(eventId)) {
      setSelectedEvents(selectedEvents.filter((id) => id !== eventId))
    } else {
      setSelectedEvents([...selectedEvents, eventId])
    }
  }

  const handleSelectAll = () => {
    if (selectedEvents.length === events.length) {
      setSelectedEvents([])
    } else {
      setSelectedEvents(events.map((event) => event.id))
    }
  }

  const handleImportSelected = async () => {
    if (selectedEvents.length === 0) return

    setIsImporting(true)
    try {
      await importEventsAsWorkSessions(selectedEvents)
      // In a real app, you would update the UI to reflect the imported events
      alert(`Successfully imported ${selectedEvents.length} events as work sessions`)
      setSelectedEvents([])
    } catch (error) {
      console.error("Failed to import events:", error)
    } finally {
      setIsImporting(false)
    }
  }

  const groupEventsByDay = () => {
    const today = new Date()
    const tomorrow = addDays(today, 1)

    const grouped = {
      today: events.filter((event) => isToday(event.start)),
      tomorrow: events.filter((event) => isTomorrow(event.start)),
      thisWeek: events.filter((event) => isThisWeek(event.start) && !isToday(event.start) && !isTomorrow(event.start)),
    }

    return grouped
  }

  const groupedEvents = groupEventsByDay()

  const renderEventCard = (event: CalendarEvent) => (
    <Card key={event.id} className={`mb-2 ${event.isWorkSession ? "border-green-200 bg-green-50" : ""}`}>
      <CardContent className="p-3">
        <div className="flex items-start">
          <Checkbox
            id={`event-${event.id}`}
            className="mt-1 mr-3"
            checked={selectedEvents.includes(event.id)}
            onCheckedChange={() => handleSelectEvent(event.id)}
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <Label htmlFor={`event-${event.id}`} className="font-medium cursor-pointer">
                {event.title}
              </Label>
              <span className="text-xs text-muted-foreground">
                {format(event.start, "h:mm a")} - {format(event.end, "h:mm a")}
              </span>
            </div>
            {event.description && <p className="text-sm text-muted-foreground mt-1">{event.description}</p>}
            <div className="flex items-center mt-2 text-xs text-muted-foreground">
              {event.location && (
                <div className="flex items-center mr-3">
                  <MapPin className="h-3 w-3 mr-1" />
                  {event.location}
                </div>
              )}
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {Math.round((event.end.getTime() - event.start.getTime()) / (1000 * 60))} min
              </div>
              {event.isWorkSession && <div className="ml-auto text-green-600 text-xs font-medium">Work Session</div>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-4">
      {isLoading ? (
        <div className="flex justify-center p-4">
          <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="select-all"
                checked={selectedEvents.length > 0 && selectedEvents.length === events.length}
                onCheckedChange={handleSelectAll}
              />
              <Label htmlFor="select-all" className="text-sm cursor-pointer">
                {selectedEvents.length === 0
                  ? "Select All"
                  : selectedEvents.length === events.length
                    ? "Deselect All"
                    : `${selectedEvents.length} selected`}
              </Label>
            </div>
            <Button size="sm" disabled={selectedEvents.length === 0 || isImporting} onClick={handleImportSelected}>
              <Plus className="h-4 w-4 mr-1" />
              {isImporting ? "Importing..." : "Import as Work Sessions"}
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {events.length === 0 ? (
                <div className="text-center p-4">
                  <Calendar className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <h3 className="font-medium">No upcoming events</h3>
                  <p className="text-sm text-muted-foreground mt-1">Your calendar events will appear here</p>
                </div>
              ) : (
                events.map(renderEventCard)
              )}
            </TabsContent>

            <TabsContent value="today" className="space-y-4">
              {groupedEvents.today.length === 0 ? (
                <div className="text-center p-4">
                  <h3 className="font-medium">No events today</h3>
                </div>
              ) : (
                groupedEvents.today.map(renderEventCard)
              )}
            </TabsContent>

            <TabsContent value="tomorrow" className="space-y-4">
              {groupedEvents.tomorrow.length === 0 ? (
                <div className="text-center p-4">
                  <h3 className="font-medium">No events tomorrow</h3>
                </div>
              ) : (
                groupedEvents.tomorrow.map(renderEventCard)
              )}
            </TabsContent>

            <TabsContent value="week" className="space-y-4">
              {groupedEvents.thisWeek.length === 0 ? (
                <div className="text-center p-4">
                  <h3 className="font-medium">No events this week</h3>
                </div>
              ) : (
                groupedEvents.thisWeek.map(renderEventCard)
              )}
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}
