#!/bin/bash

# Set APP_DIR to the current directory where the script is located
# APP_DIR=$(pwd)

APP_DIR=$(dirname "$(readlink -f "$0")")

cd $APP_DIR

echo "Pulling latest changes..."
git pull origin production

echo "Installing dependencies..."
npm i --force

echo "Building Next.js application..."
yarn build

echo "Restarting application with PM2..."
pm2 restart 10 && pm2 save
