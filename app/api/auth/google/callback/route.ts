import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const error = searchParams.get("error")

  if (error) {
    return NextResponse.redirect(new URL(`/auth/google?error=${error}`, request.url))
  }

  if (!code) {
    return NextResponse.redirect(new URL("/auth/google?error=no_code", request.url))
  }

  // Redirect to the auth page with the code
  return NextResponse.redirect(new URL(`/auth/google?code=${code}`, request.url))
}
