# Slack Canvas Auto-Sync Setup Guide

Your dashboard is now configured to automatically pull updates from Slack every 30 minutes!

## 🚀 What This Does

Every 30 minutes, GitHub Actions will:
1. Connect to Slack channel `#proj-gss-video-ai-working-group`
2. Fetch all canvas files and recent updates
3. Extract important updates (mentions of blockers, milestones, risks, etc.)
4. Save data to `dashboard-data.json`
5. Automatically commit and push updates to GitHub
6. GitHub Pages auto-deploys the updated dashboard (2 minutes)

## 🔧 Setup Required (One-Time)

### Step 1: Create a Slack App

1. **Go to:** https://api.slack.com/apps
2. **Click:** "Create New App" → "From scratch"
3. **App Name:** `Video AI Dashboard Sync`
4. **Workspace:** Select your Salesforce workspace
5. **Click:** "Create App"

### Step 2: Configure Permissions

1. In your app settings, go to **"OAuth & Permissions"**
2. Scroll to **"Scopes"** → **"Bot Token Scopes"**
3. **Add these scopes:**
   - `channels:history` - Read messages from public channels
   - `channels:read` - View basic channel info
   - `files:read` - View files shared in channels
   - `groups:history` - Read messages from private channels (if needed)
   - `groups:read` - View basic private channel info

### Step 3: Install App to Workspace

1. Scroll to top of "OAuth & Permissions" page
2. **Click:** "Install to Workspace"
3. **Review permissions** and click "Allow"
4. **Copy the "Bot User OAuth Token"** (starts with `xoxb-`)
   - Keep this secret! You'll need it in Step 4

### Step 4: Add Bot to Channel

1. Go to Slack channel `#proj-gss-video-ai-working-group`
2. Type: `/invite @Video AI Dashboard Sync`
3. The bot will join the channel

### Step 5: Add Slack Token to GitHub

1. **Go to:** https://github.com/weswhite-droid/Video-AI-Project/settings/secrets/actions
2. **Click:** "New repository secret"
3. **Name:** `SLACK_BOT_TOKEN`
4. **Value:** Paste your Bot User OAuth Token from Step 3
5. **Click:** "Add secret"

## ✅ Verification

### Test the Sync Manually

1. Go to: https://github.com/weswhite-droid/Video-AI-Project/actions
2. Click on "Sync Slack Canvas Updates" workflow
3. Click "Run workflow" → "Run workflow" button
4. Watch it run (takes ~1 minute)
5. Check if `dashboard-data.json` was created/updated

### Check Auto-Sync

- The workflow runs **every 30 minutes** automatically
- Check Actions tab to see sync history
- Look for commits from `github-actions[bot]` with "Auto-update: Sync from Slack canvas"

## 📊 How to Use the Data in Your Dashboard

The sync creates `dashboard-data.json` with this structure:

```json
{
  "lastSync": "2026-07-06T14:30:00Z",
  "source": "Slack #proj-gss-video-ai-working-group",
  "canvasCount": 3,
  "updateCount": 12,
  "data": {
    "canvases": [
      {
        "name": "Project Timeline Canvas",
        "content": "...",
        "lastUpdated": "2026-07-06T12:00:00Z"
      }
    ],
    "recentUpdates": [
      {
        "text": "Blocker: Model tuning process not started",
        "user": "U123ABC",
        "timestamp": "2026-07-06T13:45:00Z"
      }
    ]
  }
}
```

### Display Updates in Dashboard

Add this to your `video-ai-dashboard.html`:

```html
<script>
  // Fetch latest Slack updates
  fetch('dashboard-data.json')
    .then(r => r.json())
    .then(data => {
      console.log('Latest sync:', data.lastSync);
      console.log('Canvas updates:', data.data.canvases);
      console.log('Recent updates:', data.data.recentUpdates);
      
      // Display in your dashboard
      // TODO: Update your dashboard UI with this data
    });
</script>
```

## 🔄 Sync Schedule

- **Automatic:** Every 30 minutes (via cron: `*/30 * * * *`)
- **Manual:** Trigger anytime via Actions tab → "Run workflow"
- **On Push:** Can be configured to sync on every push (optional)

## 🛠️ Customization

### Change Sync Frequency

Edit `.github/workflows/sync-slack-canvas.yml`:

```yaml
schedule:
  - cron: '*/15 * * * *'  # Every 15 minutes
  # or
  - cron: '0 * * * *'     # Every hour
  # or
  - cron: '0 9,12,15 * * *' # At 9am, 12pm, 3pm daily
```

### Monitor Different Channels

Edit `scripts/sync-slack-canvas.js`:

```javascript
const CHANNEL_NAME = 'your-other-channel-name';
```

### Add More Keywords to Track

Edit the `keywords` array in the script:

```javascript
const keywords = ['blocker', 'milestone', 'risk', 'completed', 'delayed', 'budget', 'phase', 'urgent', 'critical'];
```

## 🐛 Troubleshooting

### Workflow Fails

1. Check Actions tab for error details
2. Verify `SLACK_BOT_TOKEN` is set correctly
3. Ensure bot is invited to the channel
4. Check bot has correct permissions

### No Updates Found

- Verify the channel name matches exactly
- Check if bot can see the channel (try `/invite @botname`)
- Look at raw workflow logs for details

### Bot Can't Access Canvas Files

- Canvas files may require additional permissions
- Try adding `files:write` scope if needed
- Some canvas content may be restricted by Slack

## 📞 Need Help?

- Check workflow logs in Actions tab
- Review Slack app event subscriptions
- Test the sync manually first
- Contact Slack admin if permissions issues

---

**Status:** ⏳ Waiting for Slack token setup  
**Next Step:** Complete Steps 1-5 above to activate auto-sync  
**Documentation:** https://api.slack.com/methods
