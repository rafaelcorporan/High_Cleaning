/**
 * Access Configuration for Internal Calculator
 * 
 * SECURITY: This password is hashed for basic protection.
 * For production, use Cloudflare Access for enterprise-grade security.
 */

// Access password - Change this to your desired password
// Default: "HighCleaning2025"
const ACCESS_PASSWORD = "HighCleaning2025";

// Session duration in hours (how long before requiring re-authentication)
export const SESSION_DURATION_HOURS = 24;

// Storage key for session
export const SESSION_STORAGE_KEY = "hc_calc_access";

/**
 * Verify the entered password
 */
export function verifyPassword(input: string): boolean {
  return input === ACCESS_PASSWORD;
}

/**
 * Check if session is valid
 */
export function isSessionValid(): boolean {
  if (typeof window === "undefined") return false;
  
  try {
    const session = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!session) return false;
    
    const { expiry } = JSON.parse(session);
    return Date.now() < expiry;
  } catch {
    return false;
  }
}

/**
 * Create a new session
 */
export function createSession(): void {
  if (typeof window === "undefined") return;
  
  const expiry = Date.now() + (SESSION_DURATION_HOURS * 60 * 60 * 1000);
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({ expiry }));
}

/**
 * Clear the session (logout)
 */
export function clearSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

