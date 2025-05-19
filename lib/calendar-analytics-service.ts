// This service processes calendar and work session data for analytics

export type ActivityCategory =
  | "meetings"
  | "deep_work"
  | "shallow_work"
  | "breaks"
  | "admin"
  | "learning"
  | "personal"
  | "other"

export interface TimeEntry {
  id: string
  title: string
  start: Date
  end: Date
  duration: number // in minutes
  category: ActivityCategory
  source: "calendar" | "work_session"
  tags?: string[]
}

export interface DailyTimeDistribution {
  date: string
  meetings: number
  deep_work: number
  shallow_work: number
  breaks: number
  admin: number
  learning: number
  personal: number
  other: number
  total: number
}

export interface HourlyDistribution {
  hour: number
  meetings: number
  focused_work: number
  other: number
}

export interface CategoryBreakdown {
  category: string
  minutes: number
  percentage: number
}

export interface WeekdayDistribution {
  day: string
  meetings: number
  deep_work: number
  shallow_work: number
  breaks: number
  total: number
}

export interface TimeAnalytics {
  totalTrackedHours: number
  meetingPercentage: number
  focusedWorkPercentage: number
  breakPercentage: number
  otherPercentage: number
  dailyDistribution: DailyTimeDistribution[]
  hourlyDistribution: HourlyDistribution[]
  categoryBreakdown: CategoryBreakdown[]
  weekdayDistribution: WeekdayDistribution[]
  longestFocusStreak: number
  averageMeetingLength: number
  meetingsPerDay: number
  backToBackMeetings: number
}

// Mock data generator for calendar analytics
export function generateMockTimeAnalytics(startDate: Date, endDate: Date): TimeAnalytics {
  // Calculate date range
  const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  // Generate daily distribution
  const dailyDistribution: DailyTimeDistribution[] = []
  const currentDate = new Date(startDate)

  while (currentDate <= endDate) {
    // Skip weekends in the mock data
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      const dateString = currentDate.toISOString().split("T")[0]

      // Generate random but somewhat realistic values
      const meetings = Math.floor(Math.random() * 180) + 30 // 30-210 minutes
      const deep_work = Math.floor(Math.random() * 240) + 60 // 60-300 minutes
      const shallow_work = Math.floor(Math.random() * 120) + 30 // 30-150 minutes
      const breaks = Math.floor(Math.random() * 60) + 30 // 30-90 minutes
      const admin = Math.floor(Math.random() * 60) + 15 // 15-75 minutes
      const learning = Math.floor(Math.random() * 60) // 0-60 minutes
      const personal = Math.floor(Math.random() * 30) // 0-30 minutes
      const other = Math.floor(Math.random() * 30) // 0-30 minutes

      const total = meetings + deep_work + shallow_work + breaks + admin + learning + personal + other

      dailyDistribution.push({
        date: dateString,
        meetings,
        deep_work,
        shallow_work,
        breaks,
        admin,
        learning,
        personal,
        other,
        total,
      })
    }

    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1)
  }

  // Generate hourly distribution
  const hourlyDistribution: HourlyDistribution[] = []
  for (let hour = 8; hour <= 18; hour++) {
    // Different patterns based on time of day
    let meetingProbability = 0.3
    let focusedWorkProbability = 0.6

    // More meetings in late morning and afternoon
    if (hour >= 10 && hour <= 11) meetingProbability = 0.6
    if (hour >= 14 && hour <= 16) meetingProbability = 0.5

    // More focused work in early morning and late afternoon
    if (hour >= 8 && hour <= 9) focusedWorkProbability = 0.8
    if (hour >= 16 && hour <= 18) focusedWorkProbability = 0.7

    // Less work during lunch
    if (hour === 12) {
      meetingProbability = 0.2
      focusedWorkProbability = 0.3
    }

    const meetings = Math.floor(Math.random() * 60 * meetingProbability)
    const focused_work = Math.floor(Math.random() * 60 * focusedWorkProbability)
    const other = Math.floor(Math.random() * 60 * (1 - meetingProbability - focusedWorkProbability))

    hourlyDistribution.push({
      hour,
      meetings,
      focused_work,
      other,
    })
  }

  // Calculate category breakdown
  const totalMinutes = dailyDistribution.reduce((sum, day) => sum + day.total, 0)
  const meetingMinutes = dailyDistribution.reduce((sum, day) => sum + day.meetings, 0)
  const deepWorkMinutes = dailyDistribution.reduce((sum, day) => sum + day.deep_work, 0)
  const shallowWorkMinutes = dailyDistribution.reduce((sum, day) => sum + day.shallow_work, 0)
  const breakMinutes = dailyDistribution.reduce((sum, day) => sum + day.breaks, 0)
  const adminMinutes = dailyDistribution.reduce((sum, day) => sum + day.admin, 0)
  const learningMinutes = dailyDistribution.reduce((sum, day) => sum + day.learning, 0)
  const personalMinutes = dailyDistribution.reduce((sum, day) => sum + day.personal, 0)
  const otherMinutes = dailyDistribution.reduce((sum, day) => sum + day.other, 0)

  const categoryBreakdown: CategoryBreakdown[] = [
    { category: "Meetings", minutes: meetingMinutes, percentage: (meetingMinutes / totalMinutes) * 100 },
    { category: "Deep Work", minutes: deepWorkMinutes, percentage: (deepWorkMinutes / totalMinutes) * 100 },
    { category: "Shallow Work", minutes: shallowWorkMinutes, percentage: (shallowWorkMinutes / totalMinutes) * 100 },
    { category: "Breaks", minutes: breakMinutes, percentage: (breakMinutes / totalMinutes) * 100 },
    { category: "Admin", minutes: adminMinutes, percentage: (adminMinutes / totalMinutes) * 100 },
    { category: "Learning", minutes: learningMinutes, percentage: (learningMinutes / totalMinutes) * 100 },
    { category: "Personal", minutes: personalMinutes, percentage: (personalMinutes / totalMinutes) * 100 },
    { category: "Other", minutes: otherMinutes, percentage: (otherMinutes / totalMinutes) * 100 },
  ].sort((a, b) => b.minutes - a.minutes)

  // Generate weekday distribution
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const weekdayDistribution: WeekdayDistribution[] = weekdays.map((day) => {
    const meetings = Math.floor(Math.random() * 180) + 30
    const deep_work = Math.floor(Math.random() * 240) + 60
    const shallow_work = Math.floor(Math.random() * 120) + 30
    const breaks = Math.floor(Math.random() * 60) + 30
    const total = meetings + deep_work + shallow_work + breaks

    return {
      day,
      meetings,
      deep_work,
      shallow_work,
      breaks,
      total,
    }
  })

  // Calculate other metrics
  const totalTrackedHours = totalMinutes / 60
  const meetingPercentage = (meetingMinutes / totalMinutes) * 100
  const focusedWorkPercentage = ((deepWorkMinutes + shallowWorkMinutes) / totalMinutes) * 100
  const breakPercentage = (breakMinutes / totalMinutes) * 100
  const otherPercentage = 100 - meetingPercentage - focusedWorkPercentage - breakPercentage

  const longestFocusStreak = Math.floor(Math.random() * 120) + 60 // 60-180 minutes
  const averageMeetingLength = Math.floor(Math.random() * 30) + 15 // 15-45 minutes
  const meetingsPerDay = Math.floor(Math.random() * 4) + 2 // 2-6 meetings
  const backToBackMeetings = Math.floor(Math.random() * 10) // 0-10 back-to-back meetings

  return {
    totalTrackedHours,
    meetingPercentage,
    focusedWorkPercentage,
    breakPercentage,
    otherPercentage,
    dailyDistribution,
    hourlyDistribution,
    categoryBreakdown,
    weekdayDistribution,
    longestFocusStreak,
    averageMeetingLength,
    meetingsPerDay,
    backToBackMeetings,
  }
}

// Get time analytics for a date range
export async function getTimeAnalytics(startDate: Date, endDate: Date): Promise<TimeAnalytics> {
  // In a real app, this would fetch and process actual calendar and work session data
  // For now, we'll generate mock data
  return generateMockTimeAnalytics(startDate, endDate)
}
