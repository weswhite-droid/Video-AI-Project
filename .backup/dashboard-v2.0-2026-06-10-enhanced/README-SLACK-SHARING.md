# Publishing Video AI Dashboard to Slack

## Recommended Approach for Salesforce Internal Projects

### Option 1: Salesforce Internal GitHub + Pages (BEST)
```bash
# 1. Create repo on git.soma.salesforce.com
# 2. Push your files:
cd "/c/Users/wes.white/Documents/Video AI Project"
git remote add origin https://git.soma.salesforce.com/gss-resilience/video-ai-dashboard.git
git push -u origin main

# 3. Enable GitHub Pages in repo settings
# 4. Share URL in Slack: https://pages.git.soma.salesforce.com/gss-resilience/video-ai-dashboard/
```

### Option 2: Netlify Drop (QUICKEST)
1. Visit: https://app.netlify.com/drop
2. Drag all 4 HTML files into the drop zone
3. Get instant URL (e.g., `https://video-ai-dashboard-abc123.netlify.app/`)
4. Rename/customize site in Netlify dashboard
5. Post URL in Slack channel

**Example Slack message:**
```
🎯 Video AI Dashboard is now live!
📊 Dashboard: https://your-site.netlify.app/video-ai-dashboard.html
⚠️ RAID Log: https://your-site.netlify.app/video-ai-raid-log.html
📋 RACI Matrix: https://your-site.netlify.app/video-ai-raci.html
📐 Requirements: https://your-site.netlify.app/video-ai-requirements.html

Last updated: June 9, 2026
```

### Option 3: Slack Canvas Integration
For native Slack experience, copy key sections into a Slack Canvas:
1. Open your Slack channel
2. Create a new Canvas
3. Copy content from HTML (tables, status sections)
4. Link to full dashboard for detailed views

### Option 4: Heroku (Salesforce Internal)
```bash
# If you have access to internal Heroku:
cd "/c/Users/wes.white/Documents/Video AI Project"
git push heroku main
```

### Option 5: Google Drive + Apps Script
1. Upload HTML files to shared Google Drive folder
2. Share folder with team
3. Team can open HTML files directly in browser
4. Post folder link in Slack

---

## Updating the Dashboard

### After publishing to GitHub Pages:
```bash
cd "/c/Users/wes.white/Documents/Video AI Project"
git add .
git commit -m "Update: [describe changes]"
git push origin main
# Changes go live automatically
```

### After publishing to Netlify:
- Drag updated files to same site
- OR connect to GitHub for auto-deploy

---

## Security Considerations

⚠️ **This dashboard contains internal project information**

**Recommended:**
- ✅ Use Salesforce internal hosting (git.soma.salesforce.com)
- ✅ Use private GitHub repo with limited access
- ✅ Use Netlify with password protection

**Avoid:**
- ❌ Public GitHub Pages without authentication
- ❌ Public sharing links without expiration

---

## Making it Interactive in Slack

### Add Slack App Integration:
Create bookmarks in your Slack channel:
```
/bookmark add https://your-dashboard-url.com "📊 Video AI Dashboard"
/bookmark add https://your-dashboard-url.com/video-ai-raid-log.html "⚠️ RAID Log"
```

### Pin message with links:
Right-click your dashboard announcement → Pin to channel

### Schedule updates:
Use `/remind` to prompt periodic dashboard reviews:
```
/remind #proj-gss-video-ai-working-group "Review dashboard: https://your-url.com" every Monday at 9am
```

---

## Files in this Package
- `video-ai-dashboard.html` - Main project dashboard
- `video-ai-raid-log.html` - RAID log details
- `video-ai-raci.html` - RACI matrix
- `video-ai-requirements.html` - System requirements

All files are linked and should be deployed together.
