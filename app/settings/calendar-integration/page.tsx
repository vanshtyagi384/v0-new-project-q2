"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check, Loader2, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CalendarAccountsList from "@/components/calendar-accounts-list"
import CalendarSyncSettings from "@/components/calendar-sync-settings"
import UpcomingCalendarEvents from "@/components/upcoming-calendar-events"
import googleAuthService from "@/lib/google-auth-service"

export default function CalendarIntegrationPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true)
      const isAuth = googleAuthService.isAuthenticated()
      setIsAuthenticated(isAuth)

      if (isAuth) {
        const info = await googleAuthService.fetchUserInfo()
        setUserInfo(info)
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleConnect = () => {
    router.push("/auth/google")
  }

  const handleDisconnect = () => {
    googleAuthService.logout()
    setIsAuthenticated(false)
    setUserInfo(null)
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Calendar Integration</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => router.push("/settings")}>
              Back to Settings
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex h-[200px] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-green-600" />
          </div>
        ) : (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Google Calendar Connection</CardTitle>
                <CardDescription>
                  Connect your Google Calendar to sync work sessions and view your schedule.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Connected to Google Calendar</p>
                        <p className="text-sm text-gray-500">{userInfo?.email || "Your Google Account"}</p>
                      </div>
                    </div>
                    <Button variant="outline" onClick={handleDisconnect} className="mt-2">
                      Disconnect Account
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      Connect your Google Calendar to sync work sessions and view your schedule in one place.
                    </p>
                    <Button onClick={handleConnect} className="flex items-center gap-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Connect Google Calendar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {isAuthenticated && (
              <Tabs defaultValue="accounts" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="accounts">Calendar Accounts</TabsTrigger>
                  <TabsTrigger value="settings">Sync Settings</TabsTrigger>
                  <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                </TabsList>
                <TabsContent value="accounts" className="space-y-4">
                  <CalendarAccountsList />
                </TabsContent>
                <TabsContent value="settings" className="space-y-4">
                  <CalendarSyncSettings />
                </TabsContent>
                <TabsContent value="events" className="space-y-4">
                  <UpcomingCalendarEvents />
                </TabsContent>
              </Tabs>
            )}

            <div className="mt-6">
              <h3 className="mb-4 text-lg font-medium">Other Calendar Services</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Microsoft Outlook</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-500">Connect your Outlook calendar</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                      <Plus className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Apple Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-500">Connect your Apple calendar</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                      <Plus className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
