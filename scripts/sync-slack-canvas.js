const { WebClient } = require('@slack/web-api');
const fs = require('fs');
const path = require('path');

// Initialize Slack client
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

// Configuration
const CHANNEL_NAME = 'proj-gss-video-ai-working-group';
const OUTPUT_DIR = './slack-updates';
const DASHBOARD_DATA_FILE = './dashboard-data.json';

async function fetchSlackCanvasUpdates() {
  try {
    console.log('🔍 Fetching Slack canvas updates...');

    // Find the channel ID
    const channelsResponse = await slack.conversations.list({
      types: 'public_channel,private_channel'
    });
    
    const channel = channelsResponse.channels.find(c => c.name === CHANNEL_NAME);
    
    if (!channel) {
      console.error(`❌ Channel #${CHANNEL_NAME} not found`);
      return;
    }

    console.log(`✅ Found channel: #${CHANNEL_NAME} (${channel.id})`);

    // Fetch recent messages from the channel
    const messagesResponse = await slack.conversations.history({
      channel: channel.id,
      limit: 50
    });

    // Filter for canvas files and important updates
    const canvasFiles = [];
    const updates = {
      timestamp: new Date().toISOString(),
      channel: CHANNEL_NAME,
      canvases: [],
      recentUpdates: []
    };

    for (const message of messagesResponse.messages) {
      // Check for canvas files
      if (message.files) {
        for (const file of message.files) {
          if (file.filetype === 'canvas' || file.name.includes('canvas')) {
            console.log(`📄 Found canvas: ${file.name}`);
            canvasFiles.push({
              name: file.name,
              id: file.id,
              url: file.permalink,
              created: new Date(file.created * 1000).toISOString()
            });
            
            // Try to fetch canvas content if available
            try {
              const canvasContent = await slack.files.info({ file: file.id });
              updates.canvases.push({
                name: file.name,
                content: canvasContent.file.preview || 'Content not available',
                lastUpdated: new Date(file.timestamp * 1000).toISOString()
              });
            } catch (err) {
              console.log(`⚠️  Could not fetch canvas content: ${err.message}`);
            }
          }
        }
      }

      // Capture important text updates (mentions of milestones, blockers, etc.)
      if (message.text) {
        const text = message.text.toLowerCase();
        const keywords = ['blocker', 'milestone', 'risk', 'completed', 'delayed', 'budget', 'phase'];
        
        if (keywords.some(keyword => text.includes(keyword))) {
          updates.recentUpdates.push({
            text: message.text,
            user: message.user,
            timestamp: new Date(parseFloat(message.ts) * 1000).toISOString()
          });
        }
      }
    }

    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Save updates to JSON file
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'latest-updates.json'),
      JSON.stringify(updates, null, 2)
    );

    // Update dashboard data file
    const dashboardData = {
      lastSync: new Date().toISOString(),
      source: `Slack #${CHANNEL_NAME}`,
      canvasCount: updates.canvases.length,
      updateCount: updates.recentUpdates.length,
      data: updates
    };

    fs.writeFileSync(DASHBOARD_DATA_FILE, JSON.stringify(dashboardData, null, 2));

    console.log(`✅ Sync complete! Found ${canvasFiles.length} canvases and ${updates.recentUpdates.length} updates`);
    console.log(`📁 Data saved to: ${OUTPUT_DIR}/latest-updates.json`);

  } catch (error) {
    console.error('❌ Error fetching Slack updates:', error);
    process.exit(1);
  }
}

// Run the sync
fetchSlackCanvasUpdates();
