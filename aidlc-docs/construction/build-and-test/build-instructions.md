# Build Instructions

## Prerequisites
- **Build Tool**: None (static HTML/JavaScript)
- **Dependencies**: None (no external libraries)
- **Environment Variables**: None required
- **System Requirements**: Modern web browser with HTML5 Canvas and Audio API support

## Build Steps

### 1. Verify File Structure
Ensure all required files are present:
```bash
ls -la /aidlc-workshop/
# Expected files:
# - index.html
# - game.js
# - assets/ghosty.png
# - assets/jump.wav
# - assets/game_over.wav
```

### 2. No Build Required
This is a static web application with no build step. The files are ready to run directly in a browser.

### 3. Verify Assets
Check that all assets are accessible:
```bash
ls -la /aidlc-workshop/assets/
# Expected:
# - ghosty.png (33513 bytes)
# - jump.wav (65170 bytes)
# - game_over.wav (396366 bytes)
```

### 4. Verify Build Success
- **Expected Output**: All files present and accessible
- **Build Artifacts**: index.html, game.js (ready to serve)
- **Common Warnings**: None expected

## Running the Game

### Option 1: Open Directly in Browser
```bash
# Open index.html in your default browser
open /aidlc-workshop/index.html
# or
xdg-open /aidlc-workshop/index.html  # Linux
# or
start /aidlc-workshop/index.html     # Windows
```

### Option 2: Use Local Web Server (Recommended)
```bash
# Using Python 3
cd /aidlc-workshop
python3 -m http.server 8000

# Then open browser to: http://localhost:8000
```

### Option 3: Use Node.js http-server
```bash
# Install http-server globally (if not installed)
npm install -g http-server

# Run server
cd /aidlc-workshop
http-server -p 8000

# Then open browser to: http://localhost:8000
```

## Troubleshooting

### Assets Not Loading
- **Cause**: File paths incorrect or files missing
- **Solution**: Verify assets/ directory exists and contains all three files (ghosty.png, jump.wav, game_over.wav)

### Audio Not Playing
- **Cause**: Browser autoplay restrictions
- **Solution**: User interaction (click/spacebar) is required before audio can play. This is handled in the code.

### Canvas Not Displaying
- **Cause**: Browser doesn't support HTML5 Canvas
- **Solution**: Use a modern browser (Chrome, Firefox, Safari, Edge)
