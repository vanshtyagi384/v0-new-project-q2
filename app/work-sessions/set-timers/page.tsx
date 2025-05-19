"use client"

import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import SavedTimersList from "@/components/saved-timers-list"

export default function SetTimersPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link href="/work-sessions">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Manage Timers</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/work-sessions/set-timers/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create New Timer
              </Button>
            </Link>
          </div>
        </div>

        <SavedTimersList />
      </div>
    </div>
  )
}
