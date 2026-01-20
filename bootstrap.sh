#!/usr/bin/env bash
set -euo pipefail

# ==================================================
# Fedora KDE Bootstrap
# ==================================================

echo "🚀 Sytarting Fedora KDE bootstrap"

# --------------------------------------------------
# Resolve paths
# --------------------------------------------------
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPTS_DIR="${ROOT_DIR}/scripts"

# --------------------------------------------------
# Ensure script permissions (readable, not executable)
# --------------------------------------------------
echo "🔧 Normalizing script permissions"

chmod -R u+rX "${SCRIPTS_DIR}"

# --------------------------------------------------
# Sanity checks
# --------------------------------------------------
if [[ "$XDG_CURRENT_DESKTOP" != *"KDE"* ]]; then
  echo "❌ This bootstrap is intended for KDE Plasma only"
  exit 1
fi

if ! command -v kwriteconfig5 >/dev/null; then
  echo "❌ kwriteconfig5 not found. Are KDE tools installed?"
  exit 1
fi

# --------------------------------------------------
# Order matters
# --------------------------------------------------

bash "${SCRIPTS_DIR}/apps.sh"

bash "${SCRIPTS_DIR}/applets.sh"

bash "${SCRIPTS_DIR}/terminal.sh"

bash "${SCRIPTS_DIR}/kde.sh"

bash "${SCRIPTS_DIR}/theme.sh"

bash "${SCRIPTS_DIR}/lookandfeel.sh"

bash "${SCRIPTS_DIR}/sddm.sh"

bash "${SCRIPTS_DIR}/konsave.sh"

kwriteconfig6 \
  --file kglobalshortcutsrc \
  --group services \
  --group org.kde.krunner.desktop \
  --key _launch none

kwriteconfig6 \
  --file kglobalshortcutsrc \
  --group kwin \
  --key Overview none

# --------------------------------------------------
# Done
# --------------------------------------------------
echo
echo "✅ Bootstrap complete"
