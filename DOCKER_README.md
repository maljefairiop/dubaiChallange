# Dubai Space Travel Booking Platform - Docker Deployment

This document provides instructions for deploying the Dubai Space Travel Booking Platform using Docker and exposing it through a Cloudflare tunnel.

## Prerequisites

- Docker and Docker Compose installed on your system
- Git to clone the repository

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/maljefairiop/dubaiChallange.git
   cd dubaiChallange
   ```

2. Build and start the containers:
   ```bash
   docker-compose up -d
   ```

3. The application will be available through the Cloudflare tunnel, which is automatically set up.

## Container Structure

The deployment consists of two containers:

1. **app**: The main application container running the React frontend
2. **cloudflare-tunnel**: A container running Cloudflare's tunnel service to expose the application securely to the internet

## Checking Container Status

```bash
docker-compose ps
```

## Viewing Logs

To view logs from the application:
```bash
docker-compose logs app
```

To view logs from the Cloudflare tunnel:
```bash
docker-compose logs cloudflare-tunnel
```

## Stopping the Application

```bash
docker-compose down
```

## Rebuilding After Changes

If you make changes to the application code:

```bash
docker-compose down
docker-compose build
docker-compose up -d
```

## Security Considerations

The Cloudflare tunnel token is included in the docker-compose.yml file. In a production environment, it's recommended to use environment variables or Docker secrets to handle sensitive information. 