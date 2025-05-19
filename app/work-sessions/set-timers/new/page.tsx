"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import SetTimerForm from "@/components/set-timer-form"

export default function NewTimerPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center space-x-2 mb-6">
          <Link href="/work-sessions/set-timers">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Create New Timer</h2>
        </div>

        <SetTimerForm onSave={(timer) => console.log("Timer saved:", timer)} />
      </div>
    </div>
  )
}
