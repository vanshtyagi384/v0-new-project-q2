import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Bell, Home, BarChart3, BookOpen, MessageSquare, Settings, ThumbsUp } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserFeedbackWidget from "@/components/user-feedback-widget"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="hidden font-bold sm:inline-block">MindfulRemote</span>
                  </Link>
                  <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/dashboard" className="transition-colors hover:text-foreground/80">
                      Dashboard
                    </Link>
                    <Link href="/resources" className="transition-colors hover:text-foreground/80">
                      Resources
                    </Link>
                    <Link href="/support" className="transition-colors hover:text-foreground/80">
                      Support
                    </Link>
                    <Link href="/analytics" className="transition-colors hover:text-foreground/80">
                      Analytics
                    </Link>
                    <Link href="/feedback" className="transition-colors hover:text-foreground/80">
                      Feedback
                    </Link>
                  </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <div className="w-full flex-1 md:w-auto md:flex-none">
                    <Button variant="outline" size="icon" className="mr-2">
                      <Bell className="h-4 w-4" />
                      <span className="sr-only">Notifications</span>
                    </Button>
                  </div>
                  <nav className="flex items-center">
                    <Link href="/settings">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Link>
                  </nav>
                </div>
              </div>
            </header>
            <div className="flex flex-1">
              <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                  <div className="flex h-[60px] items-center border-b px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                      <span className="">MindfulRemote</span>
                    </Link>
                  </div>
                  <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        <Home className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Link
                        href="/resources"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        <BookOpen className="h-4 w-4" />
                        Resources
                      </Link>
                      <Link
                        href="/support"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Support
                      </Link>
                      <Link
                        href="/analytics"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        <BarChart3 className="h-4 w-4" />
                        Analytics
                      </Link>
                      <Link
                        href="/feedback"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        Feedback
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>
                    </nav>
                  </div>
                  <div className="mt-auto p-4">
                    <Link href="/settings">
                      <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5 text-xs">
                          <div className="font-medium">Alex Smith</div>
                          <div className="text-gray-500 dark:text-gray-400">alex@example.com</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col">{children}</div>
            </div>
            <UserFeedbackWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
