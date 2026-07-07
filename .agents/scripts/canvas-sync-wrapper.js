#!/usr/bin/env node
/**
 * Video AI Dashboard - Canvas Sync Wrapper
 * This script provides instructions for running the Canvas sync properly
 * Created: July 7, 2026
 */

const path = require('path');

console.log(`
╔════════════════════════════════════════════════════════════════╗
║         Video AI Dashboard - Canvas Sync Wrapper              ║
╚════════════════════════════════════════════════════════════════╝

The Canvas sync requires MCP Slack tools which are only available
in Claude Code's context, not in standalone Node.js scripts.

╔════════════════════════════════════════════════════════════════╗
║  AUTOMATED SYNC (Every 30 minutes)                            ║
╚════════════════════════════════════════════════════════════════╝

✅ Already configured! Cron job runs every 30 minutes.
   Job ID: cb462bd5
   Auto-expires: After 7 days (requires renewal)

To check status:
   Ask Claude Code: "/cron list"

╔════════════════════════════════════════════════════════════════╗
║  MANUAL SYNC (On-demand)                                      ║
╚════════════════════════════════════════════════════════════════╝

Option 1: Ask Claude Code to run the sync
   → "Run the Canvas sync script to update the Video AI Dashboard"

   Claude Code will:
   1. Read Canvas data via MCP Slack tools
   2. Parse RAID and Milestone counts
   3. Run canvas-sync-now.js with the counts
   4. Update dashboard and push to git

Option 2: Manual sync with known counts
   If you already know the counts from Canvas:

   node .agents/scripts/canvas-sync-now.js \\
     [raidOpen] [raidInProg] [raidClosed] [raidWatch] [raidNotStart] \\
     [msComplete] [msInProg] [msNotStart] [msAtRisk] [msBlocked]

   Example:
   node .agents/scripts/canvas-sync-now.js 7 2 4 1 3 12 18 31 7 1

╔════════════════════════════════════════════════════════════════╗
║  CURRENT STATUS                                                ║
╚════════════════════════════════════════════════════════════════╝

Dashboard: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html
Log file: .agents/logs/canvas-sync.log
Backups:  .backup/auto-sync-backups/

Canvas Sources:
  • RAID Log: F0ARY14AVK4
  • Milestones: F0ARW0XCV3Q
  • Budget: F0ARU5YHG8M

`);

process.exit(0);
