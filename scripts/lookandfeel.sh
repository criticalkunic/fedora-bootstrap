echo "Applying Look and Feel"
mkdir -p ~/.local/share/plasma/look-and-feel
cp -r ./lookandfeel/Fedority \
  ~/.local/share/plasma/look-and-feel/
lookandfeeltool --apply Fedority

KWINRC="$HOME/.config/kwinrc"

echo "🪟 Removing all titlebar buttons"

kwriteconfig6 \
  --file "$KWINRC" \
  --group org.kde.kdecoration2 \
  --key ButtonsOnLeft ""

kwriteconfig6 \
  --file "$KWINRC" \
  --group org.kde.kdecoration2 \
  --key ButtonsOnRight ""

echo "🔄 Reloading KWin"
qdbus org.kde.KWin /KWin reconfigure
