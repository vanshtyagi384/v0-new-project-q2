"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw, CheckCircle, Clock, Settings } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import VoiceAssistant from "@/components/voice-assistant"

// Mock data - in a real app, this would come from your database
const mockTimers = [
  {
    id: "1",
    name: "Morning Deep Work",
    duration: "50",
    workType: "focus",
    voiceEnabled: true,
  },
  {
    id: "2",
    name: "Email Processing",
    duration: "25",
    workType: "email",
    voiceEnabled: true,
  },
  {
    id: "3",
    name: "Creative Brainstorming",
    duration: "30",
    workType: "creative",
    voiceEnabled: true,
  },
  {
    id: "4",
    name: "Learning Session",
    duration: "45",
    workType: "learning",
    voiceEnabled: false,
  },
]

export default function WorkSessionTimer({ timerId }: { timerId?: string }) {
  const [isRunning, setIsRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [totalTime, setTotalTime] = useState(25 * 60)
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false)
  const [selectedTimer, setSelectedTimer] = useState<string | undefined>(timerId)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Load timer settings if a timer is selected
  useEffect(() => {
    if (selectedTimer) {
      const timer = mockTimers.find((t) => t.id === selectedTimer)
      if (timer) {
        const durationInMinutes = Number.parseInt(timer.duration)
        setTimeLeft(durationInMinutes * 60)
        setTotalTime(durationInMinutes * 60)
      }
    }
  }, [selectedTimer])

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current as NodeJS.Timeout)
            setIsRunning(false)

            // Check if voice is enabled for this timer
            if (selectedTimer) {
              const timer = mockTimers.find((t) => t.id === selectedTimer)
              if (timer && timer.voiceEnabled) {
                setShowVoiceAssistant(true)
              }
            } else {
              // Default behavior if no timer is selected
              setShowVoiceAssistant(true)
            }

            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isRunning, selectedTimer])

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(totalTime)
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  const completeSession = () => {
    setIsRunning(false)
    setTimeLeft(0)
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    // Check if voice is enabled for this timer
    if (selectedTimer) {
      const timer = mockTimers.find((t) => t.id === selectedTimer)
      if (timer && timer.voiceEnabled) {
        setShowVoiceAssistant(true)
      }
    } else {
      // Default behavior if no timer is selected
      setShowVoiceAssistant(true)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progress = ((totalTime - timeLeft) / totalTime) * 100

  const handleTimerChange = (value: string) => {
    if (isRunning) {
      // If timer is running, confirm before changing
      if (window.confirm("Changing the timer will reset your current session. Continue?")) {
        setIsRunning(false)
        if (timerRef.current) {
          clearInterval(timerRef.current)
        }
        setSelectedTimer(value)
      }
    } else {
      setSelectedTimer(value)
    }
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl">Work Session Timer</CardTitle>
          <div className="flex items-center space-x-2">
            <Link href="/work-sessions/set-timers">
              <Button variant="outline" size="icon" title="Manage Timers">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <Select value={selectedTimer} onValueChange={handleTimerChange}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select a timer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom Timer</SelectItem>
                {mockTimers.map((timer) => (
                  <SelectItem key={timer.id} value={timer.id}>
                    {timer.name} ({timer.duration} min)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-sm text-muted-foreground flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {selectedTimer ? mockTimers.find((t) => t.id === selectedTimer)?.workType || "Custom" : "Custom"}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="text-5xl font-bold tabular-nums">{formatTime(timeLeft)}</div>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setTimeLeft(15 * 60)
                setTotalTime(15 * 60)
                setSelectedTimer(undefined)
                resetTimer()
              }}
            >
              15 min
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setTimeLeft(25 * 60)
                setTotalTime(25 * 60)
                setSelectedTimer(undefined)
                resetTimer()
              }}
            >
              25 min
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setTimeLeft(50 * 60)
                setTotalTime(50 * 60)
                setSelectedTimer(undefined)
                resetTimer()
              }}
            >
              50 min
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="icon" onClick={resetTimer}>
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            onClick={toggleTimer}
            className={isRunning ? "bg-orange-600 hover:bg-orange-700" : "bg-green-600 hover:bg-green-700"}
          >
            {isRunning ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button variant="outline" size="icon" onClick={completeSession}>
            <CheckCircle className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <VoiceAssistant
        isOpen={showVoiceAssistant}
        onClose={() => setShowVoiceAssistant(false)}
        workType={selectedTimer ? mockTimers.find((t) => t.id === selectedTimer)?.workType : undefined}
      />
    </>
  )
}
