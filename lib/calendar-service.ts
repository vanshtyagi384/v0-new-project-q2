// This is a mock implementation of calendar service
// In a real app, you would use the Google Calendar API or other calendar APIs

export type CalendarProvider = "google" | "outlook" | "apple" | "other"

export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date
  description?: string
  location?: string
  isWorkSession?: boolean
}

export interface CalendarAccount {
  id: string
  provider: CalendarProvider
  email: string
  name: string
  connected: boolean
  lastSynced?: Date
}

// Mock data
const mockAccounts: CalendarAccount[] = [
  {
    id: "1",
    provider: "google",
    email: "alex.smith@example.com",
    name: "Alex Smith",
    connected: true,
    lastSynced: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
  },
]

const mockEvents: CalendarEvent[] = [
  {
    id: "evt1",
    title: "Team Meeting",
    start: new Date(new Date().setHours(10, 0, 0, 0)),
    end: new Date(new Date().setHours(11, 0, 0, 0)),
    description: "Weekly team sync",
    location: "Google Meet",
  },
  {
    id: "evt2",
    title: "Project Planning",
    start: new Date(new Date().setHours(13, 0, 0, 0)),
    end: new Date(new Date().setHours(14, 30, 0, 0)),
    description: "Planning session for Q3",
  },
  {
    id: "evt3",
    title: "Deep Work: Code Review",
    start: new Date(new Date().setHours(15, 0, 0, 0)),
    end: new Date(new Date().setHours(16, 30, 0, 0)),
    description: "Focus time for code review",
    isWorkSession: true,
  },
]

// Get connected accounts
export async function getConnectedCalendarAccounts(): Promise<CalendarAccount[]> {
  // In a real app, this would fetch from your backend
  return Promise.resolve(mockAccounts)
}

// Connect a new calendar account
export async function connectCalendarAccount(provider: CalendarProvider): Promise<CalendarAccount> {
  // In a real app, this would initiate OAuth flow
  console.log(`Connecting to ${provider} calendar`)

  // Mock new account
  const newAccount: CalendarAccount = {
    id: Math.random().toString(36).substring(7),
    provider,
    email: "user@example.com",
    name: "User",
    connected: true,
    lastSynced: new Date(),
  }

  return Promise.resolve(newAccount)
}

// Disconnect a calendar account
export async function disconnectCalendarAccount(accountId: string): Promise<boolean> {
  // In a real app, this would revoke access tokens
  console.log(`Disconnecting account ${accountId}`)
  return Promise.resolve(true)
}

// Get upcoming calendar events
export async function getUpcomingEvents(days = 7): Promise<CalendarEvent[]> {
  // In a real app, this would fetch from the calendar API
  return Promise.resolve(mockEvents)
}

// Export a work session to calendar
export async function exportWorkSessionToCalendar(
  session: {
    name: string
    startTime: Date
    duration: number
    workType: string
  },
  accountId: string,
): Promise<CalendarEvent> {
  // In a real app, this would create an event via the calendar API
  console.log(`Exporting session ${session.name} to calendar ${accountId}`)

  const endTime = new Date(session.startTime)
  endTime.setMinutes(endTime.getMinutes() + session.duration)

  const newEvent: CalendarEvent = {
    id: Math.random().toString(36).substring(7),
    title: `Work Session: ${session.name}`,
    start: session.startTime,
    end: endTime,
    description: `Work type: ${session.workType}`,
    isWorkSession: true,
  }

  return Promise.resolve(newEvent)
}

// Import calendar events as work sessions
export async function importEventsAsWorkSessions(eventIds: string[]): Promise<boolean> {
  // In a real app, this would create work sessions from calendar events
  console.log(`Importing events: ${eventIds.join(", ")}`)
  return Promise.resolve(true)
}

// Sync all work sessions with calendar
export async function syncAllWorkSessions(): Promise<boolean> {
  // In a real app, this would perform a full sync
  console.log("Performing full sync of work sessions")
  return Promise.resolve(true)
}
