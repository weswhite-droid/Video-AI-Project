# 🚀 Git Soma Setup & Slack Canvas Publishing

## Step-by-Step Guide to Publish Video AI Master Project

---

## Part 1: Create Repository on Git Soma

### **Step 1: Open Git Soma**

**URL:** https://git.soma.salesforce.com/gss-resilience

**Alternative orgs if needed:**
- https://git.soma.salesforce.com/gss-security
- https://git.soma.salesforce.com/secops
- https://git.soma.salesforce.com/workplace-services

### **Step 2: Create New Repository**

1. **Click:** "New Repository" button (top right)

2. **Fill in details:**
   ```
   Repository Name:     video-ai-master-project
   Description:         Video AI Master Project Dashboard - RAID, RACI, Requirements tracking with Slack Canvas sync
   Visibility:          ☑ Private (recommended)
   Initialize:          ☐ Do NOT initialize with README
   .gitignore:          None (we have files already)
   License:             None (internal project)
   ```

3. **Click:** "Create Repository"

4. **Copy the repository URL** (will be shown on next screen):
   ```
   https://git.soma.salesforce.com/gss-resilience/video-ai-master-project.git
   ```

---

## Part 2: Push Code to Git Soma

### **Option A: If Repository Already Created**

```bash
cd "/c/Users/wes.white/Documents/Video AI Project"

# Verify remote exists
git remote -v

# If soma remote doesn't exist, add it:
git remote add soma https://git.soma.salesforce.com/gss-resilience/video-ai-master-project.git

# Push all code
git push -u soma main
```

### **Option B: If You Get "Repository Not Found"**

This means you need to create the repository on Git Soma first (see Step 1 above).

After creating it:
```bash
cd "/c/Users/wes.white/Documents/Video AI Project"
git push -u soma main
```

### **Expected Output:**
```
Enumerating objects: 150, done.
Counting objects: 100% (150/150), done.
Delta compression using up to 8 threads
Compressing objects: 100% (120/120), done.
Writing objects: 100% (150/150), 300 KB | 5 MB/s, done.
Total 150 (delta 80), reused 0 (delta 0)
To https://git.soma.salesforce.com/gss-resilience/video-ai-master-project.git
 * [new branch]      main -> main
branch 'main' set up to track 'soma/main'.
```

---

## Part 3: Verify on Git Soma

### **Check Repository Online:**

1. **Go to:** https://git.soma.salesforce.com/gss-resilience/video-ai-master-project

2. **Verify files are there:**
   - ✅ video-ai-dashboard.html
   - ✅ video-ai-raid-log.html
   - ✅ video-ai-raci.html
   - ✅ video-ai-requirements.html
   - ✅ All documentation files
   - ✅ .backup folder

3. **Check commit history:**
   - Should show all your commits
   - Latest commit should be "Add backup summary document"

---

## Part 4: Add to Slack Canvas

### **Canvas: Video AI Plan & Milestones**

**URL:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q

### **What to Add:**

1. **Open the canvas** in Slack channel `#proj-gss-video-ai-working-group`

2. **Find or create a "Resources" or "Project Links" section**

3. **Add the following content:**

```markdown
## 📊 Project Dashboard & Repository

### Live Dashboard
🌐 **Dashboard:** https://pages.git.soma.salesforce.com/gss-resilience/video-ai-master-project/video-ai-dashboard.html

**Quick Links:**
• 📊 Main Dashboard: [Open Dashboard](https://pages.git.soma.salesforce.com/gss-resilience/video-ai-master-project/video-ai-dashboard.html)
• ⚠️ RAID Log: [Open RAID](https://pages.git.soma.salesforce.com/gss-resilience/video-ai-master-project/video-ai-raid-log.html)
• 👥 RACI Matrix: [Open RACI](https://pages.git.soma.salesforce.com/gss-resilience/video-ai-master-project/video-ai-raci.html)
• 📐 Requirements: [Open Requirements](https://pages.git.soma.salesforce.com/gss-resilience/video-ai-master-project/video-ai-requirements.html)

### Repository
📂 **Git Soma:** https://git.soma.salesforce.com/gss-resilience/video-ai-master-project

**Features:**
✅ Real-time sync from this Canvas
✅ RAID Log tracking with donut chart
✅ Project milestones table
✅ Collapsible task sections
✅ Color-coded status indicators
✅ Dark theme design

**How to Sync Dashboard from Canvas:**
1. Open dashboard link above
2. Click "⟳ Sync from Canvas" button
3. Copy table from this canvas (Ctrl+A in table, Ctrl+C)
4. Paste in dashboard modal (Ctrl+V)
5. Click "Apply to Dashboard"
6. ✅ Dashboard updates instantly!

**Last Updated:** June 10, 2026
**Maintained By:** Wes White (@wes.white)
```

---

## Part 5: Enable Git Soma Pages (Optional)

### **To Host Dashboard on Git Soma:**

1. **Go to repository settings:**
   ```
   https://git.soma.salesforce.com/gss-resilience/video-ai-master-project/settings
   ```

2. **Navigate to "Pages" section** (left sidebar)

3. **Configure:**
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**

4. **Click:** Save

5. **Wait 1-2 minutes** for deployment

6. **Dashboard will be live at:**
   ```
   https://pages.git.soma.salesforce.com/gss-resilience/video-ai-master-project/video-ai-dashboard.html
   ```

---

## Part 6: Share in Slack Channel

### **Post Announcement:**

**In:** `#proj-gss-video-ai-working-group`

**Message:**

```
🎉 **Video AI Master Project Dashboard is now on Git Soma!**

📊 **Live Dashboard:** https://pages.git.soma.salesforce.com/gss-resilience/video-ai-master-project/video-ai-dashboard.html

📂 **Repository:** https://git.soma.salesforce.com/gss-resilience/video-ai-master-project

**What's Included:**
✅ RAID Log with Canvas sync
✅ Project Plan & Milestones with Canvas sync
✅ RACI Matrix
✅ System Requirements
✅ Interactive charts and collapsible sections

**Features:**
• 🔄 Real-time sync from Slack Canvas (RAID + Milestones)
• 📊 Donut chart for RAID distribution
• 📅 Full milestone tracking table
• 🎨 Dark theme, responsive design
• 🔒 Internal only (behind Salesforce network)

**Quick Links:**
• Dashboard: [Click here]
• RAID Log: [Click here]
• RACI: [Click here]
• Requirements: [Click here]

**How to Sync:**
1. Click "⟳ Sync from Canvas" on dashboard
2. Copy table from canvas (Ctrl+A, Ctrl+C)
3. Paste in modal (Ctrl+V) → Apply
4. ✅ Done!

📖 **Documentation:** All guides included in repository
📧 **Questions:** @wes.white

_Dashboard syncs with our Canvas at:_
• RAID: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4
• Video AI Plan: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q
```

---

## Part 7: Add Canvas Table Entry (Optional)

### **If you have a "Links" or "Resources" table in the canvas:**

Add a new row:

| Resource | Link | Description |
|----------|------|-------------|
| 📊 Dashboard | [Open Dashboard](https://pages.git.soma.salesforce.com/gss-resilience/video-ai-master-project/video-ai-dashboard.html) | Live project dashboard with RAID, milestones, RACI |
| 📂 Git Repo | [Open Repo](https://git.soma.salesforce.com/gss-resilience/video-ai-master-project) | Source code repository |

---

## Troubleshooting

### **"Repository not found" when pushing**
- Repository hasn't been created on Git Soma yet
- Create it first: https://git.soma.salesforce.com/gss-resilience
- Then try `git push -u soma main` again

### **Authentication issues**
- Make sure you're logged into Git Soma
- May need to set up SSH keys or personal access token
- Check: https://git.soma.salesforce.com/settings/profile

### **Permission denied**
- You may not have write access to `gss-resilience` org
- Contact org admin to be added as collaborator
- Or use a different org where you have access

### **Git Soma Pages not working**
- Wait 2-3 minutes after enabling (initial build)
- Check Settings → Pages shows "Your site is live"
- Verify branch is set to `main`
- Check you're on Salesforce network/VPN

---

## Alternative Orgs

If `gss-resilience` doesn't work, try:

```bash
# Option 1: GSS Security
git remote add soma https://git.soma.salesforce.com/gss-security/video-ai-master-project.git

# Option 2: SecOps
git remote add soma https://git.soma.salesforce.com/secops/video-ai-master-project.git

# Option 3: Workplace Services
git remote add soma https://git.soma.salesforce.com/workplace-services/video-ai-master-project.git
```

Then push:
```bash
git push -u soma main
```

---

## Summary Checklist

- [ ] Create repository on Git Soma
- [ ] Add soma remote to local git
- [ ] Push code to Git Soma (`git push -u soma main`)
- [ ] Verify files on Git Soma website
- [ ] Enable Git Soma Pages (optional)
- [ ] Add dashboard links to Slack Canvas
- [ ] Post announcement in Slack channel
- [ ] Test dashboard links work
- [ ] Test Canvas sync functionality
- [ ] Add team collaborators to Git Soma repo

---

## Quick Commands Reference

```bash
# Check remotes
git remote -v

# Add Git Soma remote
git remote add soma https://git.soma.salesforce.com/gss-resilience/video-ai-master-project.git

# Push to Git Soma
git push -u soma main

# Push to both GitHub and Git Soma
git push origin main
git push soma main

# Update from Git Soma
git pull soma main
```

---

**After completing these steps, your Video AI Master Project will be:**
✅ On Git Soma (internal repository)
✅ Listed in Slack Canvas
✅ Accessible to team
✅ Documented and shareable

---

**Need Help?**
- Git Soma: https://git.soma.salesforce.com/help
- Slack: #proj-gss-video-ai-working-group
- Contact: wes.white@salesforce.com
