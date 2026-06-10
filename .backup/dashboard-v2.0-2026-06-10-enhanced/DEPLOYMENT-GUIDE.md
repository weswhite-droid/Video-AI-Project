# Video AI Dashboard - Deployment Guide

## Quick Deployment to Salesforce Internal Git

### Step 1: Create the Repository

1. **Go to Salesforce Internal GitHub:**
   - Visit: https://git.soma.salesforce.com/gss-resilience
   - (Or use your team's org: https://git.soma.salesforce.com/YOUR-ORG)

2. **Click "New Repository"**
   - Name: `video-ai-dashboard`
   - Description: `Video AI Project Master Dashboard - RAID, RACI, Requirements tracking`
   - Visibility: **Private** (recommended for internal project)
   - **Do NOT** initialize with README (we already have files)
   - Click "Create Repository"

### Step 2: Push Your Files

Open Git Bash and run:

```bash
cd "/c/Users/wes.white/Documents/Video AI Project"

# Add documentation files
git add README-SLACK-SHARING.md "Video AI Project Summary.md"
git commit -m "Add documentation and project summary"

# Rename branch to main (optional but recommended)
git branch -M main

# Add remote (replace YOUR-ORG with your actual org)
git remote add origin https://git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard.git

# Push
git push -u origin main
```

**Replace `YOUR-ORG` with one of:**
- `gss-resilience` (GSS Resilience Team)
- `gss-security` (GSS Security)
- `secops` (Security Operations)
- Your team's actual org name

### Step 3: Enable GitHub Pages

1. Go to your repository: `https://git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard`
2. Click **Settings** tab
3. Navigate to **Pages** section (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
   - Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Dashboard

Your dashboard will be live at:
```
https://pages.git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard/video-ai-dashboard.html
```

**All pages:**
- 📊 Dashboard: `https://pages.git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard/video-ai-dashboard.html`
- ⚠️ RAID Log: `https://pages.git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard/video-ai-raid-log.html`
- 👥 RACI Matrix: `https://pages.git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard/video-ai-raci.html`
- 📐 Requirements: `https://pages.git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard/video-ai-requirements.html`

### Step 5: Share in Slack

Post this in `#proj-gss-video-ai-working-group`:

```
🎯 **Video AI Project Dashboard is now live!**

📊 Main Dashboard: https://pages.git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard/video-ai-dashboard.html

Quick links:
• ⚠️ RAID Log: [click here]
• 👥 RACI Matrix: [click here]
• 📐 Requirements: [click here]

The dashboard includes:
✅ Real-time project status (1 At Risk, 9 In Progress, 13 Completed, 5 Not Started)
✅ RAID tracking (15 Risks, 10 Assumptions, 6 Issues, 11 Dependencies)
✅ Interactive charts and expandable sections
✅ Sync from Canvas functionality

_Last updated: June 9, 2026_
```

---

## Alternative: Quick Deploy with Script

Run the automated deployment script:

```bash
cd "/c/Users/wes.white/Documents/Video AI Project"
bash deploy-to-git.sh
```

The script will guide you through the process.

---

## Updating the Dashboard

After making changes to any HTML files:

```bash
cd "/c/Users/wes.white/Documents/Video AI Project"

git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

Changes will be live on GitHub Pages within 1-2 minutes.

---

## Troubleshooting

### Authentication Issues
If you get authentication errors:
```bash
# Check your git credentials
git config --global user.name
git config --global user.email

# If needed, update them
git config --global user.name "Your Name"
git config --global user.email "your.email@salesforce.com"
```

### Repository Already Exists
If the remote already exists:
```bash
# Check current remote
git remote -v

# Remove old remote
git remote remove origin

# Add correct remote
git remote add origin https://git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard.git
```

### Permission Denied
- Verify you have write access to the organization
- Contact your org admin to be added as a collaborator
- Try using your team's org instead of a different one

### GitHub Pages Not Working
- Wait 2-3 minutes after enabling (initial build takes time)
- Check Settings → Pages shows "Your site is live at..."
- Verify branch is set to `main` (or `master` if you didn't rename)
- Check browser console for errors (F12)

---

## Adding Team Members

To give others edit access:

1. Go to: `https://git.soma.salesforce.com/YOUR-ORG/video-ai-dashboard/settings/collaboration`
2. Add collaborators:
   - Jeff Toler
   - Jerry Wu
   - Robert Mirakaj
   - Others from your stakeholder list
3. Set permission level: **Write** or **Maintain**

---

## Next Steps

After deployment:

1. ✅ Add repository URL to project documentation
2. ✅ Pin dashboard link in Slack channel
3. ✅ Set up bookmark in Slack: `/bookmark add <url> "📊 Video AI Dashboard"`
4. ✅ Schedule weekly reminder: `/remind #channel "Review dashboard" every Monday at 9am`
5. ✅ Add to project charter as official tracking tool

---

## Security Notes

✅ **Private repository** - Only accessible to Salesforce employees with access to your org
✅ **Internal Pages** - pages.git.soma.salesforce.com is behind Salesforce VPN/network
✅ **No external exposure** - Dashboard is not accessible from public internet

⚠️ Still contains internal project information - ensure only appropriate stakeholders have access.
