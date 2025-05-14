#!/bin/bash

# Go back two directories
cd "$(dirname "$0")/../.."

# Optional: echo for clarity
echo "Current directory: $(pwd)"

# Load .env variables (optional but explicit)
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo ".env file not found in $(pwd)"
  exit 1
fi

# Run docker-compose
docker-compose -f docker-compose.dev.yml up
