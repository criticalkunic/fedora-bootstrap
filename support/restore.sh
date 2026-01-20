#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ARCHIVE_PATH="$SCRIPT_DIR/../files/kde_config_backup.tar.gz"

# --------------------------------------------------
# Sanity checks
# --------------------------------------------------
if [[ ! -f "$ARCHIVE_PATH" ]]; then
  echo "❌ Backup archive not found:"
  echo "   $ARCHIVE_PATH"
  exit 1
fi

echo "📦 Restoring KDE configuration from:"
echo "   $ARCHIVE_PATH"

# --------------------------------------------------
# Restore
# --------------------------------------------------
tar -C "$HOME" -xzf "$ARCHIVE_PATH"

echo "✅ Restore complete"
