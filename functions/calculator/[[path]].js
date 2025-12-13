/**
 * Cloudflare Access Verification Middleware
 * 
 * This Worker function verifies Cloudflare Access JWT tokens
 * for all requests to /calculator/* paths.
 * 
 * Security: Enterprise-grade Zero Trust verification
 * Fallback: Blocks access if JWT is missing or invalid
 */

/**
 * Configuration
 * These values are loaded from environment variables set in Cloudflare Pages
 * See CALCULATOR_ACCESS_SETUP.md for configuration instructions
 */

// Get configuration from environment or use placeholders
function getConfig(env) {
  return {
    // Cloudflare Access Application AUD (Audience) tag
    // Set via: Cloudflare Pages > Settings > Environment Variables > CF_ACCESS_AUD
    accessAud: env?.CF_ACCESS_AUD || "NOT_CONFIGURED",
    
    // Cloudflare Access team domain (your Zero Trust organization)
    // Set via: Cloudflare Pages > Settings > Environment Variables > CF_ACCESS_TEAM
    teamDomain: env?.CF_ACCESS_TEAM || "NOT_CONFIGURED",
  };
}

// JWKS endpoint for token verification
function getCertsUrl(teamDomain) {
  return `https://${teamDomain}.cloudflareaccess.com/cdn-cgi/access/certs`;
}

/**
 * Verify Cloudflare Access JWT Token
 */
async function verifyAccessJWT(request, config) {
  const cookieHeader = request.headers.get("Cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map(c => {
      const [key, ...val] = c.trim().split("=");
      return [key, val.join("=")];
    })
  );

  // Cloudflare Access sets CF_Authorization cookie
  const accessJWT = cookies["CF_Authorization"];
  
  if (!accessJWT) {
    return { valid: false, error: "No access token found" };
  }

  try {
    // Decode JWT header to get key ID
    const [headerB64] = accessJWT.split(".");
    const header = JSON.parse(atob(headerB64.replace(/-/g, "+").replace(/_/g, "/")));
    const kid = header.kid;

    // Fetch public keys from Cloudflare
    const certsUrl = getCertsUrl(config.teamDomain);
    const certsResponse = await fetch(certsUrl);
    const certs = await certsResponse.json();
    
    // Find matching key
    const key = certs.keys.find(k => k.kid === kid);
    if (!key) {
      return { valid: false, error: "Key not found" };
    }

    // Import the public key
    const cryptoKey = await crypto.subtle.importKey(
      "jwk",
      key,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"]
    );

    // Decode and verify JWT
    const [, payloadB64, signatureB64] = accessJWT.split(".");
    const signedData = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
    const signature = Uint8Array.from(
      atob(signatureB64.replace(/-/g, "+").replace(/_/g, "/")),
      c => c.charCodeAt(0)
    );

    const valid = await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5",
      cryptoKey,
      signature,
      signedData
    );

    if (!valid) {
      return { valid: false, error: "Invalid signature" };
    }

    // Decode payload and verify claims
    const payload = JSON.parse(atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/")));
    
    // Verify audience
    if (!payload.aud || !payload.aud.includes(config.accessAud)) {
      return { valid: false, error: "Invalid audience" };
    }

    // Verify expiration
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return { valid: false, error: "Token expired" };
    }

    return { valid: true, email: payload.email, payload };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

/**
 * Generate Access Denied HTML Response
 */
function accessDeniedResponse() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Restricted | High Cleaning</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 500px;
    }
    .icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: rgba(239, 68, 68, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon svg {
      width: 40px;
      height: 40px;
      color: #ef4444;
    }
    h1 {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
      color: #f1f5f9;
    }
    p {
      color: #94a3b8;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #272EF5 0%, #05ED43 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 40px rgba(39, 46, 245, 0.3);
    }
    .footer {
      margin-top: 2rem;
      font-size: 0.875rem;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    </div>
    <h1>Internal Access Only</h1>
    <p>This tool is restricted to authorized High Cleaning staff members. Please authenticate through the company portal to access this resource.</p>
    <a href="/" class="btn">Return to Website</a>
    <div class="footer">
      <p>High Cleaning NJ | Internal Operations Portal</p>
    </div>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 403,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Cache-Control": "no-store",
    },
  });
}

/**
 * Main Handler - Cloudflare Pages Function
 */
export async function onRequest(context) {
  const { request, env, next } = context;
  
  // Get configuration from environment
  const config = getConfig(env);
  
  // Check if Cloudflare Access is configured
  if (config.accessAud === "NOT_CONFIGURED" || config.teamDomain === "NOT_CONFIGURED") {
    console.warn("⚠️ Cloudflare Access not configured.");
    console.warn("Set CF_ACCESS_AUD and CF_ACCESS_TEAM environment variables.");
    console.warn("See CALCULATOR_ACCESS_SETUP.md for instructions.");
    
    // SECURITY: Block access when not configured
    // Remove this return statement only for initial testing
    return accessDeniedResponse();
  }

  // Verify the Cloudflare Access JWT
  const verification = await verifyAccessJWT(request, config);
  
  if (!verification.valid) {
    console.log(`Access denied: ${verification.error}`);
    return accessDeniedResponse();
  }

  // User is authenticated - allow request to proceed
  console.log(`Access granted for: ${verification.email}`);
  
  // Add user email to request headers for downstream use
  const modifiedHeaders = new Headers(request.headers);
  modifiedHeaders.set("X-Authenticated-User", verification.email);
  
  return next();
}

