"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Save, Trash2, Volume2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TimerFormProps {
  onSave: (timer: any) => void
  initialValues?: any
}

export default function SetTimerForm({ onSave, initialValues }: TimerFormProps) {
  const [name, setName] = useState(initialValues?.name || "")
  const [duration, setDuration] = useState(initialValues?.duration || "25")
  const [workType, setWorkType] = useState(initialValues?.workType || "focus")
  const [voiceEnabled, setVoiceEnabled] = useState(initialValues?.voiceEnabled !== false)
  const [voiceVolume, setVoiceVolume] = useState(initialValues?.voiceVolume || 80)
  const [voiceStyle, setVoiceStyle] = useState(initialValues?.voiceStyle || "supportive")
  const [customPrompt, setCustomPrompt] = useState(initialValues?.customPrompt || "")
  const [recurring, setRecurring] = useState(initialValues?.recurring || false)
  const [recurringDays, setRecurringDays] = useState(initialValues?.recurringDays || [])
  const [recurringTime, setRecurringTime] = useState(initialValues?.recurringTime || "09:00")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      name,
      duration,
      workType,
      voiceEnabled,
      voiceVolume,
      voiceStyle,
      customPrompt,
      recurring,
      recurringDays,
      recurringTime,
    })
  }

  const toggleDay = (day: string) => {
    if (recurringDays.includes(day)) {
      setRecurringDays(recurringDays.filter((d) => d !== day))
    } else {
      setRecurringDays([...recurringDays, day])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>{initialValues ? "Edit Timer" : "Create New Timer"}</CardTitle>
          <CardDescription>Configure a work session timer with Gemini voiceover support</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="voice">Voice Settings</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Timer Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Deep Work Session"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    className={duration === "15" ? "border-green-500" : ""}
                    onClick={() => setDuration("15")}
                  >
                    15
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={duration === "25" ? "border-green-500" : ""}
                    onClick={() => setDuration("25")}
                  >
                    25
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={duration === "50" ? "border-green-500" : ""}
                    onClick={() => setDuration("50")}
                  >
                    50
                  </Button>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    max="180"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="work-type">Work Type</Label>
                <Select value={workType} onValueChange={setWorkType}>
                  <SelectTrigger id="work-type">
                    <SelectValue placeholder="Select work type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="focus">Deep Focus</SelectItem>
                    <SelectItem value="creative">Creative Work</SelectItem>
                    <SelectItem value="admin">Administrative</SelectItem>
                    <SelectItem value="learning">Learning</SelectItem>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="email">Email/Communication</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="voice" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Enable Gemini Voiceover</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive voice guidance from Gemini AI after completing this work session
                  </p>
                </div>
                <Switch checked={voiceEnabled} onCheckedChange={setVoiceEnabled} />
              </div>

              {voiceEnabled && (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Voice Volume</Label>
                      <span className="text-sm text-muted-foreground">{voiceVolume}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      <Slider
                        value={[voiceVolume]}
                        max={100}
                        step={1}
                        className="flex-1"
                        onValueChange={(value) => setVoiceVolume(value[0])}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="voice-style">Voice Style</Label>
                    <Select value={voiceStyle} onValueChange={setVoiceStyle}>
                      <SelectTrigger id="voice-style">
                        <SelectValue placeholder="Select voice style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supportive">Supportive & Encouraging</SelectItem>
                        <SelectItem value="analytical">Analytical & Insightful</SelectItem>
                        <SelectItem value="minimal">Minimal & Direct</SelectItem>
                        <SelectItem value="coaching">Coaching & Challenging</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-prompt">Custom Voice Prompt (Optional)</Label>
                    <Textarea
                      id="custom-prompt"
                      placeholder="Enter specific instructions for Gemini AI after this work session..."
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave blank to use default prompts based on work type and voice style
                    </p>
                  </div>
                </>
              )}
            </TabsContent>

            <TabsContent value="schedule" className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Recurring Schedule</Label>
                  <p className="text-sm text-muted-foreground">
                    Set this timer to automatically start on specific days and times
                  </p>
                </div>
                <Switch checked={recurring} onCheckedChange={setRecurring} />
              </div>

              {recurring && (
                <>
                  <div className="space-y-2">
                    <Label>Days of Week</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <Button
                          key={day}
                          type="button"
                          variant="outline"
                          className={
                            recurringDays.includes(day)
                              ? "bg-green-100 text-green-800 border-green-500 dark:bg-green-900/30 dark:text-green-400"
                              : ""
                          }
                          onClick={() => toggleDay(day)}
                        >
                          {day}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recurring-time">Start Time</Label>
                    <Input
                      id="recurring-time"
                      type="time"
                      value={recurringTime}
                      onChange={(e) => setRecurringTime(e.target.value)}
                    />
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          {initialValues && (
            <Button type="button" variant="outline" className="text-red-500 hover:text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          )}
          <Button type="submit" className="bg-green-600 hover:bg-green-700 ml-auto">
            {initialValues ? (
              <>
                <Save className="mr-2 h-4 w-4" />
                Update Timer
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Create Timer
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
