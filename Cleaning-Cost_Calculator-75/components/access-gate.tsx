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

// Login page component - always renders the full form
function LoginPage({ onLogin }: { onLogin: (pwd: string) => boolean }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    if (!password.trim() || isLoading) return
    
    setIsLoading(true)
    setError("")

    setTimeout(() => {
      const success = onLogin(password)
      if (!success) {
        setError("Invalid access code. Please try again.")
        setPassword("")
      }
      setIsLoading(false)
    }, 400)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0f1419 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ width: '100%', maxWidth: '380px' }}>
        {/* Icon */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '72px',
              height: '72px',
              borderRadius: '16px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              marginBottom: '20px'
            }}
          >
            <Lock style={{ width: '36px', height: '36px', color: '#ef4444' }} />
          </div>
          <h1
            style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 10px 0'
            }}
          >
            Internal Access Only
          </h1>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '14px',
              margin: 0,
              lineHeight: '1.5'
            }}
          >
            This tool is restricted to authorized High Cleaning staff members. Please authenticate through the company portal to access this resource.
          </p>
        </div>

        {/* Login Card */}
        <div
          style={{
            background: 'rgba(30, 41, 59, 0.7)',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px'
          }}
        >
          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                color: '#cbd5e1',
                marginBottom: '8px'
              }}
            >
              Access Code
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your access code"
              autoFocus
              autoComplete="off"
              disabled={isLoading}
              style={{
                width: '100%',
                height: '46px',
                padding: '0 14px',
                fontSize: '15px',
                background: '#0f172a',
                border: '1px solid rgba(71, 85, 105, 0.6)',
                borderRadius: '8px',
                color: '#f1f5f9',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {error && (
            <div
              style={{
                fontSize: '13px',
                color: '#fca5a5',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                padding: '10px 12px',
                marginBottom: '16px'
              }}
            >
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading || !password.trim()}
            style={{
              width: '100%',
              height: '46px',
              background: password.trim() && !isLoading
                ? 'linear-gradient(135deg, #272EF5 0%, #05ED43 100%)'
                : '#334155',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '15px',
              border: 'none',
              borderRadius: '8px',
              cursor: password.trim() && !isLoading ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {isLoading ? 'Verifying...' : (
              <>
                Access Calculator
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              color: '#94a3b8',
              textDecoration: 'none'
            }}
          >
            <Home style={{ width: '15px', height: '15px' }} />
            Return to Website
          </a>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '12px',
              color: 'rgba(148, 163, 184, 0.5)',
              marginTop: '16px'
            }}
          >
            <Shield style={{ width: '11px', height: '11px' }} />
            High Cleaning NJ | Internal Operations Portal
          </div>
        </div>
      </div>
    </div>
  )
}

export function AccessGate({ children }: AccessGateProps) {
  const [status, setStatus] = useState<'loading' | 'login' | 'authenticated'>('loading')

  useEffect(() => {
    // Check session on mount
    if (isSessionValid()) {
      setStatus('authenticated')
    } else {
      setStatus('login')
    }
  }, [])

  const handleLogin = (pwd: string): boolean => {
    if (verifyPassword(pwd)) {
      createSession()
      setStatus('authenticated')
      return true
    }
    return false
  }

  const handleLogout = () => {
    clearSession()
    setStatus('login')
  }

  // Loading state
  if (status === 'loading') {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0a1628',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ color: '#64748b', fontSize: '14px' }}>Loading...</div>
      </div>
    )
  }

  // Login state
  if (status === 'login') {
    return <LoginPage onLogin={handleLogin} />
  }

  // Authenticated
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
          gap: '6px',
          padding: '8px 12px',
          fontSize: '12px',
          color: '#94a3b8',
          background: 'rgba(15, 23, 42, 0.9)',
          border: '1px solid rgba(71, 85, 105, 0.5)',
          borderRadius: '6px',
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
