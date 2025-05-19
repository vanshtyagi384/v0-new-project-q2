import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { refresh_token } = await request.json()

    if (!refresh_token) {
      return NextResponse.json({ error: "Refresh token is required" }, { status: 400 })
    }

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    // Refresh the access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        refresh_token,
        client_id: clientId!,
        client_secret: clientSecret!,
        grant_type: "refresh_token",
      }),
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json()
      console.error("Google token refresh error:", errorData)
      return NextResponse.json({ error: "Failed to refresh token" }, { status: 500 })
    }

    const tokenData = await tokenResponse.json()

    // Calculate expiration time
    const expiresAt = Date.now() + tokenData.expires_in * 1000

    return NextResponse.json({
      access_token: tokenData.access_token,
      expires_at: expiresAt,
    })
  } catch (error) {
    console.error("Error in token refresh:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
