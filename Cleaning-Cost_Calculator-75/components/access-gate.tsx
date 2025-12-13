"use client"

import { useState, useEffect, type ReactNode } from "react"
import { Lock, ArrowRight, Shield, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  verifyPassword, 
  isSessionValid, 
  createSession,
  clearSession 
} from "@/lib/access-config"

interface AccessGateProps {
  children: ReactNode
}

export function AccessGate({ children }: AccessGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Check session on mount
  useEffect(() => {
    setIsAuthenticated(isSessionValid())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Small delay for UX
    setTimeout(() => {
      if (verifyPassword(password)) {
        createSession()
        setIsAuthenticated(true)
      } else {
        setError("Invalid access code. Please try again.")
        setPassword("")
      }
      setIsLoading(false)
    }, 500)
  }

  const handleLogout = () => {
    clearSession()
    setIsAuthenticated(false)
    setPassword("")
  }

  // Loading state while checking session
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  // Show login gate if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0f1419] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Lock className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Internal Access Only</h1>
            <p className="text-muted-foreground">
              This tool is restricted to authorized High Cleaning staff.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Access Code</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter access code"
                  className="bg-secondary border-border h-12 text-lg"
                  autoFocus
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-[#272EF5] to-[#05ED43] hover:opacity-90 text-white font-semibold"
                disabled={isLoading || !password}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Verifying...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Access Calculator
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center space-y-4">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              Return to Website
            </a>
            
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
              <Shield className="w-3 h-3" />
              <span>Protected by High Cleaning Security</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // User is authenticated - show the app with logout option
  return (
    <div className="relative">
      {/* Logout button - fixed position */}
      <button
        onClick={handleLogout}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-white bg-card/80 backdrop-blur-sm border border-border rounded-lg transition-colors"
        title="Sign out of calculator"
      >
        <Lock className="w-3 h-3" />
        Sign Out
      </button>
      
      {children}
    </div>
  )
}

