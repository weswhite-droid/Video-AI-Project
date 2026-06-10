#!/bin/bash
# Video AI Dashboard - Quick Reference Commands
# Created: June 10, 2026
# Usage: Source this file or copy commands as needed

# =============================================================================
# PROJECT NAVIGATION
# =============================================================================

# Navigate to project directory
cd "/c/Users/wes.white/Documents/Video AI Project"

# =============================================================================
# GIT STATUS & INFO
# =============================================================================

# Check current status
git status

# Check configured remotes
git remote -v

# View commit history
git log --oneline

# View Git Soma commits
git log soma/main --oneline

# List files in Git Soma repository
git ls-tree -r --name-only soma/main

# =============================================================================
# MAKING CHANGES
# =============================================================================

# Edit main dashboard (open in your editor)
# code video-ai-dashboard.html
# OR
# notepad video-ai-dashboard.html

# Test locally (open in browser)
start video-ai-dashboard.html

# =============================================================================
# COMMITTING CHANGES
# =============================================================================

# Stage changes
git add video-ai-dashboard.html

# Commit with message
git commit -m "Update: describe your changes here"

# Stage and commit all changes
git add -A
git commit -m "Update: describe your changes here"

# =============================================================================
# PUSHING TO REPOSITORIES
# =============================================================================

# Push to GitHub (origin)
git push origin main

# Push to Git Soma (soma)
git push soma main

# Push to both repositories
git push origin main && git push soma main

# =============================================================================
# GIT SOMA SETUP (if needed again)
# =============================================================================

# Remove old soma remote
git remote remove soma

# Add Git Soma remote
git remote add soma https://git.soma.salesforce.com/wes-white/video-ai-master-project.git

# Push to Git Soma for first time
git push -u soma main

# =============================================================================
# BACKUP & RESTORE
# =============================================================================

# Backup current dashboard
cp video-ai-dashboard.html ".backup/video-ai-dashboard-backup-$(date +%Y%m%d).html"

# Restore from backup
cp .backup/dashboard-v1.0-2026-06-10/video-ai-dashboard.html ./video-ai-dashboard.html

# Restore all files from backup
cp .backup/dashboard-v1.0-2026-06-10/*.html ./

# =============================================================================
# TESTING & VALIDATION
# =============================================================================

# Open dashboard in browser
start video-ai-dashboard.html

# Open all HTML files in browser
start video-ai-dashboard.html
start video-ai-raid-log.html
start video-ai-raci.html
start video-ai-requirements.html

# =============================================================================
# GIT SOMA PAGES URLS
# =============================================================================

# Main Dashboard URL (copy to clipboard)
echo "https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html" | clip

# Repository URL
echo "https://git.soma.salesforce.com/wes-white/video-ai-master-project" | clip

# Settings URL (for enabling Pages)
echo "https://git.soma.salesforce.com/wes-white/video-ai-master-project/settings" | clip

# =============================================================================
# VIEWING CHANGES
# =============================================================================

# Show what changed in last commit
git show

# Show changes not yet staged
git diff

# Show changes already staged
git diff --staged

# Compare with Git Soma version
git diff soma/main

# =============================================================================
# DOCUMENTATION ACCESS
# =============================================================================

# View modification guide
cat .backup/dashboard-v1.0-2026-06-10/MODIFICATION-GUIDE.md

# View code reference
cat .backup/dashboard-v1.0-2026-06-10/CODE-REFERENCE.md

# View version manifest
cat .backup/dashboard-v1.0-2026-06-10/VERSION-MANIFEST.txt

# View publishing guide
cat .agents/artifacts/COMPLETE-PUBLISHING-GUIDE.md

# =============================================================================
# COMMON WORKFLOWS
# =============================================================================

# Workflow: Update dashboard and push to both repos
update_and_push() {
    cd "/c/Users/wes.white/Documents/Video AI Project"

    # Test locally first
    echo "Opening dashboard for testing..."
    start video-ai-dashboard.html

    # Wait for user confirmation
    read -p "Changes look good? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # Stage changes
        git add video-ai-dashboard.html

        # Commit
        read -p "Commit message: " commit_msg
        git commit -m "$commit_msg"

        # Push to both
        echo "Pushing to GitHub..."
        git push origin main

        echo "Pushing to Git Soma..."
        git push soma main

        echo "✅ Done! Changes pushed to both repositories."
        echo "Wait 1-2 minutes for Git Soma Pages to rebuild."
        echo "Dashboard: https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html"
    else
        echo "Update cancelled."
    fi
}

# Workflow: Quick backup before changes
quick_backup() {
    cd "/c/Users/wes.white/Documents/Video AI Project"
    backup_dir=".backup/manual-backup-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$backup_dir"
    cp *.html "$backup_dir/"
    echo "✅ Backup created: $backup_dir"
}

# Workflow: Check if Git Soma is in sync
check_sync() {
    cd "/c/Users/wes.white/Documents/Video AI Project"
    echo "Checking sync status..."

    git fetch soma

    commits_ahead=$(git rev-list soma/main..HEAD --count)
    commits_behind=$(git rev-list HEAD..soma/main --count)

    echo "Commits ahead of Git Soma: $commits_ahead"
    echo "Commits behind Git Soma: $commits_behind"

    if [ "$commits_ahead" -eq 0 ] && [ "$commits_behind" -eq 0 ]; then
        echo "✅ In sync with Git Soma"
    elif [ "$commits_ahead" -gt 0 ]; then
        echo "⚠️ You have local changes not pushed to Git Soma"
        echo "Run: git push soma main"
    elif [ "$commits_behind" -gt 0 ]; then
        echo "⚠️ Git Soma has changes you don't have locally"
        echo "Run: git pull soma main"
    fi
}

# =============================================================================
# TROUBLESHOOTING
# =============================================================================

# Check if repository exists on Git Soma
check_repo() {
    echo "Checking if Git Soma repository exists..."
    curl -I https://git.soma.salesforce.com/wes-white/video-ai-master-project 2>&1 | head -1
}

# Verify Git Soma Pages is enabled
check_pages() {
    echo "Opening Git Soma Pages settings..."
    start https://git.soma.salesforce.com/wes-white/video-ai-master-project/settings
    echo "Check if 'Pages' section shows 'Your site is ready to be published'"
}

# Test dashboard URL
test_dashboard() {
    echo "Opening live dashboard..."
    start https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html
    echo "Check browser console (F12) for any errors"
}

# =============================================================================
# SLACK INTEGRATION
# =============================================================================

# Copy announcement message to clipboard
copy_slack_announcement() {
    cat << 'EOF' | clip
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
EOF
    echo "✅ Slack announcement copied to clipboard!"
    echo "Paste in #proj-gss-video-ai-working-group"
}

# Copy Canvas content to clipboard
copy_canvas_content() {
    cat << 'EOF' | clip
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
EOF
    echo "✅ Canvas content copied to clipboard!"
    echo "Paste at bottom of: https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q"
}

# Open Slack channel
open_slack_channel() {
    start https://salesforce.enterprise.slack.com/archives/C0AS161CKGC
}

# Open Canvas
open_canvas() {
    start https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q
}

# =============================================================================
# HELPER FUNCTIONS
# =============================================================================

# Show all available commands
show_commands() {
    echo "=== Video AI Dashboard - Available Commands ==="
    echo ""
    echo "Workflows:"
    echo "  update_and_push        - Update dashboard and push to both repos"
    echo "  quick_backup           - Create backup before making changes"
    echo "  check_sync             - Check sync status with Git Soma"
    echo ""
    echo "Troubleshooting:"
    echo "  check_repo             - Verify Git Soma repository exists"
    echo "  check_pages            - Check if Pages is enabled"
    echo "  test_dashboard         - Open live dashboard in browser"
    echo ""
    echo "Slack Integration:"
    echo "  copy_slack_announcement - Copy announcement to clipboard"
    echo "  copy_canvas_content    - Copy Canvas content to clipboard"
    echo "  open_slack_channel     - Open Slack channel in browser"
    echo "  open_canvas            - Open Canvas in browser"
    echo ""
    echo "For individual commands, see this file:"
    echo "  .agents/artifacts/QUICK-REFERENCE-COMMANDS.sh"
}

# =============================================================================
# USAGE INSTRUCTIONS
# =============================================================================

cat << 'EOF'

=============================================================================
VIDEO AI DASHBOARD - QUICK REFERENCE COMMANDS
=============================================================================

This file contains all commands you need to manage the Video AI Dashboard.

HOW TO USE:
-----------

Option 1: Source this file (recommended for functions)
  source .agents/artifacts/QUICK-REFERENCE-COMMANDS.sh
  Then run: show_commands

Option 2: Copy individual commands
  Open this file and copy the command you need

Option 3: Run specific sections
  Copy a block of commands and run them together

USEFUL WORKFLOWS:
----------------

1. Update Dashboard:
   cd "/c/Users/wes.white/Documents/Video AI Project"
   # Make your changes to video-ai-dashboard.html
   start video-ai-dashboard.html  # Test locally
   git add video-ai-dashboard.html
   git commit -m "Update: your message"
   git push origin main && git push soma main

2. Quick Backup:
   cp video-ai-dashboard.html ".backup/backup-$(date +%Y%m%d).html"

3. Check Status:
   cd "/c/Users/wes.white/Documents/Video AI Project"
   git status
   git remote -v
   git log --oneline

IMPORTANT URLS:
--------------

Dashboard:   https://git.soma.salesforce.com/pages/wes-white/video-ai-master-project/video-ai-dashboard.html
Repository:  https://git.soma.salesforce.com/wes-white/video-ai-master-project
Settings:    https://git.soma.salesforce.com/wes-white/video-ai-master-project/settings
Slack:       https://salesforce.enterprise.slack.com/archives/C0AS161CKGC
Canvas:      https://salesforce.enterprise.slack.com/docs/T2ULD0UKW/F0ARW0XCV3Q

DOCUMENTATION:
-------------

Complete Guide:      .agents/artifacts/COMPLETE-PUBLISHING-GUIDE.md
Modification Guide:  .backup/dashboard-v1.0-2026-06-10/MODIFICATION-GUIDE.md
Code Reference:      .backup/dashboard-v1.0-2026-06-10/CODE-REFERENCE.md
Version Manifest:    .backup/dashboard-v1.0-2026-06-10/VERSION-MANIFEST.txt

=============================================================================

EOF
