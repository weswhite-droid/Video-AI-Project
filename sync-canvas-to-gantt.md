# Video AI - Canvas to Gantt Sync Guide

**Purpose:** Keep the Gantt Chart synchronized with your Slack Canvas "Project Plan & Milestones"

---

## 🔄 How to Update the Gantt Chart

### Method 1: Manual Sync (Recommended)

1. **Open the Gantt Chart Dashboard**
   - File: `video-ai-gantt.html`
   - Or visit: Your hosted dashboard URL

2. **Click "📋 Sync from Canvas" button**

3. **Copy from Slack Canvas:**
   - Go to Slack channel: `#proj-gss-video-ai-working-group`
   - Open canvas: "Project Plan & Milestones" (F0AS2CBLNCC)
   - Select and copy the entire tasks table (from "## Pre-Deployment Tasks" to the end)

4. **Paste into the text area** that appears

5. **Click "✅ Apply & Generate Gantt Chart"**

6. ✅ Done! Your Gantt chart is now updated with the latest data

---

## Method 2: Automated Sync (Future Enhancement)

### Option A: Slack Workflow Builder Integration

**Setup Steps:**
1. Create a Slack Workflow in #proj-gss-video-ai-working-group
2. Trigger: When canvas is updated
3. Action: Send webhook to dashboard endpoint
4. Dashboard auto-refreshes with new data

**Pros:** Fully automated
**Cons:** Requires Slack admin permissions

### Option B: Scheduled Script (PowerShell/Python)

**Create sync script that:**
1. Reads canvas data via Slack API
2. Parses task table
3. Regenerates Gantt chart
4. Saves updated HTML

**Frequency:** Run daily or on-demand

---

## 📊 What Gets Synced

The sync process updates:

✅ **Task Statistics**
- Total tasks count
- Completed tasks count
- In Progress tasks count
- Blocked/At Risk count

✅ **Gantt Timeline Bars**
- Visual representation based on start/end dates
- Status-based coloring (completed, in progress, at risk, blocked)

✅ **Critical Blocker List**
- Automatically identifies BLOCKER and SHOW STOPPER tasks
- Sorts by due date

---

## 🎨 Status Mapping

Canvas status → Gantt visualization:

| Canvas Status | Gantt Bar | Color |
|--------------|-----------|-------|
| 🟢 Completed | ████████ | Green |
| 🟡 In Progress | ▓▓▓▓▓▓▓▓ | Orange |
| 🔴 Not Started | ░░░░░░░░ | Gray |
| 🟠 At Risk | ▒▒▒▒▒▒▒▒ | Red |
| ⛔ Blocked | ⚠⚠⚠⚠⚠⚠⚠⚠ | Yellow |

---

## 💾 Data Storage

**Where data is stored:**
- **Primary**: Slack Canvas (F0AS2CBLNCC) - source of truth
- **Local**: Browser localStorage (video-ai-gantt.html)
- **Backup**: `.agents/artifacts/video-ai-gantt-chart.md`

**Update frequency:**
- Manual: On-demand when you click sync
- Auto-save: Dashboard saves to localStorage every 30 seconds
- Backup: Download via "💾 Save to File" button

---

## 🔧 Troubleshooting

### "No valid tasks found" error
**Cause:** Table format doesn't match expected structure
**Fix:** Ensure you're copying the entire table including headers

### Stats not updating
**Cause:** Browser cache
**Fix:** Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Gantt bars not aligned
**Cause:** Date format mismatch
**Fix:** Ensure dates in canvas are YYYY-MM-DD format

---

## 📝 Best Practices

1. **Update Canvas first** - Always make changes in Slack Canvas (source of truth)
2. **Sync weekly** - Refresh Gantt chart every Monday morning
3. **Backup before major changes** - Use "💾 Save to File" before big updates
4. **Verify critical dates** - Double-check blocker due dates after sync

---

## 🚀 Future Enhancements

Planned improvements:
- [ ] Direct Slack API integration (auto-sync)
- [ ] Export to PDF/PNG
- [ ] Email notifications for blockers
- [ ] Milestone alerts (30/60/90 days)
- [ ] Gantt chart zoom levels (week/month/quarter view)

---

## 📞 Need Help?

**Contact:** Wes White (@wes.white)
**Channel:** #proj-gss-video-ai-working-group
**Canvas:** [Project Plan & Milestones](https://salesforce.enterprise.slack.com/docs/T01G0063H29/F0ARW0XCV3Q)

---

**Last Updated:** June 29, 2026
**Version:** 1.0
