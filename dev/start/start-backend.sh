#!/bin/bash

# Go to project root
cd "$(dirname "$0")/../.." || exit 1

# Load environment variables
if [ -f ".env" ]; then
  echo "Loading environment variables from .env"
  set -o allexport
  source .env
  set +o allexport
else
  echo "⚠️  .env file not found!"
  exit 1
fi

# Run Spring Boot with dev profile
./gradlew :backend:bootRun --args='--spring.profiles.active=dev'
