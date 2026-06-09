#!/bin/bash
# Deploy Video AI Dashboard to Salesforce Internal Git

set -e  # Exit on error

echo "🚀 Video AI Dashboard - Git Deployment Script"
echo "=============================================="
echo ""

# Configuration
PROJECT_DIR="/c/Users/wes.white/Documents/Video AI Project"
REPO_NAME="video-ai-dashboard"

cd "$PROJECT_DIR"

# Detect/suggest organization
echo "📋 Suggested organizations based on your project:"
echo "   1) gss-resilience (GSS Resilience Team)"
echo "   2) gss-security (GSS Security Operations)"
echo "   3) secops (Security Operations)"
echo "   4) workplace-services (Workplace Services)"
echo "   5) Custom (enter your own)"
echo ""

read -p "Select organization (1-5) or enter org name directly: " ORG_CHOICE

case $ORG_CHOICE in
    1) ORG="gss-resilience" ;;
    2) ORG="gss-security" ;;
    3) ORG="secops" ;;
    4) ORG="workplace-services" ;;
    5) read -p "Enter organization name: " ORG ;;
    *) ORG="$ORG_CHOICE" ;;
esac

echo ""
echo "📦 Using organization: $ORG"
GIT_URL="https://git.soma.salesforce.com/${ORG}/${REPO_NAME}.git"
echo "📍 Repository URL: $GIT_URL"
echo ""

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' already exists:"
    git remote get-url origin
    read -p "Remove and replace? (y/n): " REPLACE
    if [[ "$REPLACE" == "y" ]]; then
        git remote remove origin
        echo "✅ Removed old remote"
    else
        echo "❌ Aborted"
        exit 1
    fi
fi

# Add the README and other files
echo ""
echo "📝 Adding files to git..."
git add README-SLACK-SHARING.md "Video AI Project Summary.md"
git status

echo ""
read -p "Commit these files? (y/n): " COMMIT_CHOICE
if [[ "$COMMIT_CHOICE" == "y" ]]; then
    git commit -m "Add documentation and project summary"
    echo "✅ Committed"
fi

# Add remote
echo ""
echo "🔗 Adding remote: $GIT_URL"
git remote add origin "$GIT_URL"

echo ""
echo "⚠️  IMPORTANT: Before pushing, you need to:"
echo "   1. Create the repository on git.soma.salesforce.com"
echo "   2. Go to: https://git.soma.salesforce.com/$ORG"
echo "   3. Click 'New Repository'"
echo "   4. Name it: $REPO_NAME"
echo "   5. Make it private (recommended)"
echo "   6. Do NOT initialize with README (we already have files)"
echo ""
read -p "Have you created the repository? (y/n): " REPO_CREATED

if [[ "$REPO_CREATED" != "y" ]]; then
    echo ""
    echo "📋 Next steps:"
    echo "   1. Open: https://git.soma.salesforce.com/$ORG"
    echo "   2. Create repository: $REPO_NAME"
    echo "   3. Run this script again"
    echo ""
    echo "Repository URL saved. You can push later with:"
    echo "   git push -u origin master"
    exit 0
fi

# Rename branch to main if needed
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" == "master" ]]; then
    echo ""
    read -p "Rename branch 'master' to 'main'? (recommended) (y/n): " RENAME
    if [[ "$RENAME" == "y" ]]; then
        git branch -M main
        echo "✅ Renamed to 'main'"
        CURRENT_BRANCH="main"
    fi
fi

# Push
echo ""
echo "🚀 Pushing to: $GIT_URL"
echo "   Branch: $CURRENT_BRANCH"
echo ""

if git push -u origin "$CURRENT_BRANCH"; then
    echo ""
    echo "✅ Successfully pushed to git.soma.salesforce.com!"
    echo ""
    echo "📊 Your dashboard is now at:"
    echo "   Repo: https://git.soma.salesforce.com/$ORG/$REPO_NAME"
    echo ""
    echo "🌐 To enable GitHub Pages:"
    echo "   1. Go to: https://git.soma.salesforce.com/$ORG/$REPO_NAME/settings"
    echo "   2. Navigate to 'Pages' section"
    echo "   3. Enable Pages from '$CURRENT_BRANCH' branch"
    echo "   4. Your dashboard will be at:"
    echo "      https://pages.git.soma.salesforce.com/$ORG/$REPO_NAME/video-ai-dashboard.html"
    echo ""
    echo "💬 Share in Slack:"
    echo "   🎯 Video AI Dashboard: https://pages.git.soma.salesforce.com/$ORG/$REPO_NAME/video-ai-dashboard.html"
    echo ""
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "   1. Repository doesn't exist yet - create it first"
    echo "   2. Authentication required - check your git credentials"
    echo "   3. No permission - verify you have write access to $ORG"
    echo ""
    echo "💡 Try creating the repo first at:"
    echo "   https://git.soma.salesforce.com/$ORG"
    exit 1
fi
