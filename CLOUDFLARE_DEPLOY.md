# 🚀 Deploy CrystalCore to Cloudflare Pages

Your code is now on GitHub! Follow these steps to deploy to Cloudflare Pages.

---

## Step 1: Go to Cloudflare Dashboard

Visit: **https://dash.cloudflare.com**

If you don't have an account:
1. Click **Sign Up** (free plan is perfect)
2. Verify your email
3. Log in

---

## Step 2: Create Pages Project

1. In the dashboard, click **Workers & Pages** (left sidebar)
2. Click **Create Application**
3. Select **Pages** tab
4. Click **Connect to Git**

---

## Step 3: Connect GitHub Repository

1. Click **Connect GitHub**
2. Authorize Cloudflare to access your GitHub account
3. Select **rafaelcorporan/High_Cleaning** repository
4. Click **Begin setup**

---

## Step 4: Configure Build Settings

**Project name**: `crystalcore` (or any name you prefer)

**Production branch**: `main`

**Build settings**:
- **Framework preset**: None
- **Build command**: (leave empty)
- **Build output directory**: `/`

Click **Save and Deploy**

---

## Step 5: Set Environment Variables

⚠️ **IMPORTANT**: The email form won't work without these!

1. While deployment is running, click **Settings** (top navigation)
2. Click **Environment Variables** (left sidebar)
3. Click **Add variable**

Add these two variables:

**Variable 1**:
- **Variable name**: `RECIPIENT_EMAIL`
- **Value**: Your email address (where quote requests will be sent)
- Example: `info@crystalcore.com` or `your-email@gmail.com`

**Variable 2**:
- **Variable name**: `SENDER_EMAIL`
- **Value**: Email to send from
- Example: `noreply@crystalcore.com`

4. Click **Save**

---

## Step 6: Redeploy with Environment Variables

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **...** menu (three dots)
4. Click **Retry deployment**

This ensures the environment variables are included.

---

## Step 7: Access Your Live Site! 🎉

Once deployment completes (1-2 minutes):

1. You'll see a green **Success** status
2. Your site URL will be: `https://crystalcore-xxx.pages.dev`
3. Click the URL to visit your live site!

---

## Step 8: Test Everything

### Test Checklist:
- [ ] Site loads correctly
- [ ] Spline 3D animation appears in hero section
- [ ] All pages are accessible (services, features)
- [ ] Tier pricing displays correctly
- [ ] Fill out quote form and submit
- [ ] Check your email for the quote request

---

## Optional: Add Custom Domain

Want to use your own domain (e.g., `crystalcore.com`)?

1. In your Pages project, click **Custom Domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Follow the DNS instructions
5. SSL certificate will be issued automatically (5-10 minutes)

---

## Troubleshooting

### Email not sending?
- ✅ Check environment variables are set correctly
- ✅ Make sure you redeployed after adding variables
- ✅ Check browser console for errors

### 404 errors?
- ✅ Verify build output directory is set to `/`
- ✅ Check that `_redirects` file is in the repository

### Spline animation not loading?
- ✅ Check browser console for CSP errors
- ✅ Verify `_headers` file is in the repository

---

## What You Get

✅ **Free hosting** with unlimited bandwidth  
✅ **Global CDN** - fast loading worldwide  
✅ **Automatic HTTPS** with SSL certificate  
✅ **Automatic deployments** - every git push updates your site  
✅ **Email functionality** via Cloudflare Workers  
✅ **DDoS protection** included  

**Monthly cost**: $0

---

## Need Help?

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Community**: https://community.cloudflare.com/
- **Discord**: https://discord.gg/cloudflaredev

---

**GitHub Repository**: https://github.com/rafaelcorporan/High_Cleaning  
**Deployment Time**: ~5 minutes  
**Status**: ✅ Ready to deploy
