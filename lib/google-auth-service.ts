// This service handles Google OAuth authentication
export interface GoogleAuthToken {
  access_token: string
  refresh_token: string
  expires_at: number
  scope: string
}

export interface GoogleUserInfo {
  id: string
  email: string
  name: string
  picture: string
}

class GoogleAuthService {
  private static instance: GoogleAuthService
  private tokens: GoogleAuthToken | null = null
  private userInfo: GoogleUserInfo | null = null

  // Singleton pattern
  public static getInstance(): GoogleAuthService {
    if (!GoogleAuthService.instance) {
      GoogleAuthService.instance = new GoogleAuthService()
    }
    return GoogleAuthService.instance
  }

  // Initialize with stored tokens if available
  constructor() {
    if (typeof window !== "undefined") {
      const storedTokens = localStorage.getItem("google_auth_tokens")
      if (storedTokens) {
        this.tokens = JSON.parse(storedTokens)
      }

      const storedUserInfo = localStorage.getItem("google_user_info")
      if (storedUserInfo) {
        this.userInfo = JSON.parse(storedUserInfo)
      }
    }
  }

  // Get the Google OAuth URL
  public getAuthUrl(): string {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    const redirectUri = `${window.location.origin}/api/auth/google/callback`
    const scope = encodeURIComponent("profile email https://www.googleapis.com/auth/calendar")

    return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`
  }

  // Exchange authorization code for tokens
  public async exchangeCodeForTokens(code: string): Promise<GoogleAuthToken> {
    try {
      const response = await fetch("/api/auth/google/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })

      if (!response.ok) {
        throw new Error("Failed to exchange code for tokens")
      }

      const tokens = await response.json()
      this.setTokens(tokens)
      await this.fetchUserInfo()
      return tokens
    } catch (error) {
      console.error("Error exchanging code for tokens:", error)
      throw error
    }
  }

  // Set tokens and store them
  private setTokens(tokens: GoogleAuthToken): void {
    this.tokens = tokens
    if (typeof window !== "undefined") {
      localStorage.setItem("google_auth_tokens", JSON.stringify(tokens))
    }
  }

  // Get the current tokens
  public getTokens(): GoogleAuthToken | null {
    return this.tokens
  }

  // Check if the user is authenticated
  public isAuthenticated(): boolean {
    if (!this.tokens) return false

    // Check if tokens are expired
    const now = Date.now()
    return now < this.tokens.expires_at
  }

  // Refresh the access token if needed
  public async refreshTokenIfNeeded(): Promise<boolean> {
    if (!this.tokens) return false

    const now = Date.now()
    if (now >= this.tokens.expires_at) {
      try {
        const response = await fetch("/api/auth/google/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh_token: this.tokens.refresh_token }),
        })

        if (!response.ok) {
          throw new Error("Failed to refresh token")
        }

        const newTokens = await response.json()
        this.setTokens({
          ...this.tokens,
          access_token: newTokens.access_token,
          expires_at: newTokens.expires_at,
        })
        return true
      } catch (error) {
        console.error("Error refreshing token:", error)
        return false
      }
    }

    return true
  }

  // Fetch user information
  public async fetchUserInfo(): Promise<GoogleUserInfo | null> {
    if (!this.isAuthenticated()) return null

    try {
      await this.refreshTokenIfNeeded()

      const response = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${this.tokens?.access_token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch user info")
      }

      const userInfo = await response.json()
      this.userInfo = userInfo

      if (typeof window !== "undefined") {
        localStorage.setItem("google_user_info", JSON.stringify(userInfo))
      }

      return userInfo
    } catch (error) {
      console.error("Error fetching user info:", error)
      return null
    }
  }

  // Get user information
  public getUserInfo(): GoogleUserInfo | null {
    return this.userInfo
  }

  // Logout
  public logout(): void {
    this.tokens = null
    this.userInfo = null

    if (typeof window !== "undefined") {
      localStorage.removeItem("google_auth_tokens")
      localStorage.removeItem("google_user_info")
    }
  }
}

export default GoogleAuthService.getInstance()
