# 🔄 Canvas Sync Guide - Keep Dashboard Updated

## Overview

Your Video AI Dashboard now has **automatic sync** from two Slack Canvases:

1. **RAID Log** - Risks, Assumptions, Issues, Dependencies
2. **Master Project Plan** - Milestones, tasks, phases, and deliverables

Any time you update either canvas, you can sync to the dashboard with just a few clicks!

---

## 🎯 Sync Option 1: RAID Log from Canvas

### **Canvas URL:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4

---

## 🎯 How to Sync RAID Log from Canvas to Dashboard

### **Step 1: Open the Dashboard**

Local file:
```
C:\Users\wes.white\Documents\Video AI Project\video-ai-dashboard.html
```

Or once GitHub Pages is enabled:
```
https://weswhite-droid.github.io/Video-AI-Project/video-ai-dashboard.html
```

### **Step 2: Click "⟳ Sync from Canvas" Button**

Located in the RAID Risk Summary section at the top of the dashboard.

### **Step 3: Open Slack Canvas**

Click the **"📋 Open Canvas"** button (opens in new tab), or manually go to:
- Channel: **#proj-gss-video-ai-working-group**
- Canvas URL: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4

### **Step 4: Copy the RAID Log Table**

1. In the Slack Canvas, find the **RAID Log table**
2. Click inside the table
3. Select all rows: **Ctrl+A** (or Cmd+A on Mac)
4. Copy: **Ctrl+C** (or Cmd+C on Mac)

### **Step 5: Paste in the Dashboard Sync Modal**

1. Return to the dashboard sync modal
2. Paste into the text area: **Ctrl+V** (or Cmd+V on Mac)
3. Watch the preview appear showing parsed risks

### **Step 6: Apply Changes**

1. Review the preview counts (Open, In Progress, Closed, etc.)
2. Click **"Apply to Dashboard"**
3. ✅ Your donut chart and counts update instantly!

---

## 📅 Sync Option 2: Video AI Plan & Milestones from Canvas

### **Canvas URL:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q

### **Step 1: Open the Dashboard**

Same as RAID Log sync (see above)

### **Step 2: Click "⟳ Sync from Canvas" Button**

Located in the **Video AI Plan & Milestones** section.

### **Step 3: Open Video AI Plan & Milestones Canvas**

Click the **"📋 Open Canvas"** button, or manually go to:
- Channel: **#proj-gss-video-ai-working-group**
- Canvas URL: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q

### **Step 4: Copy the Project Plan Table**

1. In the Canvas, find the **Project Plan / Milestones table**
2. Click inside the table
3. Select all rows: **Ctrl+A** (or Cmd+A on Mac)
4. Copy: **Ctrl+C** (or Cmd+C on Mac)

### **Step 5: Paste in the Dashboard Sync Modal**

1. Return to the dashboard sync modal
2. Paste into the text area: **Ctrl+V**
3. Watch the preview appear showing parsed milestones

### **Step 6: Apply Changes**

1. Review the preview (Phase, Task, Owner, Due Date, Status)
2. Click **"Apply to Dashboard"**
3. ✅ Your milestone table updates instantly!

---

## 📊 What Gets Updated

### **When you sync RAID Log:**

✅ **RAID Risk Summary:**
- Total risk count
- Donut chart distribution
- Legend counts (Open, In Progress, Closed, Not Started, Watching)
- "Last synced" timestamp

### **When you sync Video AI Plan & Milestones:**

✅ **Video AI Plan & Milestones:**
- Full milestone/task table with all rows
- Phase groupings
- Task names and descriptions
- Owner assignments
- Due dates
- Status badges (color-coded)

---

## 🔄 Workflow for Keeping Dashboard Current

### **Option A: Manual Sync (Current)**

1. Update RAID log in Slack Canvas
2. Open dashboard locally
3. Click "⟳ Sync from Canvas"
4. Copy/paste from canvas
5. Apply changes
6. ⚠️ **Important:** Changes are local only!

### **Option B: Persist Changes to GitHub (Recommended)**

After syncing locally, to make changes permanent:

```bash
cd "/c/Users/wes.white/Documents/Video AI Project"

# 1. Open the updated HTML file
# 2. Copy the new risk counts from the donut chart
# 3. Update the hardcoded values in lines 445-457

# 4. Commit and push
git add video-ai-dashboard.html
git commit -m "Update RAID counts from Canvas sync [date]"
git push origin main
```

**Note:** The sync updates the dashboard dynamically, but doesn't save to the HTML file. You'll need to manually update the hardcoded initial values if you want them persisted.

---

## 🤖 Future Automation (Optional)

To make this fully automatic, you could:

### **Option 1: GitHub Actions + Slack Webhooks**

1. Set up Slack webhook triggered when canvas changes
2. GitHub Action fetches canvas data via Slack API
3. Auto-commits updated HTML to repo
4. GitHub Pages auto-deploys

### **Option 2: Slack App Integration**

1. Build custom Slack app
2. App monitors canvas changes
3. Posts updated data to dashboard endpoint
4. Dashboard fetches latest on load

### **Option 3: Scheduled Sync**

1. GitHub Action runs on schedule (e.g., daily 9am)
2. Fetches canvas via Slack API
3. Updates dashboard HTML
4. Auto-commits if changed

---

## 📋 Expected Canvas Formats

### **RAID Log Table Format:**

The sync tool expects these columns (in any order):

| Required Column | Alternative Names | Example Values |
|----------------|-------------------|----------------|
| **ID** | id, #, number | R-01, R-02, RISK-001 |
| **Description** | description, risk, issue, item, title, name | "VP sign-off pending..." |
| **Status** | status, state | Open, In Progress, Closed, Not Started, Watching |
| **Owner** | owner, assigned, responsible | Jeff Toler, Jerry Wu |

### **Supported Status Values:**

The sync tool auto-maps these status values:

- **Open:** open
- **In Progress:** in progress, in-progress, inprogress, active
- **Closed:** closed, complete, completed, done
- **Not Started:** not started, not-started, notstarted, planned
- **Watching:** watching, watch, monitor

### **Supported Formats:**

✅ Tab-separated (default Slack canvas copy)
✅ Pipe-delimited (`|` separated)

---

### **Video AI Plan & Milestones Table Format:**

Expected columns (in any order):

| Required Column | Alternative Names | Example Values |
|----------------|-------------------|----------------|
| **Phase** | phase, workstream, area, category | Planning, Procurement, Deployment |
| **Task/Milestone** | task, milestone, item, deliverable, name, title | "VP Sign-off", "Budget Approval" |
| **Owner** | owner, assigned, responsible, DRI | Jeff Toler, Jerry Wu |
| **Due Date** | due, date, target, deadline, eta | Jun 15, Q2 FY27, 2026-06-15 |
| **Status** | status, state | Not Started, In Progress, Completed, At Risk |

### **Supported Status Values (Video AI Plan):**

- **Not Started:** not started, not-started, notstarted, planned
- **In Progress:** in progress, in-progress, inprogress, active
- **Completed:** complete, completed, done, closed
- **At Risk:** at risk, at-risk, atrisk, blocked
- **On Hold:** on hold, on-hold, onhold, pending

**Status Colors:**
- 🔴 Red: At Risk, Blocked
- 🟢 Green: In Progress, Active
- 🔵 Blue: Completed, Done
- ⚪ Grey: Not Started, Planned
- 🟠 Orange: On Hold
- 🟡 Yellow: Pending

---

## 🛠️ Troubleshooting

### **"Could not parse the pasted content"**

**Causes:**
- Didn't copy table headers
- Missing Status column
- Copied from outside the table

**Fix:**
1. Click **inside** the RAID table in canvas
2. Select all with Ctrl+A
3. Make sure you see column headers in selection
4. Copy and paste again

---

### **Preview shows wrong counts**

**Causes:**
- Status values don't match expected format
- Extra rows copied (notes, summaries, etc.)

**Fix:**
1. Check status column uses standard values: Open, In Progress, Closed, Not Started, Watching
2. Only copy table rows (not surrounding text)

---

### **Changes disappear after refresh**

This is **expected behavior**! The sync updates the page dynamically but doesn't save to the HTML file.

**To persist changes:**
- Update the hardcoded initial values in the HTML source
- Commit and push to GitHub
- OR use one of the automation options above

---

## 📌 Quick Reference

### **Canvas URLs:**
- **RAID Log:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4
- **Video AI Plan & Milestones:** https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q

### **Dashboard:**
- **Local:** `C:\Users\wes.white\Documents\Video AI Project\video-ai-dashboard.html`
- **Live:** https://weswhite-droid.github.io/Video-AI-Project/video-ai-dashboard.html

### **Channel:**
**#proj-gss-video-ai-working-group**

### **Sync Shortcuts:**

**RAID Log:**
1. 📋 Open RAID Canvas → Copy table (Ctrl+A, Ctrl+C)
2. 🔄 Dashboard RAID section → Sync button → Paste (Ctrl+V)
3. ✅ Apply → Done!

**Video AI Plan & Milestones:**
1. 📋 Open Video AI Plan Canvas → Copy table (Ctrl+A, Ctrl+C)
2. 🔄 Dashboard Milestones section → Sync button → Paste (Ctrl+V)
3. ✅ Apply → Done!

---

## 🎓 Training Team Members

To share with your team:

```
🎯 **How to Update the Dashboard from Canvas**

1. Open dashboard: https://weswhite-droid.github.io/Video-AI-Project/
2. Click "⟳ Sync from Canvas" button
3. Click "📋 Open Canvas" → Select table → Ctrl+A → Ctrl+C
4. Paste into sync modal → Click "Apply"
5. ✅ Dashboard updates instantly!

Changes are temporary - contact @wes.white to persist to GitHub.
```

---

**Last Updated:** June 10, 2026  
**Version:** 1.0 - Initial Canvas sync implementation
