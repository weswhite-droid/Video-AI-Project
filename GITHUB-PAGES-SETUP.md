# GitHub Pages Setup Guide

## ✅ Repository is Ready!

Your repository has been configured for GitHub Pages deployment. Follow these steps to enable it:

---

## 🚀 Enable GitHub Pages (5 Minutes)

### Step 1: Go to Repository Settings

1. Navigate to: `https://git.soma.salesforce.com/wes-white/video-ai-master-project`
2. Click the **⚙️ Settings** tab (top right)

### Step 2: Enable GitHub Pages

1. Scroll down to the **"GitHub Pages"** section (left sidebar or scroll down)
2. Under **"Source"**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Click **Save**

### Step 3: Wait for Deployment

- GitHub Pages will take **1-3 minutes** to build and deploy
- You'll see a green checkmark when ready
- A URL will appear: `https://pages.git.soma.salesforce.com/wes-white/video-ai-master-project/`

---

## 🌐 Access Your Dashboard

Once enabled, the dashboard will be available at:

**Main URL:**  
`https://pages.git.soma.salesforce.com/wes-white/video-ai-master-project/`

The `index.html` will automatically redirect to:  
`https://pages.git.soma.salesforce.com/wes-white/video-ai-master-project/video-ai-dashboard/video-ai-dashboard.html`

---

## 📋 All Available Pages

| Page | URL Path |
|------|----------|
| **Landing Page** | `/` |
| **Main Dashboard** | `/video-ai-dashboard/video-ai-dashboard.html` |
| **RAID Log** | `/video-ai-dashboard/video-ai-raid-log.html` |
| **RACI Matrix** | `/video-ai-dashboard/video-ai-raci.html` |
| **Requirements** | `/video-ai-dashboard/video-ai-requirements.html` |
| **Gantt Chart** | `/Video-AI-Gantt-Chart.md` |

---

## 🔒 Access Control

### Internal Access Only

GitHub Pages on `git.soma.salesforce.com` is **automatically restricted** to Salesforce employees with network access.

### Share with Team

Once enabled, share this URL with your team:
- Bill Inzeo (Sponsor)
- Jeff Toler (Program Manager)
- Jerry Wu (Program Lead)
- Rob Mirakaj (SecOps Director)
- Suzanne Paleologos (GOC Director)
- Full Video AI Working Group

---

## 🔄 Automatic Updates

Every time you push changes to the `main` branch:
1. GitHub Pages automatically rebuilds
2. Updates appear within 1-2 minutes
3. No manual redeployment needed

---

## 🎨 Custom Domain (Optional)

If you want a custom URL like `video-ai.salesforce.com`:
1. Contact Salesforce IT/DNS team
2. Request CNAME record pointing to your Pages URL
3. Add custom domain in GitHub Pages settings

---

## 🐛 Troubleshooting

### Pages Not Showing Up?

1. **Check Settings:**  
   Settings → Pages → Ensure "Source" is set to `main` branch

2. **Check Build Status:**  
   Go to "Actions" tab → Look for "pages build and deployment" workflow

3. **Cache Issue:**  
   Try opening in Incognito mode or clear browser cache

4. **404 Error:**  
   Ensure file paths are correct (case-sensitive on GitHub Pages)

### Still Having Issues?

Contact GitHub Enterprise support or check:
- `https://docs.github.com/en/pages`
- Internal Salesforce GitHub documentation

---

## ✅ Verification Checklist

After enabling, verify these work:

- [ ] Landing page loads: `https://pages.git.soma.salesforce.com/wes-white/video-ai-master-project/`
- [ ] Auto-redirect to dashboard works
- [ ] All dashboard features load (Gantt charts, filters, etc.)
- [ ] RAID log accessible
- [ ] RACI matrix accessible
- [ ] Requirements page accessible
- [ ] Export PDF/CSV buttons work

---

## 📞 Need Help?

- **GitHub Pages Issue:** Contact Salesforce GitHub Enterprise admins
- **Dashboard Content Issue:** Contact Wes White
- **Access Issue:** Contact your manager for Video AI working group access

---

**Last Updated:** July 6, 2026  
**Repository:** `https://git.soma.salesforce.com/wes-white/video-ai-master-project`
