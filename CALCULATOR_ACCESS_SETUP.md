# 🔐 Calculator Access Control Setup Guide

## Overview

The Cost Calculator (`/calculator/`) is protected by **Cloudflare Access** - an enterprise-grade Zero Trust security system. This guide walks you through the complete setup process.

---

## Prerequisites

- ✅ Cloudflare account (free tier works)
- ✅ Website deployed on Cloudflare Pages
- ✅ Access to Cloudflare Dashboard

---

## Step 1: Enable Cloudflare Zero Trust

1. Go to **[Cloudflare Dashboard](https://dash.cloudflare.com)**
2. Click **Zero Trust** in the left sidebar
3. If prompted, set up your **team name** (e.g., `highcleaning`)
   - This creates your access domain: `highcleaning.cloudflareaccess.com`
4. Select the **Free plan** (up to 50 users)

---

## Step 2: Create Access Application

1. In Zero Trust dashboard, go to **Access** → **Applications**
2. Click **Add an application**
3. Select **Self-hosted**
4. Configure the application:

### Application Configuration

| Field | Value |
|-------|-------|
| **Application name** | `High Cleaning Calculator` |
| **Session Duration** | `24 hours` (or your preference) |
| **Application domain** | Your Pages domain |
| **Path** | `/calculator/` |

**Example domains:**
- `crystalcore-xxx.pages.dev/calculator/`
- `yourdomain.com/calculator/`

5. Click **Next**

---

## Step 3: Configure Access Policy

Create a policy to control who can access the calculator:

### Policy Configuration

| Field | Value |
|-------|-------|
| **Policy name** | `Internal Staff Access` |
| **Action** | `Allow` |
| **Session duration** | `24 hours` |

### Include Rules (Choose one or combine):

#### Option A: Email Domain (Recommended for companies)
```
Selector: Emails ending in
Value: @highcleaning.com
```

#### Option B: Specific Emails (For small teams)
```
Selector: Emails
Value: admin@example.com, manager@example.com
```

#### Option C: Email One-Time PIN (For any email)
```
Selector: Everyone
Authentication: One-time PIN
```

5. Click **Next** → **Add application**

---

## Step 4: Get Your Application AUD Tag

After creating the application:

1. Go to **Access** → **Applications**
2. Click on **High Cleaning Calculator**
3. Go to **Overview** tab
4. Find **Application Audience (AUD) Tag**
5. Copy this value (looks like: `a1b2c3d4e5f6...`)

---

## Step 5: Configure Environment Variables

In your Cloudflare Pages project:

1. Go to **Workers & Pages** → Your project
2. Click **Settings** → **Environment variables**
3. Add the following variable:

| Variable name | Value |
|---------------|-------|
| `CF_ACCESS_AUD` | Your AUD tag from Step 4 |
| `CF_ACCESS_TEAM` | Your team name (e.g., `highcleaning`) |

4. Click **Save**
5. **Redeploy** your site for changes to take effect

---

## Step 6: Update Middleware Configuration

Edit the file `functions/calculator/[[path]].js`:

```javascript
// Replace these values with your actual configuration
const ACCESS_AUD = "YOUR_ACCESS_APPLICATION_AUD_TAG";  // From Step 4
const ACCESS_TEAM_DOMAIN = "YOUR_TEAM_NAME";           // From Step 1
```

Or use environment variables (recommended):
```javascript
const ACCESS_AUD = env.CF_ACCESS_AUD;
const ACCESS_TEAM_DOMAIN = env.CF_ACCESS_TEAM;
```

---

## Step 7: Deploy and Test

1. Commit and push your changes
2. Wait for Cloudflare Pages to deploy
3. Open an incognito/private browser window
4. Navigate to `https://yoursite.com/calculator/`
5. You should see the Cloudflare Access login page

### Expected Behavior:

| Scenario | Result |
|----------|--------|
| Unauthenticated user | Redirected to Cloudflare login |
| Authenticated user | Access granted to calculator |
| Invalid/expired token | Redirected to login |

---

## Authentication Options

### Option 1: One-Time PIN (Email)
- User enters email
- Receives 6-digit code
- Enters code to authenticate
- Session lasts 24 hours (configurable)

### Option 2: Google/GitHub SSO
1. Go to **Zero Trust** → **Settings** → **Authentication**
2. Click **Add new** under Identity providers
3. Select **Google** or **GitHub**
4. Follow the OAuth setup instructions
5. Users can now sign in with their Google/GitHub accounts

---

## Troubleshooting

### "Access Denied" after setup
- Verify your email is in the allowed policy
- Check that the AUD tag matches exactly
- Ensure environment variables are set
- Redeploy after any configuration changes

### Calculator loads without login prompt
- Cloudflare Access may not be configured
- Check that the application path matches exactly
- Verify the Access Application is active

### Login loop
- Clear browser cookies
- Try incognito mode
- Check browser console for errors

---

## Security Best Practices

1. **Limit access** - Only add emails that need access
2. **Use company domain** - Prefer `@yourcompany.com` rule
3. **Regular audits** - Review access logs monthly
4. **Session duration** - Keep sessions short (24h recommended)
5. **Require reason** - Enable "Purpose justification" for sensitive tools

---

## Access Logs

View who accessed the calculator:

1. Go to **Zero Trust** → **Logs** → **Access**
2. Filter by application: `High Cleaning Calculator`
3. View: User email, timestamp, IP address, action (allow/block)

---

## Removing Access

To revoke a user's access:

1. Go to **Access** → **Applications** → **High Cleaning Calculator**
2. Edit the policy
3. Remove the user's email or change the rule
4. Active sessions will be terminated at next request

---

## Quick Reference

| Resource | Location |
|----------|----------|
| **Zero Trust Dashboard** | `dash.cloudflare.com` → Zero Trust |
| **Calculator URL** | `yoursite.com/calculator/` |
| **Access Logs** | Zero Trust → Logs → Access |
| **Middleware Code** | `functions/calculator/[[path]].js` |

---

## Support

- **Cloudflare Docs**: https://developers.cloudflare.com/cloudflare-one/
- **Access Docs**: https://developers.cloudflare.com/cloudflare-one/policies/access/
- **Community**: https://community.cloudflare.com/

---

**Status**: ✅ Ready for configuration
**Security Level**: Enterprise-grade Zero Trust
**Cost**: Free (up to 50 users)

