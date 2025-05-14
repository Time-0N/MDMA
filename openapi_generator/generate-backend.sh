#!/bin/bash

# === CONFIG ===
OPENAPI_SPEC="../docs/openapi.yaml"
GEN_DIR="./backend/generated_rest"
TARGET_DIR="../backend/src/main/java/ch/mdma/backend/rest"
PKG_PREFIX="ch.mdma.backend.rest"

# === STEP 1: Validate ===
if [ ! -f "$OPENAPI_SPEC" ]; then
  echo "❌ Spec not found at $OPENAPI_SPEC"
  exit 1
fi

echo "🔍 Validating OpenAPI spec..."
npx openapi-generator-cli validate -i "$(realpath "$OPENAPI_SPEC")" || exit 1

# === STEP 2: Generate ===
echo "🧪 Cleaning old generated code..."
rm -rf "$GEN_DIR"

echo "⚙️ Generating Spring interfaces..."
npx openapi-generator-cli generate \
  -i "$OPENAPI_SPEC" \
  -g spring \
  -o "$GEN_DIR" \
  --additional-properties=interfaceOnly=true,useTags=true,skipDefaultInterface=true,hideGenerationTimestamp=true,useSpringBoot3=true,jakarta=true \
  --skip-validate-spec

# === STEP 3: Copy and fix packages/imports ===
echo "📂 Copying generated files and fixing packages/imports..."

GEN_SRC="$GEN_DIR/src/main/java/org/openapitools"
MODEL_SRC="$GEN_SRC/model"
API_SRC="$GEN_SRC/api"

TARGET_MODEL="$TARGET_DIR/model"
TARGET_API="$TARGET_DIR/api"

mkdir -p "$TARGET_MODEL"
mkdir -p "$TARGET_API"

# Helper function
copy_and_fix_file() {
  local src_file="$1"
  local dest_file="$2"
  local package_suffix="$3"

  sed -e "s|^package .*;|package $PKG_PREFIX.$package_suffix;|" \
      -e "s|import org.openapitools.model.|import $PKG_PREFIX.model.|g" \
      "$src_file" > "$dest_file"

  echo "✅ Fixed and copied: $dest_file"
}

# Copy + fix model files
for file in "$MODEL_SRC"/*.java; do
  [ -e "$file" ] || continue
  dest="$TARGET_MODEL/$(basename "$file")"
  copy_and_fix_file "$file" "$dest" "model"
done

# Copy + fix API interface files
for file in "$API_SRC"/*.java; do
  [ -e "$file" ] || continue
  dest="$TARGET_API/$(basename "$file")"
  copy_and_fix_file "$file" "$dest" "api"
done

echo "✅ All files copied and updated with correct package and import paths."
