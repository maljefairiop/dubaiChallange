# Dubai Space Travel Booking Platform 🚀

A futuristic space travel booking platform that allows users to book and manage space station trips from Dubai.

## Project Overview
This platform enables users to:
- Book space travel trips
- Compare prices and packages
- Find space accommodations
- Manage bookings through a user dashboard
- Virtual destination previews
- Real-time notifications system

## Tech Stack
- Frontend: React.js with TypeScript
- Styling: Material-UI (MUI)
- State Management: React Hooks
- Deployment: Docker with Cloudflare Tunnel

## Project Structure
```
├── frontend/           # React frontend application
│   ├── src/            # Source code
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── types/      # TypeScript type definitions
│   │   ├── utils/      # Utility functions
│   │   └── App.tsx     # Main application component
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
└── README.md           # Project overview and setup instructions
```

## Todo List

### Phase 1: Project Setup ✅
- [x] Create project structure
- [x] Initialize frontend React project
- [x] Set up basic routing
- [x] Install necessary dependencies

### Phase 2: Core Features ✅
- [x] Implement basic UI components
  - [x] Navigation bar
  - [x] Trip booking form
  - [x] Package display cards
  - [x] User dashboard layout
- [x] Create mock data for destinations, packages, and bookings

### Phase 3: Styling & Polish ✅
- [x] Implement responsive design
- [x] Add animations and transitions
- [x] Style components with Material-UI
- [x] Add loading states and error handling

### Phase 4: Testing & Deployment ✅
- [x] Test core functionality
- [x] Create deployment scripts
- [x] Final testing and bug fixes
- [x] Documentation updates
- [x] Dockerize application
- [x] Set up Cloudflare Tunnel

## Features Implemented

### Home Page
- Hero section with call-to-action
- Featured destinations with images and descriptions
- Countdown to next launch section
- User testimonials
- Navigation to booking and packages pages

### Booking Page
- Trip scheduling with date picker
- Destination selection
- Seat class options
- Pricing calculator
- Journey summary
- Virtual Reality destination previews
- Step-by-step booking process

### Packages Page
- Multiple package options (Economy, Business, Luxury)
- Feature comparison table
- Interactive package cards with hover effects
- Visual indicators for popular options
- Comprehensive FAQ section

### User Dashboard
- Booking management
- Countdown timers for launches
- Travel tips
- User profile area
- Notification system
- Trip statistics
- Pre-flight checklist

## Advanced Features

### Virtual Reality Preview
- Detailed destination previews with high-quality images
- Comprehensive destination information
- Destination selection directly from preview modal

### Package Comparison
- Interactive toggle between card view and comparison table
- Side-by-side feature comparison
- Visual indicators for included/excluded features

### Notification System
- Real-time notifications for booking updates
- Unread notification badges
- Mark as read functionality
- Different notification types (info, success, warning)

### Interactive UI Elements
- Animated card transitions
- Hoverable elements with visual feedback
- Progress indicators for countdowns
- Responsive layout for all device sizes

## Running the Application Locally

### Method 1: Node.js
1. Clone the repository
2. Navigate to the frontend directory: `cd frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Method 2: Docker
1. Ensure Docker and Docker Compose are installed
2. Clone the repository
3. Build and start the containers:
   ```bash
   docker-compose up -d
   ```
4. The application will be available through the Cloudflare tunnel

## Deployment Instructions

### Deploying with Docker and Cloudflare Tunnel

The application is configured to run in Docker and is exposed through a Cloudflare tunnel.

1. Ensure Docker and Docker Compose are installed
2. Run the following command:
   ```bash
   docker-compose up -d
   ```
3. The application will be accessible through the Cloudflare tunnel.

For more details on Docker deployment, see [DOCKER_README.md](DOCKER_README.md).

### Deploying to Heroku

1. Create a Heroku account if you don't have one
2. Install the Heroku CLI: `npm install -g heroku`
3. Login to Heroku: `heroku login`
4. Create a new Heroku app: `heroku create dubai-space-travel`
5. Deploy to Heroku:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku master
   ```
6. Open the deployed app: `heroku open`

### Deploying to Netlify

1. Create a Netlify account
2. Build the application: `npm run build`
3. Deploy the `build` folder using Netlify's web interface or CLI

## Next Steps
- Implement authentication
- Connect to a backend API
- Add payment processing
- Implement real-time notifications
- Add animations for page transitions

## Time Remaining
⏳ Challenge completed! 