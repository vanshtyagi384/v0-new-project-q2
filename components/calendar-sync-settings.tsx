"use client"

import { useState } from "react"
import { Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CalendarSyncSettings() {
  const [syncDirection, setSyncDirection] = useState("bidirectional")
  const [autoSync, setAutoSync] = useState(true)
  const [syncFrequency, setSyncFrequency] = useState("15")
  const [syncWorkSessions, setSyncWorkSessions] = useState(true)
  const [syncMeetings, setSyncMeetings] = useState(true)
  const [addBuffer, setAddBuffer] = useState(true)
  const [bufferTime, setBufferTime] = useState("10")
  const [colorCode, setColorCode] = useState(true)
  const [notifyConflicts, setNotifyConflicts] = useState(true)

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-base">Sync Direction</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Control how data flows between the app and your calendar</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <RadioGroup value={syncDirection} onValueChange={setSyncDirection}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bidirectional" id="bidirectional" />
                <Label htmlFor="bidirectional">Two-way sync (recommended)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="export" id="export" />
                <Label htmlFor="export">Export only (app → calendar)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="import" id="import" />
                <Label htmlFor="import">Import only (calendar → app)</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Automatic Sync</Label>
              <p className="text-sm text-muted-foreground">Automatically sync your calendar at regular intervals</p>
            </div>
            <Switch checked={autoSync} onCheckedChange={setAutoSync} />
          </div>

          {autoSync && (
            <div className="space-y-2 pl-6 border-l-2 border-muted">
              <Label htmlFor="sync-frequency">Sync Frequency</Label>
              <Select value={syncFrequency} onValueChange={setSyncFrequency}>
                <SelectTrigger id="sync-frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">Every 5 minutes</SelectItem>
                  <SelectItem value="15">Every 15 minutes</SelectItem>
                  <SelectItem value="30">Every 30 minutes</SelectItem>
                  <SelectItem value="60">Every hour</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h3 className="text-base font-medium">What to Sync</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Work Sessions</Label>
              <p className="text-sm text-muted-foreground">Sync work sessions to your calendar</p>
            </div>
            <Switch checked={syncWorkSessions} onCheckedChange={setSyncWorkSessions} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Meetings & Events</Label>
              <p className="text-sm text-muted-foreground">Import meetings and events from your calendar</p>
            </div>
            <Switch checked={syncMeetings} onCheckedChange={setSyncMeetings} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h3 className="text-base font-medium">Advanced Settings</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Add Buffer Time</Label>
              <p className="text-sm text-muted-foreground">Add buffer time before and after meetings</p>
            </div>
            <Switch checked={addBuffer} onCheckedChange={setAddBuffer} />
          </div>

          {addBuffer && (
            <div className="space-y-2 pl-6 border-l-2 border-muted">
              <Label htmlFor="buffer-time">Buffer Duration (minutes)</Label>
              <Select value={bufferTime} onValueChange={setBufferTime}>
                <SelectTrigger id="buffer-time">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Color Code Events</Label>
              <p className="text-sm text-muted-foreground">Use different colors for different work types</p>
            </div>
            <Switch checked={colorCode} onCheckedChange={setColorCode} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Notify on Conflicts</Label>
              <p className="text-sm text-muted-foreground">Get notified when work sessions conflict with meetings</p>
            </div>
            <Switch checked={notifyConflicts} onCheckedChange={setNotifyConflicts} />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Save Settings</Button>
      </div>
    </div>
  )
}
