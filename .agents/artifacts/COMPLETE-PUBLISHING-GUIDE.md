# 🚀 Complete Video AI Dashboard Publishing Guide

**Created:** June 10, 2026  
**Status:** ✅ Successfully Published to Git Soma  
**Live Dashboard:** https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Git Soma Publishing Steps](#git-soma-publishing-steps)
3. [Slack Integration](#slack-integration)
4. [Canvas Sync Setup](#canvas-sync-setup)
5. [Future Updates](#future-updates)
6. [Troubleshooting](#troubleshooting)
7. [Complete Code Archive](#complete-code-archive)

---

## 🎯 Project Overview

### **What Was Published**

**Video AI Master Project Dashboard** - A comprehensive project management dashboard with:
- ✅ Real-time RAID Log (syncs from Slack Canvas)
- ✅ Video AI Plan & Milestones (syncs from Slack Canvas)
- ✅ RACI Matrix
- ✅ System Requirements (11-tab Canvas sync)
- ✅ Interactive visualizations (donut chart)
- ✅ Dark theme, responsive design
- ✅ Secure HTML escaping

### **Live URLs**

| Resource | URL |
|----------|-----|
| **Main Dashboard** | https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html |
| **RAID Log** | https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-raid-log.html |
| **RACI Matrix** | https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-raci.html |
| **Requirements** | https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-requirements.html |
| **Git Repository** | https://git.soma.salesforce.com/wes-white/video-ai-master-project |

### **Canvas Integration**

| Canvas | URL |
|--------|-----|
| **RAID Log** | https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4 |
| **Video AI Plan & Milestones** | https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q |

### **Slack Channel**

**Channel:** #proj-gss-video-ai-working-group  
**Channel ID:** C0AS161CKGC

---

## 🚀 Git Soma Publishing Steps

### **Step 1: Create Repository on Git Soma**

**Action:** Create new repository on Git Soma web interface

**URL:** https://git.soma.salesforce.com/

**Details Used:**
```
Repository Name:     video-ai-master-project
Owner:              wes-white (personal account)
Description:        Video AI Master Project Dashboard - RAID, RACI, Requirements tracking with Slack Canvas sync
Visibility:         Private
Initialize:         Do NOT check "Initialize with README"
```

**Result:** Repository created at `https://git.soma.salesforce.com/wes-white/video-ai-master-project`

---

### **Step 2: Configure Git Remote**

**Command:**
```bash
cd "/c/Users/wes.white/Documents/Video AI Project"

# Remove old remote (if exists)
git remote remove soma

# Add correct remote
git remote add soma https://git.soma.salesforce.com/wes-white/video-ai-master-project.git

# Verify remotes
git remote -v
```

**Expected Output:**
```
origin	https://github.com/weswhite-droid/Video-AI-Project.git (fetch)
origin	https://github.com/weswhite-droid/Video-AI-Project.git (push)
soma	https://git.soma.salesforce.com/wes-white/video-ai-master-project.git (fetch)
soma	https://git.soma.salesforce.com/wes-white/video-ai-master-project.git (push)
```

---

### **Step 3: Push Code to Git Soma**

**Command:**
```bash
cd "/c/Users/wes.white/Documents/Video AI Project"
git push -u soma main
```

**Expected Output:**
```
To https://git.soma.salesforce.com/wes-white/video-ai-master-project.git
 * [new branch]      main -> main
branch 'main' set up to track 'soma/main'.
```

**Files Pushed:** 37 files (~276 KB + additional docs)

---

### **Step 4: Enable Git Soma Pages**

**Action:** Enable Pages in repository settings

**URL:** https://git.soma.salesforce.com/wes-white/video-ai-master-project/settings

**Steps:**
1. Navigate to repository settings
2. Click **"Pages"** in left sidebar
3. **Source:** Deploy from a branch
4. **Branch:** main
5. **Folder:** / (root)
6. Click **"Save"**
7. Wait 1-2 minutes for deployment

**Result:** Dashboard live at `https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html`

---

## 💬 Slack Integration

### **Announcement Message for Slack Channel**

**Channel:** #proj-gss-video-ai-working-group

**Message to Post:**

```
🎉 **Video AI Master Project Dashboard is Now Live on Git Soma!**

📊 **Live Dashboard:** https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html

📂 **Repository:** https://git.soma.salesforce.com/wes-white/video-ai-master-project

**What's Included:**
✅ Real-time RAID Log (syncs from Canvas)
✅ Project Plan & Milestones (syncs from Canvas)
✅ RACI Matrix
✅ System Requirements
✅ Interactive charts and visualizations

**Key Features:**
🔄 Canvas Sync - Click "⟳ Sync from Canvas", copy table from canvas, paste, and apply!
📊 RAID Visualization - Donut chart showing risk distribution
📅 Milestone Tracking - Full project plan table
🎨 Beautiful UI - Dark theme, responsive design
🔒 Secure - Internal only

**Quick Links:**
• 📊 Dashboard: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html
• ⚠️ RAID Log: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-raid-log.html
• 👥 RACI: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-raci.html

**Dashboard Syncs With:**
• RAID Canvas: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4
• Video AI Plan Canvas: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q

📖 Documentation included in repository | 📧 Questions? → @wes.white
```

---

### **Pin Message**

**After posting announcement:**
1. Hover over the message
2. Click three dots (···)
3. Select **"Pin to channel"**

---

### **Add Channel Bookmark**

**Command to type in Slack channel:**
```
/bookmark add https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html "📊 Video AI Dashboard"
```

---

## 📝 Canvas Sync Setup

### **Content to Add to Video AI Plan & Milestones Canvas**

**Canvas URL:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q

**Content to Paste at Bottom:**

```markdown
---

## 📊 Project Dashboard & Repository

### 🌐 Live Dashboard
**Main Dashboard:** https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html

**Quick Access:**
• 📊 Dashboard: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html
• ⚠️ RAID Log: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-raid-log.html
• 👥 RACI Matrix: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-raci.html
• 📐 Requirements: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-requirements.html

### 📂 Source Repository
**Git Soma:** https://git.soma.salesforce.com/wes-white/video-ai-master-project

### 🔄 How to Sync Dashboard from Canvas
1. Open the dashboard link above
2. Click "⟳ Sync from Canvas" button
3. Select the table in this canvas (Ctrl+A inside table)
4. Copy (Ctrl+C)
5. Paste in dashboard sync modal (Ctrl+V)
6. Click "Apply to Dashboard"
7. ✅ Dashboard updates instantly!

**Last Updated:** June 10, 2026 | **Maintained By:** @wes.white
```

---

## 🔄 Future Updates

### **Update Dashboard Code**

**Workflow:**

1. **Edit files locally:**
   ```bash
   cd "/c/Users/wes.white/Documents/Video AI Project"
   # Edit video-ai-dashboard.html or other files
   ```

2. **Test locally:**
   ```bash
   # Open in browser
   start video-ai-dashboard.html
   # Check console (F12) for errors
   # Test sync functionality
   ```

3. **Commit changes:**
   ```bash
   git add video-ai-dashboard.html
   git commit -m "Update: [describe your changes]"
   ```

4. **Push to both GitHub and Git Soma:**
   ```bash
   # Push to GitHub
   git push origin main
   
   # Push to Git Soma
   git push soma main
   ```

5. **Wait 1-2 minutes** for Git Soma Pages to rebuild

6. **Verify changes:**
   - Open: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html
   - Check F12 console for errors
   - Test sync buttons

---

### **Common Modifications**

**See detailed guides:**
- `.backup/dashboard-v1.0-2026-06-10/MODIFICATION-GUIDE.md` - Complete instructions
- `.backup/dashboard-v1.0-2026-06-10/CODE-REFERENCE.md` - Quick line number lookup

**Quick Reference:**

| What to Change | File | Lines | How |
|----------------|------|-------|-----|
| Risk counts | video-ai-dashboard.html | 458-462 | Change `<span class="dl-count">X</span>` |
| Stats numbers | video-ai-dashboard.html | 470-481 | Change `<div class="num">X</div>` |
| RAID Canvas URL | video-ai-dashboard.html | 448 | Update `href="..."` |
| Video AI Plan URL | video-ai-dashboard.html | 476 | Update `href="..."` |
| Colors/Theme | video-ai-dashboard.html | 6-423 | Change hex codes in CSS |
| Add new tasks | video-ai-dashboard.html | After 582 | Use template from CODE-REFERENCE.md |

---

## 🐛 Troubleshooting

### **Dashboard Not Loading**

**Issue:** 404 error when opening dashboard URL

**Solutions:**
1. Check Git Soma Pages is enabled:
   - Go to: https://git.soma.salesforce.com/wes-white/video-ai-master-project/settings
   - Click "Pages" in sidebar
   - Verify "Your site is ready to be published" message
   - Wait 1-2 minutes after enabling

2. Check file exists in repository:
   - Go to: https://git.soma.salesforce.com/wes-white/video-ai-master-project
   - Verify `video-ai-dashboard.html` is in file list

3. Check you pushed to correct remote:
   ```bash
   cd "/c/Users/wes.white/Documents/Video AI Project"
   git remote -v
   git push soma main
   ```

---

### **Canvas Sync Not Working**

**Issue:** Sync button doesn't work or preview doesn't appear

**Solutions:**
1. Check browser console (F12 → Console)
2. Verify you copied table data (not just clicked in table)
3. Try with simple test data first
4. Check Canvas URL is correct in dashboard code
5. Ensure JavaScript is enabled in browser

---

### **Git Push Fails**

**Issue:** `Repository not found` error

**Solutions:**
1. Verify repository exists on Git Soma:
   - Open: https://git.soma.salesforce.com/wes-white/video-ai-master-project
   - Should see repository (not 404)

2. Check remote URL:
   ```bash
   git remote -v
   # Should show: soma	https://git.soma.salesforce.com/wes-white/video-ai-master-project.git
   ```

3. If URL is wrong, update it:
   ```bash
   git remote remove soma
   git remote add soma https://git.soma.salesforce.com/wes-white/video-ai-master-project.git
   ```

**Issue:** Authentication fails

**Solutions:**
1. Verify you're logged into Git Soma
2. May need SSH keys or personal access token
3. Check: https://git.soma.salesforce.com/settings/profile

---

### **Changes Not Appearing**

**Issue:** Pushed changes but dashboard still shows old version

**Solutions:**
1. Wait 2-3 minutes for Git Soma Pages rebuild
2. Clear browser cache (Ctrl+Shift+R)
3. Check commit was pushed:
   ```bash
   git log soma/main
   ```
4. Verify file on Git Soma:
   - Go to: https://git.soma.salesforce.com/wes-white/video-ai-master-project
   - Click on file
   - Check latest commit shows your changes

---

## 📦 Complete Code Archive

### **File Structure**

```
Video AI Project/
├── video-ai-dashboard.html          (68 KB) - Main dashboard
├── video-ai-raid-log.html           (38 KB) - RAID detail page
├── video-ai-raci.html               (36 KB) - RACI matrix
├── video-ai-requirements.html       (59 KB) - Requirements with 11-tab sync
├── index.html                       (2.5 KB) - Landing page
├── .backup/
│   └── dashboard-v1.0-2026-06-10/
│       ├── MODIFICATION-GUIDE.md    (15 KB) - How to modify code
│       ├── CODE-REFERENCE.md        (12 KB) - Line number reference
│       ├── VERSION-MANIFEST.txt     (1 KB) - File inventory
│       └── [All original files]
├── GIT-SOMA-SETUP.md                - Git Soma instructions
├── SLACK-CANVAS-CONTENT.md          - Ready-to-paste Slack content
├── PUBLISHING-CHECKLIST.md          - 8-step checklist
└── [Other documentation files]
```

### **Backup Location**

**Full backup saved:** `.backup/dashboard-v1.0-2026-06-10/`

**Contains:**
- All dashboard HTML files
- Complete modification guides
- Line-by-line code reference
- Version manifest

**To restore from backup:**
```bash
cd "/c/Users/wes.white/Documents/Video AI Project"
cp .backup/dashboard-v1.0-2026-06-10/video-ai-dashboard.html ./
```

---

## 🔐 Security Notes

### **HTML Escaping**

All user input (Canvas data) is sanitized using `escapeHtml()` function:

```javascript
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
```

**Applied to:**
- All Canvas sync data (RAID, Milestones, Requirements)
- All table cells
- All user-provided text

**Why:** Prevents XSS (Cross-Site Scripting) attacks

---

### **No External APIs**

- Dashboard runs 100% client-side
- No external API calls
- No data leaves browser
- Canvas data copied manually (paste operation)

---

### **Access Control**

- Dashboard hosted on Git Soma Pages (internal only)
- Requires Salesforce network/VPN access
- Repository is private
- Only authenticated users can view

---

## ✅ Publishing Checklist

**Completed Steps:**

- [x] Repository created on Git Soma (`wes-white/video-ai-master-project`)
- [x] Git remote configured (`soma`)
- [x] Code pushed to Git Soma (`git push soma main`)
- [x] Git Soma Pages enabled
- [x] Dashboard accessible at pages URL
- [x] Announcement draft created in Slack
- [ ] Announcement posted to #proj-gss-video-ai-working-group (manual)
- [ ] Dashboard section added to Canvas (manual)
- [ ] Message pinned to channel (manual)
- [ ] Channel bookmark added (manual)

---

## 📊 Git Soma vs GitHub

**Dual Repository Setup:**

| Repository | Purpose | URL |
|------------|---------|-----|
| **GitHub** (origin) | Public development | https://github.com/weswhite-droid/Video-AI-Project |
| **Git Soma** (soma) | Internal production | https://git.soma.salesforce.com/wes-white/video-ai-master-project |

**When to push where:**

- **Both:** Push to both when updating production
  ```bash
  git push origin main  # Push to GitHub
  git push soma main    # Push to Git Soma
  ```

- **GitHub only:** For experimental features, drafts
  ```bash
  git push origin main
  ```

- **Git Soma only:** For internal-only updates
  ```bash
  git push soma main
  ```

---

## 🎯 Quick Commands Reference

### **Common Git Commands**

```bash
# Navigate to project
cd "/c/Users/wes.white/Documents/Video AI Project"

# Check status
git status

# Check remotes
git remote -v

# Add changes
git add video-ai-dashboard.html

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main

# Push to Git Soma
git push soma main

# Push to both
git push origin main && git push soma main

# View commit history
git log --oneline

# View Git Soma commits
git log soma/main --oneline

# Check what's on Git Soma
git ls-tree -r --name-only soma/main
```

---

## 📞 Support

**Contact:**
- Email: wes.white@salesforce.com
- Slack: @wes.white
- Channel: #proj-gss-video-ai-working-group

**Resources:**
- Git Soma: https://git.soma.salesforce.com/help
- Repository: https://git.soma.salesforce.com/wes-white/video-ai-master-project
- Documentation: All guides in repository root

---

## 📝 Version History

**v1.0 - June 10, 2026** (Current)
- ✅ Initial production release
- ✅ Published to Git Soma
- ✅ Git Soma Pages enabled
- ✅ Dual Canvas sync (RAID + Video AI Plan)
- ✅ RAID donut chart (bar chart removed)
- ✅ Requirements page with 11-tab sync
- ✅ Complete modification guides
- ✅ Secure HTML escaping

---

## 🚀 What's Next

**Immediate:**
1. Post announcement in Slack channel (draft ready)
2. Add dashboard section to Canvas
3. Pin message and add bookmark
4. Test Canvas sync functionality

**Future Enhancements:**
- Automated Canvas sync (webhook integration)
- Additional visualizations
- Export functionality
- Mobile optimization
- Real-time updates

---

**✅ All code and steps saved for future reference!**

**Last Updated:** June 10, 2026  
**Maintained By:** Wes White (@wes.white)  
**Status:** Production-Ready ✅

---

_This guide contains everything needed to maintain, update, and troubleshoot the Video AI Master Project Dashboard._
