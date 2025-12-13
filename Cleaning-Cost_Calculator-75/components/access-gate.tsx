"use client"

import { useState, useEffect, type ReactNode } from "react"
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

  useEffect(() => {
    setMounted(true)
    if (isSessionValid()) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    if (!password || isLoading) return
    
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  const handleLogout = () => {
    clearSession()
    setIsAuthenticated(false)
    setPassword("")
  }

  // Server-side and initial render - show minimal loading
  if (!mounted) {
    return null
  }

  // Authenticated - show content
  if (isAuthenticated) {
    return (
      <div style={{ position: 'relative' }}>
        <button
          onClick={handleLogout}
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            fontSize: '12px',
            color: '#94a3b8',
            background: 'rgba(30, 41, 59, 0.9)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          <Lock style={{ width: '12px', height: '12px' }} />
          Sign Out
        </button>
        {children}
      </div>
    )
  }

  // Not authenticated - show login
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0f1419 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        
        {/* Lock Icon */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '16px',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            marginBottom: '24px'
          }}>
            <Lock style={{ width: '40px', height: '40px', color: '#ef4444' }} />
          </div>
          
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#ffffff',
            margin: '0 0 8px 0'
          }}>
            Internal Access Only
          </h1>
          
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '14px',
            margin: 0,
            lineHeight: '1.5'
          }}>
            This tool is restricted to authorized High Cleaning staff members.
          </p>
        </div>

        {/* Login Box */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.6)',
          border: '1px solid rgba(71, 85, 105, 0.4)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          
          {/* Label */}
          <label style={{ 
            display: 'block',
            fontSize: '14px',
            color: '#94a3b8',
            marginBottom: '8px'
          }}>
            Access Code
          </label>
          
          {/* Input */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter access code"
            autoFocus
            disabled={isLoading}
            style={{
              width: '100%',
              height: '48px',
              padding: '0 16px',
              fontSize: '16px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(71, 85, 105, 0.5)',
              borderRadius: '8px',
              color: '#ffffff',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: '16px'
            }}
          />

          {/* Error Message */}
          {error && (
            <div style={{
              fontSize: '14px',
              color: '#f87171',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px'
            }}>
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="button"
            onClick={handleLogin}
            disabled={isLoading || !password}
            style={{
              width: '100%',
              height: '48px',
              background: password && !isLoading 
                ? 'linear-gradient(135deg, #272EF5 0%, #05ED43 100%)' 
                : 'rgba(71, 85, 105, 0.5)',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              borderRadius: '8px',
              cursor: password && !isLoading ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            {isLoading ? (
              'Verifying...'
            ) : (
              <>
                Access Calculator
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </>
            )}
          </button>
        </div>

        {/* Footer Links */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#94a3b8',
              textDecoration: 'none',
              marginBottom: '16px'
            }}
          >
            <Home style={{ width: '16px', height: '16px' }} />
            Return to Website
          </a>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '12px',
            color: 'rgba(148, 163, 184, 0.6)',
            marginTop: '16px'
          }}>
            <Shield style={{ width: '12px', height: '12px' }} />
            <span>High Cleaning NJ | Internal Operations Portal</span>
          </div>
        </div>
      </div>
    </div>
  )
}
