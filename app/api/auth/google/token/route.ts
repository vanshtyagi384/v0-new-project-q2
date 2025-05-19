import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json({ error: "Authorization code is required" }, { status: 400 })
    }

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const redirectUri = `${request.nextUrl.origin}/api/auth/google/callback`

    // Exchange code for tokens
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: clientId!,
        client_secret: clientSecret!,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json()
      console.error("Google token exchange error:", errorData)
      return NextResponse.json({ error: "Failed to exchange code for tokens" }, { status: 500 })
    }

    const tokenData = await tokenResponse.json()

    // Calculate expiration time
    const expiresAt = Date.now() + tokenData.expires_in * 1000

    return NextResponse.json({
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token,
      expires_at: expiresAt,
      scope: tokenData.scope,
    })
  } catch (error) {
    console.error("Error in token exchange:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
