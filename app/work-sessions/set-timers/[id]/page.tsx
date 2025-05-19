import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import SetTimerForm from "@/components/set-timer-form"

// Mock data - in a real app, this would come from your database
const mockTimer = {
  id: "1",
  name: "Morning Deep Work",
  duration: "50",
  workType: "focus",
  voiceEnabled: true,
  voiceVolume: 75,
  voiceStyle: "supportive",
  customPrompt: "Great job on your morning deep work session! What's your next priority for today?",
  recurring: true,
  recurringDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  recurringTime: "09:00",
}

export default function EditTimerPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the timer data based on the ID
  const timer = mockTimer

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center space-x-2 mb-6">
          <Link href="/work-sessions/set-timers">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Edit Timer</h2>
        </div>

        <SetTimerForm initialValues={timer} onSave={(timer) => console.log("Timer updated:", timer)} />
      </div>
    </div>
  )
}
