FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code
COPY frontend/ ./

# Build the React app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the built app from the build stage
COPY --from=build /app/build ./build

# Copy the server.js file
COPY frontend/server.js ./

# Expose the port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"] 