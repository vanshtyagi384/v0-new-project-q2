"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import googleAuthService from "@/lib/google-auth-service"

export default function GoogleAuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const code = searchParams.get("code")
    const errorParam = searchParams.get("error")

    if (errorParam) {
      setError(
        errorParam === "access_denied"
          ? "You denied access to your Google account."
          : `Authentication error: ${errorParam}`,
      )
      return
    }

    if (code) {
      handleAuthCode(code)
    }
  }, [searchParams])

  const handleAuthCode = async (code: string) => {
    setIsLoading(true)
    setError(null)

    try {
      await googleAuthService.exchangeCodeForTokens(code)
      setSuccess(true)

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/settings/calendar-integration")
      }, 2000)
    } catch (err) {
      console.error("Error exchanging code:", err)
      setError("Failed to authenticate with Google. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    setIsLoading(true)
    window.location.href = googleAuthService.getAuthUrl()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Google Authentication</CardTitle>
          <CardDescription>
            Connect your Google account to enable calendar integration and other features.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-green-600" />
              <p className="mt-4 text-center text-sm text-gray-500">
                {success ? "Authentication successful! Redirecting..." : "Processing authentication..."}
              </p>
            </div>
          ) : success ? (
            <div className="rounded-lg bg-green-50 p-4 text-green-800">
              <p className="text-center font-medium">Successfully connected your Google account!</p>
              <p className="mt-2 text-center text-sm">Redirecting to calendar integration settings...</p>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-800">
                  <p>{error}</p>
                </div>
              )}
              <div className="flex flex-col items-center justify-center py-4">
                <p className="mb-6 text-center text-sm text-gray-500">
                  Click the button below to connect your Google account. You'll be redirected to Google's authentication
                  page.
                </p>
                <Button
                  onClick={handleGoogleLogin}
                  className="flex w-full items-center justify-center gap-2"
                  disabled={isLoading}
                >
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
                  Connect with Google
                </Button>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={() => router.push("/settings/calendar-integration")} className="mt-2">
            Back to Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
