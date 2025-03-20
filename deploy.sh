#!/bin/bash

# Dubai Space Travel Booking Platform Deployment Script

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Dubai Space Travel Booking Platform ===${NC}"
echo -e "${YELLOW}=== Deployment Script ===${NC}"
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
  echo -e "${RED}Error: 'frontend' directory not found.${NC}"
  echo -e "${YELLOW}Please run this script from the project root directory.${NC}"
  exit 1
fi

echo -e "${GREEN}Step 1: Building the frontend application${NC}"
cd frontend

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}Installing dependencies...${NC}"
  npm install
fi

# Build the application
echo -e "${YELLOW}Building the application...${NC}"
npm run build

if [ $? -ne 0 ]; then
  echo -e "${RED}Build failed. Please check the errors above.${NC}"
  exit 1
fi

echo -e "${GREEN}Build successful!${NC}"

# Deployment options
echo ""
echo -e "${YELLOW}Step 2: Choose your deployment method:${NC}"
echo ""
echo "1) Run locally (using Express server)"
echo "2) Deploy to Heroku"
echo "3) Prepare for Netlify deployment"
echo "4) Exit"
echo ""

read -p "Enter your choice (1-4): " DEPLOY_CHOICE

case $DEPLOY_CHOICE in
  1)
    echo -e "${GREEN}Starting local server...${NC}"
    npm run server
    ;;
  2)
    echo -e "${YELLOW}Preparing for Heroku deployment...${NC}"
    
    # Check if Heroku CLI is installed
    if ! command -v heroku &> /dev/null; then
      echo -e "${RED}Heroku CLI not found. Please install it first:${NC}"
      echo "npm install -g heroku"
      exit 1
    fi
    
    # Check if user is logged in
    heroku whoami &> /dev/null
    if [ $? -ne 0 ]; then
      echo -e "${YELLOW}You need to login to Heroku first:${NC}"
      heroku login
    fi
    
    # Initialize git if needed
    if [ ! -d ".git" ]; then
      echo -e "${YELLOW}Initializing git repository...${NC}"
      git init
      git add .
      git commit -m "Initial commit for Heroku deployment"
    fi
    
    # Create Heroku app if it doesn't exist
    APP_NAME="dubai-space-travel"
    heroku apps:info $APP_NAME &> /dev/null
    if [ $? -ne 0 ]; then
      echo -e "${YELLOW}Creating Heroku app: $APP_NAME${NC}"
      heroku create $APP_NAME
    else
      echo -e "${YELLOW}Using existing Heroku app: $APP_NAME${NC}"
    fi
    
    echo -e "${YELLOW}Deploying to Heroku...${NC}"
    git push heroku master
    
    if [ $? -eq 0 ]; then
      echo -e "${GREEN}Deployment successful!${NC}"
      echo -e "${GREEN}Your app is now available at: https://$APP_NAME.herokuapp.com${NC}"
      heroku open
    else
      echo -e "${RED}Deployment failed. Please check the errors above.${NC}"
    fi
    ;;
  3)
    echo -e "${YELLOW}Preparing for Netlify deployment...${NC}"
    echo -e "${GREEN}Your build folder is ready for deployment.${NC}"
    echo -e "${YELLOW}To deploy to Netlify:${NC}"
    echo "1. Go to https://app.netlify.com/"
    echo "2. Drag and drop the 'build' folder from frontend/build"
    echo "3. Wait for deployment to complete"
    echo ""
    echo -e "${YELLOW}Or use the Netlify CLI:${NC}"
    echo "npm install -g netlify-cli"
    echo "netlify deploy"
    ;;
  4)
    echo -e "${YELLOW}Exiting without deployment.${NC}"
    exit 0
    ;;
  *)
    echo -e "${RED}Invalid choice. Exiting.${NC}"
    exit 1
    ;;
esac

echo ""
echo -e "${GREEN}====================================${NC}"
echo -e "${GREEN}Deployment process completed!${NC}"
echo -e "${GREEN}====================================${NC}" 