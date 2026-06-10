# 🛠️ Video AI Master Project Dashboard - Modification Guide

## 📦 Version: 1.0 (June 10, 2026)

This backup contains the complete, working Video AI Master Project Dashboard with dual Canvas sync functionality.

---

## 📁 Files in This Backup

### **Core Dashboard Files:**
- **`video-ai-dashboard.html`** (68 KB) - Main project dashboard with Canvas sync
- **`video-ai-raid-log.html`** (38 KB) - RAID log detail page
- **`video-ai-raci.html`** (36 KB) - RACI matrix page
- **`video-ai-requirements.html`** (59 KB) - System requirements page
- **`index.html`** (2.5 KB) - Landing page with auto-redirect

### **Documentation:**
- **`CANVAS-SYNC-GUIDE.md`** - Instructions for syncing from Slack Canvas
- **`CANVAS-INTEGRATION-SUMMARY.md`** - Overview of Canvas integration
- **`DEPLOYMENT-GUIDE.md`** - How to deploy to GitHub Pages
- **`DEPLOYMENT-SUCCESS.md`** - Post-deployment checklist
- **`ENABLE-PAGES-GUIDE.md`** - GitHub Pages setup instructions
- **`README-SLACK-SHARING.md`** - Slack sharing workflows
- **`Video AI Project Summary.md`** - Project overview
- **`MODIFICATION-GUIDE.md`** (this file) - How to modify the dashboard

---

## 🎯 Dashboard Features

### **1. RAID Log Canvas Sync**
- **Canvas URL:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4
- **Location:** Lines 444-467 in `video-ai-dashboard.html`
- **Syncs:** Donut chart showing risk distribution (Open, In Progress, Closed, Not Started, Watching)
- **JavaScript:** Lines 982-1177 (RAID sync functions)

### **2. Video AI Plan & Milestones Canvas Sync**
- **Canvas URL:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q
- **Location:** Lines 469-502 in `video-ai-dashboard.html`
- **Syncs:** Full milestone table with Phase, Task, Owner, Due Date, Status
- **JavaScript:** Lines 1179-1354 (Milestones sync functions)

### **3. Visual Elements**
- Dark theme (#0f1117 background)
- Interactive sections with collapsible details
- Status badges (color-coded)
- Real-time sync with preview
- Secure HTML escaping

---

## 🔧 Common Modifications

### **1. Change Canvas URLs**

**Location:** `video-ai-dashboard.html`

**For RAID Log (line ~448):**
```html
<a href="https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4" target="_blank" ...>
```

**For Video AI Plan (line ~476):**
```html
<a href="https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q" target="_blank" ...>
```

**Also update in modals (lines ~1032 and ~1330)**

---

### **2. Update Initial Risk Counts**

**Location:** Lines 458-462 in `video-ai-dashboard.html`

```html
<div class="dl-item"><div class="dl-swatch open"></div> Open <span class="dl-count">6</span></div>
<div class="dl-item"><div class="dl-swatch inprog"></div> In Progress <span class="dl-count">3</span></div>
<div class="dl-item"><div class="dl-swatch closed"></div> Closed <span class="dl-count">3</span></div>
<div class="dl-item"><div class="dl-swatch notstart"></div> Not Started <span class="dl-count">2</span></div>
<div class="dl-item"><div class="dl-swatch watching"></div> Watching <span class="dl-count">1</span></div>
```

Change the numbers in `<span class="dl-count">X</span>` to match your current counts.

**Also update donut chart total (line 445):**
```html
<span id="raidTotalLabel">15 Total Risks</span>
```

---

### **3. Update Project Stats (At Risk, In Progress, etc.)**

**Location:** Lines 470-481 in `video-ai-dashboard.html`

```html
<div class="stat-card red-card">
  <div class="num">1</div>
  <div class="lbl">At Risk</div>
</div>
<div class="stat-card green-card">
  <div class="num">9</div>
  <div class="lbl">In Progress</div>
</div>
<div class="stat-card blue-card">
  <div class="num">13</div>
  <div class="lbl">Completed</div>
</div>
<div class="stat-card grey-card">
  <div class="num">5</div>
  <div class="lbl">Not Started</div>
</div>
```

---

### **4. Change Theme Colors**

**Location:** Lines 7-15 in `video-ai-dashboard.html` (CSS)

**Background colors:**
```css
body {
  background: #0f1117;  /* Main background */
  color: #e2e8f0;       /* Text color */
}
```

**Status colors:**
```css
.dot-red    { background: #fc8181; }  /* At Risk */
.dot-green  { background: #68d391; }  /* In Progress */
.dot-blue   { background: #63b3ed; }  /* Completed */
.dot-grey   { background: #718096; }  /* Not Started */
```

---

### **5. Add New Task Sections**

**Location:** After line 582 in `video-ai-dashboard.html`

**Template:**
```html
<div class="section">
  <details open>
  <summary>
    <span class="section-icon">🆕</span>
    <span class="section-title">New Section Name</span>
    <span class="section-count">X items</span>
    <span class="chevron">▼</span>
  </summary>
  <div class="task-list">
    <div class="task green">
      <div class="task-status"></div>
      <div class="task-body">
        <div class="task-name">Task Name</div>
        <div class="task-sub">Task description</div>
      </div>
      <div class="badge green">In Progress</div>
    </div>
  </div>
  </details>
</div>
```

**Status classes:**
- `class="task red"` → At Risk
- `class="task green"` → In Progress
- `class="task blue"` → Completed
- `class="task grey"` → Not Started

---

### **6. Modify Sync Parsing Logic**

**Location:** Lines 1056-1111 (RAID), Lines 1264-1319 (Milestones)

**To add new status mappings:**

```javascript
var STATUS_MAP = {
  'open': 'open',
  'your-new-status': 'open',  // Add new mapping here
  'another-status': 'inprog',
  // etc...
};
```

**To change column detection:**

```javascript
var descCol = -1;
['description','risk','your-column-name'].forEach(function(k){  // Add your column name
  if (descCol === -1 && headers.indexOf(k) !== -1) descCol = headers.indexOf(k);
});
```

---

### **7. Change Donut Chart Colors**

**Location:** Line ~456 in `video-ai-dashboard.html`

**CSS (around line 370):**
```css
.donut {
  background: conic-gradient(
    #fc8181 0% 40%,      /* Open - Red */
    #ecc94b 40% 60%,     /* In Progress - Yellow */
    #68d391 60% 80%,     /* Closed - Green */
    #b794f4 80% 93.3%,   /* Not Started - Purple */
    #f6ad55 93.3% 100%   /* Watching - Orange */
  );
}
```

Change the hex color codes to your preferred colors.

---

## 🔒 Security Notes

### **XSS Prevention**
All user input from Canvas sync is escaped using:

```javascript
function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
```

**Never bypass this!** Always use `escapeHtml()` before inserting user content into HTML.

### **Safe DOM Manipulation**
When building table rows in `applyMilestones()`:
- Uses `createElement()` and `textContent` instead of `innerHTML`
- Creates DOM elements programmatically
- No string concatenation for HTML

---

## 📊 File Structure

```
video-ai-dashboard.html
├── <head>
│   └── <style> (lines 6-423)
│       ├── Global styles
│       ├── Header & legend
│       ├── Section styles
│       ├── RAID chart styles
│       ├── Stats bar styles
│       └── Modal styles
│
├── <body>
│   ├── Header (project info) - lines 426-443
│   ├── Legend - lines 436-441
│   ├── RAID Risk Summary - lines 444-467
│   │   ├── Sync button
│   │   ├── Open Canvas link
│   │   └── Donut chart
│   │
│   ├── Video AI Plan & Milestones - lines 469-502
│   │   ├── Sync button
│   │   ├── Open Canvas link
│   │   └── Milestone table (empty by default)
│   │
│   ├── Stats Bar - lines 504-521
│   ├── Task Sections - lines 523-900
│   │   ├── Planning & Governance
│   │   ├── Requirements & Change Management
│   │   ├── Financial & Quality
│   │   ├── Knowledge & Closure
│   │   ├── High-Level Deliverables
│   │   ├── Procurement Milestones
│   │   ├── Staffing & Resources
│   │   └── Phase Rollout
│   │
│   ├── Requirements Link - lines 902-918
│   ├── RAID Log Link - lines 920-932
│   ├── Footer - lines 934-936
│   │
│   ├── RAID Sync Modal - lines 938-980
│   ├── Milestones Sync Modal - lines 1356-1390
│   │
│   └── <script> - lines 982-1354
│       ├── RAID sync functions (982-1177)
│       └── Milestones sync functions (1179-1354)
│
└── </body>
```

---

## 🧪 Testing Modifications

### **1. Local Testing**
```bash
# Open the modified file
start "C:\Users\wes.white\Documents\Video AI Project\video-ai-dashboard.html"
```

### **2. Validation**
- Check for syntax errors (F12 in browser → Console)
- Test sync functionality with both canvases
- Verify all links work
- Check responsive design (resize browser window)

### **3. Before Deploying**
```bash
cd "/c/Users/wes.white/Documents/Video AI Project"
git add video-ai-dashboard.html
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will auto-deploy in 1-2 minutes.

---

## 🔄 Restoring from Backup

### **Option 1: Copy Files**
```bash
cp .backup/dashboard-v1.0-2026-06-10/video-ai-dashboard.html ./video-ai-dashboard.html
```

### **Option 2: Git Reset**
```bash
git log --oneline  # Find commit hash
git checkout <commit-hash> -- video-ai-dashboard.html
```

### **Option 3: Full Restore**
```bash
cp .backup/dashboard-v1.0-2026-06-10/*.html ./
cp .backup/dashboard-v1.0-2026-06-10/*.md ./
```

---

## 📝 Version History

### **v1.0 (June 10, 2026)**
- ✅ Dual Canvas sync (RAID + Video AI Plan)
- ✅ RAID donut chart (bar chart removed)
- ✅ Milestones table with full sync
- ✅ Secure HTML escaping
- ✅ Canvas links: F0ARY14AVK4 (RAID), F0ARW0XCV3Q (Video AI Plan)
- ✅ All documentation complete

### **Known Issues:**
- None

### **Planned Enhancements:**
- Auto-sync on canvas changes (webhook integration)
- Persistent storage (save synced data)
- Export to PDF/Excel
- Real-time collaboration

---

## 🆘 Troubleshooting

### **Sync Not Working**
1. Check Canvas URLs are correct
2. Verify table has expected columns (ID, Description, Status, Owner)
3. Check browser console (F12) for JavaScript errors
4. Ensure you're copying from inside the table (Ctrl+A in table, not page)

### **Donut Chart Not Updating**
1. Check `applySync()` function (line ~1129)
2. Verify `parsedRisks` is not null
3. Check `countByStatus()` returns correct counts (line ~1116)

### **Styles Broken**
1. Verify `<style>` block intact (lines 6-423)
2. Check for unclosed tags
3. Validate CSS syntax

### **Modal Not Opening**
1. Check `openSyncModal()` / `openMilestonesModal()` functions
2. Verify modal HTML exists (lines 938-980, 1356-1390)
3. Check button `onclick` attributes

---

## 🔗 Related Files

- **GitHub Repository:** https://github.com/weswhite-droid/Video-AI-Project
- **Live Dashboard:** https://weswhite-droid.github.io/Video-AI-Project/video-ai-dashboard.html (when Pages enabled)
- **Slack Channel:** #proj-gss-video-ai-working-group
- **RAID Canvas:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4
- **Video AI Plan Canvas:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q

---

## 📧 Support

**Contact:** wes.white@salesforce.com  
**Project Channel:** #proj-gss-video-ai-working-group  
**Documentation:** See `.backup/dashboard-v1.0-2026-06-10/` folder

---

## 🔐 Backup Information

**Created:** June 10, 2026  
**Location:** `.backup/dashboard-v1.0-2026-06-10/`  
**Git Commit:** Latest at time of backup  
**Files:** 14 files (HTML + documentation)  
**Total Size:** ~276 KB

---

**This backup is safe to restore at any time. All files are functional and tested.** ✅
