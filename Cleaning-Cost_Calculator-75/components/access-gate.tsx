"use client"

import { useState, useEffect, type ReactNode, type FormEvent } from "react"
import { Lock, ArrowRight, Shield, Home } from "lucide-react"
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
  const [mounted, setMounted] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Handle mounting and session check
  useEffect(() => {
    setMounted(true)
    const valid = isSessionValid()
    setIsAuthenticated(valid)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

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

  // Show loading only on initial mount
  if (!mounted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0f1419 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94a3b8'
      }}>
        Loading...
      </div>
    )
  }

  // Show login gate if not authenticated
  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0f1419 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              marginBottom: '1.5rem'
            }}>
              <Lock style={{ width: '40px', height: '40px', color: '#ef4444' }} />
            </div>
            <h1 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#ffffff',
              marginBottom: '0.5rem'
            }}>
              Internal Access Only
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
              This tool is restricted to authorized High Cleaning staff members.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div style={{
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(71, 85, 105, 0.3)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ 
                  display: 'block',
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  marginBottom: '0.5rem'
                }}>
                  Access Code
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter access code"
                  autoFocus
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    height: '48px',
                    padding: '0 1rem',
                    fontSize: '1rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(71, 85, 105, 0.5)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {error && (
                <div style={{
                  fontSize: '0.875rem',
                  color: '#f87171',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isLoading || !password}
                style={{
                  width: '100%',
                  height: '48px',
                  background: 'linear-gradient(135deg, #272EF5 0%, #05ED43 100%)',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: password && !isLoading ? 'pointer' : 'not-allowed',
                  opacity: password && !isLoading ? 1 : 0.6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                {isLoading ? (
                  <>
                    <span style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#ffffff',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Verifying...
                  </>
                ) : (
                  <>
                    Access Calculator
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <a 
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                color: '#94a3b8',
                textDecoration: 'none'
              }}
            >
              <Home style={{ width: '16px', height: '16px' }} />
              Return to Website
            </a>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: 'rgba(148, 163, 184, 0.6)',
              marginTop: '1rem'
            }}>
              <Shield style={{ width: '12px', height: '12px' }} />
              <span>High Cleaning NJ | Internal Operations Portal</span>
            </div>
          </div>
        </div>

        {/* Spinner animation */}
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // User is authenticated - show the app
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleLogout}
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0.75rem',
          fontSize: '0.75rem',
          color: '#94a3b8',
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(71, 85, 105, 0.3)',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        title="Sign out of calculator"
      >
        <Lock style={{ width: '12px', height: '12px' }} />
        Sign Out
      </button>
      
      {children}
    </div>
  )
}
