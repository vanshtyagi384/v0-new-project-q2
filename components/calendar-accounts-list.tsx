"use client"

import { useState, useEffect } from "react"
import { Calendar, MoreHorizontal, RefreshCw, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import googleAuthService from "@/lib/google-auth-service"

export default function CalendarAccountsList() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [lastSynced, setLastSynced] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = googleAuthService.getUserInfo()
      setUserInfo(info)

      // Set mock last synced time
      setLastSynced(new Date().toISOString())
    }

    fetchUserInfo()
  }, [])

  const handleSync = async () => {
    setIsLoading(true)

    // Simulate sync
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLastSynced(new Date().toISOString())
    setIsLoading(false)
  }

  const formatLastSynced = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Connected Calendars</CardTitle>
          <CardDescription>Manage your connected calendar accounts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {userInfo ? (
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Google Calendar</p>
                    <p className="text-sm text-gray-500">{userInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked id="google-calendar-active" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <div>
                  <p className="text-sm text-gray-500">
                    {lastSynced ? <>Last synced: {formatLastSynced(lastSynced)}</> : <>Not synced yet</>}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Primary
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSync}
                    disabled={isLoading}
                    className="flex items-center gap-1"
                  >
                    <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
                    Sync Now
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-sm text-gray-500">No calendars connected yet.</p>
          )}
        </CardContent>
        <CardFooter>
          <p className="text-xs text-gray-500">
            Calendars are synced automatically every 15 minutes. You can also sync manually at any time.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
