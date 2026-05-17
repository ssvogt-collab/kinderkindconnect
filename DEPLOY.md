# KinderKindConnect Landing Page

## Quick Deploy to Vercel (5 minutes)

### Step 1: Create a GitHub Account (if you don't have one)
- Go to https://github.com/signup
- Sign up with your email
- Confirm email

### Step 2: Create a New Repository
- Go to https://github.com/new
- Repository name: `kinderkindconnect`
- Description: "KinderKindConnect landing page"
- Select "Public"
- Click "Create repository"

### Step 3: Upload These Files to GitHub
You have two options:

**Option A (Easiest - via GitHub web interface):**
1. Click "uploading an existing file" link on the repo page
2. Drag and drop ALL files from your computer into the upload area:
   - pages/
   - styles/
   - package.json
   - next.config.js
   - postcss.config.js
   - tailwind.config.js
   - .gitignore
3. Click "Commit changes"

**Option B (Via Git command line - if you know git):**
```bash
git clone https://github.com/YOUR_USERNAME/kinderkindconnect.git
cd kinderkindconnect
# Copy all the files into this folder
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 4: Deploy to Vercel
1. Go to https://vercel.com/new
2. Click "Continue with GitHub"
3. Search for "kinderkindconnect" repository
4. Click "Import"
5. Leave settings as default
6. Click "Deploy"
7. **Done!** Your site is live in 30 seconds. You'll get a URL like `kinderkindconnect-abc123.vercel.app`

## That's it.
Share the Vercel URL with families and tutors. The form collects their email and opens their email client with a pre-filled message to kinderkindconnect@proton.me

## To Update the Site
1. Make changes to files on your computer
2. Upload to GitHub (same as Step 3)
3. Vercel auto-deploys within 1 minute
