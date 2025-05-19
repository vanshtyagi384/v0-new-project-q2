"use client"

import { useState } from "react"
import { Frown, Meh, Smile, SmilePlus, ThumbsDown } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [notes, setNotes] = useState("")

  const moods = [
    { value: 1, icon: ThumbsDown, label: "Very Bad", color: "text-red-500" },
    { value: 2, icon: Frown, label: "Bad", color: "text-orange-500" },
    { value: 3, icon: Meh, label: "Okay", color: "text-yellow-500" },
    { value: 4, icon: Smile, label: "Good", color: "text-green-500" },
    { value: 5, icon: SmilePlus, label: "Great", color: "text-emerald-500" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        {moods.map((mood) => {
          const Icon = mood.icon
          return (
            <button
              key={mood.value}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                selectedMood === mood.value ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
              onClick={() => setSelectedMood(mood.value)}
            >
              <Icon className={`h-8 w-8 mb-1 ${mood.color}`} />
              <span className="text-xs">{mood.label}</span>
            </button>
          )
        })}
      </div>
      <Textarea
        placeholder="Add notes about how you're feeling today..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="min-h-[100px]"
      />
    </div>
  )
}
