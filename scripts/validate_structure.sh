#!/usr/bin/env bash
set -euo pipefail

required_files=(
  "docs/architecture.md"
  "backend/.env.example"
  "backend/prisma/schema.prisma"
  "backend/README.md"
  "frontend/README.md"
)

missing=()
for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    missing+=("$file")
  fi
done

if (( ${#missing[@]} > 0 )); then
  printf "Missing required files:\n" >&2
  printf "- %s\n" "${missing[@]}" >&2
  exit 1
fi

if ! rg -q "DATABASE_URL" backend/.env.example; then
  echo "DATABASE_URL is missing from backend/.env.example" >&2
  exit 1
fi

if ! rg -q "YOUTUBE_API_KEY" backend/.env.example; then
  echo "YOUTUBE_API_KEY is missing from backend/.env.example" >&2
  exit 1
fi

echo "Structure validation passed."
