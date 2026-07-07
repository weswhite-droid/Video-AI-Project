# Video AI Dashboard - Automated Canvas Sync Setup

**Created:** June 12, 2026  
**Status:** ✅ Active - Syncing every 30 minutes

---

## Overview

The Video AI Dashboard now automatically syncs with Slack Canvas data every 30 minutes. The system reads data from three Canvas documents and updates the dashboard HTML file, then commits and pushes changes to both GitHub and Git Soma repositories.

---

## System Components

### 1. Canvas Sync Script
**Location:** `.agents/scripts/canvas-sync-updater.js`

**Features:**
- Reads Canvas data via Slack MCP tools
- Parses RAID log status counts (Open, In Progress, Closed, Watching)
- Parses milestone status counts (Completed, In Progress, Not Started, At Risk, Blocked)
- Updates dashboard HTML with new counts
- Updates "Last Updated" timestamp
- Creates automatic backups before each update
- Commits and pushes changes to both GitHub and Git Soma

**Canvas IDs Monitored:**
- RAID Log: `F0ARY14AVK4`
- Video AI Plan & Milestones: `F0ARW0XCV3Q`
- Budget & Financial Tracking: `F0ARU5YHG8M`

### 2. Cron Schedule
**Schedule:** Every 30 minutes  
**Cron Expression:** `*/30 * * * *`  
**Type:** Recurring, durable (persists across restarts)  
**Auto-expires:** After 7 days (will need renewal)

**Cron Job ID:** `cb462bd5`

### 3. Backup System
**Location:** `.backup/auto-sync-backups/`

Every sync creates a timestamped backup:
- Format: `dashboard-{timestamp}.html`
- Automatic cleanup: Manual (backups accumulate)

### 4. Logging
**Location:** `.agents/logs/canvas-sync.log`

Logs include:
- Sync start/completion timestamps
- Canvas read operations
- Parsed data counts
- Backup creation
- Git operations
- Errors and exceptions

---

## How It Works

### Sync Process Flow

1. **Timer Triggers** (every 30 minutes)
   - Cron job executes the Node.js script

2. **Read Canvas Data**
   - Script uses Slack MCP to read three Canvas documents
   - Extracts markdown content from each Canvas

3. **Parse Data**
   - Counts RAID statuses (🔴 Open, 🟡 In Progress, ✅ Closed, 👀 Watching)
   - Counts milestone statuses (🟢 Completed, 🟡 In Progress, 🔴 Not Started, 🟠 At Risk, ⛔ Blocked)

4. **Create Backup**
   - Copies current dashboard to `.backup/auto-sync-backups/`
   - Timestamp format: Unix epoch milliseconds

5. **Update Dashboard**
   - Updates RAID donut chart legend counts
   - Updates stats bar counts (At Risk/Blockers, In Progress, Completed, Not Started)
   - Updates "Last Updated" timestamp in header

6. **Commit & Push**
   - Stages `video-ai-dashboard.html`
   - Creates commit: "Auto-sync: Update dashboard from Canvas data (timestamp)"
   - Pushes to `origin main` (GitHub)
   - Pushes to `soma main` (Git Soma)

7. **Git Soma Pages Rebuild**
   - Git Soma Pages detects push
   - Rebuilds live dashboard (1-2 minutes)
   - Changes visible at: `https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html`

---

## What Gets Updated

### RAID Log Section
- **Open count** - From Canvas status: 🔴 Open
- **In Progress count** - From Canvas status: 🟡 In Progress  
- **Closed count** - From Canvas status: ✅ Closed
- **Watching count** - From Canvas status: 👀 Watching

### Stats Bar
- **At Risk / Blockers** - Sum of 🟠 At Risk + ⛔ Blocked milestones
- **In Progress** - Count of 🟡 In Progress milestones
- **Completed** - Count of 🟢 Completed milestones
- **Not Started** - Count of 🔴 Not Started milestones

### Header
- **Last Updated timestamp** - Updated to current time on each sync

---

## Manual Operations

### Check Sync Status
View the log file:
```bash
tail -f "/c/Users/wes.white/Documents/Video AI Project/.agents/logs/canvas-sync.log"
```

### Run Sync Manually (One-Time)
```bash
cd "/c/Users/wes.white/Documents/Video AI Project"
node .agents/scripts/canvas-sync-updater.js
```

### View Scheduled Jobs
```
Use Claude Code command:
/cron list
```

### Cancel Auto-Sync
```
Use Claude Code to run:
CronDelete with job ID: cb462bd5
```

### Restart Auto-Sync (After 7-Day Expiration)
```
Use Claude Code to run:
CronCreate with same parameters (see "System Components" section above)
```

---

## Troubleshooting

### Sync Not Running
**Check:**
1. Verify cron job is active: `/cron list` in Claude Code
2. Check if 7-day expiration passed (job auto-deletes)
3. View logs for errors: `tail -100 .agents/logs/canvas-sync.log`

**Fix:**
- Recreate cron job using CronCreate (see Setup Instructions below)

### Canvas Read Errors
**Symptoms:** Log shows "ERROR reading Canvas {ID}"

**Possible Causes:**
- Slack MCP connection lost
- Canvas permissions changed
- Canvas ID changed (Canvas was recreated)

**Fix:**
1. Verify Canvas IDs are correct in script
2. Test Canvas access manually via Claude Code
3. Update Canvas IDs in script if needed

### Git Push Failures
**Symptoms:** Sync completes but no changes appear in Git

**Possible Causes:**
- Git credentials expired
- No changes detected (counts didn't change)
- Remote repository access issue

**Fix:**
1. Check git status manually: `cd "{project}" && git status`
2. Verify remote URLs: `git remote -v`
3. Test push manually: `git push origin main`

### Dashboard Not Updating on Git Soma Pages
**Symptoms:** Git shows commit but dashboard still shows old data

**Causes:**
- Git Soma Pages rebuild delay (normal: 1-2 minutes)
- Browser cache

**Fix:**
1. Wait 2-3 minutes after push
2. Hard refresh browser: Ctrl+Shift+R
3. Check Git Soma Pages deployment status

---

## Setup Instructions (For Future Reference)

If the cron job expires or needs to be recreated:

### 1. Ensure Script Exists
```bash
ls -la "/c/Users/wes.white/Documents/Video AI Project/.agents/scripts/canvas-sync-updater.js"
```

### 2. Make Script Executable
```bash
chmod +x "/c/Users/wes.white/Documents/Video AI Project/.agents/scripts/canvas-sync-updater.js"
```

### 3. Create Cron Job
Use Claude Code to run:
```
CronCreate({
  cron: "*/30 * * * *",
  prompt: "Run the Canvas sync script to update the Video AI Dashboard: cd \"/c/Users/wes.white/Documents/Video AI Project\" && node .agents/scripts/canvas-sync-updater.js",
  recurring: true,
  durable: true
})
```

### 4. Verify Job Created
```
/cron list
```

Should show job with ID and "Every 30 minutes" schedule.

---

## Maintenance

### Weekly Tasks
- Review sync logs for errors
- Check backup folder size (cleanup old backups if needed)

### Every 7 Days
- Renew cron job (auto-expires after 7 days)
- Use setup instructions above

### Monthly Tasks
- Review Canvas IDs (ensure they haven't changed)
- Test manual sync to verify functionality
- Clean up old backups (keep last 30 days)

---

## Configuration

### Canvas IDs
Located in: `.agents/scripts/canvas-sync-updater.js` (lines 14-18)

```javascript
const CANVAS_IDS = {
  RAID: 'F0ARY14AVK4',
  MILESTONES: 'F0ARW0XCV3Q',
  BUDGET: 'F0ARU5YHG8M'
};
```

### Sync Frequency
To change from 30 minutes to a different interval:

1. Delete existing cron job
2. Create new cron job with different expression:
   - Every 15 minutes: `*/15 * * * *`
   - Every hour: `0 * * * *`
   - Every 2 hours: `0 */2 * * *`

### Backup Retention
Backups accumulate indefinitely. To implement auto-cleanup, modify script to:
- Keep only last N backups
- Delete backups older than X days

---

## URLs

**Live Dashboard:**  
https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html

**GitHub Repository:**  
https://github.com/weswhite-droid/Video-AI-Project

**Git Soma Repository:**  
https://git.soma.salesforce.com/wes-white/video-ai-master-project

**Canvas Documents:**
- RAID Log: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARY14AVK4
- Video AI Plan: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q
- Budget: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARU5YHG8M

---

## Benefits

✅ **Real-time accuracy** - Dashboard reflects Canvas changes within 30 minutes  
✅ **Zero manual effort** - No more copy/paste from Canvas  
✅ **Automatic backups** - Every sync creates a safety backup  
✅ **Full automation** - Commits and pushes to both repositories automatically  
✅ **Audit trail** - Complete logs of all sync operations  
✅ **Persistence** - Durable cron job survives restarts  

---

## Notes

- First sync after setup will run at the next 30-minute mark (e.g., if set up at 2:15pm, first sync at 2:30pm)
- Cron job auto-expires after 7 days - requires renewal
- Script uses `execFileSync` for security (prevents command injection)
- All Canvas data is parsed client-side (no external APIs)
- Backups stored indefinitely (manual cleanup required)

---

**Last Updated:** June 12, 2026  
**Maintained By:** Wes White  
**Status:** ✅ Active and Running
