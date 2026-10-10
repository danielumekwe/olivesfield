#!/usr/bin/env bash
# Regenerates the responsive WebP files in public/images and src/data/images.json.
# Usage: scripts/optimize-images.sh <folder-with-original-photos>
# scripts/image-map.txt lists "<original filename> <slug>" per line. Needs ImageMagick 7.
set -euo pipefail
SRC="${1:?path to the folder holding the original photos}"
cd "$(dirname "$0")/.."
echo '{' > src/data/images.json
while read -r file slug <&3; do
  f="$SRC/$file"
  ow=$(magick identify -format '%w' "$f[0]"); oh=$(magick identify -format '%h' "$f[0]"); ws=""
  for w in 480 800 1200 1600; do
    if [ "$w" -le "$ow" ]; then
      magick "$f" -auto-orient -resize "${w}x" -strip -quality 78 "public/images/$slug-$w.webp" </dev/null
      ws="$ws$w,"
    fi
  done
  echo "  \"$slug\": {\"w\": $ow, \"h\": $oh, \"widths\": [${ws%,}]}," >> src/data/images.json
done 3< scripts/image-map.txt
sed -i '$ s/,$//' src/data/images.json
echo '}' >> src/data/images.json
