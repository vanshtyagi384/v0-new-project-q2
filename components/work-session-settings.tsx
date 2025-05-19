"use client"

import { Checkbox } from "@/components/ui/checkbox"

import { useState } from "react"
import { Volume2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export default function WorkSessionSettings() {
  const [useVoiceAssistant, setUseVoiceAssistant] = useState(true)
  const [voiceVolume, setVoiceVolume] = useState(80)
  const [voiceType, setVoiceType] = useState("supportive")
  const [autoStartBreaks, setAutoStartBreaks] = useState(true)
  const [notifyBeforeEnd, setNotifyBeforeEnd] = useState(true)
  const [defaultSessionLength, setDefaultSessionLength] = useState("25")
  const [defaultBreakLength, setDefaultBreakLength] = useState("5")

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Voice Assistant Settings</CardTitle>
          <CardDescription>Configure how Gemini AI interacts with you after work sessions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Enable Voice Assistant</Label>
              <p className="text-sm text-muted-foreground">
                Receive voice guidance from Gemini AI after completing work sessions
              </p>
            </div>
            <Switch checked={useVoiceAssistant} onCheckedChange={setUseVoiceAssistant} />
          </div>

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
            <Label>Voice Assistant Style</Label>
            <RadioGroup value={voiceType} onValueChange={setVoiceType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="supportive" id="supportive" />
                <Label htmlFor="supportive">Supportive & Encouraging</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="analytical" id="analytical" />
                <Label htmlFor="analytical">Analytical & Insightful</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="minimal" id="minimal" />
                <Label htmlFor="minimal">Minimal & Direct</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="coaching" id="coaching" />
                <Label htmlFor="coaching">Coaching & Challenging</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Voice Assistant Topics</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="topic-wellbeing" defaultChecked />
                <Label htmlFor="topic-wellbeing">Mental Wellbeing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="topic-productivity" defaultChecked />
                <Label htmlFor="topic-productivity">Productivity</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="topic-breaks" defaultChecked />
                <Label htmlFor="topic-breaks">Break Suggestions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="topic-progress" defaultChecked />
                <Label htmlFor="topic-progress">Work Progress</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="topic-goals" defaultChecked />
                <Label htmlFor="topic-goals">Goal Setting</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="topic-physical" defaultChecked />
                <Label htmlFor="topic-physical">Physical Health</Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Timer Settings</CardTitle>
          <CardDescription>Configure your work session timer preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="default-session">Default Session Length</Label>
              <Select value={defaultSessionLength} onValueChange={setDefaultSessionLength}>
                <SelectTrigger id="default-session">
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="25">25 minutes</SelectItem>
                  <SelectItem value="50">50 minutes</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="default-break">Default Break Length</Label>
              <Select value={defaultBreakLength} onValueChange={setDefaultBreakLength}>
                <SelectTrigger id="default-break">
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Auto-start Breaks</Label>
              <p className="text-sm text-muted-foreground">Automatically start break timer after work session</p>
            </div>
            <Switch checked={autoStartBreaks} onCheckedChange={setAutoStartBreaks} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Notify Before Session End</Label>
              <p className="text-sm text-muted-foreground">Get a notification when session is almost complete</p>
            </div>
            <Switch checked={notifyBeforeEnd} onCheckedChange={setNotifyBeforeEnd} />
          </div>

          <div className="space-y-2">
            <Label>Notification Sound</Label>
            <RadioGroup defaultValue="gentle">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gentle" id="gentle" />
                <Label htmlFor="gentle">Gentle Chime</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bell" id="bell" />
                <Label htmlFor="bell">Meditation Bell</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nature" id="nature" />
                <Label htmlFor="nature">Nature Sounds</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none">No Sound</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Save Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
