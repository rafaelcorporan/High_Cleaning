# 🎯 Final Deployment Instructions
## CrystalCore → Cloudflare Pages

**GitHub Repository**: https://github.com/rafaelcorporan/High_Cleaning ✅  
**Email Configuration**: `hello@forgerdigital.com` ✅

---

## Deploy in 5 Minutes

### Step 1: Open Cloudflare Dashboard
Go to: **https://dash.cloudflare.com**

(Sign up for free if you don't have an account)

---

### Step 2: Create Pages Project

1. Click **Workers & Pages** (left sidebar)
2. Click **Create Application**
3. Click **Pages** tab
4. Click **Connect to Git**
5. Authorize GitHub access
6. Select repository: **rafaelcorporan/High_Cleaning**
7. Click **Begin setup**

---

### Step 3: Configure Build

**Project name**: `crystalcore` (or your choice)

**Build settings**:
- Framework preset: **None**
- Build command: (leave empty)
- Build output directory: **/**

Click **Save and Deploy**

---

### Step 4: Add Environment Variables

⚠️ **CRITICAL**: Do this while deployment is running!

1. Click **Settings** (top nav)
2. Click **Environment Variables** (left sidebar)
3. Click **Add variable** (for Production)

**Add Variable 1**:
```
Variable name: RECIPIENT_EMAIL
Value: hello@forgerdigital.com
```

**Add Variable 2**:
```
Variable name: SENDER_EMAIL
Value: hello@forgerdigital.com
```

4. Click **Save**

---

### Step 5: Redeploy

1. Go to **Deployments** tab
2. Click **...** on latest deployment
3. Click **Retry deployment**

This ensures environment variables are included.

---

### Step 6: Go Live! 🚀

Your site will be live at:
**https://crystalcore-[random].pages.dev**

Click the URL to visit your site!

---

## Test Checklist

- [ ] Site loads with Spline 3D animation
- [ ] All pages accessible
- [ ] Tier pricing displays correctly
- [ ] Submit quote form
- [ ] Check `hello@forgerdigital.com` for quote email

---

## What You Get

✅ Free hosting (unlimited bandwidth)  
✅ Global CDN (300+ locations)  
✅ Automatic HTTPS  
✅ Auto-deploy on git push  
✅ Email API via Cloudflare Workers  
✅ $0/month cost

---

## Optional: Custom Domain

Want to use your own domain?

1. **Custom Domains** → **Set up a custom domain**
2. Enter domain name
3. Follow DNS instructions
4. SSL auto-issued in ~5 minutes

---

## Support

- Docs: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/

---

**Status**: ✅ Ready to deploy  
**Estimated time**: 5 minutes  
**Email**: hello@forgerdigital.com
