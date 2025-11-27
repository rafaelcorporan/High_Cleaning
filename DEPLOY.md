# 🚀 Quick Deploy to Cloudflare Pages

## Prerequisites
- GitHub account
- Cloudflare account (free): https://dash.cloudflare.com/sign-up

---

## 5-Minute Deployment

### Step 1: Push to GitHub
```bash
cd /Users/gundo/Projects_/CrystalCore
git init
git add .
git commit -m "Initial commit - CrystalCore website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/CrystalCore.git
git push -u origin main
```

### Step 2: Deploy to Cloudflare

1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages** → **Create Application** → **Pages**
3. Click **Connect to Git**
4. Select your **CrystalCore** repository
5. Configure build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
6. Click **Save and Deploy**

### Step 3: Set Environment Variables

1. In your Pages project, go to **Settings** → **Environment Variables**
2. Add these variables:
   - `RECIPIENT_EMAIL` = `your-email@example.com` (where quotes go)
   - `SENDER_EMAIL` = `noreply@crystalcore.com` (or your domain)
3. Click **Save**
4. Redeploy: **Deployments** → **...** → **Retry deployment**

### Step 4: Test Your Site

1. Visit your site at `https://crystalcore-xxx.pages.dev`
2. Test the quote form
3. Check your email for the quote request

---

## ✅ Done!

Your site is now live with:
- ✅ Global CDN (fast worldwide)
- ✅ Free SSL certificate
- ✅ Automatic deployments on every git push
- ✅ Serverless email API
- ✅ Unlimited bandwidth

---

## Optional: Add Custom Domain

1. In Cloudflare Pages: **Custom Domains** → **Set up a custom domain**
2. Enter your domain (e.g., `crystalcore.com`)
3. Follow DNS instructions
4. SSL certificate auto-issued in ~5 minutes

---

## Need Help?

See the full deployment plan: [implementation_plan.md](file:///Users/gundo/.gemini/antigravity/brain/4a21d510-04ff-41a6-9858-1eb8695d5715/implementation_plan.md)
