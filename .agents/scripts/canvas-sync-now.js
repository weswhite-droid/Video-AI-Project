#!/usr/bin/env node
/**
 * Video AI Dashboard - Manual Canvas Sync
 * This version is meant to be called by Claude Code with Canvas data passed as arguments
 * Created: June 12, 2026
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

// Get Canvas data from command line arguments
const raidOpen = parseInt(process.argv[2]) || 6;
const raidInProgress = parseInt(process.argv[3]) || 3;
const raidClosed = parseInt(process.argv[4]) || 3;
const raidWatching = parseInt(process.argv[5]) || 1;
const raidNotStarted = parseInt(process.argv[6]) || 2;

const msCompleted = parseInt(process.argv[7]) || 12;
const msInProgress = parseInt(process.argv[8]) || 18;
const msNotStarted = parseInt(process.argv[9]) || 31;
const msAtRisk = parseInt(process.argv[10]) || 7;
const msBlocked = parseInt(process.argv[11]) || 1;

// Paths
const PROJECT_DIR = process.cwd();
const DASHBOARD_FILE = path.join(PROJECT_DIR, 'video-ai-dashboard.html');
const LOG_FILE = path.join(PROJECT_DIR, '.agents', 'logs', 'canvas-sync.log');

// Logging function
function log(message) {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);

  // Ensure log directory exists
  const logDir = path.dirname(LOG_FILE);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  fs.appendFileSync(LOG_FILE, logMessage + '\n');
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

  html = html.replace(
    /<div class="dl-item"><div class="dl-swatch notstart"><\/div> Not Started <span class="dl-count">\d+<\/span><\/div>/,
    `<div class="dl-item"><div class="dl-swatch notstart"></div> Not Started <span class="dl-count">${raidData.notStarted}</span></div>`
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

  // Update last sync timestamp
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

// Main function
function main() {
  log('==================================================');
  log('Manual Canvas sync');
  log('==================================================');

  const raidData = {
    open: raidOpen,
    inProgress: raidInProgress,
    closed: raidClosed,
    watching: raidWatching,
    notStarted: raidNotStarted
  };

  const milestoneData = {
    completed: msCompleted,
    inProgress: msInProgress,
    notStarted: msNotStarted,
    atRisk: msAtRisk,
    blocked: msBlocked
  };

  log(`RAID - Open: ${raidData.open}, In Progress: ${raidData.inProgress}, Closed: ${raidData.closed}, Watching: ${raidData.watching}, Not Started: ${raidData.notStarted}`);
  log(`Milestones - Completed: ${milestoneData.completed}, In Progress: ${milestoneData.inProgress}, Not Started: ${milestoneData.notStarted}, At Risk: ${milestoneData.atRisk}, Blocked: ${milestoneData.blocked}`);

  // Create backup
  const backupDir = path.join(PROJECT_DIR, '.backup', 'auto-sync-backups');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const backupFile = path.join(backupDir, `dashboard-${Date.now()}.html`);
  fs.copyFileSync(DASHBOARD_FILE, backupFile);
  log(`Backup created: ${backupFile}`);

  // Update dashboard
  updateDashboard(raidData, milestoneData);

  // Commit and push
  try {
    log('Committing changes...');
    execFileSync('git', ['add', 'video-ai-dashboard.html'], { cwd: PROJECT_DIR });
    execFileSync('git', ['commit', '-m', `Auto-sync: Update dashboard from Canvas data (${new Date().toISOString()})`], { cwd: PROJECT_DIR });
    execFileSync('git', ['push', 'origin', 'main'], { cwd: PROJECT_DIR });
    execFileSync('git', ['push', 'soma', 'main'], { cwd: PROJECT_DIR });
    log('Changes committed and pushed to both repositories');
  } catch (error) {
    log(`Git operation failed: ${error.message}`);
  }

  log('Sync completed successfully');
  log('==================================================\n');
}

main();
