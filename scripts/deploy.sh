#!/bin/bash

# Deployment script for GoodFields production server (10.10.10.33)
# Usage: ./scripts/deploy.sh

set -e

SERVER="goodfields-prod"
PROJECT_DIR="/home/docker/goodfields.io"
SERVICE_NAME="goodfields-web"
SUDO_PASS="Ra2Ra331234"

echo "🚀 Deploying GoodFields to production..."

# Pre-flight check: working tree must be clean
if ! git diff-index --quiet HEAD --; then
  echo "❌ ERROR: Uncommitted changes detected. Please commit all changes before deploying."
  echo "Run: git status"
  exit 1
fi

if ! git diff-index --quiet --cached HEAD --; then
  echo "❌ ERROR: Staged changes detected. Please commit all changes before deploying."
  echo "Run: git status"
  exit 1
fi

echo "✅ Working tree clean"

# Deploy to production
echo "📦 Connecting to production server ($SERVER)..."

ssh "$SERVER" "export PATH=/home/docker/.nvm/versions/node/v22.18.0/bin:\$PATH && \
  cd $PROJECT_DIR && \
  echo '📥 Pulling latest changes...' && \
  git pull origin main && \
  echo '📚 Installing dependencies...' && \
  pnpm install && \
  echo '🔨 Building project...' && \
  pnpm build && \
  echo '🔄 Restarting service...' && \
  echo '$SUDO_PASS' | sudo -S systemctl restart $SERVICE_NAME && \
  echo '✅ Deployment complete!'"

echo "🎉 GoodFields deployed successfully!"
