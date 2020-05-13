#!/bin/sh

if [ -z "$(git status --porcelain)" ]; then
  # Working directory clean
  exit 0;
else
  # Uncommitted changes
  echo "need to run build and commit again"
  exit -1;
fi