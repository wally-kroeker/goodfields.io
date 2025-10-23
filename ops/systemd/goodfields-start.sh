#!/bin/bash
# Start script for GoodFields - sources NVM and runs the app
export NVM_DIR="/home/docker/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
exec pnpm start
