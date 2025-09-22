#!/bin/bash

# Azure App Service Pre-deployment Script
# This script ensures proper Node.js deployment and removes default files

echo "Starting pre-deployment script..."

# Remove hostingstart.html if it exists
if [ -f "hostingstart.html" ]; then
    echo "Removing default hostingstart.html"
    rm -f hostingstart.html
fi

# Remove any existing node_modules to ensure clean install
if [ -d "node_modules" ]; then
    echo "Removing existing node_modules for clean install"
    rm -rf node_modules
fi

echo "Pre-deployment script completed successfully."