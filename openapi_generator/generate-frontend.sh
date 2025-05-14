#!/bin/bash

# Paths
OPENAPI_SPEC="./docs/openapi.yaml"
OUTPUT_DIR="./frontend/src/app/api-client"

# Generate Angular client
npx openapi-generator-cli generate \
  -i "$OPENAPI_SPEC" \
  -g typescript-angular \
  -o "$OUTPUT_DIR" \
  --additional-properties=providedInRoot=true,ngVersion=17.0.0,skipFormModel=true,withInterfaces=true,modelSuffix=Dto,hideGenerationTimestamp=true \
  --skip-validate-spec

echo "✅ Angular API client generated at $OUTPUT_DIR"
