#!/bin/bash

echo "🚀 Optimizing for production deployment..."

# Clean previous builds
rm -rf .next
rm -rf out

# Install dependencies with exact versions
npm ci --production=false

# Run build with optimizations
NODE_ENV=production npm run build

# Analyze bundle if needed
if [ "$ANALYZE" = "true" ]; then
  npm run analyze
fi

echo "✅ Production build optimized!"