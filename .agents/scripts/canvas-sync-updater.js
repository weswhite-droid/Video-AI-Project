#!/usr/bin/env node
/**
 * Video AI Dashboard - Canvas Sync Updater
 * Reads Slack Canvas data via MCP and updates the dashboard HTML
 * Created: June 12, 2026
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

// Paths
const PROJECT_DIR = '/c/Users/wes.white/Documents/Video AI Project';
const DASHBOARD_FILE = path.join(PROJECT_DIR, 'video-ai-dashboard.html');
const LOG_FILE = path.join(PROJECT_DIR, '.agents/logs/canvas-sync.log');

// Canvas IDs
const CANVAS_IDS = {
  RAID: 'F0ARY14AVK4',
  MILESTONES: 'F0ARW0XCV3Q',
  BUDGET: 'F0ARU5YHG8M'
};

// Logging function
function log(message) {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);

  // Append to log file
  fs.appendFileSync(LOG_FILE, logMessage + '\n');
}

// Read Canvas via Claude MCP
function readCanvas(canvasId) {
  try {
    log(`Reading Canvas ${canvasId}...`);
    const result = execFileSync('claude', ['--format', 'json', '--', `Read canvas ${canvasId}`], {
      encoding: 'utf-8',
      cwd: PROJECT_DIR
    });
    return JSON.parse(result);
  } catch (error) {
    log(`ERROR reading Canvas ${canvasId}: ${error.message}`);
    return null;
  }
}

// Parse RAID data from Canvas
function parseRAIDData(canvasMarkdown) {
  const lines = canvasMarkdown.split('\n');
  const risks = { open: 0, closed: 0, watching: 0, inProgress: 0, notStarted: 0 };

  for (const line of lines) {
    if (line.includes('🔴 Open')) risks.open++;
    if (line.includes('✅ Closed') || line.includes(':white_check_mark:')) risks.closed++;
    if (line.includes('👀 Watching') || line.includes(':eyes:')) risks.watching++;
    if (line.includes('🟡 In Progress')) risks.inProgress++;
    if (line.includes('⚪ Not Started')) risks.notStarted++;
  }

  return risks;
}

// Parse milestone data from Canvas
function parseMilestoneData(canvasMarkdown) {
  const lines = canvasMarkdown.split('\n');
  const milestones = { completed: 0, inProgress: 0, notStarted: 0, atRisk: 0, blocked: 0 };

  for (const line of lines) {
    if (line.includes('🟢 Completed')) milestones.completed++;
    if (line.includes('🟡 In Progress')) milestones.inProgress++;
    if (line.includes('🔴 Not Started')) milestones.notStarted++;
    if (line.includes('🟠 At Risk')) milestones.atRisk++;
    if (line.includes('⛔ Blocked')) milestones.blocked++;
  }

  return milestones;
}

// Update dashboard HTML
function updateDashboard(raidData, milestoneData) {
  log('Updating dashboard HTML...');

  let html = fs.readFileSync(DASHBOARD_FILE, 'utf-8');

  // Update RAID donut legend counts
  html = html.replace(
    /<div class="dl-item"><div class="dl-swatch open"><\/div> Open <span class="dl-count">\d+<\/span><\/div>/,
    `<div class="dl-item"><div class="dl-swatch open"></div> Open <span class="dl-count">${raidData.open}</span></div>`
  );

  html = html.replace(
    /<div class="dl-item"><div class="dl-swatch inprog"><\/div> In Progress <span class="dl-count">\d+<\/span><\/div>/,
    `<div class="dl-item"><div class="dl-swatch inprog"></div> In Progress <span class="dl-count">${raidData.inProgress}</span></div>`
  );

  html = html.replace(
    /<div class="dl-item"><div class="dl-swatch closed"><\/div> Closed <span class="dl-count">\d+<\/span><\/div>/,
    `<div class="dl-item"><div class="dl-swatch closed"></div> Closed <span class="dl-count">${raidData.closed}</span></div>`
  );

  html = html.replace(
    /<div class="dl-item"><div class="dl-swatch watching"><\/div> Watching <span class="dl-count">\d+<\/span><\/div>/,
    `<div class="dl-item"><div class="dl-swatch watching"></div> Watching <span class="dl-count">${raidData.watching}</span></div>`
  );

  // Update stats bar
  const atRiskTotal = milestoneData.atRisk + milestoneData.blocked;

  html = html.replace(
    /<div class="stat-card red-card">\s*<div class="num">\d+<\/div>\s*<div class="lbl">At Risk \/ Blockers<\/div>/,
    `<div class="stat-card red-card">\n    <div class="num">${atRiskTotal}</div>\n    <div class="lbl">At Risk / Blockers</div>`
  );

  html = html.replace(
    /<div class="stat-card green-card">\s*<div class="num">\d+<\/div>\s*<div class="lbl">In Progress<\/div>/,
    `<div class="stat-card green-card">\n    <div class="num">${milestoneData.inProgress}</div>\n    <div class="lbl">In Progress</div>`
  );

  html = html.replace(
    /<div class="stat-card blue-card">\s*<div class="num">\d+<\/div>\s*<div class="lbl">Completed<\/div>/,
    `<div class="stat-card blue-card">\n    <div class="num">${milestoneData.completed}</div>\n    <div class="lbl">Completed</div>`
  );

  html = html.replace(
    /<div class="stat-card grey-card">\s*<div class="num">\d+<\/div>\s*<div class="lbl">Not Started<\/div>/,
    `<div class="stat-card grey-card">\n    <div class="num">${milestoneData.notStarted}</div>\n    <div class="lbl">Not Started</div>`
  );

  // Update last sync timestamp in dashboard
  const now = new Date();
  const timestamp = now.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  html = html.replace(
    /<span id="lastUpdated" style="[^"]*">Last updated: [^<]+<\/span>/,
    `<span id="lastUpdated" style="font-size: 0.7rem; color: #4a5568;">Last updated: ${timestamp}</span>`
  );

  // Write updated HTML
  fs.writeFileSync(DASHBOARD_FILE, html, 'utf-8');
  log('Dashboard updated successfully');
}

// Main sync function
async function syncDashboard() {
  log('==================================================');
  log('Starting automated Canvas sync');
  log('==================================================');

  try {
    // Read Canvas data
    const raidCanvas = readCanvas(CANVAS_IDS.RAID);
    const milestonesCanvas = readCanvas(CANVAS_IDS.MILESTONES);

    if (!raidCanvas || !milestonesCanvas) {
      log('ERROR: Failed to read Canvas data');
      return;
    }

    // Parse data
    const raidData = parseRAIDData(raidCanvas.markdown_content);
    const milestoneData = parseMilestoneData(milestonesCanvas.markdown_content);

    log(`RAID - Open: ${raidData.open}, In Progress: ${raidData.inProgress}, Closed: ${raidData.closed}, Watching: ${raidData.watching}`);
    log(`Milestones - Completed: ${milestoneData.completed}, In Progress: ${milestoneData.inProgress}, Not Started: ${milestoneData.notStarted}, At Risk: ${milestoneData.atRisk}, Blocked: ${milestoneData.blocked}`);

    // Create backup
    const backupDir = path.join(PROJECT_DIR, '.backup/auto-sync-backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const backupFile = path.join(backupDir, `dashboard-${Date.now()}.html`);
    fs.copyFileSync(DASHBOARD_FILE, backupFile);
    log(`Backup created: ${backupFile}`);

    // Update dashboard
    updateDashboard(raidData, milestoneData);

    // Commit and push
    log('Committing changes...');
    process.chdir(PROJECT_DIR);

    execFileSync('git', ['add', 'video-ai-dashboard.html']);
    execFileSync('git', ['commit', '-m', `Auto-sync: Update dashboard from Canvas data (${new Date().toISOString()})`]);
    execFileSync('git', ['push', 'origin', 'main']);
    execFileSync('git', ['push', 'soma', 'main']);

    log('Changes committed and pushed to both repositories');
    log('Sync completed successfully');

  } catch (error) {
    log(`ERROR during sync: ${error.message}`);
    log(error.stack);
  }

  log('==================================================');
  log('Next sync in 30 minutes');
  log('==================================================\n');
}

// Run sync
syncDashboard();
